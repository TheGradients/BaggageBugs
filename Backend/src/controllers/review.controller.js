import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import Review from "../models/review.model.js";

const createReview = asyncHandler(async (req, res) => {
    const { rating, feedback } = req.body;
    const { facilityId } = req.query;
    const userId = req.user._id;

    if (!facilityId || !rating || !feedback) {
        throw new ApiError(400, "Please fill all fields");
    }

    if (rating < 1 || rating > 5) {
        throw new ApiError(400, "Rating must be between 1 and 5");
    }

    try {
        const review = await Review.create({
            userId,
            facilityId,
            rating,
            feedback
        });
    
        return res
            .status(201)
            .json(new ApiResponse(201, review, "Review created successfully"));
    } catch (error) {
        throw new ApiError(500, error.message || "Internal Server Error");
    }
});

export {
    createReview
}