
import React from 'react';
import { Link } from 'react-router-dom'
import Header from "../header";
import Sidebar from '../sidebar';


const Formmask = () => {
   
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
							<div className="col-sm-12">
								<h3 className="page-title">Form Mask</h3>
								<ul className="breadcrumb">
									<li className="breadcrumb-item"><Link to="/dashboard">Dashboard</Link></li>
									<li className="breadcrumb-item active">Form Mask</li>
								</ul>
							</div>
						</div>
					</div>
					{/* <!-- /Page Header --> */}
					
					<div className="row">
						<div className="col-sm-12">
							<div className="card">
								<div className="card-header">
									<h5 className="card-title mb-2">Form Mask</h5>
									<p className="card-text">Input masks can be used to force the user to enter data conform a specific format. Unlike validation, the user can't enter any other key than the ones specified by the mask.</p>
								</div>
								<div className="card-body">
									<form action="#">
										<div className="form-group">
											<label>Phone</label>
											<input type="text" id="phone" className="form-control"/>
											<span className="form-text text-muted">(999) 999-9999</span>
										</div>
										<div className="form-group">
											<label>Date</label>
											<input type="text" id="date" className="form-control"/>
											<span className="form-text text-muted">dd/mm/yyyy</span>
										</div>
										<div className="form-group">
											<label>SSN field 1</label>
											<input type="text" id="ssn" className="form-control"/>
											<span className="form-text text-muted">e.g "999-99-9999"</span>
										</div>
										<div className="form-group">
											<label>Phone field + ext.</label>
											<input type="text" id="phoneExt" className="form-control"/>
											<span className="form-text text-muted">+40 999 999 999</span>
										</div>
										<div className="form-group">
											<label>Product Key</label>
											<input type="text" id="product" className="form-control"/>
											<span className="form-text text-muted">e.g a*-999-a999</span>
										</div>
										<div className="form-group">
											<label>Currency</label>
											<input type="text" id="currency" className="form-control"/>
											<span className="form-text text-muted">$ 999,999,999.99</span>
										</div>
										<div className="form-group">
											<label>Eye Script</label>
											<input type="text" id="eyescript" className="form-control"/>
											<span className="form-text text-muted">~9.99 ~9.99 999</span>
										</div>
										<div className="form-group">
											<label>Percent</label>
											<input type="text" id="pct" className="form-control"/>
											<span className="form-text text-muted">e.g "99%"</span>
										</div>
										<div className="form-group mb-0">
											<label>Credit Card Number</label>
											<input type="text" className="form-control" id="ccn"/>
											<span className="form-text text-muted">e.g "999.999.999.9999"</span>
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

export default Formmask;
