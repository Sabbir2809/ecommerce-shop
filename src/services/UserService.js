const UserModel = require("../models/UserModel");
const { sendEmailWithNodeMailer } = require("../utility/SendEmailUtility");
const { encodedToken } = require("../utility/Token");

// send OTP
exports.sendOTP = async (req) => {
  const email = req.params.email;
  // generate 6 digits OTP Code
  const OTPCode = Math.floor(100000 + Math.random() * 900000);
  // prepare email format
  const emailData = {
    email,
    subject: "E-commerce App",
    html: `
      <p>Hi, ${email}</p>
      <P>You can enter this OTP code to log into E-commerce App</P>
      <h1>${OTPCode}</h1>
    `,
  };
  // send email with nodemailer
  await sendEmailWithNodeMailer(emailData);
  // Database
  await UserModel.updateOne({ email }, { $set: { otp: OTPCode } }, { upsert: true });

  return { status: true, message: `Please go to your ${email} .System Send 6 Digits OTP Code` };
};

// user Verify
exports.userVerify = async (req) => {
  const email = req.params.email;
  const otp = req.params.otp;

  if (otp === "0") {
    return { status: false, message: "Something Went Wrong!" };
  } else {
    const total = await UserModel.find({ email, otp }).count("total");
    if (total === 1) {
      const user_id = await UserModel.find({ email, otp }).select("_id");
      const token = encodedToken(email, user_id[0]["_id"].toString());
      await UserModel.updateOne({ email }, { $set: { otp: "0" } }, { upsert: true });
      return { status: true, message: "Valid OTP", token: token };
    } else {
      return { status: false, message: "Invalid OTP" };
    }
  }
};
