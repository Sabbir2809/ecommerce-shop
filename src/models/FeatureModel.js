const mongoose = require("mongoose");

const featureSchema = mongoose.Schema(
  {
    name: { type: String, trim: true, required: true },
    description: { type: String, trim: true, required: true },
    img: { type: String, trim: true, required: true },
  },
  { timestamps: true, versionKey: false }
);

const FeatureModel = mongoose.model("features", featureSchema);
module.exports = FeatureModel;
