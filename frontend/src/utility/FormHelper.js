import toast from "react-hot-toast";
const EmailRegExr = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

class FormHelper {
  // Email Validation
  IsEmpty(value) {
    return value.length === 0;
  }
  IsEmail(value) {
    return !EmailRegExr.test(value);
  }

  // Success Toast
  SuccessToast(msg) {
    toast.success(msg, { position: "top-center" });
  }
  // Error Toast
  ErrorToast(msg) {
    toast.error(msg, { position: "top-center" });
  }

  // Base64 Encode and Decode
  getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }
}

export const { IsEmpty, IsEmail, ErrorToast, SuccessToast, getBase64 } = new FormHelper();
