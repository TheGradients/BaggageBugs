import mongoose, { Schema } from "mongoose";

const reviewSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    facilityId: {
        type: Schema.Types.ObjectId,
        ref: 'Facility',
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    feedback: {
        type: String,
        required: true 
    },
}, {
    timestamps: true
});

const Review = mongoose.model('Review', reviewSchema);
export default Review;