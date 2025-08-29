import e from "express";
import {
  createUser,
  getAllUser,
  deleteUser,
  updateUser,
  getUser
} from "../controller/userController.js";

const router = e.Router();

router
     .route("/")
     .post(createUser)
     .get(getAllUser);

router
     .route("/:id")
     .delete(deleteUser)
     .put(updateUser)
     .get(getUser);

export default router;
