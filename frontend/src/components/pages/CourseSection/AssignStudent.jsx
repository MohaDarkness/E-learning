import React, { useState } from "react";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Header from "../../Header/Header";
import SideBar from "../../SideBar/SideBar";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import Select from "react-select";
import * as XLSX from "xlsx";
import { useParams } from "react-router-dom";
import axios from "axios";

const AssignStudent = () => {
  const { sectionId } = useParams();

  const [studentId, setStudentId] = useState("");
  const [assignOneStatus, setAssignOneStatus] = useState({
    status: null,
    message: null,
  });
  const [assignManyStatus, setAssignManyStatus] = useState({
    status: null,
    message: null,
  });

  // onchange states
  const [excelFile, setExcelFile] = useState(null);
  const [typeError, setTypeError] = useState(null);

  // submit state
  const [excelData, setExcelData] = useState(null);

  const URL = "http://localhost:3000/sectionStudent";
  const assignOneStudent = (e) => {
    console.log("are we in the one section???");
    e.preventDefault();
    e.currentTarget.disabled = true;

    const data = {
      0: {
        userId: studentId,
      },
    };

    try {
      axios
        .post(`${URL}/${sectionId}`, data, { withCredentials: true })
        .then((res) => {
          console.log(res);
          setAssignOneStatus({
            status: "success",
            message: "Student assigned successfully",
          });
          if (
            res.data === "Some students were already added, we have handled it"
          ) {
            setAssignOneStatus({
              status: "error",
              message: `Student ${studentId} is already assigned to this section`,
            });
          }
        })
        .catch((err) => {
          setAssignOneStatus({
            status: "error",
            message: err.response.data,
          });
        });
    } catch (err) {
      console.log(err);
    }
  };

  // onchange event
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

  const requiredKeys = ["userId"];
  // submit event
  const handleFileSubmit = (e) => {
    e.preventDefault();
    console.log("whateever");
    if (excelFile !== null) {
      const workbook = XLSX.read(excelFile, { type: "buffer" });
      const worksheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[worksheetName];
      const data = XLSX.utils.sheet_to_json(worksheet);

      // setExcelData(data.slice(0,10));
      console.log(data);
      console.log(data[0]);
      for (const key of requiredKeys) {
        if (!data[0].hasOwnProperty(key)) {
          setAssignManyStatus({
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
          .post(`${URL}/${sectionId}`, data, { withCredentials: true })
          .then((res) => {
            console.log(res);
            setAssignManyStatus({
              status: "success",
              message: "Student assigned successfully",
            });
            if (
              res.data ===
              "Some students were already added, we have handled it"
            ) {
              setAssignManyStatus({
                status: "alert",
                message: `One or more students were not assigned becuase they are already assigned to this sectoin`,
              });
            }
          })
          .catch((err) =>
            setAssignManyStatus({
              status: "error",
              message: err.response.data,
            })
          );
      } catch (err) {
        setAssignManyStatus({
          status: "error",
          message: err.response.data,
        });
      }
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
                    <h3 className="page-title">{`Section ${sectionId}`}</h3>
                    <ul className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link to="/sections"> Sections </Link>
                      </li>
                      <li className="breadcrumb-item active">
                        Assign Students
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
                    <form onSubmit={assignOneStudent}>
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
                              value={sectionId}
                            />
                          </div>
                        </div>
                        <div className="col-12 col-sm-4">
                          <div className="form-group local-forms">
                            <label>
                              Student ID <span className="login-danger">*</span>
                            </label>
                            <input
                              required
                              className="form-control"
                              type="text"
                              value={studentId}
                              onChange={(e) => {
                                setStudentId(e.target.value);
                              }}
                            />
                          </div>
                        </div>
                        <div className="col-4">
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
                        {assignOneStatus.status === "error" && (
                          <div
                            className="alert alert-danger alert-dismissible fade show"
                            role="alert"
                            onClick={() => {
                              setAssignOneStatus({
                                status: null,
                                message: null,
                              });
                            }}
                          >
                            <strong>{assignOneStatus.message}</strong>
                          </div>
                        )}
                        {assignOneStatus.status === "success" && (
                          <div
                            className="alert alert-success alert-dismissible fade show"
                            role="alert"
                            onClick={() => {
                              setAssignOneStatus({
                                status: null,
                                message: null,
                              });
                            }}
                          >
                            <strong>{assignOneStatus.message}</strong>
                          </div>
                        )}
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
                          <input
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
                        <div className="student-submit">
                          <button type="submit" className="btn btn-primary" on>
                            Submit Excel
                          </button>
                        </div>
                      </div>
                      {assignManyStatus.status === "error" && (
                        <div
                          className="alert alert-danger alert-dismissible fade show"
                          role="alert"
                          onClick={() => {
                            setAssignManyStatus({
                              status: null,
                              message: null,
                            });
                          }}
                        >
                          <strong>{assignManyStatus.message}</strong>
                        </div>
                      )}
                      {assignManyStatus.status === "alert" && (
                        <div
                          className="alert alert-warning alert-dismissible fade show"
                          role="alert"
                          onClick={() => {
                            setAssignManyStatus({
                              status: null,
                              message: null,
                            });
                          }}
                        >
                          <strong>{assignManyStatus.message}</strong>
                        </div>
                      )}
                      {assignManyStatus.status === "success" && (
                        <div
                          className="alert alert-success alert-dismissible fade show"
                          role="alert"
                          onClick={() => {
                            setAssignManyStatus({
                              status: null,
                              message: null,
                            });
                          }}
                        >
                          <strong>{assignManyStatus.message}</strong>
                        </div>
                      )}
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
