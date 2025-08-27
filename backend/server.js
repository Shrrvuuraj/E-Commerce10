import express from "express";
import connectMongodb from "./config/db.js";
import dotenv from "dotenv";

// importing routes
import addressRoutes from "./routes/addressRoutes.js";
import brandRoutes from "./routes/brandRoute.js";
import cartRoutes from "./routes/cartRoute.js";
import categoryRoutes from "./routes/categoryRoute.js";
import orderListRoutes from "./routes/orderListRoute.js";
import orderRoutes from "./routes/orderRoute.js";
import priceRoutes from "./routes/priceRoute.js";
import productRoutes from "./routes/productRoute.js";
import userRoutes from "./routes/userRoute.js";

dotenv.config({ override: true });

connectMongodb();

const PORT = process.env.PORT || 8000;
const app = express();

app.use("/address", addressRoutes);
app.use("/brand", brandRoutes);
app.use("/cart", cartRoutes);
app.use("/category", categoryRoutes);
app.use("/orderlist", orderListRoutes);
app.use("/order", orderRoutes);
app.use("/price", priceRoutes);
app.use("/product", productRoutes);
app.use("/user", userRoutes);

app.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`);
});
