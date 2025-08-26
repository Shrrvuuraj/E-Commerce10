import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    parentId: { type: mongoose.Schema.Types.ObjectId, ref: "Category", default: null }, // optional parent
  },
  { timestamps: true }
);

const Category = mongoose.model("Category", categorySchema);
export default Category;
