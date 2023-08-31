import mongoose from "mongoose";

// Schema
const cartSchema = new mongoose.Schema(
  {
    user_id: { type: mongoose.Schema.Types.ObjectId, required: true },
    product_id: { type: mongoose.Schema.Types.ObjectId, required: true },

    color: { type: String, required: true, trim: true },
    size: { type: String, required: true, trim: true },
    qty: { type: String, required: true, trim: true },
    price: { type: String, required: true, trim: true },
  },
  { timestamps: true, versionKey: false }
);

// model
const CartModel = mongoose.model("carts", cartSchema);
module.exports = CartModel;
