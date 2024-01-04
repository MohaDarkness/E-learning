
import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import Header from "../header";
import Sidebar from '../sidebar';

const Transport = () => {
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
								<h3 className="page-title">Transport</h3>
								<ul className="breadcrumb">
									<li className="breadcrumb-item"><Link to="/dashboard">Dashboard</Link></li>
									<li className="breadcrumb-item active">Transport</li>
								</ul>
							</div>
							<div className="col-auto text-end float-left me-auto">
								<a href="#" className="btn btn-outline-primary ms-2"><i className="fas fa-download"></i> Download</a>
								<Link to="/addtransport" className="btn btn-primary"><i className="fas fa-plus"></i></Link>
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
													<th>Route Name</th>
													<th>Vehicle Number</th>
													<th>Driver Name</th>
													<th>Driver License</th>
													<th>Contact Number</th>
													<th>Driver Address</th>
													<th className="text-end">Action</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>New Cross</td>
													<td>TN 43 AS 5263</td>
													<td>Steve</td>
													<td>REDH968532</td>
													<td>+91 8974158962</td>
													<td>152, South Pole, 2nd Street, 3rd Cross</td>
													<td className="text-end">
														<div className="actions">
															<Link to="/edittransport" className="btn btn-sm bg-success-light ms-2">
																<i className="fas fa-pen"></i>
															</Link>
															<a href="#" className="btn btn-sm bg-danger-light">
																<i className="fas fa-trash"></i>
															</a>
														</div>
													</td>
												</tr>
												<tr>
													<td>North Pole</td>
													<td>TN 34 DB 5847</td>
													<td>Akbar</td>
													<td>RGTH958932</td>
													<td>+91 8596841252</td>
													<td>253, 2nd Street, 3rd Crosst</td>
													<td className="text-end">
														<div className="actions">
															<Link to="/edittransport" className="btn btn-sm bg-success-light ms-2">
																<i className="fas fa-pen"></i>
															</Link>
															<a href="#" className="btn btn-sm bg-danger-light">
																<i className="fas fa-trash"></i>
															</a>
														</div>
													</td>
												</tr>
												<tr>
													<td>South Wales</td>
													<td>TN 34 AK 6789</td>
													<td>Joseph</td>
													<td>DLFH985632</td>
													<td>+91 9658741526</td>
													<td>741, East Road, 2nd Street</td>
													<td className="text-end">
														<div className="actions">
															<Link to="/edittransport" className="btn btn-sm bg-success-light ms-2">
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

export default  Transport;
