import { register, login, getCart } from "../controllers/userController.js";

import express from "express";
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/getcart", getCart);

export default router;
