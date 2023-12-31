const mongoose = require("mongoose");

// Schema
const productDetailSchema = new mongoose.Schema(
  {
    product_id: { type: mongoose.Schema.Types.ObjectId, required: true },

    img1: { type: String, required: true, trim: true },
    img2: { type: String, trim: true },
    img3: { type: String, trim: true },
    img4: { type: String, trim: true },
    img5: { type: String, trim: true },
    img6: { type: String, trim: true },
    des: { type: String, required: true, trim: true },
    color: { type: String, required: true, trim: true },
    size: { type: String, required: true, trim: true },
  },
  { timestamps: true, versionKey: false }
);

// model
const ProductDetailModel = mongoose.model("productDetails", productDetailSchema);
module.exports = ProductDetailModel;
