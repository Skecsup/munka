import express from "express";
import dotenv from "dotenv";
import path from "path";
import "express-async-errors";

const app = express();
dotenv.config();

//db
import connectDB from "./db/db.js";
//routes
import UserRouter from "./routes/userRoutes.js";
import ProductsRouter from "./routes/productRoutes.js";
import SeedRouter from "./routes/seedRoutes.js";
import OrderRouter from "./routes/orderRoutes.js";

//middleware
import errorHandler from "./middleware/error-handler.js";

app.get("/", (req, res) => {
  res.send("waccap fuckers");
});

app.use(express.json());
app.use("/api/seed", SeedRouter);
app.use("/api/user", UserRouter);
app.use("/api/products", ProductsRouter);
app.use("/api/orders", OrderRouter);

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "/frontend/build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/frontend/build/index.html"));
});

app.use(errorHandler);

const port = process.env.PORT || 5000;

const start = async () => {
  await connectDB(process.env.MONGO_URL);
  app.listen(port, () => {
    console.log(`Server is listening on port ${port}...`);
  });
};
start();
