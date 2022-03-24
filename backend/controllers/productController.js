import Product from "../models/productModel.js";
import { BadRequestError } from "../errors/index.js";
const getProducts = async (req, res) => {
  const products = await Product.find();
  res.status(200).json({ products });
};

const createProduct = async (req, res) => {
  const { name, desc, image, price } = req.body;
  if (!name || !desc || !image || !price) {
    throw new BadRequestError("Please provide all values");
  }
  const product = await Product.create(req.body);

  res.status(201).json({
    product: {
      name: product.name,
      desc: product.desc,
      image: product.image,
      price: product.price,
    },
  });
};

export { getProducts, createProduct };
