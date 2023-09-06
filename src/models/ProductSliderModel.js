const mongoose = require("mongoose");

// Schema
const productSchema = new mongoose.Schema(
  {
    product_id: { type: mongoose.Schema.Types.ObjectId, required: true },

    title: { type: String, required: true, trim: true },
    short_des: { type: String, required: true, trim: true },
    price: { type: String, required: true, trim: true },
    image: { type: String, required: true, trim: true },
  },
  { timestamps: true, versionKey: false }
);

// model
const ProductModel = mongoose.model("products", productSchema);
module.exports = ProductModel;
