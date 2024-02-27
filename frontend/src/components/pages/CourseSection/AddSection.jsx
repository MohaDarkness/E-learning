import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../Header/Header";
import SideBar from "../../SideBar/SideBar";
import Select from "react-select";
import axios from "axios";
import { useParams } from "react-router-dom";

const AddSection = () => {
  const { courseId } = useParams();
  const [teacherId, setTeacherId] = useState(null);
  const [time, setTime] = useState(null);
  const [classroom, setClassroom] = useState(null);
  const [days, setDays] = useState([]);

  const times = [
    { value: "8am", label: "8:00am - 9:00am" },
    { value: "9am", label: "9:00am - 10:00am" },
    { value: "10am", label: "10:00am - 11:00am" },
    { value: "11am", label: "11:00am - 12:00pm" },
    { value: "12pm", label: "12:00pm - 13:00pm" },
    { value: "13pm", label: "13:00pm - 14:00pm" },
    { value: "14pm", label: "14:00pm - 15:00pm" },
    { value: "15pm", label: "15:00pm - 16:00pm" },
  ];

  const classrooms = [
    { value: "101", label: "101" },
    { value: "102", label: "102" },
    { value: "103", label: "103" },
    { value: "104", label: "104" },
    { value: "105", label: "105" },
    { value: "106", label: "106" },
    { value: "107", label: "107" },
    { value: "201", label: "201" },
    { value: "202", label: "202" },
    { value: "203", label: "203" },
    { value: "301", label: "301" },
    { value: "302", label: "302" },
    { value: "303", label: "303" },
    { value: "304", label: "304" },
    { value: "305", label: "305" },
  ];

  const handleTimeChange = (time) => {
    setTime(time);
  };
  const handleClassroomChange = (classroom) => {
    setClassroom(classroom);
  };
  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      // If checkbox is checked, add the value to the days array
      setDays((prevDays) => [...prevDays, value]);
    } else {
      // If checkbox is unchecked, remove the value from the days array
      setDays((prevDays) => prevDays.filter((day) => day !== value));
    }
  };

  const URL = "http://localhost:3000/section";
  const submitSection = (e) => {
    e.preventDefault();
    e.currentTarget.disabled = true;

    const data = {
      course: courseId,
      teacher: teacherId,
      room: classroom.label,
      time: time.label,
      days: days.join("-"),
    };

    console.log("this is the data:");
    console.log(data);

    try {
      axios
        .post(URL, data, { withCredentials: true })
        .then((res) => {
          console.log(res);
          setCreationStatus({
            status: "success",
            message: "Section been created successfully",
          });
        })
        .catch((err) => {
          console.log("Check the error:");
          console.log(err.response.data);
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
                  <h3 className="page-title">Add Section</h3>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/sections">Sections</Link>
                    </li>
                    <li className="breadcrumb-item active">Add Section</li>
                  </ul>
                </div>
              </div>
            </div>
            <p>{days.join("-")}</p>
            {/* /Page Header */}
            <div className="row">
              <div className="col-sm-12">
                <div className="card">
                  <div className="card-body">
                    <form onSubmit={submitSection}>
                      <div className="row">
                        <div className="col-12">
                          <h5 className="form-title">
                            <span>Section Information</span>
                          </h5>
                        </div>
                        <div className="col-12 col-sm-4">
                          <div className="form-group local-forms">
                            <label>
                              Course ID <span className="login-danger">*</span>
                            </label>
                            <input
                              disabled
                              type="text"
                              className="form-control"
                              required
                              value={courseId}
                              onChange={(e) => {}}
                            />
                          </div>
                        </div>
                        <div className="col-12 col-sm-4">
                          <div className="form-group local-forms">
                            <label>
                              Teacher ID <span className="login-danger">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              value={teacherId}
                              onChange={(e) => {
                                setTeacherId(e.target.value);
                              }}
                              required
                            />
                          </div>
                        </div>
                        <div className="col-12 col-sm-4">
                          <div className="form-group local-forms">
                            <label>
                              Time <span className="login-danger">*</span>
                            </label>
                            <Select
                              className="w-100 local-forms  select"
                              value={time}
                              onChange={handleTimeChange}
                              options={times}
                              placeholder="Chose Time"
                              required
                            />
                          </div>
                        </div>
                        <div className="col-12 col-sm-4">
                          <div className="form-group local-forms">
                            <label>
                              Classroom <span className="login-danger">*</span>
                            </label>
                            <Select
                              className="w-100 local-forms  select"
                              value={classroom}
                              onChange={handleClassroomChange}
                              options={classrooms}
                              placeholder="Chose Classroom"
                            />
                          </div>
                        </div>
                        <div className="form-group row">
                          <label className="col-form-label col-md-2">
                            Days
                          </label>
                          <div className="col-md-10">
                            <div className="checkbox">
                              <label>
                                <input
                                  type="checkbox"
                                  name="checkbox"
                                  onChange={handleCheckboxChange}
                                  value={"Sun"}
                                />{" "}
                                Sunday
                              </label>
                            </div>
                            <div className="checkbox">
                              <label>
                                <input
                                  type="checkbox"
                                  name="checkbox"
                                  onChange={handleCheckboxChange}
                                  value={"Mon"}
                                />{" "}
                                Monday
                              </label>
                            </div>
                            <div className="checkbox">
                              <label>
                                <input
                                  type="checkbox"
                                  name="checkbox"
                                  onChange={handleCheckboxChange}
                                  value={"Tue"}
                                />{" "}
                                Tuesday
                              </label>
                            </div>
                            <div className="checkbox">
                              <label>
                                <input
                                  type="checkbox"
                                  name="checkbox"
                                  onChange={handleCheckboxChange}
                                  value={"Wed"}
                                />{" "}
                                Wednesday
                              </label>
                            </div>
                            <div className="checkbox">
                              <label>
                                <input
                                  type="checkbox"
                                  name="checkbox"
                                  onChange={handleCheckboxChange}
                                  value={"Thu"}
                                />{" "}
                                Thursday
                              </label>
                            </div>
                            <div className="checkbox">
                              <label>
                                <input
                                  type="checkbox"
                                  name="checkbox"
                                  onChange={handleCheckboxChange}
                                  value={"Sat"}
                                />{" "}
                                Satarday
                              </label>
                            </div>
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

export default AddSection;
