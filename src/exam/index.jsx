import React, {useEffect} from 'react';
import { Link } from 'react-router-dom'
import Header from "../header";
import Sidebar from '../sidebar';


const Exam = (props) => {
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
								<h3 className="page-title">Exam</h3>
								<ul className="breadcrumb">
									<li className="breadcrumb-item"><Link to="/dashboard">Dashboard</Link></li>
									<li className="breadcrumb-item active">Exam</li>
								</ul>
							</div>
							<div className="col-auto text-right float-end me-auto">
								<a href="#" className="btn btn-outline-primary ms-2"><i className="fas fa-download"></i> Download</a>
								<Link to="/addexam" className="btn btn-primary"><i className="fas fa-plus"></i></Link>
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
													<th>Exam Name</th>
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
													<td>
														<h2>
															<a>className Test</a>
														</h2>
													</td>
													<td>10</td>
													<td>English</td>
													<td>10:00 AM</td>
													<td>01:00 PM</td>
													<td>23 Apr 2020</td>
													<td className="text-end">
														<div className="actions">
															<Link to="/editexam" className="btn btn-sm bg-success-light ms-2">
																<i className="fas fa-pen"></i>
															</Link>
															<a href="#" className="btn btn-sm bg-danger-light">
																<i className="fas fa-trash"></i>
															</a>
														</div>
													</td>
												</tr>
												<tr>
													<td>
														<h2>
															<a>Half Yearly</a>
														</h2>
													</td>
													<td>1</td>
													<td>Botony</td>
													<td>10:00 AM</td>
													<td>01:00 PM</td>
													<td>23 Apr 2020</td>
													<td className="text-end">
														<div className="actions">
															<Link to="/editexam" className="btn btn-sm bg-success-light ms-2">
																<i className="fas fa-pen"></i>
															</Link>
															<a href="#" className="btn btn-sm bg-danger-light">
																<i className="fas fa-trash"></i>
															</a>
														</div>
													</td>
												</tr>
												<tr>
													<td>
														<h2>
															<a>Quaterly</a>
														</h2>
													</td>
													<td>9</td>
													<td>Biology</td>
													<td>01:00 PM</td>
													<td>04:00 PM</td>
													<td>26 Nov 2020</td>
													<td className="text-end">
														<div className="actions">
															<Link to="/editexam" className="btn btn-sm bg-success-light ms-2">
																<i className="fas fa-pen"></i>
															</Link>
															<a href="#" className="btn btn-sm bg-danger-light">
																<i className="fas fa-trash"></i>
															</a>
														</div>
													</td>
												</tr>
												<tr>
													<td>
														<h2>
															<a>className Test</a>
														</h2>
													</td>
													<td>8</td>
													<td>Science</td>
													<td>01:00 PM</td>
													<td>04:00 PM</td>
													<td>18 Sep 2020</td>
													<td className="text-end">
														<div className="actions">
															<Link to="/editexam" className="btn btn-sm bg-success-light ms-2">
																<i className="fas fa-pen"></i>
															</Link>
															<a href="#" className="btn btn-sm bg-danger-light">
																<i className="fas fa-trash"></i>
															</a>
														</div>
													</td>
												</tr>
												<tr>
													<td>
														<h2>
															<a>Quaterly</a>
														</h2>
													</td>
													<td>7</td>
													<td>History</td>
													<td>01:00 PM</td>
													<td>04:00 PM</td>
													<td>23 Jul 2020</td>
													<td className="text-end">
														<div className="actions">
															<Link to="/editexam" className="btn btn-sm bg-success-light ms-2">
																<i className="fas fa-pen"></i>
															</Link>
															<a href="#" className="btn btn-sm bg-danger-light">
																<i className="fas fa-trash"></i>
															</a>
														</div>
													</td>
												</tr>
												<tr>
													<td>
														<h2>
															<a>className Test</a>
														</h2>
													</td>
													<td>2</td>
													<td>Biology</td>
													<td>10:00 AM</td>
													<td>01:00 PM</td>
													<td>15 Oct 2020</td>
													<td className="text-end">
														<div className="actions">
															<Link to="/editexam" className="btn btn-sm bg-success-light ms-2">
																<i className="fas fa-pen"></i>
															</Link>
															<a href="#" className="btn btn-sm bg-danger-light">
																<i className="fas fa-trash"></i>
															</a>
														</div>
													</td>
												</tr>
												<tr>
													<td>
														<h2>
															<a>Half Yearly</a>
														</h2>
													</td>
													<td>6</td>
													<td>Botony</td>
													<td>10:00 AM</td>
													<td>01:00 PM</td>
													<td>02 Jun 2020</td>
													<td className="text-end">
														<div className="actions">
															<Link to="/editexam" className="btn btn-sm bg-success-light ms-2">
																<i className="fas fa-pen"></i>
															</Link>
															<a href="#" className="btn btn-sm bg-danger-light">
																<i className="fas fa-trash"></i>
															</a>
														</div>
													</td>
												</tr>
												<tr>
													<td>
														<h2>
															<a>className Test</a>
														</h2>
													</td>
													<td>12</td>
													<td>Mathematics</td>
													<td>10:00 AM</td>
													<td>01:00 PM</td>
													<td>23 Apr 2020</td>
													<td className="text-end">
														<div className="actions">
															<Link to="/editexam" className="btn btn-sm bg-success-light ms-2">
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

				{/* <!-- Footer -->	 */}
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

export default Exam;
