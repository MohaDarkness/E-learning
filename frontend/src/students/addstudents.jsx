
import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import Header from "../header";
import Sidebar from '../sidebar';
import Select2 from 'react-select2-wrapper';

const Addstudents = () => {
	const [options, setOptions] = useState([
        { id: 1, text: 'Select Gender' },
        { id: 2, text: 'Female' },
        { id: 3, text: 'Male' },
        { id: 4, text: 'Others' }
      
	]);
	
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
								<h3 className="page-title">Add Students</h3>
								<ul className="breadcrumb">
									<li className="breadcrumb-item"><Link to="/students">Students</Link></li>
									<li className="breadcrumb-item active">Add Students</li>
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
												<h5 className="form-title"><span>Student Information</span></h5>
											</div>
											<div className="col-12 col-sm-6">  
												<div className="form-group">
													<label>First Name</label>
													<input type="text" className="form-control"/>
												</div>
											</div>
											<div className="col-12 col-sm-6">
												<div className="form-group">
													<label>Last Name</label>
													<input type="text" className="form-control"/>
												</div>
											</div>
											<div className="col-12 col-sm-6">  
												<div className="form-group">
													<label>Student Id</label>
													<input type="text" className="form-control"/>
												</div>
											</div>
											<div className="col-12 col-sm-6">
												<div className="form-group">
													<label>Gender</label>
													<Select2
                                                             className="w-100"
                                                            data={options}
                                                            options={{
                                                                placeholder: 'Select Gender',
                                                            }}
                                                     />													
												</div>
											</div>
											<div className="col-12 col-sm-6">
												<div className="form-group">
													<label>Date of Birth</label>
													<div>
														<input type="date" className="form-control"/>
													</div>
												</div>
											</div>
											<div className="col-12 col-sm-6">
												<div className="form-group">
													<label>className</label>
													<input type="text" className="form-control"/>
												</div>
											</div>
											<div className="col-12 col-sm-6">
												<div className="form-group">
													<label>Religion</label>
													<input type="text" className="form-control"/>
												</div>
											</div>
											<div className="col-12 col-sm-6">
												<div className="form-group">
													<label>Joining Date</label>
													<div>
														<input type="date" className="form-control"/>
													</div>
												</div>
											</div>
											<div className="col-12 col-sm-6">
												<div className="form-group">
													<label>Mobile Number</label>
													<input type="text" className="form-control"/>
												</div>
											</div>
											<div className="col-12 col-sm-6">
												<div className="form-group">
													<label>Admission Number</label>
													<input type="text" className="form-control"/>
												</div>
											</div>
											<div className="col-12 col-sm-6">
												<div className="form-group">
													<label>Section</label>
													<input type="text" className="form-control"/>
												</div>
											</div>
											<div className="col-12 col-sm-6">
												<div className="form-group">
													<label>Student Image</label>
													<input type="file" className="form-control"/>
												</div>
											</div>
											
											<div className="col-12">
												<h5 className="form-title"><span>Parent Information</span></h5>
											</div>
											<div className="col-12 col-sm-6">
												<div className="form-group">
													<label>Father's Name</label>
													<input type="text" className="form-control"/>
												</div>
											</div>
											<div className="col-12 col-sm-6">
												<div className="form-group">
													<label>Father's Occupation</label>
													<input type="text" className="form-control"/>
												</div>
											</div>
											<div className="col-12 col-sm-6">
												<div className="form-group">
													<label>Father's Mobile</label>
													<input type="text" className="form-control"/>
												</div>
											</div>
											<div className="col-12 col-sm-6">
												<div className="form-group">
													<label>Father's Email</label>
													<input type="email" className="form-control"/>
												</div>
											</div>
											<div className="col-12 col-sm-6">
												<div className="form-group">
													<label>Mother's Name</label>
													<input type="text" className="form-control"/>
												</div>
											</div>
											<div className="col-12 col-sm-6">
												<div className="form-group">
													<label>Mother's Occupation</label>
													<input type="text" className="form-control"/>
												</div>
											</div>
											<div className="col-12 col-sm-6">
												<div className="form-group">
													<label>Mother's Mobile</label>
													<input type="text" className="form-control"/>
												</div>
											</div>
											<div className="col-12 col-sm-6">
												<div className="form-group">
													<label>Mother's Email</label>
													<input type="email" className="form-control"/>
												</div>
											</div>
											<div className="col-12 col-sm-6">
												<div className="form-group">
													<label>Present Address</label>
													<textarea className="form-control"></textarea>
												</div>
											</div>
											<div className="col-12 col-sm-6">
												<div className="form-group">
													<label>Permanent Address</label>
													<textarea className="form-control"></textarea>
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

export default  Addstudents;
