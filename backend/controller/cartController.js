import Cart from "../model/cart.js";
import User from "../model/user.js";

const getCart = async (req, res) => {
  try {
    const cart = await Cart.find();
    res
      .status(200)
      .json({
        success: true,
        message: "Cart fetched successfully",
        error: error.message,
      });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Server Error", error: error.message });
  }
};

export const createCartItem = async (req, res) => {
      

};

export const updateCartItem = async (req, res) => {};
export const deleteCartItem = async (req, res) => {};
