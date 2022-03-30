import {
  createProduct,
  getProducts,
} from "../controllers/productController.js";

import express from "express";
const router = express.Router();

router.route("/").get(getProducts).post(createProduct);

export default router;
