import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import User from "../models/user.model.js";
// import { COOKIE_OPTIONS } from "../constants.js";
import { generateToken } from "../helper/jwt.helper.js";
import { hashPassword, matchPassword } from "../helper/bcrypt.helper.js";
import {
    sendRegisterationEmail,
    sendLoginEmail,
    sendPasswordResetEmail
} from "../utils/nodemailer/userEmail.js";
import generateOTP from "../helper/generateOTP.helper.js";

const register = asyncHandler(async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    if (!firstName || !lastName || !email || !password) {
        throw new ApiError(400, "Please fill all fields.");
    }
    let name = `${firstName} ${lastName}`;
    const existingUser = await User.findOne({
        $or: [{ email }],
    })
    if (existingUser) {
        throw new ApiError(409, "User already exists");
    }
    try {
        const hashedPassword = await hashPassword(password);
        const user = await User.create({
            name,
            firstName,
            lastName,
            email,
            password: hashedPassword,
        });
        await sendRegisterationEmail(user.email);
        return res
            .status(201)
            .json(new ApiResponse(201, user, "User created successfully"));
    } catch (error) {
        throw new ApiError(500, error.message || "Internal Server Error");
    }
});

const login = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        throw new ApiError(400, "Please fill all fields");
    }
    const user = await User.findOne({
        $or: [{ email }]
    });
    if (!user) {
        throw new ApiError(404, "User not found");
    }
    const isMatch = await matchPassword(password, user.password);
    if (!isMatch) {
        throw new ApiError(401, "Invalid credentials");
    }
    const token = await generateToken(user);
    if (!token) {
        throw new ApiError(500, "token generation failed");
    }
    let tokenRole="";
    for (const role in user.role) {
        tokenRole = tokenRole + user.role[role] + " ";
    }
    try {
        await sendLoginEmail(user.email);
        // res.cookie("token", token, COOKIE_OPTIONS);
        // res.cookie("role", tokenRole, COOKIE_OPTIONS);
        const role = tokenRole.trim();
        const redirectUrl = `${process.env.CLIENT_URL}/landingpage?token=${token}&role=${role}`;
        return res
            .redirect(redirectUrl);
    } catch (error) {
        throw new ApiError(500, error.message || "Internal Server Error.");
    }
});

const googleCallback = asyncHandler(async (req, res) => {
    const token = req.token;
    const tokenRole = req.tokenRole;
    const role = tokenRole.trim();
    const redirectUrl = `${process.env.CLIENT_URL}/landingpage?token=${token}&role=${role}`;
    return res
        .redirect(redirectUrl);
});

const setCookies = asyncHandler(async (req, res) => {
    const { token, role } = req.body;

    if (!token || !role) {
        return res.status(400).json({ message: "Missing token or role" });
    }

    try {
        // res.cookie("token", token, COOKIE_OPTIONS);
        // res.cookie("role", role, COOKIE_OPTIONS);
        return res.status(200).json({ success: true });
    } catch (error) {
        throw new ApiError(500, error.message || "Internal Server Error");
    }
});

const logout = asyncHandler(async (req, res) => {
    try {
        return res
        // .clearCookie("token")
        // .clearCookie("role")
        .status(200)
        .json(new ApiResponse(200, null, "User logged out successfully"));
    } catch (error) {
        throw new ApiError(500, error.message || "Internal Server Error.");
    }
});

const addDetails = asyncHandler(async (req, res) => {
    const { firstName, lastName, dateOfBirth, email, phoneNo } = req.body;
    if (!firstName || !lastName || !dateOfBirth || !email || !phoneNo) {
        throw new ApiError(400, "Please fill all fields");
    }
    const id = req.user.id;
    const user = await User.findById(id);
    if (!user) {
        throw new ApiError(404, "User not found");
    }
    let name = `${firstName} ${lastName}`;
    let dob = dateOfBirth ? new Date(dateOfBirth) : undefined;
    try {
        const updatedUser = await User.findByIdAndUpdate(
            id,
            {
                name,
                firstName,
                lastName,
                dateOfBirth: dob,
                email,
                phoneNo
            },
            { new: true }
        );
        return res
            .status(200)
            .json(new ApiResponse(200, updatedUser, "User details added successfully"));
    } catch (error) {
        throw new ApiError(500, error.message || "Internal Server Error");
    }
});

