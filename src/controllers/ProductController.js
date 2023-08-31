exports.listByBrand = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "Brand List",
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.listByCategory = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "Category List",
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.listBySlider = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "List By Slider",
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.listByRemark = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "List By Remark Product",
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.listBySmiler = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "List By Smiler Product",
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.listByKeyword = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "List By Keyword",
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.productDetailsById = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "Product Details By Id",
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.productReview = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "Product Review",
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.wishList = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "Wish List",
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.createWishItem = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "Create Wish Item",
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.removeWishItem = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "Remove Wish Item",
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.cartList = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "Cart List",
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.createCartItem = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "Create Cart Item",
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.removeCartItem = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "Remove Cart Item",
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
