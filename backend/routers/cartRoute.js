import express, { Router } from "express";
import {
  addToCart,
  getUserCart,
  updateCart,
} from "../controllers/cartController.js";
import authUser from "../middleware/userAuth.js";

const cartRouter = express.Router();
cartRouter.use(authUser);
cartRouter.post("/add", addToCart);
cartRouter.get("/get", getUserCart);
cartRouter.patch("/update", updateCart);

export default cartRouter;
