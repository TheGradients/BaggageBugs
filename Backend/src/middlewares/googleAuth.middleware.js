import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import User from "../models/user.model.js";
import { generateToken } from "../helper/jwt.helper.js";
import { COOKIE_OPTIONS } from "../constants.js";

const googleAuth = asyncHandler(async (req, res, next) => {
    try {
        const findUser = await User.findOne({ email: req.user?._json?.email });
        let savedUser;
        if (!findUser) {
            const newUser = await User.create({
                name: req.user?._json?.name,
                email: req.user?._json?.email,
                password: "",
            });
            savedUser = await newUser.save();
        }
        const token = generateToken(findUser ? findUser : savedUser);
        let tokenRole = "";
        for (const role in findUser ? findUser.role : savedUser.role) {
            tokenRole = tokenRole + (findUser ? findUser.role : savedUser.role)[role] + " ";
        }
        res
            .cookie('token', token, COOKIE_OPTIONS)
            .cookie('role', tokenRole, COOKIE_OPTIONS);
        next();
    } catch (error) {
        throw new ApiError(500, error.message || "Internal Server Error");
    }
});

export default googleAuth;