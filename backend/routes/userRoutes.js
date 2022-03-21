import {
  register,
  login,
  getCart,
  update,
} from "../controllers/userController.js";
import authenticateUser from "../middleware/auth.js";

import express from "express";
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/getcart", getCart);
router.route("/update").patch(authenticateUser, update);

export default router;
