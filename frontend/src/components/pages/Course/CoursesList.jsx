import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import FeatherIcon from "feather-icons-react";
import { pagination, Table } from "antd";
import { onShowSizeChange, itemRender } from "../../Pagination";
import Header from "../../Header/Header";
import SideBar from "../../SideBar/SideBar";
import Footer from "../../Footer/Footer";
import { useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Cookies from "js-cookie";

const CourseList = () => {
  const userRole = Cookies.get("role");

  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [datasource, setDatasource] = useState([
    { courseId: "", name: "", department: "", sections: [], hours: "" },
  ]);
  const [deletedCourseName, setDeletedCourseName] = useState(null);
  const [deleteStatus, setDeleteStatus] = useState(null);

  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const URL = "http://localhost:3000/courses";
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(URL, { withCredentials: true });
        console.log("are we here??");
        console.log(res.data);
        setDatasource(res.data);
        console.log(datasource);
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

  const handleDeleteCourse = async (courseId) => {
    try {
      console.log(courseId);
      await axios.delete(`${URL}/${courseId}`, { withCredentials: true });
      setDatasource(
        datasource.filter((course) => course.courseId !== courseId)
      );
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
      dataIndex: "courseId",
      sorter: (a, b) => a.DepartmentID.length - b.DepartmentID.length,
    },
    {
      title: "Course Name",
      dataIndex: "name",
      sorter: (a, b) => a.name.length - b.name.length,
      render: (text, record) => (
        <>
          <p className="table-avatar">
            {
              record?.name
              // .split(" ")
              // .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              // .join(" ")
            }
          </p>
        </>
      ),
    },
    {
      title: "Department",
      dataIndex: "department",
      sorter: (a, b) => a.Name.length - b.Name.length,
      render: (text, record) => (
        <>
          <p className="table-avatar">
            {
              record?.department
              // .split(" ")
              // .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              // .join(" ")
            }
          </p>
        </>
      ),
    },
    {
      title: "Number of Sections",
      dataIndex: "",
      sorter: (a, b) => a.NumOfSections - b.NumOfSections,
      render: (text, record) => (
        <>
          <h2 className="table-avatar">
            <Link
              to={`/sections/${record?.courseId}`}
              className="avatar avatar-sm me-2 "
            >
              {record?.sections.length}
            </Link>
            {/* <Link className='text-dark' to="/userview">{record?.Name}</Link> */}
          </h2>
        </>
      ),
    },
    {
      title: "Credit Hours",
      dataIndex: "hours",
      sorter: (a, b) => a.Name.length - b.Name.length,
    },
    {
      title: "Action",
      dataIndex: "Action",
      render: (text, record) => (
        <>
          {userRole === "admin" && (
            <div className="actions">
              <Link
                to={`/editcourse/${record?.courseId}`}
                className="btn btn-sm bg-danger-light me-2"
              >
                <i className="feather-edit">
                  <FeatherIcon icon="edit" className="list-edit" />
                </i>
              </Link>
              <Link
                to="#"
                className="btn btn-sm bg-success-light me-2 trash"
                onClick={(e) => {
                  setDeletedCourseName(record?.name);
                  handleDeleteCourse(record?.courseId);
                }}
              >
                <i className="feather-trash-2">
                  <FeatherIcon icon="trash-2" />
                </i>
              </Link>
            </div>
          )}
        </>
      ),
    },
  ];

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
                  <h3 className="page-title">Subjects</h3>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/admindashboard">Dashboard</Link>
                    </li>
                    <li className="breadcrumb-item active">Subjects</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* /Page Header */}
            <div className="row">
              <div className="col-sm-12">
                <div className="card card-table">
                  <div className="card-body">
                    {/* Page Header */}
                    <div className="page-header">
                      <div className="row align-items-center">
                        <div className="col">
                          <h3 className="page-title">Courses</h3>
                        </div>
                        <div className="col-auto text-end float-end ms-auto">
                          {userRole === "admin" && (
                            <Link to="/addcourse" className="btn btn-primary">
                              <i className="fas fa-plus" />
                            </Link>
                          )}
                        </div>
                      </div>
                      {deleteStatus === "success" &&
                        autoCloseMessage({
                          Title: "Delete Successfully",
                          Body: `Course ${deletedCourseName} been deleted successfully`,
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
                    {/* /Page Header */}
                    <div className="table-responsive">
                      <Table
                        class="table table-stripped table-hover datatable"
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
                        rowKey={(record) => record?.id}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Footer */}
          <Footer />
        </div>
      </div>
      {/* /Main Wrapper */}
    </>
  );
};

export default CourseList;
