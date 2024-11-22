import express from "express";

import {
  allOrdersAdmin,
  placeOrder,
  updateOrderStatus,
  userOrders,
} from "../controllers/orderController.js";
import { adminAuth } from "../middleware/adminAuth.js";
import authUser from "../middleware/userAuth.js";

const orderRouter = express.Router();

orderRouter.get("/list", adminAuth, allOrdersAdmin);
orderRouter.post("/status", adminAuth, updateOrderStatus);

orderRouter.post("/place", authUser, placeOrder);
orderRouter.get("/userorders", authUser, userOrders);

export default orderRouter;
