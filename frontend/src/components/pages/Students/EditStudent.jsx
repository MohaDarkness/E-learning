import React, { useState } from "react";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Header from "../../Header/Header";
import SideBar from "../../SideBar/SideBar";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import Select from "react-select";
import { useParams } from "react-router-dom";
import axios from "axios";
// import { useHistory } from "react-router-dom";

const EditStudent = () => {
  // history = useHistory();
  const { studentId } = useParams();
  console.log(studentId);

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
  const [studentMobileNumber, setStudentMobileNumber] = useState(null);
  const [excelFile, setExcelFile] = useState(null);
  const [typeError, setTypeError] = useState(null);
  const [excelData, setExcelData] = useState(null);

  const gender = [
    { value: 1, label: "Male" },
    { value: 2, label: "Female" },
  ];

  const MajorOptions = [
    { value: 1, label: "Computer Science" },
    { value: 2, label: "Software Engineer" },
    { value: 3, label: "Computer Graphics" },
  ];

  const URL = "http://localhost:3000/students";

  const submitOneStudent = (e) => {
    e.preventDefault();
    e.currentTarget.disabled = true;

    const data = {
      name: `${studentFName} ${studentLName}`,
      role: "student",
      gender: studentGender["label"].toLowerCase(),
      // DoB: DateOfBirth,
      email: studentEmail,
      major: studentMajor["label"].toLowerCase(),
      // mobilenumber: studentMobileNumber
    };

    console.log("this is the data:");
    console.log(data);

    try {
      axios
        .put(`${URL}/${studentId}`, data, { withCredentials: true })
        .then((res) => {
          alert("student updated successfully");
          console.log(res);
          setCreateOneStatus({
            status: "success",
            message: "Student been created successfully",
          });
        })
        .catch((err) => {
          // if 401 then unauthorized, let the use go to login page
          // if (err.response.status === 401 || err.response.status === 403)
          //   history.push("/login");
          console.log(err);

          err.data.split(" ")[0] === "E11000" &&
            setCreateManyStatus({
              status: "error",
              message: "User id already taken!",
            });

          err.data.split(" ")[0] === "E11000" && alert("User Id alredy taken");
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
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
                    <h3 className="page-title">Update Student</h3>
                    <ul className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link to="/students">Student</Link>
                      </li>
                      <li className="breadcrumb-item active">
                        Update Students
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
                            Student {studentId}{" "}
                          </h5>
                        </div>
                        <div className="col-12 col-sm-4">
                          <div className="form-group local-forms">
                            <label>
                              Student ID <span className="login-danger">*</span>
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              value={studentId}
                              disabled
                              onChange={(e) => setStudentId(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="col-12 col-sm-4">
                          <div className="form-group local-forms">
                            <label>
                              First Name <span className="login-danger">*</span>
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              value={studentFName}
                              onChange={(e) => setStudentFName(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="col-12 col-sm-4">
                          <div className="form-group local-forms">
                            <label>
                              Last Name <span className="login-danger">*</span>
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              value={studentLName}
                              onChange={(e) => setStudentLName(e.target.value)}
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
                              className="form-control"
                              type="text"
                              value={studentEmail}
                              onChange={(e) => setStudentEmail(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="col-12 col-sm-4">
                          <div className="form-group local-forms">
                            <label>
                              Major <span className="login-danger">*</span>
                            </label>
                            <Select
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
                              value={studentMobileNumber}
                              onChange={(e) =>
                                setStudentMobileNumber(e.target.value)
                              }
                            />
                          </div>
                        </div>
                        <div className="col-12 col-sm-4">
                          <div className="form-group students-up-files">
                            <label>Upload Student Photo (150px X 150px)</label>
                            <div className="uplod">
                              <label className="file-upload image-upbtn mb-0">
                                Choose File <input type="file" />
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="student-submit">
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
    </>
  );
};

export default EditStudent;
