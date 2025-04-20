import Facility from '../models/facility.model.js';
import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import { getDistanceAndTime } from '../services/googleMaps.services.js';

const getFacilities = asyncHandler(async (req, res) => {
    const { userCoordinates } = req.body;
    if (!userCoordinates || userCoordinates.length !== 2) {
        throw new ApiError(400, 'Invalid coordinates provided');
    }
    const facilities = await Facility.find({
        geolocation: {
            $geoWithin: {
                $centerSphere: [userCoordinates, 50 / 6378.1],
            },
        },
    });
    if (!facilities) {
        throw new ApiError(404, 'No facilities found in the specified area');
    }
    try {
        return res
            .status(200)
            .json(new ApiResponse(200, 'Facilities fetched successfully', facilities));
    } catch (error) {
        throw new ApiError(500, 'Error fetching facilities from the database');
    }
});

const getFacilitiesTimeAndDistance = asyncHandler(async (req, res) => {
    const { userCoordinates, facilityCoordinates } = req.body;
    if (
        !userCoordinates ||
        userCoordinates.length !== 2 ||
        !facilityCoordinates ||
        facilityCoordinates.length !== 2
    ) {
        return res.status(400).json({ error: 'Valid user and facility coordinates are required' });
    }
    const distanceAndTime = await getDistanceAndTime(userCoordinates, facilityCoordinates);
    if (!distanceAndTime) {
        return res.status(500).json({ error: 'Unable to calculate distance and time' });
    }
    try {
        return res
            .status(200)
            .json(new ApiResponse(200, 'Distance and time calculated successfully', distanceAndTime));
    } catch (error) {
        throw new ApiError(500, 'Error calculating distance and time');
    }
});

export {
    getFacilities,
    getFacilitiesTimeAndDistance,
};