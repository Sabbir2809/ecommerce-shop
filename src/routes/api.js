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
router.get("/product-details", ProductController.productDetailsById); // Todo
router.get("/product-review", ProductController.productReview); // Todo
router.get("/wish-list", authVerifyMiddleware, ProductController.wishList);
router.post("/create-wish-item", authVerifyMiddleware, ProductController.createWishItem);
router.delete("/remove-wish-item", authVerifyMiddleware, ProductController.removeWishItem);
router.get("/cart-list", authVerifyMiddleware, ProductController.cartList);
router.post("/create-cart-item", authVerifyMiddleware, ProductController.createCartItem);
router.delete("/remove-cart-item", authVerifyMiddleware, ProductController.removeCartItem);

// API Endpoints: User
router.post("/user-login/:email", UserController.login);
router.post("/user-login-verify/:email/:otp", UserController.loginVerify);
router.post("/logout", UserController.logout); // Todo

// API Endpoints: profile
router.post("/create-profile", authVerifyMiddleware, ProfileController.createProfile);
router.get("/view-profile", authVerifyMiddleware, ProfileController.ViewProfile);
router.put("/update-profile", authVerifyMiddleware, ProfileController.updateProfile);

// API Endpoints: Invoice
router.get("/invoice-create", authVerifyMiddleware, InvoiceController.invoiceCreate);
router.get("/invoice-list", authVerifyMiddleware, InvoiceController.invoiceList); // Todo
router.get("/invoice-product-list", authVerifyMiddleware, InvoiceController.invoiceProductList); // Todo

// API Endpoints: Payment status
router.post("/payment-success/:tran_id", InvoiceController.paymentSuccess);
router.post("/payment-fail/:tran_id", InvoiceController.paymentFail);
router.post("/payment-cancel/:tran_id", InvoiceController.paymentCancel);
router.post("/payment-ipn/:tran_id", InvoiceController.paymentIPN);

// Exports
module.exports = router;
