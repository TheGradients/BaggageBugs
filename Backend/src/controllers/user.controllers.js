import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import  { PrismaClient } from "@prisma/client";
import { COOKIE_OPTIONS } from "../constants.js";
const prisma = new PrismaClient();

const register = asyncHandler(async (req, res) => {
    const {name, email , password} = req.body;

    if(!name || !email || !password){
        throw new ApiError(400, "Please fill all fields");
    }
    
    const existingUser = await prisma.user.findFirst({
        where: {
            OR:[
                { email }
            ]
        }
    });

    if(existingUser){
        throw new ApiError(409, "User already exists");
    }

    try {

        const hashedPassword = await bcrypt.hash(password, 12);

        const user = await prisma.user.create({
            data: {
                name,
                email,
                password:hashedPassword
            }
        });

        res
        .status(201)
        .json(new ApiResponse(201, user, "User created successfully"));

    } catch (error) {
        throw new ApiError(500, error || "Internal Server Error");
    }
});

const generateToken = async (user) => {
    try {
        const token = await jwt.sign(
            {
                id: user.id,
            },
            process.env.JWT_SECRET,
            {
                expiresIn: process.env.JWT_EXPIRY,
            }
        );
        return token;
    } catch (error) {
        throw new ApiError(500, error.message || "Internal Server Error.");
    }
};

const login = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        throw new ApiError(400, "Please fill all fields");
    }

    const user = await prisma.user.findFirst({
        where: {
            email,
        },
    });

    if (!user) {
        throw new ApiError(404, "User not found");
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        throw new ApiError(401, "Invalid credentials");
    }

    const token = await generateToken(user);

    if (!token) {
        throw new ApiError(500, "token generation failed");
    }

    try {
        return res
        .cookie("token",token,COOKIE_OPTIONS)
        .status(200)
        .json(new ApiResponse(200, null, "User logged in successfully"));
    } catch (error) {
        throw new ApiError(500, error.message || "Internal Server Error.");
    }
});

const logout = asyncHandler(async (req, res) => {
    try {
        return res
        .clearCookie("token")
        .status(200)
        .json(new ApiResponse(200, null, "User logged out successfully"));
    } catch (error) {
        throw new ApiError(500, error.message || "Internal Server Error.");
    }
});

const addDetails = asyncHandler(async (req, res) => {
    const { firstName , lastName , dateOfBirth , phoneNo } = req.body;

    if(!firstName || !lastName || !dateOfBirth || !phoneNo){
        throw new ApiError(400, "Please fill all fields");
    }

    const user = await prisma.user.findUnique({
        where: {
            id: req.user.id
        }
    });

    const dob = dateOfBirth ? new Date(dateOfBirth) : undefined;

    if(!user){
        throw new ApiError(404, "User not found");
    }

    try {
        const updatedUser = await prisma.user.update({
            where: {
                id: req.user.id
            },
            data: {
                firstName,
                lastName,
                dateOfBirth:dob,
                phoneNo
            }
        });

        res
        .status(200)
        .json(new ApiResponse(200, updatedUser, "User details added successfully"));

    } catch (error) {
        throw new ApiError(500, error || "Internal Server Error");
    }

    
});

const changePassword = asyncHandler(async (req, res) => {
    const { currentPassword , newPassword , confirmPassword } = req.body;

    if(currentPassword === newPassword){
        throw new ApiError(400, "New password cannot be same as current password");
    }

    if(!currentPassword || !newPassword || !confirmPassword){
        throw new ApiError(400, "Please fill all fields");
    }

    if(newPassword !== confirmPassword){
        throw new ApiError(400, "Passwords do not match");
    }

    const user = await prisma.user.findUnique({
        where: {
            id: req.user.id
        }
    });

    if(!user){
        throw new ApiError(404, "User not found");
    }

    const isMatch = await bcrypt.compare(currentPassword, user.password);

    if(!isMatch){
        throw new ApiError(401, "Invalid credentials");
    }

    try {
        const hashedPassword = await bcrypt.hash(newPassword, 12);

        const updatedUser = await prisma.user.update({
            where: {
                id: req.user.id
            },
            data: {
                password:hashedPassword
            }
        });

        res
        .status(200)
        .json(new ApiResponse(200, updatedUser, "Password changed successfully"));

    } catch (error) {
        throw new ApiError(500, error || "Internal Server Error");
    }
});

const getUser = asyncHandler(async (req, res) => {
    const user = await prisma.user.findUnique({
        where:{
            id: req.user.id
        }
    })

    if(!user){
        throw new ApiError(404, "User not found");
    }

    res
    .status(200)
    .json(new ApiResponse(200, user, "User fetched successfully!!"));
});

export { register, login , logout , addDetails , changePassword , getUser };

