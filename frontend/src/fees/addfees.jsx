import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import Header from "../header";
import Sidebar from '../sidebar';
import Select2 from 'react-select2-wrapper';

const Addfees = () => {
	const [options, setOptions] = useState([
        { id: 1, text: 'Select Type' },
        { id: 2, text: 'className Test' },
        { id: 3, text: 'Exam Fees' },
        { id: 4, text: 'Hostel Fees' },
		{ id: 5, text: 'Transport Fees' },
        { id: 6, text: 'Mess Fees' },
	]);
	const [selectOptions, select] = useState([
		{ id: 1, text: 'Select className' },
		{ id: 2, text: 'LKG' },
		{ id: 3, text: 'UKG' },	
		{ id: 4, text: '1' },
		{ id: 5, text: '2' },	
		{ id: 6, text: '3' },
		{ id: 7, text: '4' },	
		{ id: 8, text: '5' },
		{ id: 9, text: '6' },	
		{ id: 10, text: '7' },
		{ id: 11, text: '8' },	
		{ id: 12, text: '9' },
		{ id: 13, text: '10' },	
		{ id: 14, text: '11' },
		{ id: 15, text: '12' },	
	
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
								<h3 className="page-title">Add Fees</h3>
								<ul className="breadcrumb">
									<li className="breadcrumb-item"><Link to="/fees">Fees</Link></li>
									<li className="breadcrumb-item active">Add Fees</li>
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
												<h5 className="form-title"><span>Fees Information</span></h5>
											</div>
											<div className="col-12 col-sm-6">  
												<div className="form-group">
													<label>Fees ID</label>
													<input type="text" className="form-control"/>
												</div>
											</div>
											<div className="col-12 col-sm-6">
												<div className="form-group">
													<label>Fees Type</label>
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
													<label>Gender</label>
													<Select2
                                                             className="w-100"
                                                            data={selectOptions}
                                                            options={{
                                                                placeholder: 'Select className',
                                                            }}
                                                        />													
												</div>
											</div>
											<div className="col-12 col-sm-6">
												<div className="form-group">
													<label>Fees Amount</label>
													<input type="text" className="form-control"/>
												</div>
											</div>
											<div className="col-12 col-sm-6">
												<div className="form-group">
													<label>Start Date</label>
													<input type="date" className="form-control"/>
												</div>
											</div>
											<div className="col-12 col-sm-6">
												<div className="form-group">
													<label>End Date</label>
													<input type="date" className="form-control"/>
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

export default  Addfees;
