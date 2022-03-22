import Product from "../models/productModel.js";

const getProducts = async (req, res) => {
  const products = await Product.find();
  res.status(200).json({ products });
};

export { getProducts };
