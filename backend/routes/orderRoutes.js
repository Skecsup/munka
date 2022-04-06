import {
  createOrder,
  getOrders,
  getAllOrders,
  updateOrderStatus,
} from "../controllers/orderController.js";
import authenticateUser from "../middleware/auth.js";
import express from "express";
const router = express.Router();

router
  .route("/")
  .post(authenticateUser, createOrder)
  .get(authenticateUser, getOrders);
router.route("/adminOrders").get(getAllOrders).patch(updateOrderStatus);

export default router;
