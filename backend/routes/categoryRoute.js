import e from "express";
import {categoryController} from "../controller/categoryController.js"

const router=e.Router();

router.get("/",categoryController);

export default router;

