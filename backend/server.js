import express from "express";
import dotenv from "dotenv";
import "express-async-errors";

const app = express();
dotenv.config();

//db
import connectDB from "./db/db.js";
//routes
import UserRouter from "./routes/userRoutes.js";

//middleware
import errorHandler from "./middleware/error-handler.js";

app.get("/", (req, res) => {
  res.send("waccap fuckers");
});

app.use(express.json());

app.use("/api/user", UserRouter);

app.use(errorHandler);

const port = process.env.PORT || 5000;

const start = async () => {
  await connectDB(process.env.MONGO_URL);
  app.listen(port, () => {
    console.log(`Server is listening on port ${port}...`);
  });
};
start();
