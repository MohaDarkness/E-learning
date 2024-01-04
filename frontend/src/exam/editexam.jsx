import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import Header from "../header";
import Sidebar from '../sidebar';
import Select2 from 'react-select2-wrapper';


const Editexam = (props) => {
	const [selectOptions, select] = useState([
		{ id: 1, text: '10' },
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
								<h3 className="page-title">Edit Exam</h3>
								<ul className="breadcrumb">
									<li className="breadcrumb-item"><Link to="/exam">Exam</Link></li>
									<li className="breadcrumb-item active">Edit Exam</li>
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
												<h5 className="form-title"><span>Exam Information</span></h5>
											</div>
											<div className="col-12 col-sm-6">  
												<div className="form-group">
													<label>Exam Name</label>
													<input type="text" className="form-control" defaultValue="className Test"/>
												</div>
											</div>
											<div className="col-12 col-sm-6">
												<div className="form-group">
													<label>className</label>
													<Select2
                                                             className="w-100"
                                                            data={selectOptions}
                                                            options={{
                                                                placeholder: '10',
                                                            }}
                                                        />													
												</div>
											</div>
											<div className="col-12 col-sm-6">  
												<div className="form-group">
													<label>Subject</label>
													<input type="text" className="form-control" defaultValue="English"/>
												</div>
											</div>
											<div className="col-12 col-sm-6">  
												<div className="form-group">
													<label>Fees</label>
													<input type="text" className="form-control" defaultValue="$50"/>
												</div>
											</div>
											<div className="col-12 col-sm-6">
												<div className="form-group">
													<label>Start Time</label>
													<input type="text" className="form-control" defaultValue="10:00 AM"/>
												</div>
											</div>
											<div className="col-12 col-sm-6">
												<div className="form-group">
													<label>End Time</label>
													<input type="text" className="form-control" defaultValue="01:00 PM"/>
												</div>
											</div>
											<div className="col-12 col-sm-6">
												<div className="form-group">
													<label>Event Date</label>
													<input type="text" className="form-control" defaultValue="26-11-2020"/>
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

export default Editexam;
