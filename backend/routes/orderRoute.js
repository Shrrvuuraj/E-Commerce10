import e from "express";
import { orderController} from "../controller/orderController.js"

const router=e.Router();

router.get("/",orderController);

export default router;