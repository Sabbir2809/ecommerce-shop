// Dependencies
const express = require("express");
const router = express.Router();
const { brandList } = require("../controllers/BrandController");
const { categoryList } = require("../controllers/CategoryController");
const { login, loginVerify, logout } = require("../controllers/UserController");
const { createProfile, updateProfile, ViewProfile } = require("../controllers/ProfileController");
const {
  listByBrand,
  listByCategory,
  listBySlider,
  listByRemark,
  listBySmiler,
  listByKeyword,
  productDetailsById,
  productReview,
  wishList,
  createWishItem,
  removeWishItem,
  cartList,
  createCartItem,
  removeCartItem,
} = require("../controllers/ProductController");
const {
  invoiceCreate,
  invoiceList,
  invoiceProductList,
  paymentSuccess,
  paymentFail,
  paymentCancel,
  paymentIPN,
} = require("../controllers/InvoiceController");
const authVerifyMiddleware = require("../middleware/authVerifyMiddleware");

// API Endpoints: brand, category
router.get("/brands", brandList);
router.get("/categories", categoryList);

// API Endpoints: Products
router.get("/list-by-brand/:brand_id", listByBrand);
router.get("/list-by-category/:category_id", listByCategory);
router.get("/list-by-slider", listBySlider);
router.get("/list-by-remark/:remark", listByRemark);
router.get("/list-by-smiler/:category_id", listBySmiler);
router.get("/list-by-keyword/:keyword", listByKeyword);
router.get("/product-details", productDetailsById);
router.get("/product-review", productReview);
router.get("/wish-list", authVerifyMiddleware, wishList);
router.post("/create-wish-item", authVerifyMiddleware, createWishItem);
router.delete("/remove-wish-item", authVerifyMiddleware, removeWishItem);
router.get("/cart-list", authVerifyMiddleware, cartList);
router.post("/create-cart-item", authVerifyMiddleware, createCartItem);
router.delete("/remove-cart-item", authVerifyMiddleware, removeCartItem);

// API Endpoints: User
router.post("/user-login/:email", login);
router.post("/user-login-verify/:email/:otp", loginVerify);
router.post("/logout", logout);

// API Endpoints: profile
router.post("/create-profile", authVerifyMiddleware, createProfile);
router.get("/view-profile", authVerifyMiddleware, ViewProfile);
router.put("/update-profile", authVerifyMiddleware, updateProfile);

// API Endpoints: Invoice
router.get("/invoice-create", authVerifyMiddleware, invoiceCreate);
router.get("/invoice-list", authVerifyMiddleware, invoiceList);
router.get("/invoice-product-list", authVerifyMiddleware, invoiceProductList);

// API Endpoints: Payment status
router.get("/payment-success", paymentSuccess);
router.get("/payment-fail", paymentFail);
router.get("/payment-cancel", paymentCancel);
router.get("/payment-ipn", paymentIPN);

// Exports
module.exports = router;
