import asyncHandler from "../utils/asyncHandler.js";
import { tokenValidation } from "../helper/jwt.helper.js";
import User from "../models/user.model.js"

const verifyToken = asyncHandler(async (req, res, next) => {
    try {
        const token = req.cookies?.token || req.header("Authorization")?.replace("Bearer ", "");
        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized Access. No token provided.",
            });
        }
        const tokenValue = token.split(" ")[1];
        const decoded = await tokenValidation(tokenValue);
        const user = await User.findById(
            decoded.id,
        );
        if (!user) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized Access. User not found.",
            });
        }
        req.user = user;
        next();
    } catch (error) {
        console.error("Token verification error:", error);
        return res.status(401).json({
            success: false,
            message: "Unauthorized Access. Invalid token.",
        });
    }
});

export default verifyToken;