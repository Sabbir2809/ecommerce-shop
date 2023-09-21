const { mongoose } = require("mongoose");
var FormData = require("form-data");
const CartModel = require("../models/CartModel");
const CustomerProfileModel = require("../models/CustomerProfileModel");
const InvoiceModel = require("../models/InvoiceModel");
const PaymentSettingModel = require("../models/PaymentSettingModel");
const axios = require("axios");

// :::::: calculate invoice ::::::
exports.calculateInvoice = async (req) => {
  try {
    const user_id = new mongoose.Types.ObjectId(req.headers.id);
    const email = req.headers.email;

    // invoice calculation
    const data = await CartModel.aggregate([
      { $match: { user_id } },
      { $group: { _id: 0, total: { $sum: { $toDecimal: "$price" } } } },
    ]);

    // create pending payment invoice
    const payable = data[0].total;
    const tran_id = Math.floor(100000000 + Math.random() * 900000000);
    const validation_id = 0;
    const payment_status = "pending";
    const delivery_status = "pending";

    // customer profile
    const profile = await CustomerProfileModel.aggregate([{ $match: { user_id } }]);

    // customer shipping details
    const cus_details = `
      Name: ${profile[0].cus_name},
      Email: ${email},
      City: ${profile[0].cus_city},
      Address: ${profile[0].cus_add},
      Phone: ${profile[0].cus_phone}
    `;
    const ship_details = `
      Name: ${profile[0].ship_name},
      Email: ${email},
      City: ${profile[0].ship_city},
      Address: ${profile[0].ship_add},
      Phone: ${profile[0].ship_phone}
    `;

    // pending payment invoice create
    await InvoiceModel.create({
      user_id,
      payable,
      cus_details,
      ship_details,
      validation_id,
      tran_id,
      payment_status,
      delivery_status,
    });

    // invoice product list
    const paymentSetting = await PaymentSettingModel.find();
    const invoice = await InvoiceModel.findOne();

    // SSLcommerze payment gateway call - get payment URL
    var form = new FormData();
    form.append("store_id", paymentSetting[0].store_id);
    form.append("store_passwd", paymentSetting[0].store_password);
    form.append("total_amount", invoice.payable);
    form.append("currency", paymentSetting[0].currency);
    form.append("tran_id", tran_id);

    form.append("success_url", paymentSetting[0].success_url);
    form.append("fail_url", paymentSetting[0].fail_url);
    form.append("cancel_url", paymentSetting[0].cancel_url);
    form.append("ipn_url", paymentSetting[0].ipn_url);

    form.append("product_name", "DEMO");
    form.append("product_category", "DEMO");
    form.append("product_profile", "DEMO");
    form.append("product_amount", "DEMO");

    form.append("cus_name", profile[0].cus_name);
    form.append("cus_email", email);
    form.append("cus_add1", profile[0].cus_add);
    form.append("cus_add2", profile[0].cus_add);
    form.append("cus_city", profile[0].cus_city);
    form.append("cus_state", profile[0].cus_state);
    form.append("cus_postcode", profile[0].cus_postcode);
    form.append("cus_country", profile[0].cus_country);
    form.append("cus_phone", profile[0].cus_phone);
    form.append("cus_fax", profile[0].cus_phone);

    form.append("shipping_method", "Courier");
    form.append("ship_name", profile[0].ship_name);
    form.append("ship_add1", profile[0].ship_add);
    form.append("ship_add2", profile[0].ship_add);
    form.append("ship_city", profile[0].ship_city);
    form.append("ship_state", profile[0].ship_state);
    form.append("ship_postcode", profile[0].ship_postcode);
    form.append("ship_country", profile[0].ship_country);

    const SSL = await axios.post("https://sandbox.sslcommerz.com/gwprocess/v4/api.php", form);

    return { status: true, data: SSL.data };
  } catch (error) {
    return { status: false, error: error.message };
  }
};
