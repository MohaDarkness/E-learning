import React, {useEffect , useState} from 'react';
import { Link } from 'react-router-dom'
import Header from "../header";
import Sidebar from '../sidebar';


const Hostel = () => {
    useEffect(() => {
		$('#datatables').DataTable({
			"bFilter": false,
			"paging": true,	
						
		});
				
	},[]);
    return (
	<>
		{/* <!-- Main Wrapper --> */}
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
								<h3 className="page-title">Hostel</h3>
								<ul className="breadcrumb">
									<li className="breadcrumb-item"><Link to="/dashboard">Dashboard</Link></li>
									<li className="breadcrumb-item active">Hostel</li>
								</ul>
							</div>
							<div className="col-auto text-end float-end me-auto">
								<a href="#" className="btn btn-outline-primary ms-2"><i className="fas fa-download"></i> Download</a>
								<Link to="/Addroom" className="btn btn-primary"><i className="fas fa-plus"></i></Link>
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
													<th>Block</th>
													<th>Room No</th>
													<th>Room Type</th>
													<th>No of Beds</th>
													<th>Cost per Bed</th>
													<th>Availability</th>
													<th className="text-end">Action</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>A Block</td>
													<td>101</td>
													<td>Medium</td>
													<td>6</td>
													<td>$10</td>
													<td>
														<span className="badge badge-danger">Full</span>
													</td>
													<td className="text-end">
														<div className="actions">
															<Link to="/editroom" className="btn btn-sm bg-success-light ms-2">
																<i className="fas fa-pen"></i>
															</Link>
															<a href="#" className="btn btn-sm bg-danger-light">
																<i className="fas fa-trash"></i>
															</a>
														</div>
													</td>
												</tr>
												<tr>
													<td>A Block</td>
													<td>101</td>
													<td>Medium</td>
													<td>6</td>
													<td>$10</td>
													<td>
														<span className="badge badge-success">Available</span>
													</td>
													<td className="text-end">
														<div className="actions">
															<Link to="/editroom" className="btn btn-sm bg-success-light ms-2">
																<i className="fas fa-pen"></i>
															</Link>
															<a href="#" className="btn btn-sm bg-danger-light">
																<i className="fas fa-trash"></i>
															</a>
														</div>
													</td>
												</tr>
												<tr>
													<td>A Block</td>
													<td>102</td>
													<td>Medium</td>
													<td>6</td>
													<td>$10</td>
													<td>
														<span className="badge badge-danger">Full</span>
													</td>
													<td className="text-end">
														<div className="actions">
															<Link to="/editroom" className="btn btn-sm bg-success-light ms-2">
																<i className="fas fa-pen"></i>
															</Link>
															<a href="#" className="btn btn-sm bg-danger-light">
																<i className="fas fa-trash"></i>
															</a>
														</div>
													</td>
												</tr>
												<tr>
													<td>B Block</td>
													<td>104</td>
													<td>Big</td>
													<td>8</td>
													<td>$10</td>
													<td>
														<span className="badge badge-danger">Full</span>
													</td>
													<td className="text-end">
														<div className="actions">
															<Link to="/editroom" className="btn btn-sm bg-success-light ms-2">
																<i className="fas fa-pen"></i>
															</Link>
															<a href="#" className="btn btn-sm bg-danger-light">
																<i className="fas fa-trash"></i>
															</a>
														</div>
													</td>
												</tr>
												<tr>
													<td>A Block</td>
													<td>107</td>
													<td>Medium</td>
													<td>6</td>
													<td>$10</td>
													<td>
														<span className="badge badge-success">Available</span>
													</td>
													<td className="text-end">
														<div className="actions">
															<Link to="/editroom" className="btn btn-sm bg-success-light ms-2">
																<i className="fas fa-pen"></i>
															</Link>
															<a href="#" className="btn btn-sm bg-danger-light">
																<i className="fas fa-trash"></i>
															</a>
														</div>
													</td>
												</tr>
												<tr>
													<td>A Block</td>
													<td>108</td>
													<td>Medium</td>
													<td>6</td>
													<td>$10</td>
													<td>
														<span className="badge badge-success">Available</span>
													</td>
													<td className="text-end">
														<div className="actions">
															<Link to="/editroom" className="btn btn-sm bg-success-light ms-2">
																<i className="fas fa-pen"></i>
															</Link>
															<a href="#" className="btn btn-sm bg-danger-light">
																<i className="fas fa-trash"></i>
															</a>
														</div>
													</td>
												</tr>
												<tr>
													<td>B Block</td>
													<td>102</td>
													<td>Medium</td>
													<td>6</td>
													<td>$10</td>
													<td>
														<span className="badge badge-warning">2 Available</span>
													</td>
													<td className="text-end">
														<div className="actions">
															<Link to="/editroom" className="btn btn-sm bg-success-light ms-2">
																<i className="fas fa-pen"></i>
															</Link>
															<a href="#" className="btn btn-sm bg-danger-light">
																<i className="fas fa-trash"></i>
															</a>
														</div>
													</td>
												</tr>
												<tr>
													<td>B Block</td>
													<td>107</td>
													<td>Small</td>
													<td>6</td>
													<td>$10</td>
													<td>
														<span className="badge badge-success">Available</span>
													</td>
													<td className="text-end">
														<div className="actions">
															<Link to="/editroom" className="btn btn-sm bg-success-light ms-2">
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
			{/* <!-- /Page Wrapper -->	*/}
													
		</div>
		{/* <!-- /Main Wrapper --> */}
	</>
    );
}

export default Hostel;
