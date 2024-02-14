import React, { useState } from "react";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Header from "../../Header/Header";
import SideBar from "../../SideBar/SideBar";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import Select from "react-select";
import * as XLSX from 'xlsx';
import { useParams } from "react-router-dom";

const AssignStudent = () => {
  const SectionObject = {'CourseName': 'Algorithms',
                          'SectionNumber' : 2,
                        'SectionId':useParams()["SectionId"]}

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
  
  const requiredKeys = ["StudentId"];
  // submit event
  const handleFileSubmit=(e)=>{
    e.preventDefault();
    if(excelFile!==null){
      const workbook = XLSX.read(excelFile,{type: 'buffer'});
      const worksheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[worksheetName];
      const data = XLSX.utils.sheet_to_json(worksheet);
      
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
                    <h3 className="page-title">{`${SectionObject.CourseName} Section ${SectionObject.SectionNumber}`}</h3>
                    <ul className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link to="/sections"> Sections </Link>
                      </li>
                      <li className="breadcrumb-item active">Assign Students</li>
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
                            Assign One Student{" "}
                          </h5>
                        </div>
                        <div className="col-12 col-sm-4">
                          <div className="form-group local-forms">
                            <label>
                              Section ID <span className="login-danger">*</span>
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              placeholder="STD-XXXXX"
                              disabled
                              value={SectionObject.SectionId}
                            />
                          </div>
                        </div>
                        <div className="col-12 col-sm-4">
                          <div className="form-group local-forms">
                            <label>
                              Student ID <span className="login-danger">*</span>
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              placeholder="(STD-XXXXX)"
                            />
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
                            Assign Multiple Students{" "}
                          </h5>
                        </div>
                      </div>
                      <div className="form-group row">
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
                              Submit Excel
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

export default AssignStudent;
