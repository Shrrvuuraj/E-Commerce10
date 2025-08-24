import mongoose from "mongoose"
const categorySchema=mongoose.Schema({
    name:{type:String,required:true},
    parent_id:{type:String,required:true}
})