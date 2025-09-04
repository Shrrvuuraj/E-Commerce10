import Order from "../model/order.js";

export const createOrder = async (req, res) => {
  try {
    const order = await Order.create(req.body);
    res.status(200).json({ suucces: true, message: "Order is created",data:order });
  } catch (error) {
     res.status(500).json({suucces:false,message:"Server failed" , error:error.message})
  }
};
export const getOrder = async (req, res) => {};
export const upgradeOrder = async (req, res) => {};
export const deleteOrder = async (req, res) => {};
