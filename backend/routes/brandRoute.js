import e from "express";
const router=e.Router();
import {brandController} from "../controller/brandController.js"

router.get("/",brandController)
export default router