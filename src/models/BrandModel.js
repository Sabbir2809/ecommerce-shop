const mongoose = require("mongoose");

// Schema
const brandSchema = new mongoose.Schema(
  {
    brandName: { type: String, required: true, trim: true },
    brandImg: { type: String, required: true, trim: true },
  },
  { timestamps: true, versionKey: false }
);

// model
const BrandModel = mongoose.model("brands", brandSchema);
module.exports = BrandModel;
