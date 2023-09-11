const mongoose = require("mongoose");
const CartModel = require("../models/CartModel");
const ProductModel = require("../models/ProductModel");

// :::::: Crate Cart ::::::
exports.createCart = async (req) => {
  try {
    const user_id = req.headers.id;
    let reqBody = req.body;
    let product_id = reqBody.product_id;

    // price calculation
    const product = await ProductModel.findOne({ _id: product_id });
    let price = product.price;
    if (product.discount) {
      price = product.discount_price;
    }
    const totalPrice = price * reqBody.qty;

    reqBody.user_id = user_id;
    reqBody.price = totalPrice;

    await CartModel.updateOne(
      { user_id, product_id: reqBody.product_id },
      { $set: reqBody },
      { upsert: true }
    );
    return { status: true, message: "Create Cart List" };
  } catch (error) {
    return { status: false, error: error.message };
  }
};

// :::::: Remove Cart ::::::
exports.removeCart = async (req) => {
  try {
    const user_id = req.headers.id;
    let reqBody = req.body;
    reqBody.user_id = user_id;

    await CartModel.deleteOne({ user_id, product_id: reqBody.product_id });
    return { status: true, message: "Remove Cart List" };
  } catch (error) {
    return { status: false, error: error.message };
  }
};

// :::::: Cart ::::::
exports.Cart = async (req) => {
  try {
    const user_id = new mongoose.Types.ObjectId(req.headers.id);

    // matching stage
    const matchStage = { $match: { user_id } };

    // product join stage
    const joinStageProduct = {
      $lookup: { from: "products", localField: "product_id", foreignField: "_id", as: "product" },
    };

    // product unwind stage
    const unwindProductStage = { $unwind: "$product" };

    // brand join stage
    const joinStageBrand = {
      $lookup: { from: "brands", localField: "product.brand_id", foreignField: "_id", as: "brand" },
    };

    // brand unwind stage
    const unwindBrandStage = { $unwind: "$brand" };

    // product join stage
    const joinStageCategory = {
      $lookup: { from: "categories", localField: "product.category_id", foreignField: "_id", as: "category" },
    };

    // category unwind stage
    const unwindCategoryStage = { $unwind: "$category" };

    // projection
    const project = {
      $project: {
        product_id: 0,
        user_id: 0,
        createdAt: 0,
        updatedAt: 0,
        "product._id": 0,
        "product.brand_id": 0,
        "product.category_id": 0,
        "product.remark": 0,
        "product.discount": 0,
        "brand._id": 0,
        "category._id": 0,
      },
    };

    const data = await CartModel.aggregate([
      matchStage,
      joinStageProduct,
      unwindProductStage,
      joinStageBrand,
      unwindBrandStage,
      joinStageCategory,
      unwindCategoryStage,
      project,
    ]);
    return { status: true, message: "Cart", data: data };
  } catch (error) {
    return { status: false, error: error.message };
  }
};
