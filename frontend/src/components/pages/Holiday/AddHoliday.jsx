import React, { useState } from "react";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Header from "../../Header/Header";
import SideBar from "../../SideBar/SideBar";
import Select from "react-select";

const AddHoliday = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [selectedHoliday, setSelectedHoliday] = useState(null);

  const options = [
    { value: 1, label: "Select Holiday" },
    { value: 2, label: "Public Holiday" },
    { value: 3, label: "College Holiday" },
    { value: 4, label: "Exam Holiday" },
    { value: 5, label: "Others" },
  ];

  const handleHolidayChange = (selectedOption) => {
    setSelectedHoliday(selectedOption);
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
                  <h3 className="page-title">Add Holiday</h3>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/holiday">Holiday</Link>
                    </li>
                    <li className="breadcrumb-item active">Add Holiday</li>
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
                            <span>Holiday Information</span>
                          </h5>
                        </div>
                        <div className="col-12 col-sm-6">
                          <div className="form-group">
                            <label>Holiday Id</label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="col-12 col-sm-6">
                          <div className="form-group">
                            <label>Holiday Name</label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="col-12 col-sm-6">
                          <div className="form-group">
                            <label>Type of Holiday</label>
                            {/* <select
                              className="form-control select"
                              id="exampleFormControlSelect1"
                            >
                              <option>Select Holiday</option>
                              <option>Public Holiday</option>
                              <option>College Holiday</option>
                              <option>Exam Holiday</option>
                              <option>Others</option>
                            </select> */}
                            <Select
                              className="w-100 select"
                              value={selectedHoliday}
                              onChange={handleHolidayChange}
                              options={options}
                              placeholder="Select Holiday"
                            />
                          </div>
                        </div>
                        <div className="col-12 col-sm-6">
                          <div className="form-group">
                            <label>Start Date</label>
                            {/* <input type="date" className="form-control" /> */}
                            <DatePicker
                              className="form-control datetimepicker"
                              selected={startDate}
                              onChange={(date) => setStartDate(date)}
                            />
                          </div>
                        </div>
                        <div className="col-12 col-sm-6">
                          <div className="form-group">
                            <label>End Date</label>
                            {/* <input type="date" className="form-control" /> */}
                            <DatePicker
                              className="form-control datetimepicker"
                              selected={endDate}
                              onChange={(date) => setEndDate(date)}
                            />
                          </div>
                        </div>
                        <div className="col-12">
                          <button type="submit" className="btn btn-primary">
                            Submit
                          </button>
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

export default AddHoliday;
