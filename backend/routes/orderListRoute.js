import e from "express";
import { orderListController} from "../controller/orderListController.js"

const router=e.Router();

router.get("/",orderListController);

export default router;