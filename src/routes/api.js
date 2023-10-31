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
const FeatureController = require("../controllers/FeatureController");

// API Endpoints: brand, category
router.get("/brands", BrandController.brandList);
router.get("/categories", CategoryController.categoryList);

router.get("/features", FeatureController.featureList);

// API Endpoints: Products
router.get("/list-by-brand/:brand_id", ProductController.listByBrand);
router.get("/list-by-category/:category_id", ProductController.listByCategory);
router.get("/list-by-slider", ProductController.listBySlider);
router.get("/list-by-remark/:remark", ProductController.listByRemark);
// router.get("/list-by-smiler/:category_id", ProductController.listBySmiler);
router.get("/search-by-keyword/:keyword", ProductController.searchByKeyword);
router.get("/product-details/:product_id", ProductController.productDetailsById);
router.get("/product-review", ProductController.productReview); // Todo

// API Endpoints: User
router.get("/user-login/:email", UserController.login);
router.get("/user-login-verify/:email/:otp", UserController.loginVerify);
router.get("/logout", authVerifyMiddleware, UserController.logout);

// API Endpoints: profile
router.post("/create-profile", authVerifyMiddleware, ProfileController.createProfile);
router.get("/view-profile", authVerifyMiddleware, ProfileController.ViewProfile);
router.put("/update-profile", authVerifyMiddleware, ProfileController.updateProfile);

// API Endpoints: Wish
router.get("/wish-list", authVerifyMiddleware, ProductController.wishList);
router.post("/create-wish-item", authVerifyMiddleware, ProductController.createWishItem);
router.post("/remove-wish-item", authVerifyMiddleware, ProductController.removeWishItem);

// API Endpoints: Cart
router.get("/cart-list", authVerifyMiddleware, ProductController.cartList);
router.post("/create-cart-item", authVerifyMiddleware, ProductController.createCartItem);
router.post("/remove-cart-item", authVerifyMiddleware, ProductController.removeCartItem);

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
