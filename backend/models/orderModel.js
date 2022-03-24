import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
  orderedItems: [
    {
      quantity: {
        type: Number,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      product: {
        type: mongoose.Types.ObjectId,
        ref: "Product",
        required: true,
      },
    },
  ],
  orderedBy: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true,
  },
  ShippingAddress: {
    address: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    zip: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
  },
  PhoneNumber: {
    type: String,
    required: true,
  },
  PaymentMethod: {
    type: String,
    required: true,
  },
  ShippingMethod: {
    type: String,
    required: true,
  },
  itemsPrice: { type: Number, required: true },
  shippingPrice: { type: Number, required: true },
  taxPrice: { type: Number, required: true },
  totalPrice: { type: Number, required: true },
});

export default mongoose.model("Order", orderSchema);
