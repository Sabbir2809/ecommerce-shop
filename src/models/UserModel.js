import mongoose from "mongoose";

// Schema
const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    otp: { type: String, required: true, trim: true },
  },
  { timestamps: true, versionKey: false }
);

// model
const UserModel = mongoose.model("users", userSchema);
module.exports = UserModel;
