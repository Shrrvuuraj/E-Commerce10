import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    userID:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"User",
      required:true
    },
    items:[
      {
        productId:{
          type:mongoose.Schema.Types.ObjectId,
          ref:"Product",
          requied:true
        },
        quantity:{type:Number,required:true},
        price:{type:Number,required:true}
      }
    ],
    totalAmount:{type:Number,required:true},
    status:{
      type:String,
      enum:["Pending","Completed","Cancelled"],
      default:"Pending",
      required:true
    }
  },{
    timestamps:true
  }
);

const Order = mongoose.model("Order", orderSchema);
export default Order;
