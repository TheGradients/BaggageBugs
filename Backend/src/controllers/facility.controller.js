import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import Facility from "../models/facility.model.js";

const registerFacility = asyncHandler(async (req, res) => {
    const {name, email , phone , address , type , capacity , limited , services , timing} = req.body;
    if(!name || !email || !phone || !address || !type || !capacity || !limited || !services){
        throw new ApiError(400, "Please fill all fields");
    }
    const user = req.user; 
    if(!user){
        throw new ApiError(401, "Unauthorized");
    }
    const existingFacility = await Facility.findOne({
        where:{
            email,
            userId: user.id
        }
    });
    if(existingFacility){
        throw new ApiError(409, "Facility already exists");
    }
    try{
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
            userId: user.id
        });
        return res
            .status(201)
            .json(new ApiResponse(201, facility, "Facility created successfully"));
    }
    catch (error) {
        throw new ApiError(500, error || "Internal Server Error");
    }
});

const getFacilities = asyncHandler(async (req, res) => {
    const user = req.user;
    if(!user){
        throw new ApiError(401, "Unauthorized");
    }
    try {
        const facilities = await Facility.findOne({
            where:{
                userId: user.id
            }
        });
        return res
            .status(200)
            .json(new ApiResponse(200, facilities, "Facilities fetched successfully"));
    }
    catch (error) {
        throw new ApiError(500, error || "Internal Server Error");
    }
});

export { registerFacility , getFacilities };