const { userSendOTP, userVerify } = require("../services/UserService");

// :::::: user login ::::::
exports.login = async (req, res) => {
  const result = await userSendOTP(req);
  res.status(200).json(result);
};

// :::::: user login verify ::::::
exports.loginVerify = async (req, res) => {
  const result = await userVerify(req);
  if (result.status) {
    const cookieOption = {
      expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
      httpOnly: false,
    };
    res.cookie("token", result.token, cookieOption); // for web cookie
    return res.status(200).json(result); // for other's application
  } else {
    res.status(200).json(result);
  }
};

exports.logout = async (req, res) => {
  try {
    const cookieOption = {
      expires: new Date(Date.now() - 24 * 60 * 60 * 1000),
      httpOnly: false,
    };
    res.cookie("token", "", cookieOption);

    res.status(200).json({
      success: true,
      message: "Logout Successful",
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
