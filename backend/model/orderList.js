import mongoose from "mongoose";
const orderListSchema=mongoose.Schema({
    order_id:{type:String,required:true},
    product_id:{type:String,required:true},
    quantity:{type:String,requied:true},
    price:{type:String,required:true},
})