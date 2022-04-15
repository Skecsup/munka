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

const getAllOrders = async (req, res) => {
  const orders = await Order.find({});
  res.status(200).json({ orders });
};

const updateOrderStatus = async (req, res) => {
  const { status, order } = req.body;
  if (!status || !order) {
    throw new BadRequestError("Please provide all values");
  }
  console.log(req.body);
  const updatedOrder = await Order.findOne({ _id: req.body.order._id });
  updatedOrder.status = status;
  await updatedOrder.save();
  res.status(200).json({ order });
};

export { createOrder, getOrders, getAllOrders, updateOrderStatus };
