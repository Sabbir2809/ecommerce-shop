const mongoose = require("mongoose");

// Schema
const reviewSchema = new mongoose.Schema(
  {
    customer_id: { type: mongoose.Schema.Types.ObjectId, required: true },
    product_id: { type: mongoose.Schema.Types.ObjectId, required: true },

    description: { type: String, required: true, trim: true },
    rating: { type: String, required: true, trim: true },
  },
  { timestamps: true, versionKey: false }
);

// model
const ReviewModel = mongoose.model("reviews", reviewSchema);
module.exports = ReviewModel;
