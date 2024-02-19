import React from "react";
import SideBar from "../../SideBar/SideBar";
import Header from "../../Header/Header";
import { Link } from "react-router-dom";
import { avatar02 } from "../../imagepath";
import Cookies from "js-cookie";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect, useState } from "react";
import axios from "axios";
import Password from "antd/es/input/Password";
// import FeatherIcon from 'feather-icons-react/build/FeatherIcon'

const Profile = () => {
  const URL = "http://localhost:3000/myprofile";
  const history = useHistory();
  const [userData, setUserData] = useState(null);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(URL, {
          withCredentials: true,
        });
        setUserData(res.data);
        console.log(res.data);
        console.log(userData);
      } catch (err) {
        console.log(err);
        if (err.response.status === 401 || err.response.status === 403)
          history.push("/error404");
      }
    }
    fetchData()
      .then(() => {})
      .catch((err) => {
        console.log("an error occurred " + err);
      });
  }, []);

  const URL_NewPassword = "http://localhost:3000/resetPassword";

  const handleSubmitNewPassword = (e) => {
    // e.preventDefault();
    e.currentTarget.disabled = true;

    if (newPassword !== confirmPassword) {
      console.log("passwords are not match");
      return;
    }
    const data = {
      oldPassword,
      newPassword,
    };

    try {
      console.log("done");
      axios.post(URL_NewPassword, data, {
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
      <div className="main-wrapper">
        {/* Header */}
        <Header />

        {/* Sidebar */}
        <SideBar />

        {/* Page Wrapper */}

        <div className="page-wrapper">
          <div className="content container-fluid">
            {/* Page Header */}
            <div className="page-header">
              <div className="row">
                <div className="col">
                  <h3 className="page-title">Profile</h3>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/admindashboard">Dashboard</Link>
                    </li>
                    <li className="breadcrumb-item active">Profile</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* /Page Header */}
            <div className="row">
              <div className="col-md-12">
                <div className="profile-header">
                  <div className="row align-items-center">
                    <div className="col-auto profile-image">
                      <Link to="#">
                        <img
                          className="rounded-circle"
                          alt="User Image"
                          src={avatar02}
                        />
                      </Link>
                    </div>
                    <div className="col ms-md-n2 profile-user-info">
                      <h4 className="user-name mb-0">{userData?.name}</h4>
                      <h6 className="text-muted">
                        {(userData?.department && " - ") + userData?.major}
                      </h6>
                      <div className="about-text">{userData?.aboutme}</div>
                    </div>
                    <div className="col-auto profile-btn">
                      <Link to="#" className="btn btn-primary">
                        Edit
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="profile-menu">
                  <ul className="nav nav-tabs nav-tabs-solid">
                    <li className="nav-item">
                      <Link
                        className="nav-link active"
                        data-bs-toggle="tab"
                        to="#per_details_tab"
                      >
                        About
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        data-bs-toggle="tab"
                        to="#password_tab"
                      >
                        Password
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="tab-content profile-tab-cont">
                  {/* Personal Details Tab */}
                  <div
                    className="tab-pane fade show active"
                    id="per_details_tab"
                  >
                    {/* Personal Details */}
                    <div className="row">
                      <div className="col-lg-9">
                        <div className="card">
                          <div className="card-body">
                            <h5 className="card-title d-flex justify-content-between">
                              <span>Personal Details</span>
                              <Link
                                className="edit-link"
                                // data-bs-toggle="modal"
                                to="#"
                              >
                                <i className="far fa-edit me-1" />
                                Edit
                              </Link>
                            </h5>
                            <div className="row">
                              <p className="col-sm-3 text-muted text-sm-end mb-0 mb-sm-3">
                                Name
                              </p>
                              <p className="col-sm-9">{userData?.name}</p>
                            </div>
                            <div className="row">
                              <p className="col-sm-3 text-muted text-sm-end mb-0 mb-sm-3">
                                Date of Birth
                              </p>
                              <p className="col-sm-9">{userData?.dob}</p>
                            </div>
                            <div className="row">
                              <p className="col-sm-3 text-muted text-sm-end mb-0 mb-sm-3">
                                Email ID
                              </p>
                              <p className="col-sm-9">{userData?.email}</p>
                            </div>
                            <div className="row">
                              <p className="col-sm-3 text-muted text-sm-end mb-0 mb-sm-3">
                                Mobile
                              </p>
                              <p className="col-sm-9">
                                {userData?.phonenumber}
                              </p>
                            </div>
                            <div className="row">
                              <p className="col-sm-3 text-muted text-sm-end mb-0">
                                Address
                              </p>
                              <p className="col-sm-9 mb-0">
                                Jordan
                                <br />
                                Amman
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3">
                        {/* Skills */}
                        <div className="card">
                          <div className="card-body">
                            <h5 className="card-title d-flex justify-content-between">
                              <span>Skills </span>
                              <Link className="edit-link" to="#">
                                <i className="far fa-edit me-1" /> Edit
                              </Link>
                            </h5>
                            <div className="skill-tags">
                              <span>Html5</span>
                              <span>CSS3</span>
                              <span>WordPress</span>
                              <span>Javascript</span>
                              <span>Android</span>
                              <span>iOS</span>
                              <span>Angular</span>
                              <span>PHP</span>
                            </div>
                          </div>
                        </div>
                        {/* /Skills */}
                      </div>
                    </div>
                    {/* /Personal Details */}
                  </div>
                  {/* /Personal Details Tab */}
                  {/* Change Password Tab */}
                  <div id="password_tab" className="tab-pane fade">
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">Change Password</h5>
                        <div className="row">
                          <div className="col-md-10 col-lg-6">
                            <form onSubmit={handleSubmitNewPassword}>
                              <div className="form-group">
                                <label>Old Password</label>
                                <input
                                  type="password"
                                  className="form-control"
                                  onChange={(e) => {
                                    setOldPassword(e.target.value);
                                  }}
                                />
                              </div>
                              <div className="form-group">
                                <label>New Password</label>
                                <input
                                  type="password"
                                  className="form-control"
                                  minLength={6}
                                  onChange={(e) => {
                                    setNewPassword(e.target.value);
                                  }}
                                />
                              </div>
                              <div className="form-group">
                                <label>Confirm Password</label>
                                <input
                                  type="password"
                                  className="form-control"
                                  minLength={6}
                                  onChange={(e) => {
                                    setConfirmPassword(e.target.value);
                                  }}
                                />
                              </div>
                              <button className="btn btn-primary" type="submit">
                                Save Changes
                              </button>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /Change Password Tab */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Main Wrapper */}
    </>
  );
};

export default Profile;
