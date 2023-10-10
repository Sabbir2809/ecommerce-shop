const { Cart, createCart, removeCart } = require("../services/CartService");
const {
  productByRemark,
  productByCategory,
  productByBrand,
  productBySlider,
  productByKeyword,
  productBySmiler,
  detailsById,
} = require("../services/ProductService");
const { createWish, removeWish, wish } = require("../services/WishService");

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

// :::::: list by Smiler ::::::
// exports.listBySmiler = async (req, res) => {
//   const result = await productBySmiler(req);
//   res.status(200).json(result);
// };

// :::::: list by keyword ::::::
exports.listByKeyword = async (req, res) => {
  const result = await productByKeyword(req);
  res.status(200).json(result);
};

// :::::: product Details By Id ::::::
exports.productDetailsById = async (req, res) => {
  const result = await detailsById(req);
  res.status(200).json(result);
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

// :::::: Create Wish List ::::::
exports.createWishItem = async (req, res) => {
  const result = await createWish(req);
  res.status(200).json(result);
};

// :::::: Remove Wish List ::::::
exports.removeWishItem = async (req, res) => {
  const result = await removeWish(req);
  res.status(200).json(result);
};

// :::::: Wish List ::::::
exports.wishList = async (req, res) => {
  const result = await wish(req);
  res.status(200).json(result);
};

// :::::: Create Cart Item ::::::
exports.createCartItem = async (req, res) => {
  const result = await createCart(req);
  res.status(200).json(result);
};

// :::::: Remove Cart Item ::::::
exports.removeCartItem = async (req, res) => {
  const result = await removeCart(req);
  res.status(200).json(result);
};

// :::::: Cart List ::::::
exports.cartList = async (req, res) => {
  const result = await Cart(req);
  res.status(200).json(result);
};
