import mongoose from "mongoose";

// Schema
const wishSchema = new mongoose.Schema(
  {
    user_id: { type: mongoose.Schema.Types.ObjectId, required: true },
    product_id: { type: mongoose.Schema.Types.ObjectId, required: true },
  },
  { timestamps: true, versionKey: false }
);

// model
const WishModel = mongoose.model("wishes", wishSchema);
module.exports = WishModel;
