
import React from 'react';
import Header from "../header";
import Sidebar from '../sidebar';
import ApexCharts from 'apexcharts';
import proPic from '../assets/img/profiles/avatar-02.jpg';

const Profile = (props) => {
   
    return (

		<div className="main-wrapper">
			<Header />
			<Sidebar />
            <div className="page-wrapper">
                <div className="content container-fluid">									
					<div className="page-header">
						<div className="row">
							<div className="col">
								<h3 className="page-title">Profile</h3>
								<ul className="breadcrumb">
									<li className="breadcrumb-item"><a href="index/html">Dashboard</a></li>
									<li className="breadcrumb-item active">Profile</li>
								</ul>
							</div>
						</div>
					</div>
			
					
					<div className="row">
						<div className="col-md-12">
							<div className="profile-header">
								<div className="row align-items-center">
									<div className="col-auto profile-image">
										<a href="#">
                                        <img className="rounded-circle" alt="User Image" src={proPic} />
										</a>
									</div>
									<div className="col me-md-n2 profile-user-info">
										<h4 className="user-name mb-0">John Doe</h4>
										<h6 className="text-muted">UI/UX Design Team</h6>
										<div className="user-Location"><i className="fas fa-map-marker-alt"></i> Florida, United States</div>
										<div className="about-text">Lorem ipsum dolor sit amet.</div>
									</div>
									<div className="col-auto profile-btn">
										
										<a href="" className="btn btn-primary">
											Edit
										</a>
									</div>
								</div>
							</div>
							<div className="profile-menu">
								<ul className="nav nav-tabs nav-tabs-solid">
									<li className="nav-item">
										<a className="nav-link active" data-bs-toggle="tab" href="#per_details_tab">About</a>
									</li>
									<li className="nav-item">
										<a className="nav-link" data-bs-toggle="tab" href="#password_tab">Password</a>
									</li>
								</ul>
							</div>	
							<div className="tab-content profile-tab-cont">
								
							
								<div className="tab-pane fade show active" id="per_details_tab">
								
								
									<div className="row">
										<div className="col-lg-9">
											<div className="card">
												<div className="card-body">
													<h5 className="card-title d-flex justify-content-between">
														<span>Personal Details</span> 
														<a className="edit-link" data-bs-toggle="modal" href="#edit_personal_details"><i className="far fa-edit me-1"></i>Edit</a>
													</h5>
													<div className="row">
														<p className="col-sm-3 text-muted text-sm-end mb-0 mb-sm-3">Name</p>
														<p className="col-sm-9">John Doe</p>
													</div>
													<div className="row">
														<p className="col-sm-3 text-muted text-sm-end mb-0 mb-sm-3">Date of Birth</p>
														<p className="col-sm-9">24 Jul 1983</p>
													</div>
													<div className="row">
														<p className="col-sm-3 text-muted text-sm-end mb-0 mb-sm-3">Email ID</p>
														<p className="col-sm-9">johndoe@example.com</p>
													</div>
													<div className="row">
														<p className="col-sm-3 text-muted text-sm-end mb-0 mb-sm-3">Mobile</p>
														<p className="col-sm-9">305-310-5857</p>
													</div>
													<div className="row">
														<p className="col-sm-3 text-muted text-sm-end mb-0">Address</p>
														<p className="col-sm-9 mb-0">4663  Agriculture Lane,<br />
														Miami,<br />
														Florida - 33165,<br />
														United States.</p>
													</div>
												</div>
											</div>
											
										</div>

										<div className="col-lg-3">
											
										
											<div className="card">
												<div className="card-body">
													<h5 className="card-title d-flex justify-content-between">
														<span>Account Status</span>
														<a className="edit-link" href="#"><i className="far fa-edit me-1"></i> Edit</a>
													</h5>
													<button className="btn btn-success" type="button"><i className="fe fe-check-verified"></i> Active</button>
												</div>
											</div>
										
											<div className="card">
												<div className="card-body">
													<h5 className="card-title d-flex justify-content-between">
														<span>Skills </span> 
														<a className="edit-link" href="#"><i className="far fa-edit me-1"></i> Edit</a>
													</h5>
													<div className="skill-tags">
														<span>Html5</span>
														<span>CSS3</span>
														<span>WordPress</span>
														<span>Javascript</span>
														<span>Android</span>
														<span>iOS</span>
														<span>Angular</span>
														<span>PHP</span>
													</div>
												</div>
											</div>
											

										</div>
									</div>
								

								</div>
							
								<div id="password_tab" className="tab-pane fade">
								
									<div className="card">
										<div className="card-body">
											<h5 className="card-title">Change Password</h5>
											<div className="row">
												<div className="col-md-10 col-lg-6">
													<form>
														<div className="form-group">
															<label>Old Password</label>
															<input type="password" className="form-control"/>
														</div>
														<div className="form-group">
															<label>New Password</label>
															<input type="password" className="form-control"/>
														</div>
														<div className="form-group">
															<label>Confirm Password</label>
															<input type="password" className="form-control"/>
														</div>
														<button className="btn btn-primary" type="submit">Save Changes</button>
													</form>
												</div>
											</div>
										</div>
									</div>
								</div>
								
								
							</div>
						</div>
					</div>
				
				</div>			
			</div>
</div>

    );
}

export default Profile;
