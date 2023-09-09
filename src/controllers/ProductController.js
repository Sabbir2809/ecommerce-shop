const {
  productByRemark,
  productByCategory,
  productByBrand,
  productBySlider,
  productByKeyword,
} = require("../services/ProductService");

// :::::: list by brand ::::::
exports.listByBrand = async (req, res) => {
  const result = await productByBrand(req);
  res.status(200).json(result);
};

// :::::: list by category ::::::
exports.listByCategory = async (req, res) => {
  const result = await productByCategory(req);
  res.status(200).json(result);
};

// :::::: list by slider ::::::
exports.listBySlider = async (req, res) => {
  const result = await productBySlider(req);
  res.status(200).json(result);
};

// :::::: list by remark ::::::
exports.listByRemark = async (req, res) => {
  const result = await productByRemark(req);
  res.status(200).json(result);
};

exports.listBySmiler = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "List By Smiler Product",
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
// :::::: list by keyword ::::::
exports.listByKeyword = async (req, res) => {
  const result = await productByKeyword(req);
  res.status(200).json(result);
};

exports.productDetailsById = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "Product Details By Id",
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.productReview = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "Product Review",
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.wishList = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "Wish List",
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.createWishItem = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "Create Wish Item",
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.removeWishItem = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "Remove Wish Item",
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.cartList = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "Cart List",
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.createCartItem = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "Create Cart Item",
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.removeCartItem = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "Remove Cart Item",
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
