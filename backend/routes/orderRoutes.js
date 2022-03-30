import { createOrder, getOrders } from "../controllers/orderController.js";
import authenticateUser from "../middleware/auth.js";
import express from "express";
const router = express.Router();

router
  .route("/")
  .post(authenticateUser, createOrder)
  .get(authenticateUser, getOrders);

export default router;
