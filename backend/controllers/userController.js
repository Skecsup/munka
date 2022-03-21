import User from "../models/userModel.js";
import { BadRequestError, UnAuthenticatedError } from "../errors/index.js";

const register = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    throw new BadRequestError("please provide all data");
  }
  const userAlreadyExist = await User.findOne({ email });
  if (userAlreadyExist) {
    throw new BadRequestError("Email already in use");
  }

  const user = await User.create({ name, email, password });
  const token = user.createJWT();

  res.status(201).json({
    user: {
      name: user.name,
      email: user.email,
      cart: user.cart,
      role: user.role,
    },
    token,
  });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadRequestError("please provide all data");
  }
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    throw new UnAuthenticatedError("No user with this email");
  }

  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new UnAuthenticatedError("invalid password");
  }

  const token = user.createJWT();
  user.password = undefined;
  res.status(200).json({
    user,
    token,
  });
};

const update = async (req, res) => {
  const { email, name, address, city, zip } = req.body;
  if (!email || !name || !address || !city || !zip) {
    throw new BadRequestError("Please provide all values");
  }
  const user = await User.findOne({ _id: req.user.userId });

  user.email = email;
  user.name = name;
  user.address = address;
  user.city = city;
  user.zip = zip;

  await user.save();

  const token = user.createJWT();

  res.status(200).json({ user, token });
};

const getCart = (req, res) => {
  res.status(200).json({ msg: "getcart" });
};

export { register, login, update, getCart };
