const jwt = require("jsonwebtoken");

// encoded
exports.EncodedToken = (email, user_id) => {
  return jwt.sign({ email, id: user_id }, process.env.JWT_SECRET_KEY, { expiresIn: "7d" });
};

// decoded
exports.DecodedToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET_KEY);
};
