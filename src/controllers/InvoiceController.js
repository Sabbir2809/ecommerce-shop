const {
  calculateInvoice,
  paymentSuccessService,
  paymentFailService,
  paymentCancelService,
  paymentIPNService,
} = require("../services/InvoiceService");

// :::::: Invoice Create ::::::
exports.invoiceCreate = async (req, res) => {
  const result = await calculateInvoice(req);
  res.status(200).json(result);
};

exports.invoiceList = async (req, res) => {
  const result = await req;
  res.status(200).json(result);
};

exports.invoiceProductList = async (req, res) => {
  const result = await req;
  res.status(200).json(result);
};

// :::::: Payment Success ::::::
exports.paymentSuccess = async (req, res) => {
  const result = await paymentSuccessService(req);
  return res.redirect("http://localhost:5173/payment-success");
};

// :::::: Payment Cancel ::::::
exports.paymentCancel = async (req, res) => {
  const result = await paymentCancelService(req);
  return res.redirect("http://localhost:5173/payment-fail");
};

// :::::: Payment Fail ::::::
exports.paymentFail = async (req, res) => {
  const result = await paymentFailService(req);
  return res.redirect("http://localhost:5173/payment-fail");
};

// :::::: Payment IPN ::::::
exports.paymentIPN = async (req, res) => {
  const result = await paymentIPNService(req);
  res.status(200).json(result);
};
