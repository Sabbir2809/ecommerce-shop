import mongoose from "mongoose";

// Schema
const customerProfileSchema = new mongoose.Schema(
  {
    user_id: { type: mongoose.Schema.Types.ObjectId, required: true },

    cus_name: { type: String, required: true, trim: true },
    cus_add: { type: String, required: true, trim: true },
    cus_city: { type: String, required: true, trim: true },
    cus_state: { type: String, required: true, default: "Dhaka", trim: true },
    cus_postcode: { type: String, required: true, default: "1200", trim: true },
    cus_country: { type: String, required: true, default: "Bangladesh", trim: true },
    cus_phone: { type: String, required: true, trim: true },
    cus_fax: { type: String, required: true, trim: true },
    ship_name: { type: String, required: true, trim: true },
    ship_add: { type: String, required: true, trim: true },
    ship_city: { type: String, required: true, trim: true },
    ship_state: { type: String, required: true, default: "Dhaka", trim: true },
    ship_postcode: { type: String, required: true, default: "1200", trim: true },
    ship_country: { type: String, required: true, default: "Bangladesh", trim: true },
    ship_phone: { type: String, required: true, trim: true },
  },
  { timestamps: true, versionKey: false }
);

// model
const CustomerProfileModel = mongoose.model("customerProfiles", customerProfileSchema);
module.exports = CustomerProfileModel;
