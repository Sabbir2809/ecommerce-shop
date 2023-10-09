const { DecodedToken } = require("../utility/Token");

module.exports = async (req, res, next) => {
  try {
    let token = req.headers["token"]; // token for others application
    if (!token) {
      token = req.cookies["token"]; // token for web
    }

    // decode token
    const decoded = await DecodedToken(token, process.env.JWT_SECRET_KEY);

    if (decoded === null) {
      return res.status(401).json({ success: false, message: "Token missing, Unauthorized" });
    } else {
      // decoded info
      const email = decoded["email"];
      const id = decoded["id"];

      // decoded info set request headers
      req.headers.email = email;
      req.headers.id = id;
      next();
    }
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
