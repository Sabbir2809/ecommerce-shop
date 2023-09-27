// Dependencies
const express = require("express");
const router = express.Router();
const BrandController = require("../controllers/BrandController");
const CategoryController = require("../controllers/CategoryController");
const UserController = require("../controllers/UserController");
const ProfileController = require("../controllers/ProfileController");
const ProductController = require("../controllers/ProductController");
const InvoiceController = require("../controllers/InvoiceController");
const authVerifyMiddleware = require("../middleware/authVerifyMiddleware");

// API Endpoints: brand, category
router.get("/brands", BrandController.brandList);
router.get("/categories", CategoryController.categoryList);

// API Endpoints: Products
router.get("/list-by-brand/:brand_id", ProductController.listByBrand);
router.get("/list-by-category/:category_id", ProductController.listByCategory);
router.get("/list-by-slider", ProductController.listBySlider);
router.get("/list-by-remark/:remark", ProductController.listByRemark);
router.get("/list-by-smiler/:category_id", ProductController.listBySmiler);
router.get("/list-by-keyword/:keyword", ProductController.listByKeyword);
router.get("/product-details", ProductController.productDetailsById);
router.get("/product-review", ProductController.productReview);
router.get("/wish-list", authVerifyMiddleware, ProductController.wishList);
router.post("/create-wish-item", authVerifyMiddleware, ProductController.createWishItem);
router.delete("/remove-wish-item", authVerifyMiddleware, ProductController.removeWishItem);
router.get("/cart-list", authVerifyMiddleware, ProductController.cartList);
router.post("/create-cart-item", authVerifyMiddleware, ProductController.createCartItem);
router.delete("/remove-cart-item", authVerifyMiddleware, ProductController.removeCartItem);

// API Endpoints: User
router.post("/user-login/:email", UserController.login);
router.post("/user-login-verify/:email/:otp", UserController.loginVerify);
router.post("/logout", UserController.logout);

// API Endpoints: profile
router.post("/create-profile", authVerifyMiddleware, ProfileController.createProfile);
router.get("/view-profile", authVerifyMiddleware, ProfileController.ViewProfile);
router.put("/update-profile", authVerifyMiddleware, ProfileController.updateProfile);

// API Endpoints: Invoice
router.get("/invoice-create", authVerifyMiddleware, InvoiceController.invoiceCreate);
router.get("/invoice-list", authVerifyMiddleware, InvoiceController.invoiceList);
router.get("/invoice-product-list", authVerifyMiddleware, InvoiceController.invoiceProductList);

// API Endpoints: Payment status
router.get("/payment-success", InvoiceController.paymentSuccess);
router.get("/payment-fail", InvoiceController.paymentFail);
router.get("/payment-cancel", InvoiceController.paymentCancel);
router.get("/payment-ipn", InvoiceController.paymentIPN);

// Exports
module.exports = router;
