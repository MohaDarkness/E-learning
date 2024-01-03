
import React , {components, useState} from 'react';
import { Link } from 'react-router-dom'
import Chart from 'react-apexcharts'
import ProgressBar from 'react-customizable-progressbar'
import { Line, Circle } from 'rc-progress';
import Header from "../header";
import Sidebar from '../sidebar';
import Calendar from 'react-calendar';


const Studentdashboard = (props) => {
	const [data, setObject] = useState( {	
		chart: {
			height: 350,	
			toolbar: {
				show: false
			  }
		  },
		  dataLabels: {
			enabled: false
		  },
		datasets: {
			id: 'apaxcharts-area'
		  },
		stroke: {
			curve: "smooth",
		},
		colors: ["#19affb", "#fdbb38"],		
		borderWidth: 3,
		labels: ['Jan', 'Feb', 'Mar','Apr','May','Jun', 'Jul'],		  		  
		})
		const [series, setSeries] = useState([
			{						
				name: 'Teachers',								
				data: [45, 60, 75, 51, 42, 42, 30]								
			}, 
			{
				name: 'Students',				
				data: [24, 48, 56, 32, 34, 52, 25]							
			  }			  
			])
			// Student Chart

			const [date, setDate] = useState(new Date());								
			const events = [
				{
					start: '2015-07-20',
					end: '2015-07-02',
					eventClasses: 'optionalEvent',
					title: 'test event',
					description: 'This is a test description of an event',
				},]
		return (
			
			// <!-- Main Wrapper -->
			<div className="main-wrapper">
				<Header />
				<Sidebar />

				{/* <!-- Page Wrapper --> */}
				<div className="page-wrapper">
				
					<div className="content container-fluid">
						{/* Page Header */}
						<div className="page-header">
							<div className="row">
								<div className="col-sm-12">
									<h3 className="page-title">Welcome Bruklin!</h3>
									<ul className="breadcrumb">
									<li className="breadcrumb-item">
										<Link to="/dashboard">Dashboard</Link>
									</li>							
										<li className="breadcrumb-item active">Student Dashboard</li>
									</ul>
								</div>
							</div>
						</div>
						{/* <!-- /Page Header --> */}

						{/* <!-- Overview Section --> */}
						<div className="row">
							<div className="col-xl-3 col-sm-6 col-12 d-flex">
								<div className="card bg-nine w-100">
									<div className="card-body">
										<div className="db-widgets d-flex justify-content-between align-items-center">
											<div className="db-icon">
												<i className="fas fa-book-open"></i>
											</div>
											<div className="db-info">
												<h3>04/06</h3>
												<h6>All Courses</h6>
											</div>										
										</div>
									</div>
								</div>
							</div>

							<div className="col-xl-3 col-sm-6 col-12 d-flex">
								<div className="card bg-six w-100">
									<div className="card-body">
										<div className="db-widgets d-flex justify-content-between align-items-center">
											<div className="db-icon">
												<i className="fas fa-file-alt"></i>
											</div>
											<div className="db-info">
												<h3>40/60</h3>
												<h6>All Projects</h6>
											</div>										
										</div>
									</div>
								</div>
							</div>

							<div className="col-xl-3 col-sm-6 col-12 d-flex">
								<div className="card bg-ten w-100">
									<div className="card-body">
										<div className="db-widgets d-flex justify-content-between align-items-center">
											<div className="db-icon">
												<i className="fas fa-clipboard-list"></i>
											</div>
											<div className="db-info">
												<h3>30/50</h3>
												<h6>Test Attended</h6>
											</div>										
										</div>
									</div>
								</div>
							</div>

							<div className="col-xl-3 col-sm-6 col-12 d-flex">
								<div className="card bg-eleven w-100">
									<div className="card-body">
										<div className="db-widgets d-flex justify-content-between align-items-center">
											<div className="db-icon">
												<i className="fas fa-clipboard-check"></i>
											</div>
											<div className="db-info">
												<h3>15/20</h3>
												<h6>Test Passed</h6>
											</div>										
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* <!-- /Overview Section -->	 */}

						{/* <!-- Student Dashboard --> */}
						<div className="row">
							<div className="col-12 col-lg-12 col-xl-9">
								<div className="card flex-fill">
									<div className="card-header">
										<div className="row align-items-center">
											<div className="col-6">
												<h5 className="card-title">Today’s Lesson</h5>
											</div>
											<div className="col-6">
												<span className="float-start view-link"><a href="#">View All Courses</a></span>
											</div>
										</div>						
									</div>

									<div className="dash-circle">
										<div className="row">
											<div className="col-12 col-lg-6 col-xl-6 dash-widget3">
												<div className="card-body dash-widget1">
													<div className="circle-bar circle-bar2">
													<ProgressBar
														width={15}
														radius={40}
														progress={20}
														rotate={-210}
														strokeWidth={8}
														strokeColor="#6e6bfa"
														strokeLinecap="square"
														trackStrokeWidth={8}
														trackStrokeColor="#e6e6e6"
														trackStrokeLinecap="square"
														pointerRadius={0}
														initialAnimation={true}
														transition="1.5s ease 0.5s"
														trackTransition="0s ease"
															>
														<div className="circle-graph2" data-percent="20">
															<b>20%</b>
														</div>													
														</ProgressBar>
														<h6>Lesson Learned</h6>
														<h4>10 <span>/ 50</span></h4>
													</div>
													<div className="dash-details">
														<h4>Facilisi etiam</h4>
														<ul>
															<li><i className="fas fa-clock"></i> 2.30pm - 3.30pm</li>
															<li><i className="fas fa-book-open"></i> 5 Lessons</li>
															<li><i className="fas fa-hourglass-end"></i> 60 Minutes</li>
															<li><i className="fas fa-clipboard-check"></i> 5 Asignment</li>
														</ul>
														<div className="dash-btn">
															<button type="submit" className="btn btn-info btn-border">Skip</button>
															<button type="submit" className="btn btn-info">Continue</button>
														</div>
													</div>
												</div>
											</div>

											<div className="col-12 col-lg-6 col-xl-6 dash-widget4">
												<div className="card-body dash-widget1 dash-widget2">
													<div className="circle-bar circle-bar3">
													<ProgressBar
														width={15}
														radius={40}
														progress={50}
														rotate={-180}
														strokeWidth={8}
														strokeColor="#6e6bfa"
														strokeLinecap="square"
														trackStrokeWidth={8}
														trackStrokeColor="#e6e6e6"
														trackStrokeLinecap="square"
														pointerRadius={0}
														initialAnimation={true}
														transition="1.5s ease 0.5s"
														trackTransition="0s ease"
													>													 
													<div className="circle-graph3" data-percent="50">												
														<b>50%</b>                                                                               														
														</div>					
													</ProgressBar>
															<h6>Lesson Learned</h6>
															<h4>25 <span>/ 50</span></h4>
													</div>
													<div className="dash-details">
														<h4>Augue mauris</h4>
														<ul>
															<li><i className="fas fa-clock"></i> 3.30pm - 4.30pm</li>
															<li><i className="fas fa-book-open"></i> 6 Lessons</li>
															<li><i className="fas fa-hourglass-end"></i> 60 Minutes</li>
															<li><i className="fas fa-clipboard-check"></i> 6 Asignment</li>
														</ul>
														<div className="dash-btn">
															<button type="submit" className="btn btn-info btn-border">Skip</button>
															<button type="submit" className="btn btn-info">Continue</button>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="row">
									<div className="col-12 col-lg-12 col-xl-8 d-flex">
										<div className="card flex-fill">
											<div className="card-header">
												<div className="row align-items-center">
													<div className="col-6">
														<h5 className="card-title">Learning Activity</h5>
													</div>
													<div className="col-6">
														<ul className="list-inline-group text-start mb-0 pe-0">
															<li className="list-inline-item">
																	<div className="form-group mb-0 amount-spent-select">
																	<select className="form-control form-control-sm form-select">
																		<option>Weekly</option>
																		<option>Monthly</option>
																		<option>Yearly</option>
																	</select>
																</div>
															</li>
														</ul>                                        
													</div>
												</div>						
											</div>
											<div className="card-body">
												<div id="apexcharts-area"></div>
												<Chart options={data} series={series} type="area"/>
											</div>
										</div>
									</div>
									<div className="col-12 col-lg-12 col-xl-4 d-flex">
										<div className="card flex-fill">
											<div className="card-header">
												<h5 className="card-title">Learning History</h5>
											</div>
											<div className="card-body">
												<div className="teaching-card">
													<ul className="activity-feed">
														<li className="feed-item">
															<div className="feed-date1">Sep 05, 9 am - 10 am (60min)</div>
															<span className="feed-text1"><a>Lorem ipsum dolor</a></span>
															<p><span>In Progress</span></p>
														</li>
														<li className="feed-item">
															<div className="feed-date1">Sep 04, 2 pm - 3 pm (70min)</div>
															<span className="feed-text1"><a>Et dolore magna</a></span>
															<p>Completed</p>
														</li>
														<li className="feed-item">
															<div className="feed-date1">Sep 02, 1 pm - 2 am (80min)</div>
															<span className="feed-text1"><a>Exercitation ullamco</a></span>
															<p><span>In Progress</span></p>
														</li>
														<li className="feed-item">
															<div className="feed-date1">Aug 30, 10 am - 12 pm (90min)</div>
															<span className="feed-text1"><a>Occaecat cupidatat</a></span>
															<p>Completed</p>
														</li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								</div>								
							</div>

							<div className="col-12 col-lg-12 col-xl-3 d-flex">
								<div className="card flex-fill">
									<div className="card-header">
										<div className="row align-items-center">
											<div className="col-12">
												<h5 className="card-title">Calendar</h5>
											</div>
										</div>									
									</div>
									<div className="card-body">
									<Calendar onChange={setDate} value={date} events={events}
								 />
										<div id="calendar-doctor" className="calendar-container"></div>
										<div className="calendar-info calendar-info1">
											<div className="calendar-details">
												<p>09 am</p>
												<h6 className="calendar-blue d-flex justify-content-between align-items-center">Fermentum <span>09am - 10pm</span></h6>
											</div>
											<div className="calendar-details">
												<p>10 am</p>
												<h6 className="calendar-violet d-flex justify-content-between align-items-center">Pharetra et <span>10am - 11am</span></h6>
											</div>
											<div className="calendar-details">
												<p>11 am</p>
												<h6 className="calendar-red d-flex justify-content-between align-items-center">Break <span>11am - 11.30am</span></h6>
											</div>
											<div className="calendar-details">
												<p>12 pm</p>
												<h6 className="calendar-orange d-flex justify-content-between align-items-center">Massa <span>11.30am - 12.00pm</span></h6>
											</div>
											<div className="calendar-details">
												<p>09 am</p>
												<h6 className="calendar-blue d-flex justify-content-between align-items-center">Fermentum <span>09am - 10pm</span></h6>
											</div>
										</div>
									</div>
								</div>
							</div>	
						</div>
						{/* <!-- /Student Dashboard --> */}
					</div>
					
					{/* <!-- Footer --> */}
					<footer>
						<p>Copyright © 2020 Dreamguys.</p>					
					</footer>
					{/* <!-- /Footer --> */}

				</div>
				{/* <!-- /Page Wrapper --> */}

			</div>
			// <!-- /Main Wrapper -->
    	);
	}

export default Studentdashboard;