const changePassword = asyncHandler(async (req, res) => {
    const { currentPassword, newPassword, confirmPassword } = req.body;
    if (!currentPassword || !newPassword || !confirmPassword) {
        throw new ApiError(400, "Please fill all fields");
    }
    if (currentPassword === newPassword) {
        throw new ApiError(400, "New password cannot be same as current password");
    }
    if (newPassword !== confirmPassword) {
        throw new ApiError(400, "Passwords do not match");
    }
    const id = req.user.id;
    const user = await User.findById(id);
    if (!user) {
        throw new ApiError(404, "User not found");
    }
    const isMatch = await matchPassword(currentPassword, user.password);
    if (!isMatch) {
        throw new ApiError(401, "Invalid credentials");
    }
    const hashedPassword = await hashPassword(newPassword);
    try {
        const updatedUser = await User.findByIdAndUpdate(
            id,
            {
                password: hashedPassword,
            },
            { new: true }
        );
        return res
            .status(200)
            .json(new ApiResponse(200, updatedUser, "Password changed successfully"));
    } catch (error) {
        throw new ApiError(500, error.message || "Internal Server Error");
    }
});

const getUser = asyncHandler(async (req, res) => {
    const id = req.user.id;
    const user = await User.findById(id).select("-password");
    if(!user){
        throw new ApiError(404, "User not found");
    }
    try {
        return res
            .status(200)
            .json(new ApiResponse(200, user, "User fetched successfully!!"));
    } catch (error) {
        throw new ApiError(500, error.message || "Internal Server Error");
    }
});

const toggleEmail = asyncHandler(async (req, res) => {
    const { status } = req.body;
    const id = req.user.id;
    if (!status) {
        throw new ApiError(400, "Please fill all fields");
    }
    if (status !== "true" && status !== "false") {
        throw new ApiError(400, "Invalid status value");
    }
    const user = await User.findById(id);
    if (!user) {
        throw new ApiError(404, "User not found");
    }
    try {
        const updatedUser = await User.findByIdAndUpdate(
            id,
            {
                toogleEmail: status,
            },
            { new: true }
        );
        return res
            .status(200)
            .json(new ApiResponse(200, updatedUser, "Email notification updated successfully"));
    } catch (error) {
        throw new ApiError(500, error.message || "Internal Server Error");
    }
});

const forgotPasswordEmail = asyncHandler(async (req, res) => {
    const { email } = req.body;
    if (!email) {
        throw new ApiError(400, "Please provide an email address");
    }
    const user = await User.findOne({
        email
    });
    if (!user) {
        throw new ApiError(404, "User not found");
    }
    try {
        const otp = generateOTP();
        user.otp = otp;
        await user.save();
        await sendPasswordResetEmail(user.email, user.otp);
        return res
            .status(200)
            .json(new ApiResponse(200, null, "OTP sent to your email for password reset"));
    } catch (error) {
        throw new ApiError(500, error.message || "Internal Server Error");
    }
});

const forgotPasswordVerifyOTP = asyncHandler(async (req, res) => {
    const { email, otp } = req.body;
    if (!email || !otp) {
        throw new ApiError(400, "Please provide email and OTP");
    }
    const user = await User.findOne({
        email
    });
    if (!user) {
        throw new ApiError(404, "User not found");
    }
    if (user.otp !== otp) {
        throw new ApiError(400, "Invalid OTP");
    }
    try {
        user.canChangePassword = true;
        await user.save();
        return res
            .status(200)
            .json(new ApiResponse(200, null, "OTP verified successfully. You can now change your password"));
    } catch (error) {
        throw new ApiError(500, error.message || "Internal Server Error");
    }
});

const forgotPassword = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        throw new ApiError(400, "Please fill all fields");
    }
    const user = await User.findOne({
        email
    });
    if (!user) {
        throw new ApiError(404, "User not found");
    }
    if (!user.canChangePassword) {
        throw new ApiError(403, "You cannot change your password at this time");
    }
    const hashedPassword = await hashPassword(password);
    try {
        user.password = hashedPassword;
        user.canChangePassword = false;
        user.otp = null;
        await user.save();
        return res
            .status(200)
            .json(new ApiResponse(200, null, "Password changed successfully"));
    } catch (error) {
        throw new ApiError(500, error.message || "Internal Server Error");
    }
});

export {
    register,
    login,
    googleCallback,
    logout, 
    addDetails, 
    changePassword, 
    getUser,
    toggleEmail,
    setCookies,
    forgotPasswordEmail,
    forgotPasswordVerifyOTP,
    forgotPassword,
};