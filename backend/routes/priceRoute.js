import e from "express";
import { priceController} from "../controller/priceController.js"

const router=e.Router();

router.get("/",priceController);

export default router;