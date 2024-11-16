import express, { Router } from "express";
import {
  adminLogin,
  loginUser,
  registerUser,
} from "../controllers/userController.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/admin", adminLogin);

export default router
