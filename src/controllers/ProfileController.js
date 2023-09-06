exports.createProfile = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "Create Profile",
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.ViewProfile = async (req, res) => {
  try {
    const email = req.headers["id"];
    res.status(200).json({
      success: true,
      message: "View Profile",
      data: email,
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.updateProfile = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "update Profile",
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
