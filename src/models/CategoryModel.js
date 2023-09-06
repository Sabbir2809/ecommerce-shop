const mongoose = require("mongoose");

// Schema
const categorySchema = new mongoose.Schema(
  {
    categoryName: { type: String, required: true, unique: true, trim: true },
    categoryImg: { type: String, required: true, unique: true, trim: true },
  },
  { timestamps: true, versionKey: false }
);

// model
const CategoryModel = mongoose.model("categories", categorySchema);
module.exports = CategoryModel;
