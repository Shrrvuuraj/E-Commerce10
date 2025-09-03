import e from "express";
import {
  createCategory,
  getAllCategory,
  getCategory,
  deleteCategory,
  updateCategory,
} from "../controller/categoryController.js";

const router = e.Router();

router.route("/").get(getAllCategory).post(createCategory);

router
  .route("/:id")
  .get(getCategory).delete(deleteCategory).put(updateCategory);

export default router;
