import ApiError from "../utils/ApiError.js";
import asyncHandler from "../utils/asyncHandler.js";
import { tokenValidation } from "../helper/jwt.helper.js";
import User from "../models/user.model.js"

const verifyToken = asyncHandler(async (req, _, next) => {
    try {
        const token = req.cookies?.token || req.header("Authorization")?.replace("Bearer ", "");
        if (!token) {
            throw new ApiError(401, "Unauthorized Access.");
        }
        const decoded = await tokenValidation(token);   
        const user = await User.findById(
            decoded.id,
        );
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