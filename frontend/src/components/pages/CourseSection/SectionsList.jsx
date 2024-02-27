import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import FeatherIcon from "feather-icons-react";
import { pagination, Table } from "antd";
import { onShowSizeChange, itemRender } from "../../Pagination";
import Header from "../../Header/Header";
import SideBar from "../../SideBar/SideBar";
import Footer from "../../Footer/Footer";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Cookies from "js-cookie";

const SectionsList = () => {
  const role = Cookies.get("role");
  //courseID
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [datasource, setDataSource] = useState([]);
  const [teachers, setTeachers] = useState(null);
  const { courseId } = useParams();
  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const [deletedSectionId, setDeletedSectionId] = useState("");
  const [deleteStatus, setDeleteStatus] = useState("");

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const path = useLocation().pathname.split("/");
  const CourseId = path[2]; // to request from the back-end
  const CourseName = datasource["course"];

  const URL = "http://localhost:3000/section";
  const myJson = [];
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(`${URL}/${courseId}`, {
          withCredentials: true,
        });

        setDataSource(res.data);
        // console.log(res.data.sections[0]);
        setDataSource(
          res.data.sections.map((oneSection) => {
            return { ...oneSection.section, ...oneSection.teacher };
          })
        );
      } catch (err) {
        console.log(err);
        if (err.response.status === 401 || err.response.status === 403)
          history.push("/error404");
      }
    }
    fetchData()
      .then(() => {
        // setLoading(false);
      })
      .catch((err) => {
        console.log("an error occurred " + err);
      });
  }, []);
  console.log(datasource);

  const DELTET_URL = "http://localhost:3000/sections";
  const handleDeleteSection = async (sectionId) => {
    console.log("inside the handle delete");
    try {
      console.log(sectionId);
      console.log("we are here!!!");
      await axios.delete(`${DELTET_URL}/${sectionId}`, {
        withCredentials: true,
      });
      setDataSource(
        datasource.filter((section) => section.sectionId !== sectionId)
      );
      setDeleteStatus("success");
    } catch (err) {
      console.log("we are here");
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
      title: "Section ID",
      dataIndex: "sectionId",
      sorter: (a, b) => a.SectionID.length - b.SectionID.length,
    },
    {
      title: "Day",
      dataIndex: "days",
      sorter: (a, b) => a.MyColumn.length - b.MyColumn.length,
    },
    {
      title: "Time",
      dataIndex: "time",
      sorter: (a, b) => a.MyColumn.length - b.MyColumn.length,
    },
    {
      title: "Teacher",
      dataIndex: "name",
      sorter: (a, b) => a.Class.length - b.Class.length,
    },
    {
      title: "Teacher ID",
      dataIndex: "userId",
      sorter: (a, b) => a.Class.length - b.Class.length,
    },
    {
      title: "# Students",
      dataIndex: "",
      sorter: (a, b) => a.Class.length - b.Class.length,
      render: (text, record) => (
        <>
          <p className="table-avatar">{record.students.length}</p>
        </>
      ),
    },
    {
      title: "Classroom",
      dataIndex: "room",
      sorter: (a, b) => a.Class.length - b.Class.length,
    },
    {
      title: "Actions",
      dataIndex: "Action",
      render: (text, record) => (
        <>
          <div className="actions">
            <Link
              to={`/sectionMaterial/${record.sectionId}`}
              className="btn btn-sm bg-success-light me-2"
            >
              <i className="list">
                <FeatherIcon icon="list" />
              </i>
            </Link>
            {role === "admin" && (
              <div>
                <Link
                  to={`/assignstudent/${record.sectionId}`}
                  className="btn btn-sm bg-danger-light"
                >
                  <i className="feather-edit">
                    <FeatherIcon icon="user-plus" className="list-edit" />
                  </i>
                </Link>
                <Link
                  to={`/editSection/${record.sectionId}`}
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
                    setDeletedSectionId(record.name);
                    handleDeleteSection(record.sectionId);
                  }}
                >
                  <i className="feather-trash-2">
                    <FeatherIcon icon="trash-2" />
                  </i>
                </Link>
              </div>
            )}
          </div>
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
                  <h3 className="page-title">
                    {" "}
                    ({CourseId}) {CourseName} Sections
                  </h3>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/admindashboard">Dashboard</Link>
                    </li>
                    <li className="breadcrumb-item active">Sections</li>
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
                          <h3 className="page-title">{CourseName} Sections</h3>
                        </div>
                        {role === "admin" && (
                          <div className="col-auto text-end float-end ms-auto">
                            <Link
                              to={`/addSection/${courseId}`}
                              className="btn btn-primary"
                            >
                              <i className="fas fa-plus" />
                            </Link>
                          </div>
                        )}
                      </div>
                      {deleteStatus === "success" &&
                        autoCloseMessage({
                          Title: "Delete Successfully",
                          Body: `Student ${deletedSectionId} been deleted successfully`,
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
                        rowSelection={rowSelection}
                        rowKey={(record) => record.id}
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

export default SectionsList;
