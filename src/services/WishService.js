const mongoose = require("mongoose");
const WishModel = require("../models/WishModel");

// :::::: Crate Wish ::::::
exports.createWish = async (req) => {
  try {
    const user_id = req.headers.id;
    let reqBody = req.body;
    reqBody.user_id = user_id;

    await WishModel.updateOne(
      { user_id, product_id: reqBody.product_id },
      { $set: reqBody },
      { upsert: true }
    );
    return { status: true, message: "Create Wish List" };
  } catch (error) {
    return { status: false, error: error.message };
  }
};

// :::::: Remove Wish ::::::
exports.removeWish = async (req) => {
  try {
    const user_id = req.headers.id;
    let reqBody = req.body;
    reqBody.user_id = user_id;

    const data = await WishModel.deleteOne({ user_id, product_id: reqBody.product_id });
    return { status: true, message: "Remove Wish List" };
  } catch (error) {
    return { status: false, error: error.message };
  }
};

// :::::: Wish ::::::
exports.wish = async (req) => {
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
        user_id: 0,
        createdAt: 0,
        updatedAt: 0,
        "product._id": 0,
        "product.brand_id": 0,
        "product.category_id": 0,
        "brand._id": 0,
        "category._id": 0,
      },
    };

    const data = await WishModel.aggregate([
      matchStage,
      joinStageProduct,
      unwindProductStage,
      joinStageBrand,
      unwindBrandStage,
      joinStageCategory,
      unwindCategoryStage,
      project,
    ]);
    return { status: true, message: "Wish", data: data };
  } catch (error) {
    return { status: false, error: error.message };
  }
};
