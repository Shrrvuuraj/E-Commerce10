import express from "express";
const router=express.Router();
import {addressController} from "../controller/addressController.js"

router.get("/",addressController)
export default router;