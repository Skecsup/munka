import BadRequestError from "../errors/bad-request.js";
import Order from "../models/orderModel.js";

const createOrder = async (req, res) => {
  console.log(req.user.userId);

  req.body.orderedBy = req.user.userId;
  console.log(req.body);
  const order = await Order.create(req.body);

  res.status(201).json({ order });
};

const getOrders = async (req, res) => {
  const orders = await Order.find({ orderedBy: req.user.userId });
  console.log(orders);
  res.status(200).json({ orders });
};

export { createOrder, getOrders };
