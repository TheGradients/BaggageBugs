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
        type: String, 
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
}, { 
    timestamps: true 
});

const Facility = mongoose.model('Facility', facilitySchema);
export default Facility;