import e from "express";
const router = e.Router();
import {
  getAllBrand,
  getBrand,
  putBrand,
  deleteBrand,
  postBrand,
} from "../controller/brandController.js";


router
     .route("/")
     .get(getAllBrand)
     .post(postBrand);


     router
     .route("/:id")
     .get(getBrand)
     .put(putBrand)
     .delete(deleteBrand);

export default router;
