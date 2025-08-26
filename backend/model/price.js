// import mongoose from "mongoose";

// cartSchema=mongoose.Schema({})import mongoose from "mongoose";

// const productSchema = new mongoose.Schema(
//   {
//     name: { type: String, required: true },
//     description: { type: String, required: true },
//     price: { 
//       type: Number, 
//       required: true, 
//       min: [0, "Price cannot be negative"] 
//     },
//     stockQuantity: { type: Number, required: true, min: 0 },
//     categoryId: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true },
//     brandId: { type: mongoose.Schema.Types.ObjectId, ref: "Brand", required: true },
//     imageUrl: { type: String, required: true },
//   },
//   { timestamps: true }
// );

// const Product = mongoose.model("Product", productSchema);
// export default Product;
