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
  res.status(200).json(result);
};

// :::::: Payment Cancel ::::::
exports.paymentCancel = async (req, res) => {
  const result = await paymentCancelService(req);
  res.status(200).json(result);
};

// :::::: Payment Fail ::::::
exports.paymentFail = async (req, res) => {
  const result = await paymentFailService(req);
  res.status(200).json(result);
};

// :::::: Payment IPN ::::::
exports.paymentIPN = async (req, res) => {
  const result = await paymentIPNService(req);
  res.status(200).json(result);
};
