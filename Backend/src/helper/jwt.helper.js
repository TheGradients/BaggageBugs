import jwt from "jsonwebtoken";

const generateToken = async (user) => {
    try {
        const token = jwt.sign(
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

const tokenValidation = async (token) => {
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        return decoded;
    } catch (error) {
        throw new ApiError(401, error.message || "Invalid Token.");
    }
};

export { generateToken, tokenValidation };