import mongoose, { Schema } from "mongoose";

const luggageSchema = new Schema({
    userId: { 
        type: Schema.Types.ObjectId, 
        ref: 'User', 
        required: true 
    },
    bookingId: { 
        type: Schema.Types.ObjectId, 
        ref: 'Booking', 
        required: true 
    }
}, { 
    timestamps: true 
});

const Luggage = mongoose.model('Luggage', luggageSchema);
export default Luggage;