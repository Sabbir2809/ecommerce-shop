const { sendOTP, userVerify } = require("../services/UserService");

// user login
exports.login = async (req, res) => {
  try {
    const result = await sendOTP(req);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// user login verify
exports.loginVerify = async (req, res) => {
  try {
    const result = await userVerify(req);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
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
