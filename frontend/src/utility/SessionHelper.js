class SessionHelper {
  // Token
  setToken(token) {
    localStorage.setItem("token", token);
  }
  getToken() {
    return localStorage.getItem("token");
  }

  // Email
  setEmail(email) {
    localStorage.setItem("email", email);
  }
  getEmail() {
    return localStorage.getItem("email");
  }

  // OTP
  setOTP(OTP) {
    localStorage.setItem("otp", OTP);
  }
  getOTP() {
    return localStorage.getItem("otp");
  }

  // User Details
  setUserDetails(userDetails) {
    localStorage.setItem("userDetails", JSON.stringify(userDetails));
  }
  getUserDetails() {
    return JSON.parse(localStorage.getItem("userDetails"));
  }

  // Guest Cart
  setGuestCart(productId) {
    localStorage.setItem("guestCartItem", productId);
  }
  getGuestCart() {
    return localStorage.getItem("guestCartItem");
  }

  // Price Convert
  convertPriceStringToNumber(getStringPrice) {
    const stringPrice = getStringPrice.cartList.price;
    const price = parseInt(stringPrice);
    return price;
  }

  // Remove Session
  removeSession() {
    localStorage.clear();
    window.location.href = "login";
  }
}

export const {
  setToken,
  getToken,
  setEmail,
  getEmail,
  setOTP,
  getOTP,
  setUserDetails,
  getUserDetails,
  setGuestCart,
  getGuestCart,
  convertPriceStringToNumber,
  removeSession,
} = new SessionHelper();
