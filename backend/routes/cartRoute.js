import e from "express";
import {cartController} from "../controller/cartController.js"


const router=e.Router();

router.get("/",cartController)
export default router;
