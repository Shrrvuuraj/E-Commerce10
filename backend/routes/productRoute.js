import e from "express";
import { productController} from "../controller/productController.js"

const router=e.Router();

router.get("/",productController);

export default router;