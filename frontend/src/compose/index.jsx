
import React from 'react';
import { Link } from 'react-router-dom'
import Header from "../header";
import Sidebar from '../sidebar';


const Compose = () => {
   
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
						<div className="row">
							<div className="col">
								<h3 className="page-title">Compose</h3>
								<ul className="breadcrumb">
									<li className="breadcrumb-item"><Link to="/dashboard">Dashboard</Link></li>
									<li className="breadcrumb-item active">Compose</li>
								</ul>
							</div>
						</div>
					</div>
					{/* <!-- /Page Header --> */}
					
					<div className="row">
						<div className="col-lg-3 col-md-4">
							<ul className="inbox-menu">
								<li className="active">
									<a href="#"><i className="fas fa-download"></i> Inbox <span className="mail-count">(5)</span></a>
								</li>
								<li>
									<a href="#"><i className="far fa-star"></i> Important</a>
								</li>
								<li>
									<a href="#"><i className="far fa-paper-plane"></i> Sent Mail</a>
								</li>
								<li>
									<a href="#"><i className="far fa-file-alt"></i> Drafts <span className="mail-count">(13)</span></a>
								</li>
								<li>
									<a href="#"><i className="far fa-trash-alt"></i> Trash</a>
								</li>
							</ul>
						</div>
						<div className="col-lg-9 col-md-8">
							<div className="card">
								<div className="card-body">
									<form action="inbox.html">
										<div className="form-group">
											<input type="email" placeholder="To" className="form-control"/>
										</div>
										<div className="row">
											<div className="col-md-6">
												<div className="form-group">
													<input type="email" placeholder="Cc" className="form-control"/>
												</div>
											</div>
											<div className="col-md-6">
												<div className="form-group">
													<input type="email" placeholder="Bcc" className="form-control"/>
												</div>
											</div>
										</div>
										<div className="form-group">
											<input type="text" placeholder="Subject" className="form-control"/>
										</div>
										<div className="form-group">
											<textarea rows="4" className="form-control summernote" placeholder="Enter your message here"></textarea>
										</div>
										<div className="form-group mb-0">
											<div className="text-center">
												<button className="btn btn-primary"><i className="fas fa-paper-plane m-r-5"></i> <span>Send</span></button>
												<button className="btn btn-success m-l-5" type="button"> <i className="far fa-save m-r-5"></i> <span>Draft</span></button>
												<button className="btn btn-danger m-l-5" type="button"> <i className="far fa-trash-alt m-r-5"></i><span>Delete</span></button>
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
	{/* <!-- /Main Wrapper --> */}
</>
    );
}

export default Compose;
