import React, { useState } from "react";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Header from "../../Header/Header";
import SideBar from "../../SideBar/SideBar";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import Select from "react-select";
import * as XLSX from 'xlsx';

const RegisterStudent = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [selectedOption1, setSelectedOption1] = useState(null);
  const [selectedOption2, setSelectedOption2] = useState(null);
  const [selectedOption3, setSelectedOption3] = useState(null);
  const [selectedOption4, setSelectedOption4] = useState(null);
  const [selectedOption5, setSelectedOption5] = useState(null);
  // onchange states
  const [excelFile, setExcelFile] = useState(null);
  const [typeError, setTypeError] = useState(null);

  // submit state
  const [excelData, setExcelData] = useState(null);

  // onchange event
  const handleFile=(e)=>{
    let fileTypes = ['application/vnd.ms-excel','application/vnd.openxmlformats-officedocument.spreadsheetml.sheet','text/csv'];
    let selectedFile = e.target.files[0];
    if(selectedFile){
      if(selectedFile&&fileTypes.includes(selectedFile.type)){
        setTypeError(null);
        let reader = new FileReader();
        reader.readAsArrayBuffer(selectedFile);
        reader.onload=(e)=>{
          setExcelFile(e.target.result);
        }
      }
      else{
        setTypeError('Please you can only select excel file');
        setExcelFile(null);
      }
    }
    else{
      console.log('Please select your file');
    }
  }
  
  const requiredKeys = ["StudentId", "Name","UserName", "Password", "Major", "YearOfBirth", "MobileNumber", "Gender", "Img"];
  // submit event
  const handleFileSubmit=(e)=>{
    e.preventDefault();
    if(excelFile!==null){
      const workbook = XLSX.read(excelFile,{type: 'buffer'});
      const worksheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[worksheetName];
      const data = XLSX.utils.sheet_to_json(worksheet);
      // setExcelData(data.slice(0,10));
      console.log(data)
      console.log(data[0]);
      for (const key of requiredKeys) {
        if (!data[0].hasOwnProperty(key)) {
          console.log(key)
          setTypeError('Some Data is missing, Fields/Columns must be added to the sheet!!');
          setExcelFile(null);
          return
        }
      }
      console.log("all good hehe");
      
    }
  }

  const options1 = [
    { value: 1, label: "Select Gender" },
    { value: 2, label: "Male" },
    { value: 3, label: "Female" }
  ];

  const options2 = [
    { value: 1, label: "Please Select Group" },
    { value: 2, label: "B+" },
    { value: 3, label: "A+" },
    { value: 4, label: "O+" },
  ];

  const options3 = [
    { value: 1, label: "Please Select Religion" },
    { value: 2, label: "Hindu" },
    { value: 3, label: "Christian" },
    { value: 4, label: "Others" },
  ];

  const options4 = [
    { value: 1, label: "Please Select Class" },
    { value: 2, label: "Computer Science" },
    { value: 3, label: "Software Engineer" },
    { value: 4, label: "Computer Graphics" },
  ];

  const options5 = [
    { value: 1, label: "Please Select Section" },
    { value: 2, label: "A" },
    { value: 3, label: "B" },
    { value: 4, label: "C" },
  ];

  const handleOption1Change = (selectedOption) => {
    setSelectedOption1(selectedOption);
  };

  const handleOption2Change = (selectedOption) => {
    setSelectedOption2(selectedOption);
  };

  const handleOption3Change = (selectedOption) => {
    setSelectedOption3(selectedOption);
  };

  const handleOption4Change = (selectedOption) => {
    setSelectedOption4(selectedOption);
  };

  const handleOption5Change = (selectedOption) => {
    setSelectedOption5(selectedOption);
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
                    <h3 className="page-title">Register New Students</h3>
                    <ul className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link to="/students">Student</Link>
                      </li>
                      <li className="breadcrumb-item active">Register New Students</li>
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
                    <form>
                      <div className="row">
                        <div className="col-12">
                          <h5 className="form-title student-info">
                            Register One Student{" "}
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
                              placeholder="STD-XXXXX"
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
                              defaultValue="John Doe"
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
                              defaultValue="Stephen"
                            />
                          </div>
                        </div>
                        <div className="col-12 col-sm-4">
                          <div className="form-group local-forms">
                            <label>
                              Gender <span className="login-danger">*</span>
                            </label>
                            {/* <select className="form-control select">
                                                            <option>Select Gender</option>
                                                            <option>Female</option>
                                                            <option>Male</option>
                                                            <option>Others</option>
                                                        </select> */}
                            <Select
                              className="w-100 local-forms select"
                              value={selectedOption1}
                              onChange={handleOption1Change}
                              options={options1}
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
                              selected={startDate}
                              onChange={(date) => setStartDate(date)}
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
                              defaultValue="example@gmail.com"
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
                              value={selectedOption4}
                              onChange={handleOption4Change}
                              options={options4}
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
                              defaultValue="+1 888 888 8888"
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
                            <button type="submit" className="btn btn-primary" on>
                              Submit
                            </button>
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
                          <label className="col-form-label col-md-3">Register Multiple Students</label>
                          <div className="col-md-9">
                              <input className="form-control" type="file" placeholder="" onChange={handleFile}/>
                          </div>
										    </div>
                        {typeError&&(
                          <div className="alert alert-danger" role="alert">{typeError}</div>
                        )}
                        <div className="col-12">
                          <div className="student-submit">
                            <button type="submit" className="btn btn-primary" on>
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

export default RegisterStudent;
