import { useState } from "react";
import ReactCodeInput from "react-code-input";
import { useParams } from "react-router-dom";
import Button from "../../components/Button";
import { USER_LOGIN_VERIFY_API_REQUEST } from "../../services/API_REQUEST";
import { ErrorToast, IsEmpty, SuccessToast } from "../../utility/FormHelper";

const LoginVerifyPage = () => {
  const { email } = useParams();
  const [OTP, setOTP] = useState("");
  const [btnLoader, setBtnLoader] = useState(false);

  const handleLoginVerify = async (event) => {
    event.preventDefault();

    if (IsEmpty(OTP)) {
      ErrorToast("Verification OTP is Required");
    } else {
      setBtnLoader(true);
      const response = await USER_LOGIN_VERIFY_API_REQUEST(email, OTP);
      setBtnLoader(false);
      if (response.status === true) {
        SuccessToast(response.message);
        localStorage.setItem("login", "1");
        if (sessionStorage.getItem("last-location") !== null) {
          window.location.href = sessionStorage.getItem("last-location");
        } else {
          window.location.href = "/";
        }
      } else {
        ErrorToast(response.error);
      }
    }
  };

  let defaultInputStyle = {
    fontFamily: "monospace",
    MozAppearance: "textfield",
    margin: "4px",
    paddingLeft: "8px",
    width: "45px",
    borderRadius: "3px",
    height: "45px",
    fontSize: "32px",
    border: "1px solid lightskyblue",
    boxSizing: "border-box",
    color: "green",
    backgroundColor: "white",
    borderColor: "lightgrey",
  };

  return (
    <div className="section container">
      <div className="row d-flex justify-content-center">
        <div className="col-md-5">
          <div className="card bg-light mt-4">
            <div className="card-body text-center">
              <ReactCodeInput onChange={(value) => setOTP(value)} inputStyle={defaultInputStyle} fields={6} />
              <br />
              <Button
                onClick={handleLoginVerify}
                isSubmit={btnLoader}
                text="Verify"
                className="btn btn-success w-100"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginVerifyPage;
