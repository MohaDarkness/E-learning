import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import Header from "../header";
import Sidebar from '../sidebar';
import Select2 from 'react-select2-wrapper';



const Formbasicinputs = () => {
	const [options, setOptions] = useState([
        { id: 1, text: '-- Select --' },
        { id: 2, text: 'Option 1' },
        { id: 3, text: 'Option 2' },
        { id: 4, text: 'Option 3' },
		{ id: 5, text: 'Option 4' },
        { id: 6, text: 'Option 5' },
	]);

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
								<h3 className="page-title">Basic Inputs</h3>
								<ul className="breadcrumb">
									<li className="breadcrumb-item"><Link to="/dashboard">Dashboard</Link></li>
									<li className="breadcrumb-item active">Basic Inputs</li>
								</ul>
							</div>
						</div>
					</div>
					{/* <!-- /Page Header --> */}
					
					<div className="row">
						<div className="col-lg-12">
							<div className="card">
								<div className="card-header">
									<h5 className="card-title">Basic Inputs</h5>
								</div>
								<div className="card-body">
									<form action="#">
										<div className="form-group row">
											<label className="col-form-label col-md-2">Text Input</label>
											<div className="col-md-10">
												<input type="text" className="form-control"/>
											</div>
										</div>
										<div className="form-group row">
											<label className="col-form-label col-md-2">Password</label>
											<div className="col-md-10">
												<input type="password" className="form-control"/>
											</div>
										</div>
										<div className="form-group row">
											<label className="col-form-label col-md-2">Disabled Input</label>
											<div className="col-md-10">
												<input type="text" className="form-control" disabled="disabled"/>
											</div>
										</div>
										<div className="form-group row">
											<label className="col-form-label col-md-2">Readonly Input</label>
											<div className="col-md-10">
												<input type="text" className="form-control" value="readonly" readOnly />
											</div>
										</div>
										<div className="form-group row">
											<label className="col-form-label col-md-2">Placeholder</label>
											<div className="col-md-10">
												<input type="text" className="form-control" placeholder="Placeholder"/>
											</div>
										</div>
										<div className="form-group row">
											<label className="col-form-label col-md-2">File Input</label>
											<div className="col-md-10">
												<input className="form-control" type="file"/>
											</div>
										</div>
										<div className="form-group row">
											<label className="col-form-label col-md-2">Default Select</label>
											<div className="col-md-10">
												<Select2
													className="w-100"
													data={options}
													options={{
													placeholder: '-- Select --',
													}}
												/>													
											</div>
										</div>
										<div className="form-group row">
											<label className="col-form-label col-md-2">Radio</label>
											<div className="col-md-10">
												<div className="radio">
													<label>
														<input type="radio" name="radio"/> Option 1
													</label>
												</div>
												<div className="radio">
													<label>
														<input type="radio" name="radio"/> Option 2
													</label>
												</div>
												<div className="radio">
													<label>
														<input type="radio" name="radio"/> Option 3
													</label>
												</div>
											</div>
										</div>
										<div className="form-group row">
											<label className="col-form-label col-md-2">Checkbox</label>
											<div className="col-md-10">
												<div className="checkbox">
													<label>
														<input type="checkbox" name="checkbox"/> Option 1
													</label>
												</div>
												<div className="checkbox">
													<label>
														<input type="checkbox" name="checkbox"/> Option 2
													</label>
												</div>
												<div className="checkbox">
													<label>
														<input type="checkbox" name="checkbox"/> Option 3
													</label>
												</div>
											</div>
										</div>
										<div className="form-group row">
											<label className="col-form-label col-md-2">Textarea</label>
											<div className="col-md-10">
												<textarea rows="5" cols="5" className="form-control" placeholder="Enter text here"></textarea>
											</div>
										</div>
										<div className="form-group mb-0 row">
											<label className="col-form-label col-md-2">Input Addons</label>
											<div className="col-md-10">
												<div className="input-group">
													<span className="input-group-text">$</span>
													<input className="form-control" type="text"/>
													<button className="btn btn-primary" type="button">Button</button>
												</div>
											</div>
										</div>
									</form>
								</div>
							</div>
							<div className="card">
								<div className="card-header">
									<h5 className="card-title">Input Sizes</h5>
								</div>
								<div className="card-body">
									<form action="#">
										<div className="form-group row">
											<label className="col-form-label col-md-2">Large Input</label>
											<div className="col-md-10">
												<input type="text" className="form-control form-control-lg" placeholder=".form-control-lg"/>
											</div>
										</div>
										<div className="form-group row">
											<label className="col-form-label col-md-2">Default Input</label>
											<div className="col-md-10">
												<input type="text" className="form-control" placeholder=".form-control"/>
											</div>
										</div>
										<div className="form-group mb-0 row">
											<label className="col-form-label col-md-2">Small Input</label>
											<div className="col-md-10">
												<input type="text" className="form-control form-control-sm" placeholder=".form-control-sm"/>
											</div>
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

export default Formbasicinputs;
