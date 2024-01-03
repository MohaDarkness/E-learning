
import React, {useEffect} from 'react';
import { Link } from 'react-router-dom'
import Header from "../header";
import Sidebar from '../sidebar';
import Img1 from '../assets/img/profiles/avatar-02.jpg';
import Img2 from '../assets/img/profiles/avatar-03.jpg';
import Img3 from '../assets/img/profiles/avatar-04.jpg';
import Img4 from '../assets/img/profiles/avatar-05.jpg';
import Img5 from '../assets/img/profiles/avatar-06.jpg';
import Img6 from '../assets/img/profiles/avatar-07.jpg';
import Img7 from '../assets/img/profiles/avatar-08.jpg';
import Img8 from '../assets/img/profiles/avatar-09.jpg';
import Img9 from '../assets/img/profiles/avatar-10.jpg';

const Teachers = (props) => {

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
								<h3 className="page-title">Teachers</h3>
								<ul className="breadcrumb">
									<li className="breadcrumb-item"><Link to="/dashboard">Dashboard</Link></li>
									<li className="breadcrumb-item active">Teachers</li>
								</ul>
							</div>
							<div className="col-auto text-end float-end me-auto">
								<a href="#" className="btn btn-outline-primary ms-2"><i className="fas fa-download"></i> Download</a>
								<Link to="/addteacher" className="btn btn-primary"><i className="fas fa-plus"></i></Link>
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
													<th>Gender</th>
													<th>Subject</th>
													<th>Section</th>
													<th>Mobile Number</th>
													<th>Address</th>
													<th className="text-end">Action</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>PRE2209</td>
													<td>
														<h2 className="table-avatar">
															<Link to="/teacherdetails" className="avatar avatar-sm ms-2"><img className="avatar-img rounded-circle" src={Img1} alt="User Image"/></Link>
															<Link to="/teacherdetails">Aaliyah</Link>
														</h2>
													</td>
													<td>10</td>
													<td>Female</td>
													<td>Mathematics</td>
													<td>A</td>
													<td>097 3584 5870</td>
													<td>911 Deer Ridge Drive,USA</td>
													<td className="text-end">
														<div className="actions">
															<Link to="/editteacher" className="btn btn-sm bg-success-light ms-2">
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
															<Link to="teacherdetails" className="avatar avatar-sm ms-2"><img className="avatar-img rounded-circle" src={Img2} alt="User Image"/></Link>
															<Link to="teacherdetails">Malynne</Link>
														</h2>
													</td>
													<td>8</td>
													<td>Female</td>
													<td>Physics</td>
													<td>A</td>
													<td>242 362 3100</td>
													<td>Bacardi Rd P.O. Box N-4880, New Providence</td>
													<td className="text-end">
														<div className="actions">
															<Link to="/editteacher" className="btn btn-sm bg-success-light ms-2">
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
															<Link to="/teacherdetails" className="avatar avatar-sm ms-2"><img className="avatar-img rounded-circle" src={Img3} alt="User Image"/></Link>
															<Link to="/teacherdetails">Levell Scott</Link>
														</h2>
													</td>
													<td>10</td>
													<td>Male</td>
													<td>Science</td>
													<td>B</td>
													<td>026 7318 4366</td>
													<td>P.O. Box: 41, Gaborone</td>
													<td className="text-end">
														<div className="actions">
															<Link to="/editteacher" className="btn btn-sm bg-success-light ms-2">
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
															<Link to="/teacherdetails" className="avatar avatar-sm ms-2"><img className="avatar-img rounded-circle" src={Img4} alt="User Image"/></Link>
															<Link to="/teacherdetails">Minnie</Link>
														</h2>
													</td>
													<td>11</td>
													<td>Male</td>
													<td>History</td>
													<td>C</td>
													<td>952 512 4909</td>
													<td>4771  Oral Lake Road, Golden Valley</td>
													<td className="text-end">
														<div className="actions">
															<Link to="/editteacher" className="btn btn-sm bg-success-light ms-2">
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
															<Link to="/teacherdetails" className="avatar avatar-sm ms-2"><img className="avatar-img rounded-circle" src={Img5} alt="User Image"/></Link>
															<Link to="/teacherdetails">Lois A</Link>
														</h2>
													</td>
													<td>10</td>
													<td>Female</td>
													<td>English</td>
													<td>B</td>
													<td>413 289 1314</td>
													<td>2844 Leverton Cove Road, Palmer</td>
													<td className="text-end">
														<div className="actions">
															<Link to="/editteacher" className="btn btn-sm bg-success-light ms-2">
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
															<Link to="/teacherdetails" className="avatar avatar-sm ms-2"><img className="avatar-img rounded-circle" src={Img6} alt="User Image"/></Link>
															<Link to="/teacherdetails">Calvin</Link>
														</h2>
													</td>
													<td>9</td>
													<td>Male</td>
													<td>Mathematics</td>
													<td>C</td>
													<td>701 753 3810</td>
													<td>1900  Hidden Meadow Drive, Crete</td>
													<td className="text-end">
														<div className="actions">
															<Link to="/editteacher" className="btn btn-sm bg-success-light ms-2">
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
														<h2 className="table-avatar">
															<Link to="teacherdetails" className="avatar avatar-sm ms-2"><img className="avatar-img rounded-circle" src={Img7} alt="User Image"/></Link>
															<Link to="teacherdetails">Vincent</Link>
														</h2>
													</td>
													<td>10</td>
													<td>Male</td>
													<td>Mathematics</td>
													<td>C</td>
													<td>402 221 7523</td>
													<td>3979  Ashwood Drive, Omaha</td>
													<td className="text-end">
														<div className="actions">
															<Link to="/editteacher" className="btn btn-sm bg-success-light ms-2">
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
														<h2 className="table-avatar">
															<Link to="/teacherdetails" className="avatar avatar-sm ms-2"><img className="avatar-img rounded-circle" src={Img8} alt="User Image"/></Link>
															<Link to="/teacherdetails">Kozma  Tatari</Link>
														</h2>
													</td>
													<td>9</td>
													<td>Female</td>
													<td>Science</td>
													<td>A</td>
													<td>04 2239 968</td>
													<td>Rruga E Kavajes, Condor Center, Tirana</td>
													<td className="text-end">
														<div className="actions">
															<Link to="/editteacher" className="btn btn-sm bg-success-light ms-2">
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
														<h2 className="table-avatar">
															<Link to="/teacherdetails" className="avatar avatar-sm ms-2"><img className="avatar-img rounded-circle" src={Img9} alt="User Image"/></Link>
															<Link to="/teacherdetails">John Chambers</Link>
														</h2>
													</td>
													<td>11</td>
													<td>Male</td>
													<td>Botony</td>
													<td>B</td>
													<td>870 663 2334</td>
													<td>4667 Sunset Drive, Pine Bluff</td>
													<td className="text-end">
														<div className="actions">
															<Link to="/editteacher" className="btn btn-sm bg-success-light ms-2">
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
														<h2 className="table-avatar">
															<Link to="/teacherdetails" className="avatar avatar-sm ms-2"><img className="avatar-img rounded-circle" src={Img9} alt="User Image"/></Link>
															<Link to="/teacherdetails">Nathan Humphries</Link>
														</h2>
													</td>
													<td>10</td>
													<td>Male</td>
													<td>Biology</td>
													<td>A</td>
													<td>077 3499 9959</td>
													<td>86 Lamphey Road, Thelnetham</td>
													<td className="text-end">
														<div className="actions">
															<Link to="/editteacher" className="btn btn-sm bg-success-light ms-2">
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

export default Teachers;
