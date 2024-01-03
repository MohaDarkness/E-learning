
import React from 'react';
import { Link } from 'react-router-dom'
import Header from "../header";
import Sidebar from '../sidebar';


const Editbooks = (props) => {
	
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
								<h3 className="page-title">Edit Books</h3>
								<ul className="breadcrumb">
									<li className="breadcrumb-item"><Link to="/library">Library</Link></li>
									<li className="breadcrumb-item active">Edit Books</li>
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
												<h5 className="form-title"><span>Book Information</span></h5>
											</div>
											<div className="col-12 col-sm-6">  
												<div className="form-group">
													<label>Book ID</label>
													<input type="text" className="form-control" defaultValue="PRE1534"/>
												</div>
											</div>
											<div className="col-12 col-sm-6">
												<div className="form-group">
													<label>Book Name</label>
													<input type="text" className="form-control" defaultValue="Acoustics"/>
												</div>
											</div>
											<div className="col-12 col-sm-6">
												<div className="form-group">
													<label>Language</label>
													<select className="form-control select">
														<option>English</option>
														<option>English</option>
														<option>Turkish</option>
														<option>Chinese</option>
														<option>Spanish</option>
														<option>Arabic</option>
													</select>
												</div>
											</div>
											<div className="col-12 col-sm-6">
												<div className="form-group">
													<label>Department</label>
													<input type="text" className="form-control" defaultValue="Science"/>
												</div>
											</div>
											<div className="col-12 col-sm-6">
												<div className="form-group">
													<label>className</label>
													<select className="form-control select">
														<option>10</option>
														<option>LKG</option>
														<option>UKG</option>
														<option>1</option>
														<option>2</option>
														<option>3</option>
														<option>4</option>
														<option>5</option>
														<option>6</option>
														<option>7</option>
														<option>8</option>
														<option>9</option>
														<option>10</option>
														<option>11</option>
														<option>12</option>
													</select>
												</div>
											</div>
											<div className="col-12 col-sm-6">
												<div className="form-group">
													<label>Type</label>
													<select className="form-control select">
														<option>Book</option>
														<option>Book</option>
														<option>DVD</option>
														<option>CD</option>
														<option>Newspaper</option>
													</select>
												</div>
											</div>
											<div className="col-12 col-sm-6">
												<div className="form-group">
													<label>Status</label>
													<select className="form-control select">
														<option>In Stock</option>
														<option>In Stock</option>
														<option>Out of Stock</option>
													</select>
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

export default Editbooks;
