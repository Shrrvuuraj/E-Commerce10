import mongoose from "mongoose";

const cartSchema = mongoose.Schema({
  userId: { type: String, required: true },
  product_id: { type: String, required: true },
  quantity: { type: String, required: true },
});
