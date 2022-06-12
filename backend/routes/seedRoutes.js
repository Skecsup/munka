import express from "express";
import Product from "../models/productModel.js";
import data from "../data/data.js";

const router = express.Router();

router.get("/", async (req, res) => {
  await Product.deleteMany({});
  const createdProducts = await Product.insertMany(data.products);
  console.log("seedrouts");
  res.send({ createdProducts });
});

export default router;
