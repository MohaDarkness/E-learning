import React from "react";
import { login } from "../../imagepath";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const ForgotPassword = () => {
  const history = useHistory();
  const URL = "http://localhost:3000/forgotPassword";
  const [email, setEmail] = useState(null);

  const handleResetPassword = (e) => {
    e.preventDefault();
    e.currentTarget.disabled = true;

    const data = {
      email,
    };

    try {
      console.log(data);
      axios.post(URL, data, {
        withCredentials: true,
      });
    } catch (err) {
      console.log(err);
      if (err.response.status === 401 || err.response.status === 403)
        history.push("/error404");
      console.log("err");
    }
  };
  return (
    <>
      {/* Main Wrapper */}
      <div className="main-wrapper login-body">
        <div className="login-wrapper">
          <div className="container">
            <div className="loginbox">
              <div className="login-left">
                <img className="img-fluid" src={login} alt="Logo" />
              </div>
              <div className="login-right">
                <div className="login-right-wrap">
                  <h1>Reset Password</h1>
                  <p className="account-subtitle">Let Us Help You</p>
                  {/* Form */}
                  <form onSubmit={handleResetPassword}>
                    <div className="form-group">
                      <label>
                        Enter your registered email address{" "}
                        <span className="login-danger">*</span>
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        required
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      />
                      <span className="profile-views">
                        <i className="fas fa-envelope" />
                      </span>
                    </div>
                    <div className="form-group">
                      <button
                        className="btn btn-primary btn-block"
                        type="submit"
                      >
                        Reset My Password
                      </button>
                    </div>
                    <div className="form-group mb-0">
                      <button
                        className="btn btn-primary primary-reset btn-block"
                        onClick={(e) => {
                          history.push("/login");
                        }}
                      >
                        Back to Login
                      </button>
                    </div>
                  </form>
                  {/* /Form */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
