import User from "../models/userModel.js";

const register = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("please provide all data");
  }
  const user = await User.create({ name, email, password });
  const token = user.createJWT();
  res
    .status(201)
    .json({
      user: { name: user.name, email: user.email, cart: user.cart },
      token,
    });
};

const login = (req, res) => {
  res.status(200).json({ msg: "User is logged in" });
};

const getCart = (req, res) => {
  res.status(200).json({ msg: "getcart" });
};

export { register, login, getCart };
