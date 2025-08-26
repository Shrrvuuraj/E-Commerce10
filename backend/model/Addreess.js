import mongoose from "mongoose";

const addressSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    name: {
      type: String,
      required: [true, "Enter Recipient Name"],
    },
    number: {
      type: String,
      required: [true, "Enter Recipient number"],
    },
    address: {
      type: String,
      required: [true, "Street / House / Flat / Apartment"],
    },
    landmark: {
      type: String,
    },
    pinCode: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: [true, "Country is required"],
      default: "India",
    },
    isDefault: {
      type: Boolean,
      default: false,
    },
    geo: {
      lat: { type: Number },
      lng: { type: Number },
    },
  },
  { timestamps: true }
);

const Address = mongoose.model("Address", addressSchema);
export default Address;
