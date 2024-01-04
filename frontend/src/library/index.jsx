import React, {useEffect} from 'react';
import { Link } from 'react-router-dom'
import Header from "../header";
import Sidebar from '../sidebar';



const Library =()=>  {
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
								<h3 className="page-title">Library</h3>
								<ul className="breadcrumb">
									<li className="breadcrumb-item"><Link to="/dashboard">Dashboard</Link></li>
									<li className="breadcrumb-item active">Library</li>
								</ul>
							</div>
							<div className="col-auto text-end float-left ms-auto">
								<a href="#" className="btn btn-outline-primary ms-2"><i className="fas fa-download"></i> Download</a>
								<Link to="/addbooks" className="btn btn-primary"><i className="fas fa-plus"></i></Link>
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
													<th>Language</th>
													<th>Department</th>
													<th>className</th>
													<th>Type</th>
													<th>Status</th>
													<th className="text-end">Action</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>PRE2309</td>
													<td>
														<h2>
															<a>Acoustics</a>
														</h2>
													</td>
													<td>English</td>
													<td>Science</td>
													<td>10</td>
													<td>Book</td>
													<td>
														<span className="badge badge-success">In Stock</span>
													</td>
													<td className="text-end">
														<div className="actions">
															<Link to="/editbooks" className="btn btn-sm bg-success-light ms-2">
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
														<h2>
															<a>Acoustics</a>
														</h2>
													</td>
													<td>Geometry</td>
													<td>Science</td>
													<td>8</td>
													<td>Book</td>
													<td>
														<span className="badge badge-success">In Stock</span>
													</td>
													<td className="text-end">
														<div className="actions">
															<Link to="/editbooks" className="btn btn-sm bg-success-light ms-2">
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
															<a>Games</a>
														</h2>
													</td>
													<td>English</td>
													<td>General</td>
													<td>9</td>
													<td>Book</td>
													<td>
														<span className="badge badge-success">In Stock</span>
													</td>
													<td className="text-end">
														<div className="actions">
															<Link to="/editbooks" className="btn btn-sm bg-success-light ms-2">
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
															<a>Chess</a>
														</h2>
													</td>
													<td>English</td>
													<td>General</td>
													<td>7</td>
													<td>Book</td>
													<td>
														<span className="badge badge-danger">Out of Stock</span>
													</td>
													<td className="text-end">
														<div className="actions">
															<Link to="/editbooks" className="btn btn-sm bg-success-light ms-2">
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
														<h2>
															<a>Calculus</a>
														</h2>
													</td>
													<td>English</td>
													<td>Mathematics</td>
													<td>9</td>
													<td>Book</td>
													<td>
														<span className="badge badge-success">In Stock</span>
													</td>
													<td className="text-end">
														<div className="actions">
															<Link to="/editbooks" className="btn btn-sm bg-success-light ms-2">
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
														<h2>
															<a>Visual Basic</a>
														</h2>
													</td>
													<td>English</td>
													<td>Computer Science</td>
													<td>11</td>
													<td>Book</td>
													<td>
														<span className="badge badge-danger">Out of Stock</span>
													</td>
													<td className="text-end">
														<div className="actions">
															<Link to="/editbooks" className="btn btn-sm bg-success-light ms-2">
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
															<a>Acoustics</a>
														</h2>
													</td>
													<td>English</td>
													<td>Science</td>
													<td>10</td>
													<td>Book</td>
													<td>
														<span className="badge badge-success">In Stock</span>
													</td>
													<td className="text-end">
														<div className="actions">
															<Link to="/editbooks" className="btn btn-sm bg-success-light ms-2">
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
															<a>Robotics</a>
														</h2>
													</td>
													<td>English</td>
													<td>Science</td>
													<td>10</td>
													<td>Book</td>
													<td>
														<span className="badge badge-danger">Out of Stock</span>
													</td>
													<td className="text-end">
														<div className="actions">
															<Link to="/editbooks" className="btn btn-sm bg-success-light ms-2">
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

export default Library;
