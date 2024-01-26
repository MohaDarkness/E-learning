import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import FeatherIcon from "feather-icons-react";
import { pagination, Table } from "antd";
import { onShowSizeChange, itemRender } from "../../Pagination"
import Header from '../../Header/Header'
import SideBar from '../../SideBar/SideBar'
import Footer from '../../Footer/Footer';

const SectionsList = () => {
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);

    const onSelectChange = (newSelectedRowKeys) => {
        console.log("selectedRowKeys changed: ", selectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
    };

    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };

    const CourseId = 100245;
    const CourseName = "Data Structures and Algorithms"

    const datasource =
        [
            {
                id: "1",
                SectionNum: "100245-1",
                Days: "S T T",
                Time: "8:00 - 9:00",
                TeacherName: "Dr. Sara Tadmouri",
                TeacherID : "T1",
                NumberOfStudents: 10,
                Classroom: "101",
                Action: ""
            },
            {
                id: "2",
                SectionNum: "100245-2",
                Days: "S T T",
                Time: "10:00 - 11:00",
                TeacherName: "Dr. Sara Tadmouri",
                TeacherID : "T1",
                NumberOfStudents: 28,
                Classroom: "108",
                Action: ""
            },
            {
                id: "3",
                SectionNum: "100245-3",
                Days: "S T T",
                Time: "13:00 - 14:00",
                TeacherName: "Dr. Ibrahim el Blwi",
                TeacherID : "T2",
                NumberOfStudents: 26,
                Classroom: "110",
                Action: ""
            },
            {
                id: "4",
                SectionNum: "100245-4",
                Days: "M W",
                Time: "8:00 - 9:30",
                TeacherName: "Dr. Raafat al Shorman",
                TeacherID : "T3",
                NumberOfStudents: 21,
                Classroom: "106",
                Action: ""
            },
            {
                id: "5",
                SectionNum: "100245-5",
                Days: "M W",
                Time: "8:00 - 9:30",
                TeacherName: "Dr. Ibrahim el Blwi",
                TeacherID : "T2",
                NumberOfStudents: 25,
                Classroom: "105",
                Action: ""
            },
            {
                id: "6",
                SectionNum: "100245-6",
                Days: "M W",
                Time: "11:00 - 12:30",
                TeacherName: "Dr. Raafat al Shorman",
                TeacherID : "T3",
                NumberOfStudents: 27,
                Classroom: "101",
                Action: ""
            },
        ]
    const column = [
        {
            title: "Section ID",
            dataIndex: "SectionNum",
            sorter: (a, b) => a.SectionID.length - b.SectionID.length,
        },
        {
            title: "Day",
            dataIndex: "Days",
            sorter: (a, b) => a.MyColumn.length - b.MyColumn.length
        },
        {
            title: "Time",
            dataIndex: "Time",
            sorter: (a, b) => a.MyColumn.length - b.MyColumn.length
        },
        {
            title: "Teacher",
            dataIndex: "TeacherName",
            sorter: (a, b) => a.Class.length - b.Class.length
        },
        {
            title: "Teacher ID",
            dataIndex: "TeacherID",
            sorter: (a, b) => a.Class.length - b.Class.length
        },
        {
            title: "# Students",
            dataIndex: "NumberOfStudents",
            sorter: (a, b) => a.Class.length - b.Class.length
        },
        {
            title: "Classroom",
            dataIndex: "Classroom",
            sorter: (a, b) => a.Class.length - b.Class.length
        },
        {
            title: "Actions",
            dataIndex: "Action",
            render: (text, record) => (
                <>
                    <div className="actions">
                        <Link to="/editSection" className="btn btn-sm bg-danger-light">
                            <i className="feather-edit">
                                <FeatherIcon icon="edit" className="list-edit"/>
                            </i>
                        </Link>
                        <Link to="#" className="btn btn-sm bg-success-light me-2 trash">
                            <i className="feather-trash-2">
                                <FeatherIcon icon="trash-2"/>
                            </i>
                        </Link>
                    </div>
                </>
            )
        },

    ]
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
                                    <h3 className="page-title"> ({CourseId}) {CourseName} Sections</h3>
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
                                            <Table class="table table-stripped table-hover datatable"
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
    )
}

export default SectionsList
