import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Provide your name"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    verifyEmail: {
      type: Boolean,
      default: false,
    },
    avatar: {
      type: String,
      default: "",
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
    },
    refreshToken: {
      type: String,
      default: "",
    },
    addressDetails: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Address",
      },
    ],
    lastLogin: {
      type: Date,
      default: null,
    },
    status: {
      type: String,
      enum: ["Active", "InActive", "Suspended"],
      default: "Active",
    },
    shoppingCart: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "CartProduct",
      },
    ],
    orderHistory: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Order",
      },
    ],
    forgotPasswordOtp: {
      type: String,
      default: null,
    },
    forgotPasswordExpiry: {
      type: Date,
      default: null,
    },
    role: {
      type: String,
      enum: ["ADMIN", "USER"],
      default: "USER",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
