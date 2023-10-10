import { useState } from "react";
import ReactCodeInput from "react-code-input";
import { useParams } from "react-router-dom";
import { USER_LOGIN_VERIFY_API_REQUEST } from "../../services/API_REQUEST";
import { ErrorToast, IsEmpty, SuccessToast } from "../../utility/FormHelper";

const LoginVerifyPage = () => {
  const { email } = useParams();
  const [OTP, setOTP] = useState("");

  const handleLoginVerify = async (event) => {
    event.preventDefault();

    if (IsEmpty(email)) {
      ErrorToast("Email is Required");
    } else {
      const response = await USER_LOGIN_VERIFY_API_REQUEST(email, OTP);
      console.log(response);
      if (response.status === true) {
        SuccessToast(response.message);
        window.location.href = sessionStorage.getItem("last-location");
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
              <button onClick={handleLoginVerify} className="btn btn-success my-2 w-100">
                Verify
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginVerifyPage;
