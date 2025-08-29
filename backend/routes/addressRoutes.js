import express from "express";
const router = express.Router();
import {
  getAllAddress,
  getAddress,
  postAddress,
  putAddress,
  deleteAddress,
} from "../controller/addressController.js";

router
  .route("/")
  .get(getAllAddress)
  .post(postAddress);

// seprtate

router
  .route("/:id")
  .get(getAddress)
  .put(putAddress)
  .delete(deleteAddress);
export default router;
