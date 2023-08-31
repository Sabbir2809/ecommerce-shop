import mongoose from "mongoose";

// Schema
const paymentSettingSchema = new mongoose.Schema(
  {
    store_id: { type: String, required: true, trim: true },
    store_password: { type: String, required: true, trim: true },
    currency: { type: String, required: true, default: "BDT", trim: true },
    success_url: { type: String, required: true, trim: true },
    fail_url: { type: String, required: true, trim: true },
    cancel_url: { type: String, required: true, trim: true },
    ipn_url: { type: String, required: true, trim: true },
    init_url: { type: String, required: true, trim: true },
  },
  { timestamps: true, versionKey: false }
);

// model
const PaymentSettingModel = mongoose.model("paymentSettings", paymentSettingSchema);
module.exports = PaymentSettingModel;
