import mongoose from "mongoose";

// Schema
const invoiceProductSchema = new mongoose.Schema(
  {
    user_id: { type: mongoose.Schema.Types.ObjectId, required: true },
    invoice_id: { type: mongoose.Schema.Types.ObjectId, required: true },
    product_id: { type: mongoose.Schema.Types.ObjectId, required: true },

    qty: { type: String, required: true, trim: true },
    size: { type: String, required: true, trim: true },
    color: { type: String, required: true, trim: true },
    price: { type: String, required: true, trim: true },
  },
  { timestamps: true, versionKey: false }
);

// model
const InvoiceProductModel = mongoose.model("invoiceProducts", invoiceProductSchema);
module.exports = InvoiceProductModel;
