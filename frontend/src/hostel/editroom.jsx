import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import Header from "../header";
import Sidebar from '../sidebar';
import Select2 from 'react-select2-wrapper';

const Editroom = (props) => {
	const [options, setOptions] = useState([
        { id: 1, text: 'Normal' },
        { id: 2, text: 'Normal' },
        { id: 3, text: 'AC' },
        { id: 4, text: 'Suite' },
	]);
	const [selectOptions, select] = useState([
		{ id: 1, text: 'Available' },
		{ id: 2, text: 'Available' },
		{ id: 3, text: 'Not Available' },	
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
								<h3 className="page-title">Edit Rooms</h3>
								<ul className="breadcrumb">
									<li className="breadcrumb-item"><Link to="/hostel">Hostel</Link></li>
									<li className="breadcrumb-item active">Edit Rooms</li>
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
													<input type="text" className="form-control" defaultValue="A Block"/>
												</div>
											</div>
											<div className="col-12 col-sm-6">
												<div className="form-group">
													<label>Room No</label>
													<input type="text" className="form-control" defaultValue="101"/>
												</div>
											</div>
											<div className="col-12 col-sm-6">
												<div className="form-group">
													<label>Room Type</label>													
													<Select2
                                                             className="w-100"
                                                            data={options}
                                                            options={{
                                                                placeholder: 'Normal',
                                                            }}
                                                        />
												</div>
											</div>
											<div className="col-12 col-sm-6">
												<div className="form-group">
													<label>No of Beds</label>
													<input type="text" className="form-control" defaultValue="5"/>
												</div>
											</div>
											<div className="col-12 col-sm-6">
												<div className="form-group">
													<label>Cose per Bed</label>
													<input type="text" className="form-control" defaultValue="$25"/>
												</div>
											</div>
											<div className="col-12 col-sm-6">
												<div className="form-group">
													<label>Availability</label>												
													<Select2
                                                             className="w-100"
                                                            data={selectOptions}
                                                            options={{
                                                                placeholder: 'Available',
                                                            }}
                                                        />
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

export default Editroom;
