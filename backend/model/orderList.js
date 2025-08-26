import mongoose from "mongoose";

const orderListSchema = new mongoose.Schema(
  {
    orderId: { type: mongoose.Schema.Types.ObjectId, ref: "Order", required: true },
    productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
  },
  { timestamps: true }
);

const OrderList = mongoose.model("OrderList", orderListSchema);
export default OrderList;
