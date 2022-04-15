import mongoose from "mongoose";

const orderSchema = mongoose.Schema(
  {
    orderedItems: { type: Array, required: true },
    orderedBy: { type: mongoose.Types.ObjectId, ref: "User", required: true },

    name: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    zip: { type: String, required: true },
    country: { type: String, required: true },

    PhoneNumber: { type: String, required: true },
    PaymentMethod: { type: String, required: true },
    ShippingMethod: { type: String, required: true },
    itemsPrice: { type: Number, required: true },
    shippingPrice: { type: Number, required: true },
    taxPrice: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
    status: {
      type: String,
      required: true,
      enum: ["NEW", "PAID/SHIPPING", "SHIPPED"],
      default: "NEW",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Order", orderSchema);
