import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../Header/Header";
import SideBar from "../../SideBar/SideBar";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";

const AddSalary = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const [startDate, setStartDate] = useState(new Date());
  const options = [
    { value: 1, label: "Select Gender" },
    { value: 2, label: "Female" },
    { value: 3, label: "Male" },
    { value: 4, label: "Others" },
  ];
  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
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
                  <h3 className="page-title">Add Salary</h3>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/salary">Accounts</Link>
                    </li>
                    <li className="breadcrumb-item active">Add Salary</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* /Page Header */}
            <div className="row">
              <div className="col-sm-12">
                <div className="card">
                  <div className="card-body">
                    <form>
                      <div className="row">
                        <div className="col-12">
                          <h5 className="form-title">
                            <span>Salary Information</span>
                          </h5>
                        </div>
                        <div className="col-12 col-sm-4">
                          <div className="form-group local-forms">
                            <label>
                              Staff ID <span className="login-danger">*</span>
                            </label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="col-12 col-sm-4">
                          <div className="form-group local-forms">
                            <label>
                              Name <span className="login-danger">*</span>
                            </label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="col-12 col-sm-4">
                          <div className="form-group local-forms">
                            <label>
                              Gender <span className="login-danger">*</span>
                            </label>
                            {/* <select
                              className="form-control select"
                              id="exampleFormControlSelect1"
                            >
                              <option>Select Gender</option>
                              <option>Female</option>
                              <option>Male</option>
                              <option>Others</option>
                            </select> */}

                            <Select
                              className="w-100  local-forms select"
                              value={selectedOption}
                              onChange={handleChange}
                              options={options}
                            />
                          </div>
                        </div>
                        <div className="col-12 col-sm-4">
                          <div className="form-group local-forms calendar-icon">
                            <label>
                              Joining Date{" "}
                              <span className="login-danger">*</span>
                            </label>
                            {/* <input
                              className="form-control datetimepicker"
                              type="text"
                              placeholder="DD-MM-YYYY"
                            /> */}
                            <DatePicker
                              className="form-control datetimepicker w-100"
                              selected={startDate}
                              onChange={(date) => setStartDate(date)}
                            />
                          </div>
                        </div>
                        <div className="col-12 col-sm-4">
                          <div className="form-group local-forms">
                            <label>
                              Amount <span className="login-danger">*</span>
                            </label>
                            <input type="text" className="form-control" />
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

export default AddSalary;
