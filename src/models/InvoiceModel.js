const mongoose = require("mongoose");

// Schema
const invoiceSchema = new mongoose.Schema(
  {
    user_id: { type: mongoose.Schema.Types.ObjectId, required: true },

    // total: { type: String, required: true, trim: true },
    // vat: { type: String, required: true, trim: true },
    payable: { type: String, required: true, trim: true },
    cus_details: { type: String, required: true, trim: true },
    ship_details: { type: String, required: true, trim: true },
    validation_id: { type: String, required: true, default: "0", trim: true },
    tran_id: { type: String, required: true, trim: true },
    delivery_status: { type: String, required: true, trim: true },
    payment_status: { type: String, required: true, trim: true },
  },
  { timestamps: true, versionKey: false }
);

// model
const InvoiceModel = mongoose.model("invoices", invoiceSchema);

module.exports = InvoiceModel;
