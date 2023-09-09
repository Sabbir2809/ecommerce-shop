const CustomerProfileModel = require("../models/CustomerProfileModel");
const UserModel = require("../models/UserModel");
const { sendEmailWithNodeMailer } = require("../utility/SendEmail");
const { encodedToken } = require("../utility/Token");

// :::::: Send OTP ::::::
exports.userSendOTP = async (req) => {
  try {
    const email = req.params.email;
    // generate 6 digits OTP Code
    const OTPCode = Math.floor(100000 + Math.random() * 900000);
    // email format & send email with nodemailer
    const emailData = {
      email,
      subject: "E-commerce App",
      html: `
      <p>Hi, ${email}</p>
      <P>You can enter this OTP code to log into E-commerce App</P>
      <h1>${OTPCode}</h1>
    `,
    };
    await sendEmailWithNodeMailer(emailData);
    await UserModel.updateOne({ email }, { $set: { otp: OTPCode } }, { upsert: true });
    return { status: true, message: `Please go to your ${email} .System Send 6 Digits OTP Code` };
  } catch (error) {
    return { status: false, error: error.message };
  }
};

// :::::: User Verify ::::::
exports.userVerify = async (req) => {
  try {
    const email = req.params.email;
    const otp = req.params.otp;

    if (otp === "0") {
      return { status: false, message: "Something Went Wrong!" };
    } else {
      const total = await UserModel.find({ email, otp }).count("total");
      if (total === 1) {
        const user_id = await UserModel.find({ email, otp }).select("_id");
        // encoded jwt token
        const token = encodedToken(email, user_id[0]["_id"].toString());
        // update OTP
        await UserModel.updateOne({ email }, { $set: { otp: "0" } }, { upsert: true });
        return { status: true, message: "Valid OTP", token: token };
      } else {
        return { status: false, message: "Invalid OTP" };
      }
    }
  } catch (error) {
    return { status: false, error: error.message };
  }
};

// :::::: User Profile Save ::::::
exports.userProfileSave = async (req) => {
  try {
    const userId = req.headers.id;
    let reqBody = req.body;
    reqBody.user_id = userId;

    await CustomerProfileModel.updateOne({ user_id: userId }, { $set: reqBody }, { upsert: true });
    return { status: true, message: "Profile Save Changed" };
  } catch (error) {
    return { status: false, error: error.message };
  }
};

// :::::: User Profile Details ::::::
exports.userProfileDetails = async (req) => {
  try {
    const user_id = req.headers.id;
    const data = await CustomerProfileModel.find({ user_id });
    return { status: true, message: "Profile Details", data: data };
  } catch (error) {
    return { status: false, error: error.message };
  }
};
