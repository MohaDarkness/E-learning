
import React, {useEffect} from 'react';
import { Link } from 'react-router-dom'
import Header from "../header";
import Sidebar from '../sidebar';

import img1 from '../assets/img/profiles/avatar-01.jpg';
import img2 from '../assets/img/profiles/avatar-02.jpg';
import img3 from '../assets/img/profiles/avatar-03.jpg';
import img4 from '../assets/img/profiles/avatar-04.jpg';
import img5 from '../assets/img/profiles/avatar-05.jpg';
import img6 from '../assets/img/profiles/avatar-06.jpg';
import img7 from '../assets/img/profiles/avatar-07.jpg';
import img8 from '../assets/img/profiles/avatar-08.jpg';
import img9 from '../assets/img/profiles/avatar-09.jpg';
import img10 from '../assets/img/profiles/avatar-10.jpg';

const Salary = (props) => {
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

					{/* <!-- Page Header -->*/}
					<div className="page-header">
						<div className="row align-items-center">
							<div className="col">
								<h3 className="page-title">Salary</h3>
								<ul className="breadcrumb">
									<li className="breadcrumb-item"><Link to="/dashboard">Dashboard</Link></li>
									<li className="breadcrumb-item active">Salary</li>
								</ul>
							</div>
							<div className="col-auto text-end float-end me-auto">
								<a href="#" className="btn btn-outline-primary ms-2"><i className="fas fa-download"></i> Download</a>
								<Link to="/addsalary" className="btn btn-primary"><i className="fas fa-plus"></i></Link>
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
													<th>Gender</th>
													<th>Joining Date</th>
													<th>Amount</th>
													<th className="text-end">Status</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>PRE2209</td>
													<td>
														<h2 className="table-avatar">
															<a className="avatar avatar-sm ms-2"><img className="avatar-img rounded-circle" src={img1} alt="User Image"/></a>
															<a>Aaliyah</a>
														</h2>
													</td>
													<td>Female</td>													
													<td>17 Aug 2020</td>
													<td>$320</td>
													<td className="text-end">
														<span className="badge badge-success">Paid</span>
													</td>
												</tr>
												<tr>
													<td>PRE2213</td>
													<td>
														<h2 className="table-avatar">
															<a className="avatar avatar-sm ms-2"><img className="avatar-img rounded-circle" src={img2}  alt="User Image"/></a>
															<a>Malynne</a>
														</h2>
													</td>
													<td>Female</td>													
													<td>05 Aug 2020</td>
													<td>$536</td>
													<td className="text-end">
														<span className="badge badge-success">Paid</span>
													</td>
												</tr>
												<tr>
													<td>PRE2143</td>
													<td>
														<h2 className="table-avatar">
															<a className="avatar avatar-sm ms-2"><img className="avatar-img rounded-circle" src={img3}  alt="User Image"/></a>
															<a>Levell Scott</a>
														</h2>
													</td>
													<td>Male</td>													
													<td>04 Sept 2020</td>
													<td>$378</td>
													<td className="text-end">
														<span className="badge badge-success">Paid</span>
													</td>
												</tr>
												<tr>
													<td>PRE2431</td>
													<td>
														<h2 className="table-avatar">
															<a className="avatar avatar-sm ms-2"><img className="avatar-img rounded-circle" src={img4}  alt="User Image"/></a>
															<a>Minnie</a>
														</h2>
													</td>
													<td>Female</td>													
													<td>17 Sept 2020</td>
													<td>$246</td>
													<td className="text-end">
														<span className="badge badge-danger">Unpaid</span>
													</td>
												</tr>
												<tr>
													<td>PRE1534</td>
													<td>
														<h2 className="table-avatar">
															<a className="avatar avatar-sm ms-2"><img className="avatar-img rounded-circle" src={img5}  alt="User Image"/></a>
															<a>Lois A</a>
														</h2>
													</td>
													<td>Male</td>													
													<td>02 Oct 2020</td>
													<td>$560</td>
													<td className="text-end">
														<span className="badge badge-danger">Unpaid</span>
													</td>
												</tr>
												<tr>
													<td>PRE2153</td>
													<td>
														<h2 className="table-avatar">
															<a className="avatar avatar-sm ms-2"><img className="avatar-img rounded-circle" src={img6}  alt="User Image"/></a>
															<a>Calvin</a>
														</h2>
													</td>
													<td>Male</td>													
													<td>28 Oct 2020</td>
													<td>$236</td>
													<td className="text-end">
														<span className="badge badge-danger">Unpaid</span>
													</td>
												</tr>
												<tr>
													<td>PRE1252</td>
													<td>
														<h2 className="table-avatar">
															<a className="avatar avatar-sm ms-2"><img className="avatar-img rounded-circle" src={img7}  alt="User Image"/></a>
															<a>Joe Kelley</a>
														</h2>
													</td>
													<td>Female</td>													
													<td>17 Oct 2020</td>
													<td>$237</td>
													<td className="text-end">
														<span className="badge badge-success">Paid</span>
													</td>
												</tr>
												<tr>
													<td>PRE1434</td>
													<td>
														<h2 className="table-avatar">
															<a className="avatar avatar-sm ms-2"><img className="avatar-img rounded-circle" src={img8}  alt="User Image"/></a>
															<a>Vincent</a>
														</h2>
													</td>
													<td>Male</td>													
													<td>05 Nov 2020</td>
													<td>$567</td>
													<td className="text-end">
														<span className="badge badge-success">Paid</span>
													</td>
												</tr>
												<tr>
													<td>PRE2345</td>
													<td>
														<h2 className="table-avatar">
															<a className="avatar avatar-sm ms-2"><img className="avatar-img rounded-circle" src={img9}  alt="User Image"/></a>
															<a>Kozma  Tatari</a>
														</h2>
													</td>
													<td>Female</td>													
													<td>12 Nov 2020</td>
													<td>$564</td>
													<td className="text-end">
														<span className="badge badge-success">Paid</span>
													</td>
												</tr>
												<tr>
													<td>PRE2365</td>
													<td>
														<h2 className="table-avatar">
															<a className="avatar avatar-sm ms-2"><img className="avatar-img rounded-circle" src={img10} alt="User Image"/></a>
															<a>John Chambers</a>
														</h2>
													</td>
													<td>Male</td>													
													<td>15 Nov 2020</td>
													<td>$234</td>
													<td className="text-end">
														<span className="badge badge-success">Paid</span>
													</td>
												</tr>
												<tr>
													<td>PRE1234</td>
													<td>
														<h2 className="table-avatar">
															<a className="avatar avatar-sm ms-2"><img className="avatar-img rounded-circle" src={img10}  alt="User Image"/></a>
															<a>Nathan Humphries</a>
														</h2>
													</td>
													<td>Male</td>													
													<td>17 Nov 2020</td>
													<td>$278</td>
													<td className="text-end">
														<span className="badge badge-success">Paid</span>
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

				{/* <!-- Footer -->	*/}
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

export default Salary;
