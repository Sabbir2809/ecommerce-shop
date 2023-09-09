const { userProfileSave, userProfileDetails } = require("../services/UserService");

exports.createProfile = async (req, res) => {
  const result = await userProfileSave(req);
  res.status(200).json(result);
};

exports.ViewProfile = async (req, res) => {
  const result = await userProfileDetails(req);
  res.status(200).json(result);
};

exports.updateProfile = async (req, res) => {
  const result = await userProfileSave(req);
  res.status(200).json(result);
};
