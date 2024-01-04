

import React, {useEffect} from 'react';
import { Link } from 'react-router-dom'
import Header from "../header";
import Sidebar from '../sidebar';




const Subject = () => {
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
								<h3 className="page-title">Subjects</h3>
								<ul className="breadcrumb">
									<li className="breadcrumb-item"><Link to="/dashboard">Dashboard</Link></li>
									<li className="breadcrumb-item active">Subjects</li>
								</ul>
							</div>
							<div className="col-auto text-end float-end me-auto">
								<a href="#" className="btn btn-outline-primary ms-2"><i className="fas fa-download"></i> Download</a>
								<Link to="/addsubject" className="btn btn-primary"><i className="fas fa-plus"></i></Link>
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
													<th className="text-end">Action</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>PRE2209</td>
													<td>
														<h2>
															<a>Mathematics</a>
														</h2>
													</td>
													<td>5</td>
													<td className="text-end">
														<div className="actions">
															<Link to="/editsubject" className="btn btn-sm bg-success-light ms-2">
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
														<h2>
															<a>History</a>
														</h2>
													</td>
													<td>6</td>
													<td className="text-end">
														<div className="actions">
															<Link to="/editsubject" className="btn btn-sm bg-success-light ms-2">
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
														<h2>
															<a>Science</a>
														</h2>
													</td>
													<td>3</td>
													<td className="text-end">
														<div className="actions">
															<Link to="/editsubject" className="btn btn-sm bg-success-light ms-2">
																<i className="fas fa-pen"></i>
															</Link >
															<a href="#" className="btn btn-sm bg-danger-light">
																<i className="fas fa-trash"></i>
															</a>
														</div>
													</td>
												</tr>
												<tr>
													<td>PRE2431</td>
													<td>
														<h2>
															<a>Geography</a>
														</h2>
													</td>
													<td>8</td>
													<td className="text-end">
														<div className="actions">
															<Link to="/editsubject" className="btn btn-sm bg-success-light ms-2">
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
														<h2>
															<a>Botony</a>
														</h2>
													</td>
													<td>9</td>
													<td className="text-end">
														<div className="actions">
															<Link to="/editsubject" className="btn btn-sm bg-success-light ms-2">
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
														<h2>
															<a>English</a>
														</h2>
													</td>
													<td>4</td>
													<td className="text-end">
														<div className="actions">
															<Link to="/editsubject" className="btn btn-sm bg-success-light ms-2">
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
		{/* <!-- /Main Wrapper --> */}
		
	</>
    );
}

export default Subject ;
