const { allBrands } = require("../services/ProductService");

exports.brandList = async (req, res) => {
  const result = await allBrands();
  res.status(200).json(result);
};
