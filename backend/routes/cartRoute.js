import e from "express";
import {
  getCart,
  createCartItem,
  deleteCartItem,
  updateCartItem,
} from "../controller/cartController.js";

const router = e.Router();

router.route("/").get(getCart).post(createCartItem);

router.route("/id").put(updateCartItem).delete(deleteCartItem);
export default router;
