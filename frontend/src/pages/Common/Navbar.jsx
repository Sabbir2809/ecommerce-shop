import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import { USER_LOGOUT_API_REQUEST } from "../../services/API_REQUEST";
import { ErrorToast, IsEmpty } from "../../utility/FormHelper";
import logo from "./../../assets/images/plainb-logo.svg";

const Navbar = () => {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");
  const [btnLoader, setBtnLoader] = useState(false);

  const handleSearch = () => {
    if (IsEmpty(keyword)) {
      ErrorToast("Product Keyword is Required!");
    } else {
      navigate(`/search-by-keyword/${keyword}`);
    }
  };

  const handleLogout = async () => {
    setBtnLoader(true);
    await USER_LOGOUT_API_REQUEST();
    setBtnLoader(false);
    sessionStorage.clear();
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <nav className="navbar shadow-sm sticky-top bg-white navbar-expand-lg navbar-light py-3">
      <div className="container">
        <Link to={"/"} className="navbar-brand">
          <img className="img-fluid" src={logo} alt="" width="96px" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#nav06"
          aria-controls="nav06"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="nav06">
          <ul className="navbar-nav mt-3 mt-lg-0 mb-3 mb-lg-0 ms-lg-3">
            <li className="nav-item me-4">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </li>
          </ul>
          <div className="d-lg-flex ms-auto" action="">
            <div className="input-group">
              <input
                onChange={(event) => setKeyword(event.target.value)}
                className="form-control"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button onClick={handleSearch} className="btn btn-outline-dark" type="submit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  style={{ width: 24, height: 24 }}>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
              <Link to="/cart">
                <button type="button" className="btn ms-3 btn-outline-success position-relative">
                  <i className="bi bi-bag"></i>
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                    02
                  </span>
                </button>
              </Link>
              <Link to="/wish">
                <button type="button" className="btn ms-3 btn-dark d-flex">
                  <i className="bi bi-heart"></i>
                </button>
              </Link>
              {localStorage.getItem("login") === "1" ? (
                <>
                  <Link to="/profile" type="button" className="btn ms-3 btn-success d-flex">
                    Account
                  </Link>
                  <Button
                    onClick={handleLogout}
                    isSubmit={btnLoader}
                    text="Logout"
                    className="btn ms-3 btn-danger d-flex"
                  />
                </>
              ) : (
                <Link to="/login" type="button" className="btn ms-3 btn-success d-flex">
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
