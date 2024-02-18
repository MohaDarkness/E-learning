import React from "react";
import { Link } from "react-router-dom";
import SideBar from "../../SideBar/SideBar";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import { pagination, Table } from "antd";
import {
  img1,
  img10,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
} from "../../imagepath";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import { onShowSizeChange, itemRender } from "../../Pagination";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import LoadingPage from "../Authentication/LoadingPage";

const Students = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const URL = "http://localhost:3000/students";
  const [datasource, setDatasource] = useState([]);
  const [deleteStatus, setDeleteStatus] = useState(null);
  const [deletedStudentName, setDeletedStudentName] = useState(null);
  const userRole = Cookies.get("role");

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(URL, { withCredentials: true });
        setDatasource(res.data);
        console.log(res.data);
      } catch (err) {
        console.log(err);
        if (err.response.status === 401 || err.response.status === 403)
          history.push("/error404");
      }
    }
    fetchData()
      .then(() => {
        setLoading(false);
        console.log("data fetched");
      })
      .catch((err) => {
        console.log("an error occurred " + err);
      });
  }, []);

  const handleDeleteStudent = async (userId) => {
    try {
      console.log(userId);
      await axios.delete(`${URL}/${userId}`, { withCredentials: true });
      setDatasource(datasource.filter((student) => student.userId !== userId));
      setDeleteStatus("success");
    } catch (err) {
      setDeleteStatus("error");
      console.log(err);
    }
  };

  const autoCloseMessage = (message) => {
    var t;
    Swal.fire({
      title: message.Title,
      html: message.Body,

      confirmButtonClass: "btn btn-primary",
      buttonsStyling: !1,
      onBeforeOpen: function () {
        Swal.showLoading(),
          (t = setInterval(function () {
            Swal.getContent().querySelector("strong").textContent =
              Swal.getTimerLeft();
          }, 100));
      },
      onClose: function () {
        clearInterval(t);
      },
    }).then(function (t) {
      t.dismiss === Swal.DismissReason.timer &&
        console.log("I was closed by the timer");
      setDeleteStatus(null);
    });
  };

  const column = [
    {
      title: "ID",
      dataIndex: "userId",
      sorter: (a, b) => a.userId.slice(3) - b.userId.slice(3),
    },
    {
      title: "Name",
      dataIndex: "name",
      sorter: (a, b) => (a.name > b.name ? 1 : -1),
      render: (text, record) => (
        <>
          <h2 className="table-avatar">
            <Link
              to={{
                pathname: `/userview/${record.userId}`,
              }}
              className="avatar avatar-sm me-2 "
            >
              <img
                className="avatar-img rounded-circle"
                src={img10}
                alt="User Image"
              />
            </Link>
            <Link className="text-dark" to={`/userview/${record.userId}`}>
              {record.name}
            </Link>
          </h2>
        </>
      ),
    },
    {
      title: "Gender",
      dataIndex: "gender",
      sorter: (a, b) => (a.gender > b.gender ? 1 : -1),
    },
    {
      title: "Major",
      dataIndex: "major",
      sorter: (a, b) => (a.major > b.major ? 1 : -1),
    },
    {
      title: "Mobile Number",
      dataIndex: "MobileNumber",
      sorter: (a, b) => a.MobileNumber - b.MobileNumber,
    },
    {
      title: "Action",
      dataIndex: "Action",
      render: (text, record) => (
        <>
          <div className="actions">
            <Link
              to={`/userview/${record.userId}`}
              className="btn btn-sm bg-danger-light"
            >
              <i className="feather-edit">
                <FeatherIcon icon="user" className="user-edit" />
              </i>
            </Link>
            {userRole === "admin" && (
              <>
                <Link
                  to={`/editstudent/${record.userId}`}
                  className="btn btn-sm bg-danger-light"
                >
                  <i className="feather-edit">
                    <FeatherIcon icon="edit" className="list-edit" />
                  </i>
                </Link>
                <Link
                  to="#"
                  className="btn btn-sm bg-success-light me-2 trash"
                  onClick={(e) => {
                    setDeletedStudentName(record.name);
                    handleDeleteStudent(record.userId);
                  }}
                >
                  <i className="feather-trash-2">
                    <FeatherIcon icon="trash-2" />
                  </i>
                </Link>
              </>
            )}
          </div>
        </>
      ),
    },
  ];

  // if (userRole !== "admin") setColumn(column.slice(0, column.length - 1));

  return (
    <div>
      {loading && <LoadingPage />} (
      <>
        <div className="main-wrapper">
          {/* Header */}
          <Header />
          {/* Sidebar */}
          <SideBar />
          {/* Page Wrapper */}
          <div className="page-wrapper">
            <div className="content container-fluid">
              {/* Page Header  */}
              <div className="page-header">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="page-sub-header">
                      <h3 className="page-title">Students</h3>
                      <ul className="breadcrumb">
                        {/*Delete Status Message*/}

                        <li className="breadcrumb-item">
                          <Link to="/students">Student</Link>
                        </li>

                        {/* Auth This is only for admin otherwise it's gonna "tch: your students" or "std: your colleague" */}
                        <li className="breadcrumb-item active">All Students</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="student-group-form">
                <div className="row">
                  <div className="col-lg-3 col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search by ID ..."
                      />
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search by Name ..."
                      />
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search by Phone ..."
                      />
                    </div>
                  </div>
                  <div className="col-lg-2">
                    <div className="search-student-btn">
                      <button type="btn" className="btn btn-primary">
                        Search
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <div className="card card-table comman-shadow">
                    <div className="card-body">
                      {/* Page Header */}
                      <div className="page-header">
                        <div className="row align-items-center">
                          <div className="col">
                            <h3 className="page-title">Students</h3>
                          </div>

                          <div className="col-auto text-end float-end ms-auto download-grp">
                            <Link
                              to="/registerstudent"
                              className="btn btn-primary"
                            >
                              <i className="fas fa-plus" />
                            </Link>
                          </div>
                        </div>
                        {deleteStatus === "success" &&
                          autoCloseMessage({
                            Title: "Delete Successfully",
                            Body: `Student ${deletedStudentName} been deleted successfully`,
                          })}
                        {deleteStatus === "error" && (
                          <div
                            className="row align-items-center"
                            style={{
                              marginTop: "20px",
                            }}
                          >
                            <div
                              className="alert alert-danger alert-dismissible fade show"
                              role="alert"
                            >
                              <strong>
                                Something went wrong, Delete unsuccessfully
                              </strong>
                              <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="alert"
                                aria-label="Close"
                                onClick={() => {
                                  setDeleteStatus(null);
                                }}
                              />
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="table-responsive">
                        <Table
                          pagination={{
                            total: datasource.length,
                            showTotal: (total, range) =>
                              `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                            showSizeChanger: true,
                            onShowSizeChange: onShowSizeChange,
                            itemRender: itemRender,
                          }}
                          columns={column}
                          dataSource={datasource}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Footer />
          {/* /Page Wrapper */}
        </div>
        {/* /Main Wrapper */}
      </>
      )
    </div>
  );
};

export default Students;
