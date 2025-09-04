import Order from "../model/order.js";
import User from "../model/user.js";

// Create Order
export const createOrder = async (req, res) => {
  try {
    const { userID } = req.body;
    if (!userID) return res.status(400).json({ success: false, message: "userID is required" });

    const order = await Order.create(req.body);

    // const user = await User.findById(userID);
    // if (!user) {
    //   return res.status(404).json({ success: false, message: "The user is not found" });
    // }

    // user.orderList.push(order._id);
    // await user.save();

    res.status(201).json({ success: true, message: "Order is created", data: order });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server failed", error: error.message });
  }
};

// Get All Orders
export const getOrder = async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json({ success: true, message: "Orders fetched", data: orders });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server failed", error: error.message });
  }
};

// Update Order
export const upgradeOrder = async (req, res) => {
  try {
    const { orderID, update } = req.body;
    if (!orderID || !update) return res.status(400).json({ success: false, message: "orderID and update object are required" });

    const order = await Order.findByIdAndUpdate(orderID, update, { new: true });
    if (!order) {
      return res.status(404).json({ success: false, message: "Order not found" });
    }

    res.status(200).json({ success: true, message: "Order updated", data: order });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server failed", error: error.message });
  }
};

// Delete Order
export const deleteOrder = async (req, res) => {
  try {
    const { orderID } = req.body;
    if (!orderID) return res.status(400).json({ success: false, message: "orderID is required" });

    const order = await Order.findByIdAndDelete(orderID);
    if (!order) {
      return res.status(404).json({ success: false, message: "Order not found" });
    }

    res.status(200).json({ success: true, message: "Order deleted", data: order });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server failed", error: error.message });
  }
};
