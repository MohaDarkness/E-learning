import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import Header from "../header";
import Sidebar from '../sidebar';
import Select2 from 'react-select2-wrapper';

const Addsalary = () => {
	const [options, setOptions] = useState([
        { id: 1, text: 'Select Gender' },
        { id: 2, text: 'Female' },
        { id: 3, text: 'Male' },
        { id: 4, text: 'Others' },
		
	]);
    return (

		// <!-- Main Wrapper -->
		<div className="main-wrapper">
			<Header />
			<Sidebar />

			{/* <!-- Page Wrapper --> */}
			<div className="page-wrapper">
                <div className="content container-fluid">

					{/* <!-- Page Header -->				 */}
					<div className="page-header">
						<div className="row align-items-center">
							<div className="col">
								<h3 className="page-title">Add Salary</h3>
								<ul className="breadcrumb">
									<li className="breadcrumb-item"><Link to="/salary">Accounts</Link></li>
									<li className="breadcrumb-item active">Add Salary</li>
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
												<h5 className="form-title"><span>Salary Information</span></h5>
											</div>
											<div className="col-12 col-sm-6">  
												<div className="form-group">
													<label>Staff ID</label>
													<input type="text" className="form-control"/>
												</div>
											</div>
											<div className="col-12 col-sm-6">
												<div className="form-group">
													<label>Name</label>
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
													<label>Joining Date</label>
													<input type="date" className="form-control"/>
												</div>
											</div>
											<div className="col-12 col-sm-6">
												<div className="form-group">
													<label>Amount</label>
													<input type="text" className="form-control"/>
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

export default  Addsalary;
