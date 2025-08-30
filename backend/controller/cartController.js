import Cart from "../model/cart.js";

export const getCart = async (req, res) => {
  try {
    const cart = await Cart.find();
    res.status(200).json({
      success: true,
      message: "Cart fetched successfully",
      data: cart,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Server Error", error: error.message });
  }
};

export const createCartItem = async (req, res) => {
  try {
    const body = req.body;
    const cart = await Cart.create(body);
    res
      .status(200)
      .json({ success: true, message: "Item added to cart", data: cart });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Server Error", error: error.message });
  }
};

export const updateCartItem = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const cart = await Cart.findByIdAndUpdate(id, body, { new: true });
    if (!cart) {
      return res
        .status(404)
        .json({ success: false, message: "Cart item not found" });
    }
    res
      .status(200)
      .json({ success: true, message: "Item updated successfully", data: cart });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Server Error", error: error.message });
  }
};

export const deleteCartItem = async (req, res) => {
  try {
    const id = req.params.id;
    const cart = await Cart.findByIdAndDelete(id);
    if (!cart) {
      return res
        .status(404)
        .json({ success: false, message: "Cart item not found" });
    }
    res.status(200).json({ success: true, message: "Item deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Server Error", error: error.message });
  }
};
