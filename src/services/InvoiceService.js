const { mongoose } = require("mongoose");
const CartModel = require("../models/CartModel");
const CustomerProfileModel = require("../models/CustomerProfileModel");

// :::::: Crate Cart ::::::
exports.calculateInvoice = async (req) => {
  try {
    // invoice calculation
    const user_id = new mongoose.Types.ObjectId(req.headers.id);
    const data = await CartModel.aggregate([
      { $match: { user_id } },
      { $group: { _id: 0, total: { $sum: { $toDecimal: "$price" } } } },
    ]);

    // pending payment invoice create
    const payable = data[0].total;
    const tran_id = Math.floor(100000000 + Math.random() * 900000000);
    const val_id = 0;
    const delivery_status = "pending";
    const payment_status = "pending";

    const profile = await CustomerProfileModel.aggregate([{ $match: { user_id } }]);

    // customer shipping details
    const cus_details = `
      Name: ${profile[0].cus_name},
      Email: ${profile[0].cus_email},
      Address: ${profile[0].cus_add},
       Phone: ${profile[0].cus_phone}
    `;
    const ship_details = `
      Name: ${profile[0].ship_name},
      Email: ${profile[0].ship_city},
      Address: ${profile[0].ship_add},
       Phone: ${profile[0].ship_phone}
    `;

    // invoice product list

    // SSL commerze payment gateway call - get payment URL

    return { status: true, message: "Create Invoice", data: data };
  } catch (error) {
    return { status: false, error: error.message };
  }
};
