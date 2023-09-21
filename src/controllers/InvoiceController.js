const { calculateInvoice } = require("../services/InvoiceService");

// :::::: Invoice Create ::::::
exports.invoiceCreate = async (req, res) => {
  const result = await calculateInvoice(req);
  res.status(200).json(result);
};

exports.invoiceList = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "Invoice List",
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.invoiceProductList = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "Invoice Product List",
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.paymentSuccess = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "Payment Success",
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.paymentFail = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "Payment Fail",
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.paymentCancel = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "Payment Cancel",
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
exports.paymentIPN = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "Payment IPN",
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
