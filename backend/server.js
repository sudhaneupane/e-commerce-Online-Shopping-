import express from "express";
import cors from "cors";
import "dotenv/config";
import connectdb from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";

// app config
const app = express();
const port = process.env.PORT || 4000;
connectdb();
connectCloudinary();
// middlewares
app.use(express.json());
app.use(cors());

// endpoint
app.get("/", (req, res) => {
  res.send("OK");
});

import userRouter from "./routers/userRoute.js";

app.use("/api/user", userRouter);

app.listen(port, () => console.log(`Server started on ${port}`));
