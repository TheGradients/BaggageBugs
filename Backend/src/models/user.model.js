import mongoose, { Schema } from "mongoose";

import { ROLES } from "../constants.js";

const userSchema = new Schema({
    name: {
        type: String,
        required: true 
    },
    email: { 
        type: String, 
        unique: true, 
        required: true 
    },
    phoneNo: { 
        type: String,
    },
    password: { 
        type: String, 
        required: true 
    },
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    dateOfBirth: {
        type: Date,
    },
    toogleEmail: {
        type: String, 
        default: "true" 
    },
    role: { 
        type: [String], 
        enum: ROLES, 
        default: ROLES[1] 
    },
    otp: {
        type: String,
        default: null,
    },
    canChangePassword: {
        type: Boolean,
        default: false,
    },
    googleAuth: {
        type: Boolean,
        default: false,
    },
    changedGooglePassword: {
        type: Boolean,
        default: false,
    },
}, { 
    timestamps: true 
});

const User = mongoose.model("User", userSchema);
export default User;