import React, { useState } from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { login } from "../../imagepath";
import { Link } from "react-router-dom";
import FeatherIcon from "feather-icons-react";
import { Eye, EyeOff } from "react-feather/dist";
import axios from "axios";
import Cookies from "universal-cookie";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [token, setToken] = useState("");
  

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  /* Authintication */

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const response = await fetch("http://localhost:8080/authenticate", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ userName, password }),
  //     });

  //     if (response.ok) {
  //       const result = await response.text();
  //       // Assuming the backend returns "A", "T", or "S"
  //       if (result === "A") {
  //         localStorage.setItem('role', JSON.stringify('A'));
  //         // Redirect to admin dashboard
  //         window.location.href = "/admindashboard";
  //       } else if (result === "T") {
  //         localStorage.setItem('role', JSON.stringify('T'));
  //         // Redirect to teacher dashboard
  //         window.location.href = "/teacherdashboard";
  //       } else if (result === "S") {
  //         localStorage.setItem('role', JSON.stringify('S'));
  //         // Redirect to student dashboard
  //         window.location.href = "/studentdashboard";
  //       } else {
  //         // Handle other cases or show an error message
  //         console.error("Invalid response from server");
  //       }
  //     } else {
  //       // Handle errors from the server
  //       console.error("Server error:", response.statusText);
  //     }
  //   } catch (error) {
  //     console.error("Error during fetch:", error);
  //   }
  // };

  const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(userName)
      console.log(password)
      
        try {
          console.log('heheheheheh');
          const response = await axios.post('http://localhost:3000/login', { 'username':userName, 'password':password}, {withCredentials:true});
          const { id, role, token} = response.data;
          setToken(token)
          
          console.log(response)
          console.log("this is token:")
          console.log(token)

          const result = response.data["role"];
          if (result === "admin") {
            localStorage.setItem('role', JSON.stringify('A'));
            // Redirect to admin dashboard
            window.location.href = "/admindashboard";
          } else if (result === "teacher") {
            localStorage.setItem('role', JSON.stringify('T'));
            // Redirect to teacher dashboard
            window.location.href = "/teacherdashboard";
            window.locadmindashboard
          } else if (result === "student") {
            localStorage.setItem('role', JSON.stringify('S'));
            // Redirect to student dashboard
            window.location.href = "/studentdashboard";
          } else {
            // Handle other cases or show an error message
            console.error("Invalid response from server");
          }
        } 
        catch (error) {
            console.log(error);
      }
  }

  /* End Authintication */

  return (
    <>
      <div className="main-wrapper login-body">
        <div className="login-wrapper">
          <div className="container">
            <div className="loginbox">
              <div className="login-left">
                <img className="img-fluid" src={login} alt="Logo" />
              </div>
              <div className="login-right">
                <div className="login-right-wrap">
                  <h1 style={{marginBottom:'40px', textAlign: 'center'}}>Welcome to EduCare</h1>
                  {/* Form */}
                  {/* <form action="./admindashboard"> */}
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label>
                        Username <span className="login-danger">*</span>
                      </label>
                      <input className="form-control" type="text" value={userName}
                        onChange={(e) => setUserName(e.target.value)} />
                      <span className="profile-views">
                        <i className="fas fa-user-circle" />
                      </span>
                    </div>
                    <div className="form-group">
                      <label>
                        Password <span className="login-danger">*</span>
                      </label>

                      <input
                        type={passwordVisible ? "" : "password"}
                        className="form-control pass-input"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <span
                        className="toggle-password"
                        onClick={togglePasswordVisibility}
                      >
                        {passwordVisible ? (
                          <EyeOff className="react-feather-custom" />
                        ) : (
                          <Eye className="react-feather-custom" />
                        )}
                      </span>
                    </div>
                    <div className="forgotpass">
                      <div className="remember-me">
                        <label className="custom_check mr-2 mb-0 d-inline-flex remember-me">
                          {" "}
                          Remember me
                          <input type="checkbox" name="radio" />
                          <span className="checkmark" />
                        </label>
                      </div>
                      <Link to="/forgotpassword">Forgot Password</Link>
                    </div>
                    <div className="form-group">
                      <button
                        className="btn btn-primary btn-block"
                        type="submit"
                      >
                        Login
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
