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

const CourseList = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [datasource, setDatasource] = useState([]);

  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const handleButtonClick = (id) => {
    console.log(id);
  };

  const URL = "http://localhost:3000/courses";
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(URL, { withCredentials: true });
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
            {record.name
              .split(" ")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ")}
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
            {record.department
              .split(" ")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ")}
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
              to={`/sections/${record.courseId}`}
              className="avatar avatar-sm me-2 "
            >
              {record.sections.length}
            </Link>
            {/* <Link className='text-dark' to="/userview">{record.Name}</Link> */}
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
          <div className="actions">
            <Link to="/editsubject" className="btn btn-sm bg-danger-light me-2">
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
                          <h3 className="page-title">Courses</h3>
                        </div>
                        <div className="col-auto text-end float-end ms-auto">
                          <Link to="/addcourse" className="btn btn-primary">
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

export default CourseList;
