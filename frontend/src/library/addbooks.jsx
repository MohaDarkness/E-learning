
import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import Header from "../header";
import Sidebar from '../sidebar';
import Select2 from 'react-select2-wrapper';

const Addbooks = (props) => {
	const [options, setOptions] = useState([
        { id: 1, text: 'Select Language' },
        { id: 2, text: 'English' },
        { id: 3, text: 'Turkish' },
        { id: 4, text: 'Chinese' },
		{ id: 5, text: 'Spanish' },
		{ id: 6, text: 'Arabic' },	
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
	{ id: 10, text: '2' },
	{ id: 11, text: '3' },
	{ id: 12, text: '4' },	
	]);

const [typeOptions, selectType] = useState([
	{ id: 1, text: 'Select Type' },
	{ id: 2, text: 'Book' },
	{ id: 3, text: 'DVD' },
	{ id: 4, text: 'CD' },
	{ id: 5, text: 'Newspaper' },	
]);

const [statusOptions, selectStatus] = useState([
	{ id: 1, text: 'Select Status' },
	{ id: 2, text: 'In Stock' },
	{ id: 3, text: 'Out of Stock' },
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
								<h3 className="page-title">Add Books</h3>
								<ul className="breadcrumb">
									<li className="breadcrumb-item"><Link to="/library">Library</Link></li>
									<li className="breadcrumb-item active">Add Books</li>
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
													<input type="text" className="form-control"/>
												</div>
											</div>
											<div className="col-12 col-sm-6">
												<div className="form-group">
													<label>Book Name</label>
													<input type="text" className="form-control"/>
												</div>
											</div>
											<div className="col-12 col-sm-6">
												<div className="form-group">
													<label>Language</label>												
													<Select2
                                                             className="w-100"
                                                            data={options}
                                                            options={{
                                                                placeholder: 'Select Language',
                                                            }}
                                                        />	
												</div>
											</div>
											<div className="col-12 col-sm-6">
												<div className="form-group">
													<label>Department</label>
													<input type="text" className="form-control"/>
												</div>
											</div>
											<div className="col-12 col-sm-6">
												<div className="form-group">
													<label>className</label>
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
													<label>Type</label>
													<Select2
                                                             className="w-100"
                                                            data={typeOptions}
                                                            options={{
                                                                placeholder: 'Select Type',
                                                            }}
                                                        />													
												</div>
											</div>
											<div className="col-12 col-sm-6">
												<div className="form-group">
													<label>Status</label>
													<Select2
                                                             className="w-100"
                                                            data={statusOptions}
                                                            options={{
                                                                placeholder: 'Select Status',
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

export default Addbooks;
