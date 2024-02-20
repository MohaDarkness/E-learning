import React from "react";
import { Link } from "react-router-dom";
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

const SectionsList = () => {
  //courseID
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [datasource, setDataSource] = useState([]);
  const [teachers, setTeachers] = useState(null);
  const { courseId } = useParams();
  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const CourseId = 100245; // to request from the back-end
  const CourseName = "Data Structures and Algorithms";

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
              to={`/courseInfo/${record.sectionId}`}
              className="btn btn-sm bg-success-light me-2"
              onClick={() => handleButtonClick(record.id)}
            >
              <i className="list">
                <FeatherIcon icon="list" />
              </i>
            </Link>
            <Link
              to={`/assignstudent/${record.sectionId}`}
              className="btn btn-sm bg-danger-light"
            >
              <i className="feather-edit">
                <FeatherIcon icon="user-plus" className="list-edit" />
              </i>
            </Link>
            <Link to="/editSection" className="btn btn-sm bg-danger-light">
              <i className="feather-edit">
                <FeatherIcon icon="edit" className="list-edit" />
              </i>
            </Link>
            <Link to="#" className="btn btn-sm bg-success-light me-2 trash">
              <i className="feather-trash-2">
                <FeatherIcon icon="trash-2" />
              </i>
            </Link>
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
                      placeholder="Search by Class ..."
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
                <div className="card card-table">
                  <div className="card-body">
                    {/* Page Header */}
                    <div className="page-header">
                      <div className="row align-items-center">
                        <div className="col">
                          <h3 className="page-title">{CourseName} Sections</h3>
                        </div>
                        <div className="col-auto text-end float-end ms-auto">
                          <Link to="/addSection" className="btn btn-primary">
                            <i className="fas fa-plus" />
                          </Link>
                        </div>
                      </div>
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
