import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { USER_LOGIN_API_REQUEST } from "../../services/API_REQUEST";
import { ErrorToast, IsEmpty, SuccessToast } from "../../utility/FormHelper";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();
    if (IsEmpty(email)) {
      ErrorToast("Email is Required");
    } else {
      const response = await USER_LOGIN_API_REQUEST(email);
      console.log(response);
      if (response.status === true) {
        SuccessToast(response.message);
        navigate(`/verify/${email}`);
      } else {
        ErrorToast(response.error);
      }
    }
  };

  return (
    <div className="section container">
      <div className="row d-flex justify-content-center">
        <div className="col-md-5">
          <div className="card bg-light">
            <div className="card-body">
              <form>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Email Address"
                  className="form-control my-4"
                />
                <button onClick={handleLogin} className="btn btn-success w-100">
                  Next
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
