import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({override:true});

const connectMongodb = async () => {
  try {
   
    await mongoose.connect(process.env.MONGOOSE_URL);
    console.log("✅ MongoDB connected");
  } catch (error) {
    console.log("❌ DB connection failed:", error);
  }
};

export default connectMongodb;
