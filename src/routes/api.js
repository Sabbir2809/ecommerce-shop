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

// Routing Endpoints: brand, category
router.get("/brand", brandList);
router.get("/category", categoryList);

// Routing Endpoints: Product
router.get("/list-by-brand", listByBrand);
router.get("/list-by-category", listByCategory);
router.get("/list-by-slider", listBySlider);
router.get("/list-by-remark", listByRemark);
router.get("/list-by-smiler", listBySmiler);
router.get("/list-by-keyword", listByKeyword);
router.get("/product-details", productDetailsById);
router.get("/product-review", productReview);
router.get("/wish-list", wishList);
router.get("/create-wish-item", createWishItem);
router.get("/remove-wish-item", removeWishItem);
router.get("/cart-list", cartList);
router.get("/create-cart-item", createCartItem);
router.get("/remove-cart-item", removeCartItem);

// Routing Endpoints: authentication
router.post("/user-login/:email", login);
router.post("/user-login-verify/:email/:otp", loginVerify);
router.post("/logout", logout);

// Routing Endpoints: profile
router.post("/create-profile", createProfile);
router.get("/view-profile", authVerifyMiddleware, ViewProfile);
router.put("/update-profile", updateProfile);

// Routing Endpoints: Invoice
router.get("/invoice-create", invoiceCreate);
router.get("/invoice-list", invoiceList);
router.get("/invoice-product-list", invoiceProductList);
router.get("/payment-success", paymentSuccess);
router.get("/payment-fail", paymentFail);
router.get("/payment-cancel", paymentCancel);
router.get("/payment-ipn", paymentIPN);

// Exports
module.exports = router;
