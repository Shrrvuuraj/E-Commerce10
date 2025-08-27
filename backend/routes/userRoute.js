import e from "express";
import { userController} from "../controller/userController.js"

const router=e.Router();

router.get("/",userController);

export default router;