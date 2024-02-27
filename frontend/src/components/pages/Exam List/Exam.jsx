import React from "react";
import Header from "../../Header/Header";
import SideBar from "../../SideBar/SideBar";
import Footer from "../../Footer/Footer";
import { Link } from "react-router-dom";
import { pagination, Table } from "antd";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import { onShowSizeChange, itemRender } from "../../Pagination";
import { useState } from "react";

const Exam = () => {
  const datasource = [
    {
      id: 1,
      ExamName: "First Exam",
      Section: 2,
      Course: "Data Structures and Algorithms",
      StartTime: "10:00 AM",
      EndTime: "11:00 AM",
      Date: "23 Apr 2024",
      Action: "",
    },
    {
      id: 2,
      ExamName: "First Exam",
      Section: 2,
      Course: "Operating Systems",
      StartTime: "12:00 PM",
      EndTime: "1:00 PM",
      Date: "25 Apr 2024",
      Action: "",
    },
  ];

  const column = [
    {
      title: "Exam Name",
      dataIndex: "ExamName",
      sorter: (a, b) => a.ExamName.length - b.ExamName.length,
    },
    {
      title: "Section",
      dataIndex: "Section",
      sorter: (a, b) => a.Section.length - b.Section.length,
    },
    {
      title: "Course",
      dataIndex: "Course",
      sorter: (a, b) => a.Course.length - b.Course.length,
    },
    {
      title: "Start Time",
      dataIndex: "StartTime",
      sorter: (a, b) => a.StartTime.length - b.StartTime.length,
    },
    {
      title: "End Time",
      dataIndex: "EndTime",
      sorter: (a, b) => a.EndTime.length - b.EndTime.length,
    },

    {
      title: "Date",
      dataIndex: "Date",
      sorter: (a, b) => a.Amount.length - b.Amount.length,
    },
    {
      title: "Action",
      dataIndex: "Action",
      render: (text, record) => (
        <>
          <Link to="#" className="btn btn-sm bg-success-light me-2 ">
            <i className="departmenteye feather-eye">
              <FeatherIcon icon="eye" />
            </i>
          </Link>
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
                  <h3 className="page-title">Exam</h3>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/admindashboard">Dashboard</Link>
                    </li>
                    <li className="breadcrumb-item active">Exam</li>
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
                          <h3 className="page-title">Exam</h3>
                        </div>
                        <div className="col-auto text-end float-end ms-auto download-grp">
                          <Link to="/addexam" className="btn btn-primary">
                            <i className="fas fa-plus" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    {/* /Page Header */}
                    <div className="table-responsive">
                      <Table
                        className="table border-0 star-student table-hover table-center mb-0 datatable table-striped dataTable no-footer"
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
                        // rowSelection={rowSelection}
                        // rowKey={(record) => record.id}
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

export default Exam;
