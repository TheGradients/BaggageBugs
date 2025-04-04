import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import  { PrismaClient } from "@prisma/client";
import { COOKIE_OPTIONS } from "../constants.js";
const prisma = new PrismaClient();

const register = asyncHandler(async (req, res) => {
    const {name, email , phoneNo, password} = req.body;

    if(!name || !email || !phoneNo || !password){
        throw new ApiError(400, "Please fill all fields");
    }
    
    const existingUser = await prisma.user.findFirst({
        where: {
            OR:[
                { email },
                { phone: phoneNo }
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
                phone:phoneNo,
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
    const { firstName , lastName , dateOfBirth } = req.body;

    if(!firstName || !lastName || !dateOfBirth){
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
                dateOfBirth:dob
            }
        });

        res
        .status(200)
        .json(new ApiResponse(200, updatedUser, "User details added successfully"));

    } catch (error) {
        throw new ApiError(500, error || "Internal Server Error");
    }

    
});

export { register, login , logout , addDetails};

