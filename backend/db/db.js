import mongoose from "mongoose";

const connectDB = (url) => {
  console.log("mongo is running");
  return mongoose.connect(url);
};
export default connectDB;
