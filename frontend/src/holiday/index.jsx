import React, {useEffect} from 'react';
import { Link } from 'react-router-dom'
import Header from "../header";
import Sidebar from '../sidebar';



const Holiday = () => {
   
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
								<h3 className="page-title">Holiday</h3>
								<ul className="breadcrumb">
									<li className="breadcrumb-item"><Link to="/dashboard">Dashboard</Link></li>
									<li className="breadcrumb-item active">Holiday</li>
								</ul>
							</div>
							<div className="col-auto text-end float-end me-auto">
								<a href="#" className="btn btn-outline-primary ms-2"><i className="fas fa-download"></i> Download</a>
								<Link to="/addholiday" className="btn btn-primary"><i className="fas fa-plus"></i></Link>
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
													<th>Holiday Name</th>
													<th>Type</th>
													<th>Start Date</th>
													<th>End Date</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>PRE2209</td>
													<td>
														<h2>
															<a>Sports Day</a>
														</h2>
													</td>
													<td>College Holiday</td>													
													<td>17 Aug 2020</td>
													<td>19 Aug 2020</td>
												</tr>
												<tr>
													<td>PRE2213</td>
													<td>
														<h2>
															<a>Memorial Day</a>
														</h2>
													</td>
													<td>Public Holiday</td>													
													<td>05 Aug 2020</td>
													<td>06 Aug 2020</td>
												</tr>
												<tr>
													<td>PRE2143</td>
													<td>
														<h2>
															<a>Annual Day</a>
														</h2>
													</td>
													<td>College Holiday</td>														
													<td>04 Sept 2020</td>
													<td>07 Sept 2020</td>
												</tr>
												<tr>
													<td>PRE2431</td>
													<td>
														<h2>
															<a>Exam Holiday</a>
														</h2>
													</td>
													<td>Semester leave</td>													
													<td>17 Sept 2020</td>
													<td>30 Sept 2020</td>
												</tr>
												<tr>
													<td>PRE2209</td>
													<td>
														<h2>
															<a>Sports Day</a>
														</h2>
													</td>
													<td>College Holiday</td>													
													<td>17 Aug 2020</td>
													<td>19 Aug 2020</td>
												</tr>
												<tr>
													<td>PRE2213</td>
													<td>
														<h2>
															<a>Memorial Day</a>
														</h2>
													</td>
													<td>Public Holiday</td>													
													<td>05 Aug 2020</td>
													<td>06 Aug 2020</td>
												</tr>
												<tr>
													<td>PRE2143</td>
													<td>
														<h2>
															<a>Annual Day</a>
														</h2>
													</td>
													<td>College Holiday</td>														
													<td>04 Sept 2020</td>
													<td>07 Sept 2020</td>
												</tr>
												<tr>
													<td>PRE2431</td>
													<td>
														<h2>
															<a>Exam Holiday</a>
														</h2>
													</td>
													<td>Semester leave</td>													
													<td>17 Sept 2020</td>
													<td>30 Sept 2020</td>
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

export default Holiday;
