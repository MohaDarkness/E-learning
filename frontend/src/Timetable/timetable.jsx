import React, {useEffect} from 'react';
import { Link } from 'react-router-dom'
import Header from "../header";
import Sidebar from '../sidebar';
import Img from '../assets/img/profiles/avatar-01.jpg';
import Img1 from '../assets/img/profiles/avatar-02.jpg';
import Img2 from '../assets/img/profiles/avatar-04.jpg';
import Img3 from '../assets/img/profiles/avatar-05.jpg';
import Img4 from '../assets/img/profiles/avatar-06.jpg';
import Img5 from '../assets/img/profiles/avatar-07.jpg';
import Img6 from '../assets/img/profiles/avatar-08.jpg';
import Img7 from '../assets/img/profiles/avatar-09.jpg';


const Timetable = () => {
    useEffect(() => {
		$('#datatables').DataTable({
			"bFilter": false,
			"paging": true,							
		});				
	},[]);
    return (
		// <!-- Main Wrapper -->
		<div className="main-wrapper">
			<Header />
			<Sidebar />

			{/* <!-- Page Wrapper --> */}
			<div className="page-wrapper">
                <div className="content container-fluid">
				
					{/* <!-- Page Header --> */}
					<div className="page-header">
						<div className="row align-items-center">
							<div className="col">
								<h3 className="page-title">Time Table</h3>
								<ul className="breadcrumb">
									<li className="breadcrumb-item"><Link to="/dashboard">Dashboard</Link></li>
									<li className="breadcrumb-item active">Time Table</li>
								</ul>
							</div>
							<div className="col-auto text-end float-end me-auto">
								<a href="#" className="btn btn-outline-primary ms-2"><i className="fas fa-download"></i> Download</a>
								<Link to="/addtimetable" className="btn btn-primary"><i className="fas fa-plus"></i></Link>
							</div>
						</div>
					</div>
					{/* <!-- /Page Header --> */}
				
					<div className="row">
						<div className="col-sm-12">
						
							<div className="card card-table">
								<div className="card-body">
									<div className="table-responsive">
										<table className="table table-hover table-center mb-0 datatable" id="datatables">
											<thead>
												<tr>
													<th>ID</th>
													<th>Name</th>
													<th>className</th>
													<th>Subject</th>
													<th>Start Time</th>
													<th>End Time</th>
													<th>Date</th>
													<th className="text-end">Action</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>PRE2309</td>
													<td>
														<h2 className="table-avatar">
															<a className="avatar avatar-sm ms-2"><img className="avatar-img rounded-circle" src={Img} alt="User Image"/></a>
															<a>Aaliyah</a>
														</h2>
													</td>
													<td>10</td>
													<td>English</td>
													<td>10:00 AM</td>
													<td>01:00 PM</td>
													<td>23 Apr 2020</td>
													<td className="text-end">
														<div className="actions">
															<Link to="/edittimetable" className="btn btn-sm bg-success-light ms-2">
																<i className="fas fa-pen"></i>
															</Link>
															<a href="#" className="btn btn-sm bg-danger-light">
																<i className="fas fa-trash"></i>
															</a>
														</div>
													</td>
												</tr>
												<tr>
													<td>PRE2209</td>
													<td>
														<h2 className="table-avatar">
															<a className="avatar avatar-sm ms-2"><img className="avatar-img rounded-circle" src={Img1} alt="User Image"/></a>
															<a>Malynne</a>
														</h2>
													</td>
													<td>1</td>
													<td>Botony</td>
													<td>10:00 AM</td>
													<td>01:00 PM</td>
													<td>23 Apr 2020</td>
													<td className="text-end">
														<div className="actions">
															<Link to="/edittimetable" className="btn btn-sm bg-success-light ms-2">
																<i className="fas fa-pen"></i>
															</Link>
															<a href="#" className="btn btn-sm bg-danger-light">
																<i className="fas fa-trash"></i>
															</a>
														</div>
													</td>
												</tr>
												<tr>
													<td>PRE2213</td>
													<td>
														<h2 className="table-avatar">
															<a className="avatar avatar-sm ms-2"><img className="avatar-img rounded-circle" src={Img2} alt="User Image"/></a>
															<a>Levell Scott</a>
														</h2>
													</td>
													<td>9</td>
													<td>Biology</td>
													<td>01:00 PM</td>
													<td>04:00 PM</td>
													<td>26 Nov 2020</td>
													<td className="text-end">
														<div className="actions">
															<Link to="/edittimetable" className="btn btn-sm bg-success-light ms-2">
																<i className="fas fa-pen"></i>
															</Link>
															<a href="#" className="btn btn-sm bg-danger-light">
																<i className="fas fa-trash"></i>
															</a>
														</div>
													</td>
												</tr>
												<tr>
													<td>PRE2143</td>
													<td>
														<h2 className="table-avatar">
															<a className="avatar avatar-sm ms-2"><img className="avatar-img rounded-circle" src={Img3} alt="User Image"/></a>
															<a>Minnie</a>
														</h2>
													</td>
													<td>8</td>
													<td>Science</td>
													<td>01:00 PM</td>
													<td>04:00 PM</td>
													<td>18 Sep 2020</td>
													<td className="text-end">
														<div className="actions">
															<Link to="/edittimetable" className="btn btn-sm bg-success-light ms-2">
																<i className="fas fa-pen"></i>
															</Link>
															<a href="#" className="btn btn-sm bg-danger-light">
																<i className="fas fa-trash"></i>
															</a>
														</div>
													</td>
												</tr>
												<tr>
													<td>PRE2009</td>
													<td>
														<h2 className="table-avatar">
															<a className="avatar avatar-sm ms-2"><img className="avatar-img rounded-circle" src={Img4} alt="User Image"/></a>
															<a>Lois A</a>
														</h2>
													</td>
													<td>7</td>
													<td>History</td>
													<td>01:00 PM</td>
													<td>04:00 PM</td>
													<td>23 Jul 2020</td>
													<td className="text-end">
														<div className="actions">
															<Link to="/edittimetable" className="btn btn-sm bg-success-light ms-2">
																<i className="fas fa-pen"></i>
															</Link>
															<a href="#" className="btn btn-sm bg-danger-light">
																<i className="fas fa-trash"></i>
															</a>
														</div>
													</td>
												</tr>
												<tr>
													<td>PRE2431</td>
													<td>
														<h2 className="table-avatar">
															<a className="avatar avatar-sm ms-2"><img className="avatar-img rounded-circle" src={Img5} alt="User Image"/></a>
															<a>Calvin</a>
														</h2>
													</td>
													<td>2</td>
													<td>Biology</td>
													<td>10:00 AM</td>
													<td>01:00 PM</td>
													<td>15 Oct 2020</td>
													<td className="text-end">
														<div className="actions">
															<Link to="/edittimetable" className="btn btn-sm bg-success-light ms-2">
																<i className="fas fa-pen"></i>
															</Link>
															<a href="#" className="btn btn-sm bg-danger-light">
																<i className="fas fa-trash"></i>
															</a>
														</div>
													</td>
												</tr>
												<tr>
													<td>PRE1534</td>
													<td>
														<h2 className="table-avatar">
															<a className="avatar avatar-sm ms-2"><img className="avatar-img rounded-circle" src={Img6} alt="User Image"/></a>
															<a>Vincent</a>
														</h2>
													</td>
													<td>6</td>
													<td>Botony</td>
													<td>10:00 AM</td>
													<td>01:00 PM</td>
													<td>02 Jun 2020</td>
													<td className="text-end">
														<div className="actions">
															<Link to="/edittimetable" className="btn btn-sm bg-success-light ms-2">
																<i className="fas fa-pen"></i>
															</Link>
															<a href="#" className="btn btn-sm bg-danger-light">
																<i className="fas fa-trash"></i>
															</a>
														</div>
													</td>
												</tr>
												<tr>
													<td>PRE2153</td>
													<td>
														<h2 className="table-avatar">
															<a className="avatar avatar-sm ms-2"><img className="avatar-img rounded-circle" src={Img7} alt="User Image"/></a>
															<a>Kozma  Tatari</a>
														</h2>
													</td>
													<td>12</td>
													<td>Mathematics</td>
													<td>10:00 AM</td>
													<td>01:00 PM</td>
													<td>23 Apr 2020</td>
													<td className="text-end">
														<div className="actions">
															<Link to="/edittimetable" className="btn btn-sm bg-success-light ms-2">
																<i className="fas fa-pen"></i>
															</Link>
															<a href="#" className="btn btn-sm bg-danger-light">
																<i className="fas fa-trash"></i>
															</a>
														</div>
													</td>
												</tr>
											</tbody>
										</table>
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
		// <!-- /Main Wrapper -->
    );
}

export default  Timetable;
