import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import Facility from "../models/facility.model.js";
import User from "../models/user.model.js";
import { COOKIE_OPTIONS } from "../constants.js";
import { getCoordinates } from "../services/googleMaps.services.js";

const registerFacility = asyncHandler(async (req, res) => {
    const { name, email, phone, address, type, capacity, limited, services, timing } = req.body;
    if (!name || !email || !phone || !address || !type || !capacity || !limited || !services) {
        throw new ApiError(400, "Please fill all fields");
    }
    const user = req.user;
    if (!user) {
        throw new ApiError(401, "Unauthorized");
    }
    const existingFacility = await Facility.findOne({
        where: {
            email,
            userId: user.id
        }
    });
    if (existingFacility) {
        throw new ApiError(409, "Facility already exists");
    }
    const geolocation = await getCoordinates(address);
    if (!geolocation) {
        throw new ApiError(400, "Unable to fetch geolocation for the provided address");
    }
    try {
        const facility = await Facility.create({
            name,
            email,
            phone,
            address,
            type,
            capacity,
            limited,
            services,
            timing,
            userId: user.id,
            geolocation
        });
        await User.findByIdAndUpdate(
            req.user._id,
            { $set: { role: ['partner'] } }
        );
        let tokenRole = "";
        for (const role in user.role) {
            tokenRole = tokenRole + user.role[role] + " ";
        }
        return res
            .status(201)
            .clearCookie("role")
            .cookie("role", tokenRole, COOKIE_OPTIONS)
            .json(new ApiResponse(201, facility, "Facility created successfully"));
    }
    catch (error) {
        throw new ApiError(500, error || "Internal Server Error");
    }
});

const editFacility = asyncHandler(async (req, res) => {
    const { name, email, phone, address, type, capacity, limited, services, timing } = req.body;
    const {id} = req.query;

    if (!name || !email || !phone || !address || !type || !capacity || !limited || !services) {
        throw new ApiError(400, "Please fill all fields");
    }
    const user = req.user;
    if (!user) {
        throw new ApiError(401, "Unauthorized");
    }

    const facility = await Facility.findOne({
        _id: id,
        userId: user._id
    });
    if (!facility) {
        throw new ApiError(404, "Facility not found");
    }

    const geolocation = await getCoordinates(address);

    if (!geolocation) {
        throw new ApiError(400, "Unable to fetch geolocation for the provided address");
    }

    try {
        facility.name = name;
        facility.email = email;
        facility.phone = phone;
        facility.address = address;
        facility.type = type;
        facility.capacity = capacity;
        facility.limited = limited;
        facility.services = services;
        facility.timing = timing;
        facility.geolocation = geolocation;

        await facility.save();

        return res
            .status(200)
            .json(new ApiResponse(200, facility, "Facility updated successfully"));
    }
    catch (error) {
        throw new ApiError(500, error || "Internal Server Error");
    }
}); 

const getFacilities = asyncHandler(async (req, res) => {
    const user = req.user;
    if (!user) {
        throw new ApiError(401, "Unauthorized");
    }
    try {
        const facilities = await Facility.find({
            userId: user._id
        });
        return res
            .status(200)
            .json(new ApiResponse(200, facilities, "Facilities fetched successfully"));
    }
    catch (error) {
        throw new ApiError(500, error || "Internal Server Error");
    }
});

const getFacilityById = asyncHandler(async (req, res) => {
    const { id } = req.query;
    if (!id) {
        throw new ApiError(400, "Facility ID is required");
    }
    const facility = await Facility.findById(id);
    if (!facility) {
        throw new ApiError(404, "Facility not found");
    }
    try {
        return res
            .status(200)
            .json(new ApiResponse(200, facility, "Facility fetched successfully"));
    }
    catch (error) {
        throw new ApiError(500, error || "Internal Server Error");
    }
});

export { registerFacility, getFacilities, getFacilityById ,editFacility};