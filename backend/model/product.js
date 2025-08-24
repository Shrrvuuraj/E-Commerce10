import mongoose from "mongoose";

const productsSchema=mongoose.Schema({
    name:{type:String,required:true},
    descryption:{type:String,required:true},
    price:{type:String,required:true},
    stock_quantity:{type:String,requires:true},
    category_idea:{type:String,require:true},
    brand_id:{type:String,required:true},
    image_url:{type:String,required:true}
},{Timestamp:true});