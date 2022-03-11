const register = (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("please provide all data");
  }

  res.status(201).json({ name, email, password });
};

const login = (req, res) => {
  res.status(200).json({ msg: "User is logged in" });
};
export { register, login };
