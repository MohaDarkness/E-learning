
import React from 'react';
import { Link } from 'react-router-dom'
import Logo from '../assets/img/logo-white.png';
import Loginbg from '../assets/img/login.jpg';

const Login = (props) => {
	
    return (
<>
        {/* Main Wrapper */}
        <div className="main-wrapper login-body">
            <div className="login-wrapper">
            	<div className="container">
                	<div className="loginbox">
                    	<div className="login-left" style={{ backgroundImage: 'url('+Loginbg+')', }} >					
							<img className="img-fluid" src={Logo} alt="Logo"/>
                        </div>
                        <div className="login-right">
							<div className="login-right-wrap">
								<h1>Login</h1>
								<p className="account-subtitle">Access to our dashboard</p>
								
								{/* <!-- Form --> */}
								<form action="/dashboard">
									<div className="form-group">
										<input className="form-control" type="text" placeholder="Email"/>
									</div>
									<div className="form-group">
										<input className="form-control" type="text" placeholder="Password"/>
									</div>
									<div className="form-group">
										<button className="btn btn-primary btn-block" type="submit" onClick={() => props.history.push('/index')}>Login</button>
									</div>
								</form>
								{/* <!-- /Form --> */}
								
								<div className="text-center forgotpass"><Link to="/forgotpassword">Forgot Password?</Link></div>
								<div className="login-or">
									<span className="or-line"></span>
									<span className="span-or">or</span>
								</div>
								  
								{/* Social Login */}
								<div className="social-login">
									<span>Login with</span>
									<a href="#" className="facebook"><i className="fab fa-facebook-f"></i></a><a href="#" className="google"><i className="fab fa-google"></i></a>
								</div>
								{/* /Social Login */}
								
								<div className="text-center dont-have">Don’t have an account? <Link to="/register">Register</Link></div>
							</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       {/* /Main Wrapper */}
</>
    );
}

export default  Login;
