import React, {useEffect} from 'react';
import { Link } from 'react-router-dom'
import Header from "../header";
import Sidebar from '../sidebar';


const Fees = () => {
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
								<h3 className="page-title">Fees</h3>
								<ul className="breadcrumb">
									<li className="breadcrumb-item"><Link to="/dashboard">Dashboard</Link></li>
									<li className="breadcrumb-item active">Fees</li>
								</ul>
							</div>
							<div className="col-auto text-end float-left mr-auto">
								<a href="#" className="btn btn-outline-primary ms-2"><i className="fas fa-download"></i> Download</a>
								<Link to="/addfees" className="btn btn-primary"><i className="fas fa-plus"></i></Link>
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
													<th>Fees Name</th>
													<th>className</th>
													<th>Amount</th>
													<th>Start Date</th>
													<th>End Date</th>
													<th className="text-end">Action</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>PRE2209</td>
													<td>
														<h2>
															<a>Exam Fees</a>
														</h2>
													</td>
													<td>10</td>
													<td>$345</td>
													<td>23 Apr 2020</td>
													<td>28 Apr 2020</td>
													<td className="text-end">
														<div className="actions">
															<a href="#" className="btn btn-sm bg-success-light ms-2">
																<i className="fas fa-pen"></i>
															</a>
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
															<a>Exam Fees</a>
														</h2>
													</td>
													<td>1</td>
													<td>$255</td>
													<td>23 Apr 2020</td>
													<td>28 Apr 2020</td>
													<td className="text-end">
														<div className="actions">
															<Link to="/edit-fees" className="btn btn-sm bg-success-light ms-2">
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
															<a>Exam Fees</a>
														</h2>
													</td>
													<td>9</td>
													<td>$545</td>
													<td>23 Apr 2020</td>
													<td>28 Apr 2020</td>
													<td className="text-end">
														<div className="actions">
															<Link to="/editfees" className="btn btn-sm bg-success-light ms-2">
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
															<a>Sports Day Fees</a>
														</h2>
													</td>
													<td>8</td>
													<td>$234</td>
													<td>23 Apr 2020</td>
													<td>28 Apr 2020</td>
													<td className="text-end">
														<div className="actions">
															<Link to="/editfees" className="btn btn-sm bg-success-light ms-2">
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
															<a>Exam Fees</a>
														</h2>
													</td>
													<td>7</td>
													<td>$265</td>
													<td>23 Apr 2020</td>
													<td>28 Apr 2020</td>
													<td className="text-end">
														<div className="actions">
															<Link to="/editfees" className="btn btn-sm bg-success-light ms-2">
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
															<a>Sports Day Fees</a>
														</h2>
													</td>
													<td>2</td>
													<td>$334</td>
													<td>23 Apr 2020</td>
													<td>28 Apr 2020</td>
													<td className="text-end">
														<div className="actions">
															<Link to="/editfees" className="btn btn-sm bg-success-light ms-2">
																<i className="fas fa-pen"></i>
															</Link>
															<a href="#" className="btn btn-sm bg-danger-light">
																<i className="fas fa-trash"></i>
															</a>
														</div>
													</td>
												</tr>
												<tr>
													<td>PRE1434</td>
													<td>
														<h2>
															<a>Sports Day Fees</a>
														</h2>
													</td>
													<td>6</td>
													<td>$341</td>
													<td>23 Apr 2020</td>
													<td>28 Apr 2020</td>
													<td className="text-end">
														<div className="actions">
															<Link to="/editfees" className="btn btn-sm bg-success-light ms-2">
																<i className="fas fa-pen"></i>
															</Link>
															<a href="#" className="btn btn-sm bg-danger-light">
																<i className="fas fa-trash"></i>
															</a>
														</div>
													</td>
												</tr>
												<tr>
													<td>PRE2345</td>
													<td>
														<h2>
															<a>Exam Fees</a>
														</h2>
													</td>
													<td>12</td>
													<td>$365</td>
													<td>23 Apr 2020</td>
													<td>28 Apr 2020</td>
													<td className="text-end">
														<div className="actions">
															<Link to="/editfees" className="btn btn-sm bg-success-light ms-2">
																<i className="fas fa-pen"></i>
															</Link>
															<a href="#" className="btn btn-sm bg-danger-light">
																<i className="fas fa-trash"></i>
															</a>
														</div>
													</td>
												</tr>
												<tr>
													<td>PRE2365</td>
													<td>
														<h2>
															<a>Annual Day Fees</a>
														</h2>
													</td>
													<td>11</td>
													<td>$83</td>
													<td>23 Apr 2020</td>
													<td>28 Apr 2020</td>
													<td className="text-end">
														<div className="actions">
															<Link to="/editfees" className="btn btn-sm bg-success-light ms-2">
																<i className="fas fa-pen"></i>
															</Link>
															<a href="#" className="btn btn-sm bg-danger-light">
																<i className="fas fa-trash"></i>
															</a>
														</div>
													</td>
												</tr>
												<tr>
													<td>PRE1234</td>
													<td>
														<h2>
															<a>className Test Fees</a>
														</h2>
													</td>
													<td>5</td>
													<td>$242</td>
													<td>23 Apr 2020</td>
													<td>28 Apr 2020</td>
													<td className="text-end">
														<div className="actions">
															<Link to="/editfees" className="btn btn-sm bg-success-light ms-2">
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

export default Fees;
