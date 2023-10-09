const FeatureModel = require("../models/FeatureModel");

exports.featureList = async (req, res) => {
  try {
    const data = await FeatureModel.find();
    res.status(200).json({
      status: true,
      data: data,
    });
  } catch (error) {
    res.status(500).json({ status: false, error: error.message });
  }
};
