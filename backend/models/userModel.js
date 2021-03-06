import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please provide the name"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "please provide the email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "please provide the password"],
      minlength: 6,
      select: false,
    },
    lastName: {
      type: String,
      default: "",
    },
    address: {
      type: String,
      default: "",
    },
    country: {
      type: String,
      default: "",
    },
    city: {
      type: String,
      default: "",
    },
    zip: {
      type: String,
      default: "",
    },
    role: {
      type: Number,
      default: 0,
    },
    orders: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function () {
  if (!this.isModified("password")) return;
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.createJWT = function () {
  return jwt.sign({ userId: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFETIME,
  });
};

userSchema.methods.comparePassword = async function (frontendPassword) {
  const isMatch = await bcrypt.compare(frontendPassword, this.password);
  return isMatch;
};

export default mongoose.model("User", userSchema);
