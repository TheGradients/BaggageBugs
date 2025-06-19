import mongoose, { Schema } from "mongoose";

const bankAccountSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    accountNumber: {
      type: String,
      required: true,
      unique: true,
      match: /^[0-9]{10,12}$/, // Example regex for 10-12 digit account numbers
    },
    bankName: {
      type: String,
      required: true,
      trim: true,
    },
    ifscCode: {
      type: String,
      required: true,
      match: /^[A-Z]{4}0[A-Z0-9]{6}$/, // Example regex for IFSC code
    },
    accountHolderName: {
      type: String,
      required: true,
      trim: true,
    },
    holderAddress: {
      type: String,
      required: true,
      trim: true,
    },
    holderPostalCode: {
      type: String,
      required: true,
      match: /^[0-9]{6}$/, // Example regex for 6 digit postal code
    },
    holderCity: {
      type: String,
      required: true,
      trim: true,
    },
    holderStateCode: {
      type: String,
      required: true,
      match: /^[A-Z]{2}$/, // Example regex for 2 letter state code
    },
  },
  {
    timestamps: true,
  }
);

const BankAccount = mongoose.model("BankAccount", bankAccountSchema);

export default BankAccount;