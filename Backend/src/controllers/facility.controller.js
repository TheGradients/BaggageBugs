import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import Facility from "../models/facility.model.js";
import User from "../models/user.model.js";
import { COOKIE_OPTIONS } from "../constants.js";

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

        await User.findByIdAndUpdate(
            req.user._id,
            { $set: { role: ['partner'] } }
          );

          let tokenRole="";
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