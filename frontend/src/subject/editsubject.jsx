
import React from 'react';
import { Link } from 'react-router-dom'
import Header from "../header";
import Sidebar from '../sidebar';


const Editstudents = (props) => {
	
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
								<h3 className="page-title">Edit Subject</h3>
								<ul className="breadcrumb">
									<li className="breadcrumb-item"><Link to="/subject">Subject</Link></li>
									<li className="breadcrumb-item active">Edit Subject</li>
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
												<h5 className="form-title"><span>Subject Information</span></h5>
											</div>
											<div className="col-12 col-sm-6">  
												<div className="form-group">
													<label>Subject ID</label>
													<input type="text" className="form-control" defaultValue="PRE1534"/>
												</div>
											</div>
											<div className="col-12 col-sm-6">
												<div className="form-group">
													<label>Subject Name</label>
													<input type="text" className="form-control" defaultValue="Botony"/>
												</div>
											</div>
											<div className="col-12 col-sm-6">
												<div className="form-group">
													<label>className</label>
													<input type="text" className="form-control" defaultValue="9"/>
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

export default Editstudents;
