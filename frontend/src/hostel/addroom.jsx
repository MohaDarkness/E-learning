
import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import Header from "../header";
import Sidebar from '../sidebar';
import Select2 from 'react-select2-wrapper';

const Addroom = () => {
	const [options, setOptions] = useState([
        { id: 1, text: 'Select Type' },
        { id: 2, text: 'Normal' },
        { id: 3, text: 'AC' },
        { id: 4, text: 'Suite' }
      
	]);

													
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
								<h3 className="page-title">Add Rooms</h3>
								<ul className="breadcrumb">
									<li className="breadcrumb-item"><Link to="/hostel">Hostel</Link></li>
									<li className="breadcrumb-item active">Add Rooms</li>
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
												<h5 className="form-title"><span>Room Information</span></h5>
											</div>
											<div className="col-12 col-sm-6">  
												<div className="form-group">
													<label>Block</label>
													<input type="text" className="form-control"/>
												</div>
											</div>
											<div className="col-12 col-sm-6">
												<div className="form-group">
													<label>Room No</label>
													<input type="text" className="form-control"/>
												</div>
											</div>
											<div className="col-12 col-sm-6">
												<div className="form-group">
													<label>Room Type</label>
													<Select2
                                                             className="w-100"
                                                            data={options}
                                                            options={{
                                                                placeholder: 'Select Type',
                                                            }}
                                                        />												
												</div>
											</div>
											<div className="col-12 col-sm-6">
												<div className="form-group">
													<label>No of Beds</label>
													<input type="text" className="form-control"/>
												</div>
											</div>
											<div className="col-12 col-sm-6">
												<div className="form-group">
													<label>Cose per Bed</label>
													<input type="text" className="form-control"/>
												</div>
											</div>
											<div className="col-12 col-sm-6">
												<div className="form-group">
													<label>Availability</label>
													<select className="form-control select">
														<option>Select Availability</option>
														<option>Available</option>
														<option>Not Available</option>
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

export default  Addroom;
