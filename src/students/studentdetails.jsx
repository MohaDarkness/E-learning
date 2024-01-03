
import React , {components, useState} from 'react';
import { Link } from 'react-router-dom'
import { Row, Col, Card, Media, ProgressBar, Form, Button } from "react-bootstrap";
import Header from "../header";
import Sidebar from '../sidebar';
import userImg from '../assets/img/user.jpg';

const Studentdetails = (props) => {
   
    return (
<>
		{/* // <!-- Main Wrapper --> */}
		<div className="main-wrapper">
			<Header />
			<Sidebar />

			{/* <!-- Page Wrapper --> */}
			<div className="page-wrapper">
                <div className="content container-fluid">
				
					{/* <!-- Page Header --> */}
					<div className="page-header">
						<div className="row">
							<div className="col-sm-12">
								<h3 className="page-title">Student Details</h3>
								<ul className="breadcrumb">
									<li className="breadcrumb-item"><Link to="/students">Student</Link></li>
									<li className="breadcrumb-item active">Student Details</li>
								</ul>
							</div>
						</div>
					</div>
					{/* <!--/ Page Header --> */}

					<div className="card">
						<div className="card-body">
							<div className="row">
								<div className="col-md-12">
									<div className="about-info">
										<h4>About Me</h4>
										
										<div className="media mt-3 d-flex">
											<img src={userImg} className="me-3 flex-shrink-0" alt="..."/>
											<div className="media-body flex-grow-1">
												<ul>
                                                    <li>
                                                        <span className="title-span">Full Name : </span>
                                                        <span className="info-span">Daisy Parks</span>
                                                    </li>
                                                    <li>
                                                        <span className="title-span">Department : </span>
                                                        <span className="info-span">Computer Science</span>
                                                    </li>
                                                    <li>
                                                        <span className="title-span">Mobile : </span>
                                                        <span className="info-span">+91 89657 48512</span>
                                                    </li>
                                                    <li>
                                                        <span className="title-span">Email : </span>
                                                        <span className="info-span">daisy@gmail.com</span>
                                                    </li>
                                                    <li>
                                                        <span className="title-span">Gender : </span>
                                                        <span className="info-span">Male</span>
                                                    </li>
                                                    <li>
                                                        <span className="title-span">DOB : </span>
                                                        <span className="info-span">22 Apr 1995</span>
                                                    </li>
                                                </ul>
											</div>
										</div>

										<div className="row mt-3">
											<div className="col-md-12">
												<p>Hello I am Daisy Parks. Lorem Ipsum is simply dummy text of the printing and typesetting industry, simply dummy text of the printing and typesetting industry.</p>
											</div>                                            
										</div>
										
										<div className="row follow-sec">
                                            <div className="col-md-4 mb-3">
                                                <div className="blue-box">
                                                    <h3>2850</h3>
                                                    <p>Followers</p>
                                                </div>
                                            </div>
                                            <div className="col-md-4 mb-3">
                                                <div className="blue-box">
                                                    <h3>2050</h3>
                                                    <p>Following</p>
                                                </div>
                                            </div>
                                            <div className="col-md-4 mb-3">
                                                <div className="blue-box">
                                                    <h3>2950</h3>
                                                    <p>Friends</p>
                                                </div>
                                            </div>
										</div>
										
										<div className="row mt-2">
											<div className="col-md-12">
												<h5>Permanent Address</h5>
												<p>480, Estern Avenue, Courtage area, New York</p>
											</div>                                            
                                        </div>

                                        <div className="row mt-2">
											<div className="col-md-12">
												<h5>Present Address</h5>
												<p>480, Estern Avenue, Courtage area, New York</p>
											</div>                                            
                                        </div>
									</div>
								</div>								
							</div>

							<div className="row mt-2">
								<div className="col-md-12">
									<div className="skill-info">
										<h4>Skills</h4>
										<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry, simply dummy text of the printing and typesetting industry</p>
										
									<ul>
                                        <li>
                                            <label>Lorem Ipsum is simply</label>
                                            <ProgressBar animated striped variant="info" now={75} />
                                        </li>
                                        <li>
                                            <label>Lorem Ipsum is simply</label>
                                            <ProgressBar animated striped variant="success" now={69} />
                                        </li>
                                        <li>
                                            <label>Lorem Ipsum is simply</label>
                                            <ProgressBar animated striped variant="info" now={86} />
                                        </li>
                                        <li>
                                            <label>Lorem Ipsum is simply</label>
                                            <ProgressBar animated striped variant="warning" now={65} />
                                        </li>
                                    </ul>
										
										
										<div className="row mt-3">
											<div className="col-md-12">
												<h5>Education</h5>
												<p className="mt-3">Secondary Schooling at xyz school of secondary education, Mumbai.</p>
												<p>Higher Secondary Schooling at xyz school of higher secondary education, Mumbai.</p>
												<p>Bachelor of Science at Abc College of Art and Science, Chennai.</p>
												<p>Master of Science at Cdm College of Engineering and Technology, Pune.</p>
											</div>                                            
										</div>
										
										<div className="row mt-3">
											<div className="col-md-12">
												<h5>Certificates</h5>
												<p className="mt-3">1st Prise in Running Competition.</p>
												<p>Lorem Ipsum is simply dummy text.</p>
												<p>Won overall star student in higher secondary education.</p>
												<p>Lorem Ipsum is simply dummy text.</p>
											</div>                                            
                                        </div>
									</div>
								</div>
							</div>

							<div className="row mt-2">
								<div className="col-md-12">
									<div className="skill-info">
										<h4>Settings</h4>

										<form>
											<div className="row mt-3">
												<div className="col-12 col-sm-6">  
													<div className="form-group">
														<label>Username</label>
														<input type="text" className="form-control"/>
													</div>
												</div>
												<div className="col-12 col-sm-6">  
													<div className="form-group">
														<label>Current Password</label>
														<input type="password" className="form-control"/>
													</div>
												</div>
												<div className="col-12 col-sm-6">  
													<div className="form-group">
														<label>New Password</label>
														<input type="password" className="form-control"/>
													</div>
												</div>
												<div className="col-12">
													<button type="submit" className="btn btn-primary">Submit</button>
												</div>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>				
				</div>
				
				{/* <!-- Footer --> */}
				<footer>
					<p>Copyright © 2020 Dreamguys.</p>					
				</footer>
				{/* <!-- /Footer --> */}

			</div>
			{/* <!-- /Page Wrapper --> */}

		</div>
		{/* // <!-- /Main Wrapper --> */}

		</>
    );
}

export default Studentdetails;
