
import React from 'react';
import { Link } from 'react-router-dom'
import Logo from '../assets/img/logo-white.png';
import Loginbg from '../assets/img/login.jpg';


const Forgotpassword = (props) => {
	
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
								<h1>Forgot Password?</h1>
								<p className="account-subtitle">Enter your email to get a password reset link</p>
								
								{/* <!-- Form --> */}
								<form action="login/html">
									<div className="form-group">
										<input className="form-control" type="text" placeholder="Email"/>
									</div>
									<div className="form-group mb-0">
										<button className="btn btn-primary btn-block" type="submit">Reset Password</button>
									</div>
								</form>
								{/* <!-- /Form --> */}

								<div className="text-center dont-have">Remember your password? <Link to="/login">Login</Link></div>
							</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
		{/* <!-- /Main Wrapper -->     */}
	</>
    );
}

export default  Forgotpassword;
