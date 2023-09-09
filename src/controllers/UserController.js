const { userSendOTP, userVerify } = require("../services/UserService");

// :::::: user login ::::::
exports.login = async (req, res) => {
  const result = await userSendOTP(req);
  res.status(200).json(result);
};

// :::::: user login verify ::::::
exports.loginVerify = async (req, res) => {
  const result = await userVerify(req);
  res.status(200).json(result);
};

exports.logout = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "Logout Successful",
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
