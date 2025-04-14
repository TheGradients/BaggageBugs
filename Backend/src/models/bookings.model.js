import mongoose, { Schema } from "mongoose";

const bookingSchema = new Schema({
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
    area: { 
        type: String, 
        required: true 
    },
    dropIn: { 
        type: Date, 
        required: true 
    },
    pickup: { 
        type: Date, 
        required: true 
    },
    paymentStatus: { 
        type: String, 
        required: true 
    },
    luggageType: { 
        type: String, 
        required: true 
    },
}, { 
    timestamps: true 
});

const Bookings = mongoose.model('Booking', bookingSchema);
export default Bookings;