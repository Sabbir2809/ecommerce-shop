exports.login = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "Login Successful",
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.loginVerify = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "Login Verify",
    });
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
