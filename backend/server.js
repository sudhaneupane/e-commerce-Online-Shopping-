import express from "express";
import cors from "cors";
import "dotenv/config";
import connectdb from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import morgan from "morgan";

// app config
const app = express();
const port = process.env.PORT || 4000;
connectdb();
connectCloudinary();

// middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("combined"));

// endpoint
app.get("/", (req, res) => {
  res.send("OK");
});

import userRouter from "./routers/userRoute.js";
import productRouter from "./routers/productRoute.js";
import cartRouter from "./routers/cartRoute.js";
import orderRouter from "./routers/orderRouter.js";

app.use("/api/user", userRouter);
app.use("/api/products", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.listen(port, () => console.log(`Server started on ${port}`));
