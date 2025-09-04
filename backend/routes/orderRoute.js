import e from "express";
import {
  createOrder,
  deleteOrder,
  getOrder,
  upgradeOrder,
} from "../controller/orderController.js";

const router = e.Router();

router.route("/").get(getOrder).post(createOrder);
router.route("/:id").put(upgradeOrder).delete(deleteOrder);

export default router;
