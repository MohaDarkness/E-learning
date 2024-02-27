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

const RegisterStudent = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const userRole = Cookies.get("role");
    const userToken = Cookies.get("jwt");
    if (!userToken) {
      history.push("/login");
    } else if (userRole === "student") {
      history.push("/studentdashboard");
    } else if (userRole === "teacher") {
      history.push("/teacherdashboard");
    }
    setLoading(false);
  }, [history]);

  const [studentId, setStudentId] = useState(null);
  const [studentFName, setStudentFName] = useState(null);
  const [studentLName, setStudentLName] = useState(null);
  const [studentGender, setGender] = useState(null);
  const [DateOfBirth, setDateOfBirth] = useState(() => {
    const today = new Date();
    const dob = new Date(today);
    dob.setFullYear(today.getFullYear() - 18);
    return dob;
  });
  const [studentEmail, setStudentEmail] = useState(null);
  const [studentMajor, setStudentMajor] = useState(null);
  const [studentPhoneNumber, setStudentPhoneNumber] = useState(null);
  const [excelFile, setExcelFile] = useState(null);
  const [typeError, setTypeError] = useState(null);
  const [excelData, setExcelData] = useState(null);
  const [createOneStatus, setCreateOneStatus] = useState({
    status: null,
    message: null,
  });
  const [createManyStatus, setCreateManyStatus] = useState({
    status: null,
    message: null,
  });

  const gender = [
    { value: 1, label: "Male" },
    { value: 2, label: "Female" },
  ];

  const MajorOptions = [
    { value: 1, label: "Computer Science" },
    { value: 2, label: "Software Engineer" },
    { value: 3, label: "Computer Graphics" },
  ];

  const URL = "http://localhost:3000/signup";

  const submitOneStudent = (e) => {
    e.preventDefault();
    e.currentTarget.disabled = true;

    const data = {
      0: {
        userId: studentId,
        name: `${studentFName} ${studentLName}`,
        role: "student",
        gender: studentGender["label"].toLowerCase(),
        dob: DateOfBirth,
        email: studentEmail,
        major: studentMajor["label"].toLowerCase(),
        phonenumber: studentPhoneNumber,
      },
    };

    console.log("this is the data:");
    console.log(data);

    try {
      axios
        .post(URL, data, { withCredentials: true })
        .then((res) => {
          console.log(res);
          alert("Created Student Successfully");
          setCreateOneStatus({
            status: "success",
            message: "Student been created successfully",
          });
        })
        .catch((err) => {
          console.log("Check the error:");
          console.log(err.response.data);

          err.response.data.split(" ")[0] === "E11000" &&
            setCreateOneStatus({
              status: "error",
              message: "User id is already taken!",
            });

          err.response.data ===
            "user validation failed: email: please enter a valid email" &&
            setCreateOneStatus({
              status: "error",
              message: "Email is not correct!",
            });
          console.log(createOneStatus);
        });
    } catch (err) {
      console.log(err);
    }
  };

  // Excel Files

  const requiredKeys = [
    "name",
    "userId",
    "major",
    "dob",
    "phonenumber",
    "gender",
  ];
  const handleFile = (e) => {
    let fileTypes = [
      "application/vnd.ms-excel",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "text/csv",
    ];
    let selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile && fileTypes.includes(selectedFile.type)) {
        setTypeError(null);
        let reader = new FileReader();
        reader.readAsArrayBuffer(selectedFile);
        reader.onload = (e) => {
          setExcelFile(e.target.result);
        };
      } else {
        setTypeError("Please you can only select excel file");
        setExcelFile(null);
      }
    } else {
      console.log("Please select your file");
    }
  };

  const handleFileSubmit = (e) => {
    console.log("this is e:");
    console.log(e);
    e.preventDefault();
    if (excelFile !== null) {
      const workbook = XLSX.read(excelFile, { type: "buffer" });
      const worksheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[worksheetName];
      const data = XLSX.utils.sheet_to_json(worksheet);
      data.forEach((student) => {
        student.role = "student";
      });
      // setExcelData(data.slice(0,10));
      console.log(data);
      console.log(data[0]);
      for (const key of requiredKeys) {
        if (!data[0].hasOwnProperty(key)) {
          setCreateManyStatus({
            status: "error",
            message:
              "Data is missing, Fields/Columns must be added to the sheet!!",
          });
          setExcelFile(null);
          return;
        }
      }
      console.log("all good hehe");
      // end point we need to send variable {data}
      try {
        axios
          .post(URL, data, { withCredentials: true })
          .then((res) => console.log(res))
          .catch((err) => console.log(err));
      } catch (err) {
        err.response.data.split(" ")[0] === "E11000" &&
          setCreateManyStatus({
            status: "error",
            message: "User id is already taken!",
          });

        err.response.data ===
          "user validation failed: email: please enter a valid email" &&
          setCreateManyStatus({
            status: "error",
            message: "Email is not correct!",
          });
      }
    }
  };

  return (
    <div>
      {loading && <LoadingPage />} (
      {!loading && (
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
                        <h3 className="page-title">Register New Students</h3>
                        <ul className="breadcrumb">
                          <li className="breadcrumb-item">
                            <Link to="/students">Student</Link>
                          </li>
                          <li className="breadcrumb-item active">
                            Register New Students
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
                        <form onSubmit={submitOneStudent}>
                          <div className="row">
                            <div className="col-12">
                              <h5 className="form-title student-info">
                                Register One Student{" "}
                              </h5>
                            </div>
                            <div className="col-12 col-sm-4">
                              <div className="form-group local-forms">
                                <label>
                                  Student ID{" "}
                                  <span className="login-danger">*</span>
                                </label>
                                <input
                                  required
                                  className="form-control"
                                  type="text"
                                  value={studentId}
                                  onChange={(e) => setStudentId(e.target.value)}
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
                                  value={studentFName}
                                  onChange={(e) =>
                                    setStudentFName(e.target.value)
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
                                  value={studentLName}
                                  onChange={(e) =>
                                    setStudentLName(e.target.value)
                                  }
                                />
                              </div>
                            </div>
                            <div className="col-12 col-sm-4">
                              <div className="form-group local-forms">
                                <label>
                                  Gender <span className="login-danger">*</span>
                                </label>

                                <Select
                                  required
                                  className="w-100 local-forms select"
                                  value={studentGender}
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
                                  required
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
                                  value={studentEmail}
                                  onChange={(e) =>
                                    setStudentEmail(e.target.value)
                                  }
                                />
                              </div>
                            </div>
                            <div className="col-12 col-sm-4">
                              <div className="form-group local-forms">
                                <label>
                                  Major <span className="login-danger">*</span>
                                </label>
                                <Select
                                  required
                                  className="w-100 select"
                                  value={studentMajor}
                                  onChange={(selectedOption) =>
                                    setStudentMajor(selectedOption)
                                  }
                                  options={MajorOptions}
                                  placeholder="Please Select Class"
                                />
                              </div>
                            </div>
                            <div className="col-12 col-sm-4">
                              <div className="form-group local-forms">
                                <label>Phone </label>
                                <input
                                  className="form-control"
                                  type="text"
                                  value={studentPhoneNumber}
                                  onChange={(e) =>
                                    setStudentPhoneNumber(e.target.value)
                                  }
                                />
                              </div>
                            </div>
                            <div className="col-12 col-sm-4">
                              <div className="form-group students-up-files">
                                <label>
                                  Upload Student Photo (150px X 150px)
                                </label>
                                <div className="uplod">
                                  <label className="file-upload image-upbtn mb-0">
                                    Choose File <input type="file" />
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div
                                className="student-submit d-flex"
                                style={{ gap: "5rem" }}
                              >
                                <button
                                  type="submit"
                                  className="btn btn-primary"
                                  on
                                >
                                  Submit
                                </button>
                                {createOneStatus.status === "error" && (
                                  <div
                                    className="alert alert-danger alert-dismissible fade show"
                                    role="alert"
                                    onClick={() => {
                                      setCreateOneStatus({
                                        status: null,
                                        message: null,
                                      });
                                    }}
                                  >
                                    <strong>{createOneStatus.message}</strong>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>

                      {/* Multiple Students Excel File */}

                      <div className="card-body">
                        <form onSubmit={handleFileSubmit}>
                          <div className="row">
                            <div className="col-12">
                              <h5 className="form-title student-info">
                                Register Multiple Students{" "}
                              </h5>
                            </div>
                          </div>
                          <div className="form-group row">
                            <label className="col-form-label col-md-3">
                              Register Multiple Students
                            </label>
                            <div className="col-md-9">
                              <input
                                required
                                className="form-control"
                                type="file"
                                placeholder=""
                                onChange={handleFile}
                              />
                            </div>
                          </div>
                          {typeError && (
                            <div className="alert alert-danger" role="alert">
                              {typeError}
                            </div>
                          )}
                          <div className="col-12">
                            <div
                              className="student-submit d-flex"
                              style={{ gap: "5rem" }}
                            >
                              <button
                                type="submit"
                                className="btn btn-primary"
                                on
                              >
                                Submit
                              </button>
                              {createManyStatus.status === "error" && (
                                <div
                                  className="alert alert-danger alert-dismissible fade show"
                                  role="alert"
                                  onClick={() => {
                                    setCreateManyStatus({
                                      status: null,
                                      message: null,
                                    });
                                  }}
                                >
                                  <strong>{createManyStatus.message}</strong>
                                </div>
                              )}
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

export default RegisterStudent;
