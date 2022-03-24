import mongoose from "mongoose";

const productSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    desc: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    count: { type: Number, default: 1 },
  },
  { timestamps: true }
);
export default mongoose.model("Product", productSchema);
