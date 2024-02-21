import React from "react";
import { Link } from "react-router-dom";
import Header from "../../Header/Header";
import SideBar from "../../SideBar/SideBar";
import { useState } from "react";
import Select from "react-select";
import axios from "axios";
import { useParams } from "react-router-dom";

const EditCourse = () => {
  const { courseId } = useParams();
  const [courseName, setCourseName] = useState(null);
  const [department, setDepartment] = useState(null);
  const [creditHours, setCreditHours] = useState("");
  const [description, setDescription] = useState(null);
  const [creationStatus, setCreationStatus] = useState({
    status: "",
    message: "",
  });
  const URL = "http://localhost:3000/courses";

  const departments = [
    { value: 1, label: "Information Technology" },
    { value: 2, label: "Business" },
    { value: 3, label: "Engineering" },
  ];

  const handleCreditHours = (e) => {
    const input = e.target.value;
    if (/^\d?$/.test(input)) {
      setCreditHours(input);
    } else setCreditHours("");
  };

  const submitCourse = (e) => {
    e.preventDefault();
    e.currentTarget.disabled = true;

    const data = {
      name: courseName,
      department: department.label,
      hours: creditHours,
      description: description,
    };

    console.log("this is the data:");
    console.log(data);

    try {
      axios
        .post(`${URL}/${courseId}`, data, { withCredentials: true })
        .then((res) => {
          console.log(res);
          setCreationStatus({
            status: "success",
            message: "Course been created successfully",
          });
        })
        .catch((err) => {
          console.log("Check the error:");
          // console.log(err.response.data);
          console.log(err);
          setCreationStatus({
            status: "error",
            message: "GENERAL ERROR: something went wrong!",
          });
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

        {/* Page Wrapper */}

        <div className="page-wrapper">
          <div className="content container-fluid">
            {/* Page Header */}
            <div className="page-header">
              <div className="row align-items-center">
                <div className="col">
                  <h3 className="page-title">Edit Course</h3>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/courses">Courses</Link>
                    </li>
                    <li className="breadcrumb-item active">Edit Course</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* /Page Header */}
            <div className="row">
              <div className="col-sm-12">
                <div className="card">
                  <div className="card-body">
                    <form onSubmit={submitCourse}>
                      <div className="row">
                        <div className="col-12">
                          <h5 className="form-title">
                            <span>Course Information</span>
                          </h5>
                        </div>
                        <div className="col-12 col-sm-4">
                          <div className="form-group local-forms">
                            <label>
                              Course ID <span className="login-danger">*</span>
                            </label>
                            <input
                              required
                              disabled
                              value={courseId}
                              type="text"
                              className="form-control"
                              onChange={(e) => {
                                setCourseId(e.target.value);
                              }}
                            />
                          </div>
                        </div>
                        <div className="col-12 col-sm-4">
                          <div className="form-group local-forms">
                            <label>
                              Course Name{" "}
                              <span className="login-danger">*</span>
                            </label>
                            <input
                              required
                              type="text"
                              className="form-control"
                              onChange={(e) => {
                                setCourseName(e.target.value);
                              }}
                            />
                          </div>
                        </div>
                        <div className="col-12 col-sm-4">
                          <div className="form-group local-forms">
                            <label>
                              Department
                              <span className="login-danger">*</span>
                            </label>
                            <Select
                              required
                              className="w-100 local-forms select"
                              value={department}
                              onChange={(selectedOption) => {
                                setDepartment(selectedOption);
                              }}
                              options={departments}
                              placeholder="Select Department"
                            />
                          </div>
                        </div>
                        <div className="col-12 col-sm-4">
                          <div className="form-group local-forms">
                            <label>
                              Creidt Hours
                              <span className="login-danger">*</span>
                            </label>
                            <input
                              type="text"
                              maxLength={1}
                              className="form-control"
                              value={creditHours}
                              onChange={handleCreditHours}
                              required
                            />
                          </div>
                        </div>
                        <div className="col-12 col-sm-12">
                          <div className="form-group local-forms">
                            <label>
                              Course Description
                              <span className="login-danger">*</span>
                            </label>
                            <input
                              required
                              type="text"
                              className="form-control"
                              onChange={(e) => {
                                setDescription(e.target.value);
                              }}
                            />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="student-submit">
                            <button type="submit" className="btn btn-primary">
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
  );
};

export default EditCourse;
