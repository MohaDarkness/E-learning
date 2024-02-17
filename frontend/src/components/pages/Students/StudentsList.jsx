import React from 'react'
import { Link } from 'react-router-dom'
import SideBar from '../../SideBar/SideBar'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'
import { pagination, Table } from "antd"
import {img1, img10, img2, img3, img4, img5, img6, img7, img8, img9 } from "../../imagepath";
import FeatherIcon from 'feather-icons-react/build/FeatherIcon';
import {onShowSizeChange,itemRender} from "../../Pagination"
import { useState } from 'react'

import studentsData from "../../../data/studentsData.json";
    

const Students = () => {
    const datasource = studentsData; //This Must be taken from backend not locally!!!

    const column = [
        {
            title: "ID",
            dataIndex: "StudentId",
            sorter: (a, b) => a.StudentId.slice(3) - b.StudentId.slice(3)
        },
        {
            title: "Name",
            dataIndex: "Name",
            sorter: (a, b) => a.Name > b.Name? 1 : -1,
            render: (text, record) => (
                <>
                    <h2 className="table-avatar">
                        <Link to={{
                            pathname: `/studentsview/${record.StudentId}`,
                            }} className="avatar avatar-sm me-2 ">
                            <img
                                className="avatar-img rounded-circle"
                                src={img10}
                                alt="User Image"
                            />
                        </Link>
                        <Link className='text-dark' to={`/studentsview/${record.StudentId}`}>{record.Name}</Link>
                    </h2>
                </>
            )
        },
        {
            title: "Gender",
            dataIndex: "Gender",
            sorter: (a, b) => a.Gender > b.Gender? 1 : -1
        },
        {
            title: "Major",
            dataIndex: "Major",
            sorter: (a, b) => a.Major > b.Major? 1 : -1,
        },
        {
            title: "Mobile Number",
            dataIndex: "MobileNumber",
            sorter: (a, b) => a.MobileNumber - b.MobileNumber
        },
        {
            title: "Action",
            dataIndex: "Action",
            render: (text, record) => (
                <>
                    <div className="actions">
                        <Link to="/editstudent" className="btn btn-sm bg-danger-light">
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
                    <div class="content container-fluid">
                     {/* Page Header  */}
                        <div class="page-header">
                            <div class="row">
                                <div class="col-sm-12">
                                    <div class="page-sub-header">
                                        <h3 class="page-title">Students</h3>
                                        <ul class="breadcrumb">
                                            <li class="breadcrumb-item"><Link to="/students">Student</Link></li>
                                            
                                             {/* Auth This is only for admin other wise its gonna "tch: your students" or "std: your collegue" */}
                                            <li class="breadcrumb-item active">All Students</li>
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
                                                    <Link to="/registerstudent" className="btn btn-primary">
                                                        <i className="fas fa-plus" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="table-responsive" >
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
}

export default Students
