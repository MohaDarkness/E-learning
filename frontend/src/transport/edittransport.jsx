import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import Header from "../header";
import Sidebar from '../sidebar';


const Edittransport = (props) => {
	
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
								<h3 className="page-title">Edit Transport</h3>
								<ul className="breadcrumb">
									<li className="breadcrumb-item"><Link to="/transport">Transport</Link></li>
									<li className="breadcrumb-item active">Edit Transport</li>
								</ul>
							</div>
						</div>
					</div>
					{/* <!-- /Page Header --> */}

					<div className="row">
						<div className="col-sm-12">
						
							<div className="card">
								<div className="card-body">
									<form>
										<div className="row">
											<div className="col-12">
												<h5 className="form-title"><span>Transport Information</span></h5>
											</div>
											<div className="col-12 col-sm-6">  
												<div className="form-group">
													<label>Route Name</label>
													<input type="text" className="form-control" defaultValue="New Cross"/>
												</div>
											</div>
											<div className="col-12 col-sm-6">
												<div className="form-group">
													<label>Vehicle Number</label>
													<input type="text" className="form-control" defaultValue="TN 43 AS 5263"/>
												</div>
											</div>
											<div className="col-12 col-sm-6">
												<div className="form-group">
													<label>Driver Name</label>
													<input type="text" className="form-control" defaultValue="Steve"/>
												</div>
											</div>
											<div className="col-12 col-sm-6">
												<div className="form-group">
													<label>License Number</label>
													<input type="text" className="form-control" defaultValue="REDH968532"/>
												</div>
											</div>
											<div className="col-12 col-sm-6">
												<div className="form-group">
													<label>Contact Number</label>
													<input type="text" className="form-control" defaultValue="+91 8974158962"/>
												</div>
											</div>
											<div className="col-12 col-sm-6">
												<div className="form-group">
													<label>Driver Address</label>
													<input type="text" className="form-control" defaultValue="152, South Pole, 2nd Street, 3rd Cross"/>
												</div>
											</div>
											<div className="col-12">
												<button type="submit" className="btn btn-primary">Submit</button>
											</div>
										</div>
									</form>
								</div>
							</div>
							
						</div>					
					</div>					
				</div>				
			</div>
			{/* <!-- /Page Wrapper --> */}

		</div>
		// <!-- /Main Wrapper -->
    );
}

export default Edittransport;
