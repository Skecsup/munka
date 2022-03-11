import User from "../models/userModel.js";

const register = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("please provide all data");
  }
  const user = await User.create({ name, email, password });
  res.status(201).json({ user });
};

const login = (req, res) => {
  res.status(200).json({ msg: "User is logged in" });
};
export { register, login };
