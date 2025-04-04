import ApiError from "../utils/ApiError.js";
import jwt from "jsonwebtoken";
import asyncHandler from "../utils/asyncHandler.js";
import  { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const verifyToken = asyncHandler(async (req, _, next) => {
    try {
        const token = req.cookies?.token || req.header("Authorization")?.replace("Bearer ", "");
        if (!token) {
            throw new ApiError(401, "Unauthorized Access.");
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        const user = await prisma.user.findUnique({
            where: {
                id: decoded.id
            }
        });

        if (!user) {
            throw new ApiError(401, "Unauthorized Access.");
        }
        req.user = user;
        next();
    } catch (error) {
        throw new ApiError(401, error.message || "Invalid Token.");
    }
});

export default verifyToken;