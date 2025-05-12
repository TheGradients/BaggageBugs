import mongoose, { Schema } from 'mongoose';

const facilitySchema = new Schema({
    userId: { 
        type: Schema.Types.ObjectId, 
        ref: 'User', 
        required: true 
    },
    name: { 
        type: String, 
        required: true 
    },
    email: { 
        type: String, 
        required: true 
    },
    address: { 
        type: String, 
        required: true 
    },
    phone: { 
        type: String, 
        required: true 
    },
    services: {
        type: {
            "wifi": {
                type: Boolean,
                default: false,
            },
            "cctv": {
                type: Boolean,
                default: false,
            },
            "restroom": {
                type: Boolean,
                default: false,
            },
        },
        required: true 
    },
    capacity: { 
        type: Number, 
        required: true 
    },
    limited: { 
        type: Boolean, 
        default: false 
    },
    type: { 
        type: String, 
        required: true 
    },
    timing: { 
        type: String 
    },
    geolocation: {
        type: {
            type: String,
            enum: ['Point'],
            required: true,
        },
        coordinates: {
            type: [Number],
            required: true,
        },
    },
}, { 
    timestamps: true,
});

facilitySchema.index({ geolocation: '2dsphere' });

const Facility = mongoose.model('Facility', facilitySchema);
export default Facility;