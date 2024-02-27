import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Header from "../../Header/Header";
import SideBar from "../../SideBar/SideBar";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import Select from "react-select";
import * as XLSX from "xlsx";
import axios from "axios";
import Cookies from "js-cookie";
import LoadingPage from "../Authentication/LoadingPage";

const RegisterTeacher = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const userRole = Cookies.get("role");
    const userToken = Cookies.get("jwt");
    if (!userToken) {
      history.push("/login");
    } else if (userRole === "teacher") {
      history.push("/teacherdashboard");
    } else if (userRole === "teacher") {
      history.push("/teacherdashboard");
    }
    setLoading(false);
  }, [history]);

  const [teacherId, setTeacherId] = useState(null);
  const [teacherFName, setTeacherFName] = useState(null);
  const [teacherLName, setTeacherLName] = useState(null);
  const [teacherGender, setGender] = useState(null);
  const [DateOfBirth, setDateOfBirth] = useState(() => {
    const today = new Date();
    const dob = new Date(today);
    dob.setFullYear(today.getFullYear() - 18);
    return dob;
  });
  const [teacherEmail, setTeacherEmail] = useState(null);
  const [teacherMobileNumber, setTeacherMobileNumber] = useState(null);
  const [teacherDepartment, setDepartment] = useState(null);
  const [excelFile, setExcelFile] = useState(null);
  const [typeError, setTypeError] = useState(null);
  const [excelData, setExcelData] = useState(null);

  const gender = [
    { value: 1, label: "Male" },
    { value: 2, label: "Female" },
  ];

  const departments = [
    { value: 1, label: "Information Technology" },
    { value: 2, label: "Business" },
    { value: 3, label: "Engineering" },
  ];
  const URL = "http://localhost:3000/signup";

  const submitOneTeacher = (e) => {
    e.preventDefault();
    e.currentTarget.disabled = true;

    const data = {
      0: {
        userId: teacherId,
        name: `${teacherFName} ${teacherLName}`,
        role: "teacher",
        gender: teacherGender["label"].toLowerCase(),
        dob: DateOfBirth,
        email: teacherEmail,
        phonenumber: teacherMobileNumber,
        department: teacherDepartment.label,
      },
    };

    console.log("this is the data:");
    console.log(data);

    try {
      axios
        .post(URL, data, { withCredentials: true })
        .then((res) => {
          console.log(res);

          alert("Teacher registerd successfully");
        })
        .catch((err) => {
          console.log(err);
          err.response.data.split(" ")[0] === "E11000" &&
            alert("Teacher Id is already taken");
          console.log(err.response.data.split(" ")[0]);
          err.response.data.split(" ")[0] === "user" &&
            alert("Please make sure its a valid email");
        });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      {loading ? (
        <LoadingPage />
      ) : (
        <>
          <div className="main-wrapper">
            {/* Header */}
            <Header />
            {/* Sidebar */}
            <SideBar />
            {/* Page Wrapper */}`{" "}
            <div className="page-wrapper">
              <div className="content container-fluid">
                {/* Page Header */}
                <div className="page-header">
                  <div className="row align-items-center">
                    <div className="col-sm-12">
                      <div className="page-sub-header">
                        <h3 className="page-title">Register New Teachers</h3>
                        <ul className="breadcrumb">
                          <li className="breadcrumb-item">
                            <Link to="/teachers">Teacher</Link>
                          </li>
                          <li className="breadcrumb-item active">
                            Register New Teachers
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Page Header */}
                <div className="row">
                  <div className="col-sm-12">
                    <div className="card comman-shadow">
                      <div className="card-body">
                        <form onSubmit={submitOneTeacher}>
                          <div className="row">
                            <div className="col-12">
                              <h5 className="form-title teacher-info">
                                Register One Teacher{" "}
                              </h5>
                            </div>
                            <div className="col-12 col-sm-4">
                              <div className="form-group local-forms">
                                <label>
                                  Teacher ID{" "}
                                  <span className="login-danger">*</span>
                                </label>
                                <input
                                  required
                                  className="form-control"
                                  type="text"
                                  value={teacherId}
                                  onChange={(e) => setTeacherId(e.target.value)}
                                />
                              </div>
                            </div>
                            <div className="col-12 col-sm-4">
                              <div className="form-group local-forms">
                                <label>
                                  First Name{" "}
                                  <span className="login-danger">*</span>
                                </label>
                                <input
                                  required
                                  className="form-control"
                                  type="text"
                                  value={teacherFName}
                                  onChange={(e) =>
                                    setTeacherFName(e.target.value)
                                  }
                                />
                              </div>
                            </div>
                            <div className="col-12 col-sm-4">
                              <div className="form-group local-forms">
                                <label>
                                  Last Name{" "}
                                  <span className="login-danger">*</span>
                                </label>
                                <input
                                  required
                                  className="form-control"
                                  type="text"
                                  value={teacherLName}
                                  onChange={(e) =>
                                    setTeacherLName(e.target.value)
                                  }
                                />
                              </div>
                            </div>
                            <div className="col-12 col-sm-4">
                              <div className="form-group local-forms">
                                <label>
                                  Department{" "}
                                  <span className="login-danger">*</span>
                                </label>
                                <Select
                                  required
                                  className="w-100 local-forms select"
                                  value={teacherDepartment}
                                  onChange={(selectedOption) =>
                                    setDepartment(selectedOption)
                                  }
                                  options={departments}
                                  placeholder="Select Department"
                                />
                              </div>
                            </div>
                            <div className="col-12 col-sm-4">
                              <div className="form-group local-forms">
                                <label>
                                  Gender <span className="login-danger">*</span>
                                </label>

                                <Select
                                  className="w-100 local-forms select"
                                  value={teacherGender}
                                  onChange={(selectedOption) =>
                                    setGender(selectedOption)
                                  }
                                  options={gender}
                                  placeholder="Select Gender"
                                />
                              </div>
                            </div>
                            <div className="col-12 col-sm-4">
                              <div className="form-group local-forms calendar-icon">
                                <label>
                                  Date Of Birth{" "}
                                  <span className="login-danger">*</span>
                                </label>
                                <DatePicker
                                  className="form-control datetimepicker"
                                  selected={DateOfBirth}
                                  onChange={(date) => setDateOfBirth(date)}
                                />
                              </div>
                            </div>
                            <div className="col-12 col-sm-4">
                              <div className="form-group local-forms">
                                <label>
                                  E-Mail <span className="login-danger">*</span>
                                </label>
                                <input
                                  required
                                  className="form-control"
                                  type="text"
                                  value={teacherEmail}
                                  onChange={(e) =>
                                    setTeacherEmail(e.target.value)
                                  }
                                />
                              </div>
                            </div>
                            <div className="col-12 col-sm-4">
                              <div className="form-group local-forms">
                                <label>Phone </label>
                                <input
                                  className="form-control"
                                  type="text"
                                  value={teacherMobileNumber}
                                  onChange={(e) =>
                                    setTeacherMobileNumber(e.target.value)
                                  }
                                />
                              </div>
                            </div>
                            <div className="col-12 col-sm-8">
                              <label>
                                Upload Teacher Photo (150px X 150px)
                              </label>
                              <div className="uplod">
                                <label className="file-upload image-upbtn mb-0">
                                  Choose File <input type="file" />
                                </label>
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="teacher-submit">
                                <button
                                  type="submit"
                                  className="btn btn-primary"
                                  on
                                >
                                  Submit
                                </button>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /Main Wrapper */}
        </>
      )}
    </div>
  );
};

export default RegisterTeacher;
