const jwt = require("jsonwebtoken");

// encoded
exports.encodedToken = (email, user_id) => {
  return jwt.sign({ email, id: user_id }, process.env.JWT_SECRET_KEY, { expiresIn: "7d" });
};

// decoded
exports.decodedToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET_KEY);
};
