import mongoose from "mongoose";

// Schema
const brandSchema = new mongoose.Schema(
  {
    brandName: { type: String, required: true, unique: true, trim: true },
    brandImg: { type: String, required: true, unique: true, trim: true },
  },
  { timestamps: true, versionKey: false }
);

// model
const BrandModel = mongoose.model("brands", brandSchema);
module.exports = BrandModel;
