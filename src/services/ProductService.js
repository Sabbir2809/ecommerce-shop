const mongoose = require("mongoose");
const BrandModel = require("../models/BrandModel");
const CategoryModel = require("../models/CategoryModel");
const ProductModel = require("../models/ProductModel");

// join stage 1
const joinStage1 = {
  $lookup: { from: "brands", localField: "brand_id", foreignField: "_id", as: "brand" },
};
// join stage 2
const joinStage2 = {
  $lookup: { from: "categories", localField: "category_id", foreignField: "_id", as: "category" },
};

// unwind stage
const unwindBrandStage = { $unwind: "$brand" };
const unwindCategoryStage = { $unwind: "$category" };

// projection
const projectionStage = {
  $project: { "category._id": 0, "brand._id": 0 },
};

// :::::: All Brands ::::::
exports.allBrands = async () => {
  try {
    const data = await BrandModel.find({});
    return { status: true, message: "All Brands", data: data };
  } catch (error) {
    return { status: false, error: error.message };
  }
};

// :::::: All Categories ::::::
exports.allCategories = async () => {
  try {
    const data = await CategoryModel.find({});
    return { status: true, message: "All Category", data: data };
  } catch (error) {
    return { status: false, error: error.message };
  }
};

// :::::: Product By Band ::::::
exports.productByBrand = async (req) => {
  try {
    const brand_id = new mongoose.Types.ObjectId(req.params.brand_id);

    // matching stage
    const matchingStage = { $match: { brand_id } };

    // aggregation
    const data = await ProductModel.aggregate([
      matchingStage,
      joinStage1,
      joinStage2,
      unwindBrandStage,
      unwindCategoryStage,
      projectionStage,
    ]);

    return { status: true, message: "Product By Brand", data: data };
  } catch (error) {
    return { status: false, error: error.message };
  }
};

// :::::: Product By Category ::::::
exports.productByCategory = async (req) => {
  try {
    const category_id = new mongoose.Types.ObjectId(req.params.category_id);

    // matching stage
    const matchingStage = { $match: { category_id: category_id } };

    // aggregation
    const data = await ProductModel.aggregate([
      matchingStage,
      joinStage1,
      joinStage2,
      unwindBrandStage,
      unwindCategoryStage,
      projectionStage,
    ]);

    return { status: true, message: "Product By Category", data: data };
  } catch (error) {
    return { status: false, error: error.message };
  }
};

// :::::: Product By Category ::::::
exports.productBySlider = async (req) => {
  try {
    // matching stage
    const matchingStage = { $match: {} };
    const limit = { $limit: 5 };

    // aggregation
    const data = await ProductModel.aggregate([matchingStage, limit]);
    return { status: true, message: "Product By Slider", data: data };
  } catch (error) {
    return { status: false, error: error.message };
  }
};

// :::::: Product By Remark ::::::
exports.productByRemark = async (req) => {
  try {
    const remark = req.params.remark;

    // matching stage
    const matchingStage = { $match: { remark } };

    // aggregation
    const data = await ProductModel.aggregate([
      matchingStage,
      joinStage1,
      joinStage2,
      unwindBrandStage,
      unwindCategoryStage,
      projectionStage,
    ]);

    return { status: true, message: "Remark Product", data: data };
  } catch (error) {
    return { status: false, error: error.message };
  }
};

// :::::: Product By Smiler ::::::
// exports.productBySmiler = async (req) => {
//   try {
//     const category_id = new mongoose.Types.ObjectId(req.params.category_id);

//     // matching stage
//     const matchingStage = { $match: { category_id: category_id } };

//     // limit
//     const limit = { $limit: 10 };

//     // aggregation
//     const data = await ProductModel.aggregate([
//       matchingStage,
//       limit,
//       joinStage1,
//       joinStage2,
//       unwindBrandStage,
//       unwindCategoryStage,
//       projectionStage,
//     ]);

//     return { status: true, message: "Smiler Product", data: data };
//   } catch (error) {
//     return { status: false, error: error.message };
//   }
// };

// :::::: Product By keyword ::::::
exports.productByKeyword = async (req) => {
  try {
    const searchRegex = { $regex: req.params.keyword, $options: "i" };
    const searchParam = [{ title: searchRegex }, { short_des: searchRegex }];
    const searchQuery = { $or: searchParam };

    // matching stage
    const matchingStage = { $match: searchQuery };

    // aggregation
    const data = await ProductModel.aggregate([
      matchingStage,
      joinStage1,
      joinStage2,
      unwindBrandStage,
      unwindCategoryStage,
      projectionStage,
    ]);

    return { status: true, message: "Remark Product", data: data };
  } catch (error) {
    return { status: false, error: error.message };
  }
};

// :::::: Product By keyword ::::::
exports.detailsById = async (req) => {
  try {
    const product_id = new mongoose.Types.ObjectId(req.params.product_id);
    // matching stage
    const matchingStage = { $match: { _id: product_id } };
    // join 3
    const joinState3 = {
      $lookup: {
        from: "productDetails",
        localField: "_id",
        foreignField: "product_id",
        as: "details",
      },
    };

    // unwindDetailsStage
    const unwindDetailsStage = { $unwind: "$details" };

    // projection
    const projection = {
      $project: {
        "details._id": 0,
        "details.product_id": 0,
        "category._id": 0,
        "brand._id": 0,
      },
    };

    // aggregation
    const data = await ProductModel.aggregate([
      matchingStage,
      joinStage1,
      joinStage2,
      joinState3,
      unwindBrandStage,
      unwindCategoryStage,
      unwindDetailsStage,
      projection,
    ]);

    return { status: true, message: "Product Details", data: data };
  } catch (error) {
    return { status: false, error: error.message };
  }
};
