const { allCategories } = require("../services/ProductService");

exports.categoryList = async (req, res) => {
  const result = await allCategories();
  res.status(200).json(result);
};
