import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../Header/Header";
import SideBar from "../../SideBar/SideBar";
import Footer from "../../Footer/Footer";
import { bulidingicon, profilebg, profileuser } from "../../imagepath";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import { useParams, useHistory } from "react-router-dom";
import LoadingPage from "../Authentication/LoadingPage";
import { useEffect } from "react";
import axios from "axios";

const UserView = () => {
  const { userId } = useParams();
  const [userData, setUserData] = useState(null);
  const URL = "http://localhost:3000/profile";
  const history = useHistory();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(`${URL}/${userId}`, {
          withCredentials: true,
        });
        setUserData(res.data);
        console.log(res.data);
      } catch (err) {
        console.log(err);
        if (err.response.status === 401 || err.response.status === 403)
          history.push("/error404");
      }
    }
    fetchData()
      .then(() => {
        setLoading(false);
        console.log("data fetched");
      })
      .catch((err) => {
        console.log("an error occurred " + err);
      });
  }, []);

  return (
    <div>
      {loading && <LoadingPage />}
      <>
        <div className="main-wrapper">
          {/* Header */}
          <Header />

          {/* Sidebar */}
          <SideBar />

          {/* Page Wrapper */}
          <div className="page-wrapper">
            <div className="content container-fluid">
              <div className="page-header">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="page-sub-header">
                      <h3 className="page-title">Student Details</h3>
                      <ul className="breadcrumb">
                        <li className="breadcrumb-item">
                          <Link to="/students">Student</Link>
                        </li>
                        <li className="breadcrumb-item active">
                          Student Details
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="about-info">
                        <h4>
                          Profile{" "}
                          <span>
                            <Link to="#">
                              <i className="feather-more-vertical">
                                <FeatherIcon icon="more-vertical" />
                              </i>
                            </Link>
                          </span>
                        </h4>
                      </div>
                      <div className="student-profile-head">
                        <div className="row">
                          <div className="col-lg-6 col-md-6">
                            <div className="profile-user-box">
                              <div className="profile-user-img">
                                <img src={profileuser} alt="Profile" />
                                <div className="form-group students-up-files profile-edit-icon mb-0">
                                  <div className="uplod d-flex">
                                    <label className="file-upload profile-upbtn mb-0">
                                      <i className="feather-edit-3">
                                        <FeatherIcon icon="edit-3" />
                                      </i>
                                      <input type="file" />
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div className="names-profiles">
                                <h4>{userData?.name}</h4>
                                <h5>{userData?.major}</h5>
                              </div>
                            </div>
                          </div>

                          <div className="col-lg-6 col-md-6 d-flex align-items-center">
                            <div className="follow-btn-group">
                              <button
                                type="submit"
                                className="btn btn-info message-btns"
                              >
                                Message
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="student-personals-grp">
                        <div className="card">
                          <div className="card-body">
                            <div className="heading-detail">
                              <h4>Personal Details :</h4>
                            </div>
                            <div className="personal-activity">
                              <div className="personal-icons">
                                <i className="feather-user">
                                  <FeatherIcon icon="user" />
                                </i>
                              </div>
                              <div className="views-personal">
                                <h4>Name</h4>
                                <h5>{userData?.name}</h5>
                              </div>
                            </div>
                            <div className="personal-activity">
                              <div className="personal-icons">
                                <img src={bulidingicon} alt="" />
                              </div>
                              <div className="views-personal">
                                <h4>Major </h4>
                                <h5>{userData?.major}</h5>
                              </div>
                            </div>
                            <div className="personal-activity">
                              <div className="personal-icons">
                                <i className="feather-phone-call">
                                  <FeatherIcon icon="phone-call" />
                                </i>
                              </div>
                              <div className="views-personal">
                                <h4>Mobile</h4>
                                <h5>{userData?.phonenumber}</h5>
                              </div>
                            </div>
                            <div className="personal-activity">
                              <div className="personal-icons">
                                <i className="feather-mail">
                                  <FeatherIcon icon="mail" />
                                </i>
                              </div>
                              <div className="views-personal">
                                <h4>Email</h4>
                                <h5>{`${userData?.email}@gmail.com`}</h5>
                              </div>
                            </div>
                            <div className="personal-activity">
                              <div className="personal-icons">
                                <i className="feather-user">
                                  <FeatherIcon icon="user" />
                                </i>
                              </div>
                              <div className="views-personal">
                                <h4>Gender</h4>
                                <h5>{userData?.gender}</h5>
                              </div>
                            </div>
                            <div className="personal-activity">
                              <div className="personal-icons">
                                <i className="feather-calendar">
                                  <FeatherIcon icon="calendar" />
                                </i>
                              </div>
                              <div className="views-personal">
                                <h4>Year Of Birth</h4>
                                <h5>{userData?.dob}</h5>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-8">
                      <div className="student-personals-grp">
                        <div className="card mb-0">
                          <div className="card-body">
                            <div className="heading-detail">
                              <h4>About Me</h4>
                            </div>
                            <div className="hello-park">
                              <h5>Hello I am {userData?.name}</h5>
                              <p>{userData?.about}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Footer */}
            <Footer />
          </div>
        </div>
        {/* /Main Wrapper */}
      </>
    </div>
  );
};

export default UserView;
