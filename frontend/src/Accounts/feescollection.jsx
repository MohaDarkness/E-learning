
import React, {useEffect} from 'react';
import { Link } from 'react-router-dom'
import Header from "../header";
import Sidebar from '../sidebar';
import Img from '../assets/img/profiles/avatar-01.jpg';
import Img1 from '../assets/img/profiles/avatar-02.jpg';
import Img2 from '../assets/img/profiles/avatar-03.jpg';
import Img3 from '../assets/img/profiles/avatar-04.jpg';
import Img4 from '../assets/img/profiles/avatar-05.jpg';
import Img5 from '../assets/img/profiles/avatar-06.jpg';
import Img6 from '../assets/img/profiles/avatar-07.jpg';
import Img7 from '../assets/img/profiles/avatar-08.jpg';
import Img8 from '../assets/img/profiles/avatar-09.jpg';
import Img9 from '../assets/img/profiles/avatar-10.jpg';
import Img10 from '../assets/img/profiles/avatar-11.jpg';


const Feescollection = () => {
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
								<h3 className="page-title">Fees Collections</h3>
								<ul className="breadcrumb">
									<li className="breadcrumb-item"><Link to="/dashboard">Dashboard</Link></li>
									<li className="breadcrumb-item active">Fees Collections</li>
								</ul>
							</div>
							<div className="col-auto text-end float-left mr-auto">
								<a href="#" className="btn btn-outline-primary ms-2"><i className="fas fa-download"></i> Download</a>
								<Link to="/add-fees-collection" className="btn btn-primary"><i className="fas fa-plus"></i></Link>
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
													<th>Fees Type</th>
													<th>Amount</th>
													<th>Paid Date</th>
													<th className="text-end">Status</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>PRE2209</td>
													<td>
														<h2 className="table-avatar">
															<a className="avatar avatar-sm ms-2"><img className="avatar-img rounded-circle" src={Img} alt="User Image"/></a>
															<a>Aaliyah</a>
														</h2>
													</td>
													<td>Female</td>
													<td>Mess Fees</td>
													<td>$120</td>
													<td>17 Aug 2020</td>
													<td className="text-end">
														<span className="badge badge-success">Paid</span>
													</td>
												</tr>
												<tr>
													<td>PRE2213</td>
													<td>
														<h2 className="table-avatar">
															<a className="avatar avatar-sm ms-2"><img className="avatar-img rounded-circle" src={Img1} alt="User Image"/></a>
															<a>Malynne</a>
														</h2>
													</td>
													<td>Female</td>
													<td>className Test</td>
													<td>$56</td>
													<td>05 Aug 2020</td>
													<td className="text-end">
														<span className="badge badge-success">Paid</span>
													</td>
												</tr>
												<tr>
													<td>PRE2143</td>
													<td>
														<h2 className="table-avatar">
															<a className="avatar avatar-sm ms-2"><img className="avatar-img rounded-circle" src={Img2} alt="User Image"/></a>
															<a>Levell Scott</a>
														</h2>
													</td>
													<td>Male</td>
													<td>Exam Fees</td>
													<td>$378</td>
													<td>04 Sept 2020</td>
													<td className="text-end">
														<span className="badge badge-success">Paid</span>
													</td>
												</tr>
												<tr>
													<td>PRE2431</td>
													<td>
														<h2 className="table-avatar">
															<a className="avatar avatar-sm ms-2"><img className="avatar-img rounded-circle" src={Img3} alt="User Image"/></a>
															<a>Minnie</a>
														</h2>
													</td>
													<td>Female</td>
													<td>Exam Fees</td>
													<td>$246</td>
													<td>17 Sept 2020</td>
													<td className="text-end">
														<span className="badge badge-danger">Unpaid</span>
													</td>
												</tr>
												<tr>
													<td>PRE1534</td>
													<td>
														<h2 className="table-avatar">
															<a className="avatar avatar-sm ms-2"><img className="avatar-img rounded-circle" src={Img4} alt="User Image"/></a>
															<a>Lois A</a>
														</h2>
													</td>
													<td>Male</td>
													<td>Exam Fees</td>
													<td>$56</td>
													<td>02 Oct 2020</td>
													<td className="text-end">
														<span className="badge badge-danger">Unpaid</span>
													</td>
												</tr>
												<tr>
													<td>PRE2153</td>
													<td>
														<h2 className="table-avatar">
															<a className="avatar avatar-sm ms-2"><img className="avatar-img rounded-circle" src={Img5} alt="User Image"/></a>
															<a>Calvin</a>
														</h2>
													</td>
													<td>Male</td>
													<td>Exam Fees</td>
													<td>$236</td>
													<td>28 Oct 2020</td>
													<td className="text-end">
														<span className="badge badge-danger">Unpaid</span>
													</td>
												</tr>
												<tr>
													<td>PRE1252</td>
													<td>
														<h2 className="table-avatar">
															<a className="avatar avatar-sm ms-2"><img className="avatar-img rounded-circle" src={Img6} alt="User Image"/></a>
															<a>Joe Kelley</a>
														</h2>
													</td>
													<td>Female</td>
													<td>Transport Fees</td>
													<td>$237</td>
													<td>17 Oct 2020</td>
													<td className="text-end">
														<span className="badge badge-success">Paid</span>
													</td>
												</tr>
												<tr>
													<td>PRE1434</td>
													<td>
														<h2 className="table-avatar">
															<a className="avatar avatar-sm ms-2"><img className="avatar-img rounded-circle" src={Img7} alt="User Image"/></a>
															<a>Vincent</a>
														</h2>
													</td>
													<td>Male</td>
													<td>Mess Fees</td>
													<td>$567</td>
													<td>05 Nov 2020</td>
													<td className="text-end">
														<span className="badge badge-success">Paid</span>
													</td>
												</tr>
												<tr>
													<td>PRE2345</td>
													<td>
														<h2 className="table-avatar">
															<a className="avatar avatar-sm ms-2"><img className="avatar-img rounded-circle" src={Img8} alt="User Image"/></a>
															<a>Kozma  Tatari</a>
														</h2>
													</td>
													<td>Female</td>
													<td>Exam Fees</td>
													<td>$564</td>
													<td>12 Nov 2020</td>
													<td className="text-end">
														<span className="badge badge-success">Paid</span>
													</td>
												</tr>
												<tr>
													<td>PRE2365</td>
													<td>
														<h2 className="table-avatar">
															<a className="avatar avatar-sm ms-2"><img className="avatar-img rounded-circle" src={Img9} alt="User Image"/></a>
															<a>John Chambers</a>
														</h2>
													</td>
													<td>Male</td>
													<td>className Test</td>
													<td>$234</td>
													<td>15 Nov 2020</td>
													<td className="text-end">
														<span className="badge badge-success">Paid</span>
													</td>
												</tr>
												<tr>
													<td>PRE1234</td>
													<td>
														<h2 className="table-avatar">
															<a className="avatar avatar-sm ms-2"><img className="avatar-img rounded-circle" src={Img10} alt="User Image"/></a>
															<a>Nathan Humphries</a>
														</h2>
													</td>
													<td>Male</td>
													<td>Exam Fees</td>
													<td>$278</td>
													<td>17 Nov 2020</td>
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

export default Feescollection;
