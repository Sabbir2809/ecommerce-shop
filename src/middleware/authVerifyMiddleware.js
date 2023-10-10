const { DecodedToken } = require("../utility/Token");

module.exports = (req, res, next) => {
  let token = req.headers["token"]; // token for others application
  if (!token) {
    token = req.cookies["token"]; // token for web
  }

  // decode token
  const decoded = DecodedToken(token);

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
};
