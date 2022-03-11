import mongoose from "mongoose";

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
    },
  },
  { timestamps: true }
);
export default mongoose.model("User", userSchema);
