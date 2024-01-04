import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import Header from "../header";
import Sidebar from '../sidebar';
import Select2 from 'react-select2-wrapper';

const Addholiday = () => {
	const [options, setOptions] = useState([
        { id: 1, text: 'Select Holiday' },
        { id: 2, text: 'Public Holiday' },
        { id: 3, text: 'College Holiday' },
        { id: 4, text: 'Exam Holiday' },
		{ id: 5, text: 'Others' },
       
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
								<h3 className="page-title">Add Holiday</h3>
								<ul className="breadcrumb">
									<li className="breadcrumb-item"><Link to="/holiday">Holiday</Link></li>
									<li className="breadcrumb-item active">Add Holiday</li>
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
												<h5 className="form-title"><span>Holiday Information</span></h5>
											</div>
											<div className="col-12 col-sm-6">  
												<div className="form-group">
													<label>Holiday Id</label>
													<input type="text" className="form-control"/>
												</div>
											</div>
											<div className="col-12 col-sm-6">
												<div className="form-group">
													<label>Holiday Name</label>
													<input type="text" className="form-control"/>
												</div>
											</div>
											<div className="col-12 col-sm-6">
												<div className="form-group">
													<label>Type of Holiday</label>
													<Select2
                                                             className="w-100"
                                                            data={options}
                                                            options={{
                                                                placeholder: 'Select Holiday',
                                                            }}
                                                        />													
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

export default  Addholiday;
