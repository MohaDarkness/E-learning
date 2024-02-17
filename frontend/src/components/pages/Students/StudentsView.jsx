import React from 'react'
import { Link } from 'react-router-dom';
import Header from '../../Header/Header';
import SideBar from '../../SideBar/SideBar';
import Footer from '../../Footer/Footer';
import { bulidingicon, profilebg, profileuser } from '../../imagepath'
import FeatherIcon from 'feather-icons-react/build/FeatherIcon'
import { useParams } from 'react-router-dom';

import studentsData from "../../../data/studentsData.json";

const StudentsView = () => {
    const {studentId} = useParams();
    
    // Must have end point sending student ID and recieving his/her data... now its just a bullshit
    const student = studentsData.filter((student)=> {return student['StudentId'] == studentId})[0];

    return (
        <>
            console.log(studentInfo.name);
            <div className="main-wrapper">
                {/* Header */}
                <Header />

                {/* Sidebar */}
                <SideBar />

                {/* Page Wrapper */}
                <div className="page-wrapper">
                    <div className="content container-fluid">
                        <div className="page-header">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="page-sub-header">
                                        <h3 className="page-title">Student Details</h3>
                                        <ul className="breadcrumb">
                                            <li className="breadcrumb-item">
                                                <Link to="/students">Student</Link>
                                            </li>
                                            <li className="breadcrumb-item active">Student Details</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="about-info">
                                            <h4>
                                                Profile{" "}
                                                <span>
                                                    <Link to="#">
                                                        <i className="feather-more-vertical">
                                                            <FeatherIcon icon="more-vertical" />
                                                        </i>
                                                    </Link>
                                                </span>
                                            </h4>
                                        </div>
                                        <div className="student-profile-head">
                                            
                                            <div className="row">
                                                <div className="col-lg-6 col-md-6">
                                                    <div className="profile-user-box">
                                                        <div className="profile-user-img">
                                                            <img src={profileuser} alt="Profile" />
                                                            <div className="form-group students-up-files profile-edit-icon mb-0">
                                                                <div className="uplod d-flex">
                                                                    <label className="file-upload profile-upbtn mb-0">
                                                                        <i className="feather-edit-3">
                                                                            <FeatherIcon icon="edit-3" />
                                                                        </i>
                                                                        <input type="file" />
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="names-profiles">
                                                            <h4>{student?.Name}</h4>
                                                            <h5>{student?.Major}</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                <div className="col-lg-6 col-md-6 d-flex align-items-center">
                                                    <div className="follow-btn-group">
                                                        <button type="submit" className="btn btn-info message-btns">
                                                            Message
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-4">
                                        <div className="student-personals-grp">
                                            <div className="card">
                                                <div className="card-body">
                                                    <div className="heading-detail">
                                                        <h4>Personal Details :</h4>
                                                    </div>
                                                    <div className="personal-activity">
                                                        <div className="personal-icons">
                                                            <i className="feather-user">
                                                                <FeatherIcon icon="user" />
                                                            </i>
                                                        </div>
                                                        <div className="views-personal">
                                                            <h4>Name</h4>
                                                            <h5>{student?.Name}</h5>
                                                        </div>
                                                    </div>
                                                    <div className="personal-activity">
                                                        <div className="personal-icons">
                                                            <img src={bulidingicon} alt="" />
                                                        </div>
                                                        <div className="views-personal">
                                                            <h4>Major </h4>
                                                            <h5>{student?.Major}</h5>
                                                        </div>
                                                    </div>
                                                    <div className="personal-activity">
                                                        <div className="personal-icons">
                                                            <i className="feather-phone-call">
                                                                <FeatherIcon icon="phone-call" />
                                                            </i>
                                                        </div>
                                                        <div className="views-personal">
                                                            <h4>Mobile</h4>
                                                            <h5>{student?.MobileNumber}</h5>
                                                        </div>
                                                    </div>
                                                    <div className="personal-activity">
                                                        <div className="personal-icons">
                                                            <i className="feather-mail">
                                                                <FeatherIcon icon="mail" />
                                                            </i>
                                                        </div>
                                                        <div className="views-personal">
                                                            <h4>Email</h4>
                                                            <h5>{`${student?.Name.split(' ')[0]}@gmail.com`}</h5>
                                                        </div>
                                                    </div>
                                                    <div className="personal-activity">
                                                        <div className="personal-icons">
                                                            <i className="feather-user">
                                                                <FeatherIcon icon="user" />
                                                            </i>
                                                        </div>
                                                        <div className="views-personal">
                                                            <h4>Gender</h4>
                                                            <h5>{student?.Gender}</h5>
                                                        </div>
                                                    </div>
                                                    <div className="personal-activity">
                                                        <div className="personal-icons">
                                                            <i className="feather-calendar">
                                                                <FeatherIcon icon="calendar" />
                                                            </i>
                                                        </div>
                                                        <div className="views-personal">
                                                            <h4>Year Of Birth</h4>
                                                            <h5>{student?.YearOfBirth}</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div className="col-lg-8">
                                        <div className="student-personals-grp">
                                            <div className="card mb-0">
                                                <div className="card-body">
                                                    <div className="heading-detail">
                                                        <h4>About Me</h4>
                                                    </div>
                                                    <div className="hello-park">
                                                        <h5>Hello I am {student?.Name}</h5>
                                                        <p>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                                            sed do eiusmod tempor incididunt ut labore et dolore magna
                                                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                                            ullamco laboris nisi ut aliquip ex commodo consequat. Duis
                                                            aute irure dolor in reprehenderit in voluptate velit esse
                                                            cillum dolore eu fugiat nulla pariatur. Excepteur officia
                                                            deserunt mollit anim id est laborum.
                                                        </p>
                                                    </div>
                                                    
                                                </div>
                                            </div>
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

export default StudentsView
