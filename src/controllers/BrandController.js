exports.brandList = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "Brand List",
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
