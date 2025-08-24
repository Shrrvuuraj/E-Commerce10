import mongoose from "mongoose";

const orderSchema = mongoose.Schema(
  {
    userId: { type: String, required: true },
    totalAmount: { type: String, required: true },
    status: { type: String, required: true },
  },
  { Timestamp: true }
);
