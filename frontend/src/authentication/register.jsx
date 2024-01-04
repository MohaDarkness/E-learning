
import React from 'react';
import { Link } from 'react-router-dom'
import Logo from '../assets/img/logo-white.png';
import Loginbg from '../assets/img/login.jpg';

const Register = (props) => {
	
    return (
	<>
		{/* <!-- Main Wrapper --> */}
        <div className="main-wrapper login-body">
            <div className="login-wrapper">
            	<div className="container">
                	<div className="loginbox">
                    	<div className="login-left" style={{ backgroundImage: 'url('+Loginbg+')', }}>
                        <img className="img-fluid" src={Logo} alt="Logo" />
                        </div>
                        <div className="login-right">
							<div className="login-right-wrap">
								<h1>Register</h1>
								<p className="account-subtitle">Access to our dashboard</p>
								
								{/* <!-- Form --> */}
								<form action="login.html">
									<div className="form-group">
										<input className="form-control" type="text" placeholder="Name"/>
									</div>
									<div className="form-group">
										<input className="form-control" type="text" placeholder="Email"/>
									</div>
									<div className="form-group">
										<input className="form-control" type="text" placeholder="Password"/>
									</div>
									<div className="form-group">
										<input className="form-control" type="text" placeholder="Confirm Password"/>
									</div>
									<div className="form-group mb-0">										
										<a href="/login" className="btn btn-primary btn-block">Register</a>
									</div>
								</form>
								{/* <!-- /Form --> */}
								
								<div className="login-or">
									<span className="or-line"></span>
									<span className="span-or">or</span>
								</div>
								
								{/* <!-- Social Login --> */}
								<div className="social-login">
									<span>Register with</span>
									<a href="#" className="facebook"><i className="fab fa-facebook-f"></i></a><a href="#" className="google"><i className="fab fa-google"></i></a>
								</div>
								{/* <!-- /Social Login --> */}
								
								<div className="text-center dont-have">Already have an account? <Link to="/login">Login</Link></div>
							</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
		{/* <!-- /Main Wrapper --> */}
</>
    );
}

export default  Register;
