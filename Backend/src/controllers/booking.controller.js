import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import User from "../models/user.model.js";
import Bookings from "../models/bookings.model.js";
import Facility from "../models/facility.model.js";
import { COOKIE_OPTIONS } from "../constants.js";
import { generateToken } from "../helper/jwt.helper.js";

const makeBooking = asyncHandler(async (req, res) => {
    const { area, dropIn, pickup, luggageType , facilityId} = req.body;

    const userId = req.user._id;

    if (!area || !dropIn || !pickup || !luggageType || !facilityId) {
        throw new ApiError(400, "Please fill all fields");
    }

    const facility = await Facility.findById(facilityId);
    // if (!facility) {
    //     throw new ApiError(404, "Facility not found");
    // } 

    const booking = await Bookings.create({
        userId,
        facilityId,
        area,
        dropIn,
        pickup,
        luggageType,
        paymentStatus: false,
    });

    return res
    .status(201)
    .json(new ApiResponse(201, booking, "Booking created successfully"));
});

const togglePaymentStatus = asyncHandler(async (req, res) => {
    const { bookingId , paymentStatus } = req.body;
    const userId = req.user._id;

    if (!bookingId || !paymentStatus) {
        throw new ApiError(400, "Please fill all fields");
    }

    if (paymentStatus !== true && paymentStatus !== false) {
        throw new ApiError(400, "Invalid payment status");
    }

    const booking = await Bookings.findById(bookingId);
    if (!booking) {
        throw new ApiError(404, "Booking not found");
    }

    if (booking.userId.toString() !== userId.toString()) {
        throw new ApiError(403, "You are not authorized to update this booking");
    }

    try {   
        booking.paymentStatus = paymentStatus;
        await booking.save();

        return res
            .status(200)
            .json(new ApiResponse(200, booking, "Payment status updated successfully"));
    }
    catch (error) {
        throw new ApiError(500, error.message || "Internal Server Error");
    }
});


export
{
  makeBooking,
  togglePaymentStatus
}