const mongoose = require("mongoose");

// Schema
const productSchema = new mongoose.Schema(
  {
    category_id: { type: mongoose.Schema.Types.ObjectId, required: true },
    brand_id: { type: mongoose.Schema.Types.ObjectId, required: true },

    title: { type: String, required: true, trim: true },
    short_des: { type: String, required: true, trim: true },
    price: { type: String, required: true, trim: true },
    discount: { type: Boolean, default: false, trim: true },
    discount_price: { type: String, trim: true },
    image: { type: String, required: true, trim: true },
    stock: { type: Boolean, required: true, default: true, trim: true },
    star: { type: String, required: true, default: 0, trim: true },
    remark: {
      type: String,
      required: true,
      trim: true,
      enum: ["new", "top", "special", "trending", "regular"],
    },
  },
  { timestamps: true, versionKey: false }
);

// model
const ProductModel = mongoose.model("products", productSchema);
module.exports = ProductModel;
