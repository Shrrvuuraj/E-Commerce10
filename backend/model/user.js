import mongoose from "mongoose";
const userSchema = mongoose.Schema(
  {
    userName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    phoneNo: { type: String, required: true },
    address: { type: String, required: false },
  },
  { Timestamp: true }
);

