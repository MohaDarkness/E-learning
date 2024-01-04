
import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import Header from "../header";
import Sidebar from '../sidebar';
import Select2 from 'react-select2-wrapper';


const Formvertical = () => {
	const [options, setOptions] = useState([
        { id: 1, text: 'Select' },
        { id: 2, text: 'A+' },
        { id: 3, text: 'B+' },
        { id: 4, text: 'AB+' },
	]);
	const [selectOptions, select] = useState([
		{ id: 1, text: 'Select State' },
		{ id: 2, text: 'California' },
		{ id: 3, text: 'Texas' },
		{ id: 4, text: 'Florida' },	
		]);
		const [countryOptions, setcountryOptions] = useState( [
			{ id:1, text: 'Select Country' },
			{ id:2, text: 'USA' },
			{ id:3, text: 'France' },
			{ id:4, text: 'India' },
			{ id:5, text: 'Spain' }
		]);
		const formHandler = () => {
			console.log(e);
		}
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
								<h3 className="page-title">Vertical Form</h3>
								<ul className="breadcrumb">
									<li className="breadcrumb-item"><Link to="/dashboard">Dashboard</Link></li>
									<li className="breadcrumb-item active">Vertical Form</li>
								</ul>
							</div>
						</div>
					</div>
					{/* <!-- /Page Header --> */}

					<div className="row">
						<div className="col-md-6">
							<div className="card">
								<div className="card-header">
									<h5 className="card-title">Basic Form</h5>
								</div>
								<div className="card-body">
									<form>
										<div className="form-group">
											<label>First Name</label>
											<input type="text" className="form-control"/>
										</div>
										<div className="form-group">
											<label>Last Name</label>
											<input type="text" className="form-control"/>
										</div>
										<div className="form-group">
											<label>Email Address</label>
											<input type="email" className="form-control"/>
										</div>
										<div className="form-group">
											<label>Username</label>
											<input type="text" className="form-control"/>
										</div>
										<div className="form-group">
											<label>Password</label>
											<input type="password" className="form-control"/>
										</div>
										<div className="form-group">
											<label>Repeat Password</label>
											<input type="password" className="form-control"/>
										</div>
										
										<div className="text-end">
											<button type="submit" className="btn btn-primary"> Submit</button>
										</div>
									</form>
								</div>
							</div>
						</div>
						<div className="col-md-6">
							<div className="card">
								<div className="card-header">
									<h5 className="card-title">Address Form</h5>
								</div>
								<div className="card-body">
									<form>
										<div className="form-group">
											<label>Address Line 1</label>
											<input type="text" className="form-control"/>
										</div>
										<div className="form-group">
											<label>Address Line 2</label>
											<input type="text" className="form-control"/>
										</div>
										<div className="form-group">
											<label>City</label>
											<input type="text" className="form-control"/>
										</div>
										<div className="form-group">
											<label>State</label>
											<input type="text" className="form-control"/>
										</div>
										<div className="form-group">
											<label>Country</label>
											<input type="text" className="form-control"/>
										</div>
										<div className="form-group">
											<label>Postal Code</label>
											<input type="text" className="form-control"/>
										</div>
										<div className="text-end">
											<button type="submit" className="btn btn-primary">Submit</button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
					
					<div className="row">
						<div className="col-md-12">
							<div className="card">
								<div className="card-header">
									<h5 className="card-title">Two Column Vertical Form</h5>
								</div>
								<div className="card-body">
									<form action="#">
										<h5 className="card-title">Personal Information</h5>
										<div className="row">
											<div className="col-md-6">
												<div className="form-group">
													<label>First Name</label>
													<input type="text" className="form-control"/>
												</div>
												<div className="form-group">
													<label>Last Name</label>
													<input type="text" className="form-control"/>
												</div>
												<div className="form-group">
													<label>Blood Group</label>
													<Select2
                                                             className="w-100"
                                                            data={options}
                                                            options={{
                                                                placeholder: 'Select',
                                                            }}
                                                        />													
												</div>
												<div className="form-group">
													<label className="d-block">Gender:</label>
													<div className="form-check form-check-inline">
														<input className="form-check-input" type="radio" name="gender" id="gender_male" value="option1"/>
														<label className="form-check-label" htmlFor="gender_male">Male</label>
													</div>
													<div className="form-check form-check-inline">
														<input className="form-check-input" type="radio" name="gender" id="gender_female" value="option2"/>
														<label className="form-check-label" htmlFor="gender_female">Female</label>
													</div>
												</div>
											</div>
											<div className="col-md-6">
												<div className="form-group">
													<label>Username</label>
													<input type="text" className="form-control"/>
												</div>
												<div className="form-group">
													<label>Email</label>
													<input type="text" className="form-control"/>
												</div>

												<div className="form-group">
													<label>Password</label>
													<input type="text" className="form-control"/>
												</div>
												<div className="form-group">
													<label>Repeat Password</label>
													<input type="text" className="form-control"/>
												</div>
											</div>
										</div>
										<h5 className="card-title">Postal Address</h5>
										<div className="row">
											<div className="col-md-6">
												<div className="form-group">
													<label>Address Line 1</label>
													<input type="text" className="form-control"/>
												</div>
												<div className="form-group">
													<label>Address Line 2</label>
													<input type="text" className="form-control"/>
												</div>
												<div className="form-group">
													<label>State</label>
													<input type="text" className="form-control"/>
												</div>
											</div>
											<div className="col-md-6">
												<div className="form-group">
													<label>City</label>
													<input type="text" className="form-control"/>
												</div>
												<div className="form-group">
													<label>Country</label>
													<input type="text" className="form-control"/>
												</div>
												<div className="form-group">
													<label>Postal Code</label>
													<input type="text" className="form-control"/>
												</div>
											</div>
										</div>
										<div className="text-end">
											<button type="submit" className="btn btn-primary">Submit</button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
					
					<div className="row">
						<div className="col-md-12">
							<div className="card">
								<div className="card-header">
									<h5 className="card-title">Two Column Vertical Form</h5>
								</div>
								<div className="card-body">
									<form>
										<div className="row">
											<div className="col-md-6">
												<h5 className="card-title">Personal details</h5>
												<div className="form-group">
													<label>Name:</label>
													<input type="text" className="form-control"/>
												</div>
												<div className="form-group">
													<label>Password:</label>
													<input type="password" className="form-control"/>
												</div>
												<div className="form-group">
													<label>State:</label>
													<Select2
                                                             className="w-100"
                                                            data={selectOptions}
                                                            options={{
                                                                placeholder: 'Select State',
                                                            }}
                                                        />													
												</div>
												<div className="form-group">
													<label>Your Message:</label>
													<textarea rows="5" cols="5" className="form-control" placeholder="Enter message"></textarea>
												</div>
											</div>
											<div className="col-md-6">
												<h5 className="card-title">Personal details</h5>
												<div className="row">
													<div className="col-md-6">
														<div className="form-group">
															<label>First Name:</label>
															<input type="text" className="form-control"/>
														</div>
													</div>
													<div className="col-md-6">
														<div className="form-group">
															<label>Last Name:</label>
															<input type="text" className="form-control"/>
														</div>
													</div>
												</div>
												<div className="row">
													<div className="col-md-6">
														<div className="form-group">
															<label>Email:</label>
															<input type="text" className="form-control"/>
														</div>
													</div>
													<div className="col-md-6">
														<div className="form-group">
															<label>Phone:</label>
															<input type="text" className="form-control"/>
														</div>
													</div>
												</div>
												<div className="row">
													<div className="col-md-12">
														<div className="form-group">
															<label>Address line:</label>
															<input type="text" className="form-control"/>
														</div>
													</div>
												</div>
												<div className="row">
													<div className="col-md-6">
														<div className="form-group">
															<label>Country:</label>
															<Select2
                                                             className="w-100"
                                                            data={countryOptions}
                                                            options={{
                                                                placeholder: 'Select Country',
                                                            }}
                                                        />																
														</div>
													</div>
													<div className="col-md-6">
														<div className="form-group">
															<label>State/Province:</label>
															<input type="text" className="form-control"/>
														</div>
													</div>
												</div>
												<div className="row">
													<div className="col-md-6">
														<div className="form-group">
															<label>ZIP code:</label>
															<input type="text" className="form-control"/>
														</div>
													</div>
													<div className="col-md-6">
														<div className="form-group">
															<label>City:</label>
															<input type="text" className="form-control"/>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="text-end">
											<button type="submit" className="btn btn-primary">Submit</button>
										</div>
									</form>
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

export default Formvertical;
