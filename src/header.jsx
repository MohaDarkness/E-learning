import React , {components, useState} from 'react';
import { Link } from 'react-router-dom'
import LogoImg from './assets/img/logo.png';
import LogoSmallImg from './assets/img/logo-small.png';
import img1 from './assets/img/profiles/avatar-01.jpg';
import img2 from './assets/img/profiles/avatar-02.jpg';
import img11 from './assets/img/profiles/avatar-11.jpg';
import img17 from './assets/img/profiles/avatar-17.jpg';
import img13 from './assets/img/profiles/avatar-13.jpg';
import $ from 'jquery';



const Header = (props) => {
    const handlesidebar=()=>{
		document.body.classList.toggle('mini-sidebar');
    }

    return (
        <>
            {/* <!-- Header --> */}
           <div className="header">

                {/* <!-- Logo -->*/}
                <div className="header-left">
                    <Link to="/dashboard" className="logo">
                        <img src={LogoImg} alt="Logo" />
                    </Link>
                    <Link to="/dashboard" className="logo logo-small">
                        <img src={LogoSmallImg} alt="Logo"/>
                    </Link>
                </div>
                {/* <!-- /Logo --> */}
                
                <a  id="toggle_btn" onClick={handlesidebar}>
                    <i className="fas fa-align-right"></i>
                </a>
                
                {/* <!-- Search Bar --> */}
                <div className="top-nav-search">
                    <form>
                        <input type="text" className="form-control" placeholder="Search here"/>
                        <button className="btn" type="submit"><i className="fas fa-search"></i></button>
                    </form>
                </div>
                {/* <!-- /Search Bar --> */}
                
                {/* <!-- Mobile Menu Toggle --> */}
                <a className="mobile_btn" id="mobile_btn">
                    <i className="fas fa-bars"></i>
                </a>
                {/* <!-- /Mobile Menu Toggle --> */}
                
                {/* <!-- Header Right Menu --> */}
                <ul className="nav user-menu">

                    {/* <!-- Notifications --> */}
                    <li className="nav-item dropdown noti-dropdown">
                        <a  className="dropdown-toggle nav-link" data-bs-toggle="dropdown">
                            <i className="far fa-bell"></i> <span className="badge badge-pill">3</span>
                        </a>
                        <div className="dropdown-menu notifications">
                            <div className="topnav-dropdown-header">
                                <span className="notification-title">Notifications</span>
                                <a  className="clear-noti"> Clear All </a>
                            </div>
                            <div className="noti-content">
                                <ul className="notification-list">
                                    <li className="notification-message">
                                        <a >
                                            <div className="media d-flex">
                                                <span className="avatar avatar-sm flex-shrink-0">
                                                    <img className="avatar-img rounded-circle" alt="User Image" src={img2}/>
                                                </span>
                                                <div className="media-body flex-grow-1">
                                                    <p className="noti-details"><span className="noti-title">Carlson Tech</span> has approved <span className="noti-title">your estimate</span></p>
                                                    <p className="noti-time"><span className="notification-time">4 mins ago</span></p>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="notification-message">
                                        <a>
                                            <div className="media d-flex">
                                                <span className="avatar avatar-sm flex-shrink-0">
                                                    <img className="avatar-img rounded-circle" alt="User Image" src={img11}/>
                                                </span>
                                                <div className="media-body flex-grow-1">
                                                    <p className="noti-details"><span className="noti-title">International Software Inc</span> has sent you a invoice in the amount of <span className="noti-title">$218</span></p>
                                                    <p className="noti-time"><span className="notification-time">6 mins ago</span></p>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="notification-message">
                                        <a >
                                            <div className="media d-flex">
                                                <span className="avatar avatar-sm flex-shrink-0">
                                                    <img className="avatar-img rounded-circle" alt="User Image" src= {img17}/>
                                                </span>
                                                <div className="media-body flex-grow-1">
                                                <p className="noti-details"><span className="noti-title">John Hendry</span> sent a cancellation request <span className="noti-title">Apple iPhone XR</span></p>
                                                <p className="noti-time"><span className="notification-time">8 mins ago</span></p>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="notification-message">
                                        <a >
                                            <div className="media d-flex">
                                                <span className="avatar avatar-sm flex-shrink-0">
                                                    <img className="avatar-img rounded-circle" alt="User Image" src= {img13}/>
                                                </span>
                                                <div className="media-body flex-grow-1">
                                                    <p className="noti-details"><span className="noti-title">Mercury Software Inc</span> added a new product <span className="noti-title">Apple MacBook Pro</span></p>
                                                    <p className="noti-time"><span className="notification-time">12 mins ago</span></p>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="topnav-dropdown-footer">
                                <a >View all Notifications</a>
                            </div>
                        </div>
                    </li>
                    {/* <!-- /Notifications --> */}
                    
                    {/* <!-- User Menu --> */}
                    <li className="nav-item dropdown has-arrow">
                        <a  className="dropdown-toggle nav-link" data-bs-toggle="dropdown">
                            <span className="user-img ms-2"><img className="rounded-circle" src= {img1} width="31" alt="Ryan Taylor"/></span>
                        </a>
                        <div className="dropdown-menu">
                            <div className="user-header">
                                <div className="avatar avatar-sm">
                                    <img src= {img1} alt="User Image" className="avatar-img rounded-circle"/>
                                </div>
                                <div className="user-text">
                                    <h6>Ryan Taylor</h6>
                                    <p className="text-muted mb-0">Administrator</p>
                                </div>
                            </div>
                            <Link className="dropdown-item" to="/profile">My Profile</Link>
                            <Link className="dropdown-item" to="/inbox">Inbox</Link>
                            <Link className="dropdown-item" to="/login">Logout</Link>
                        </div>
                    </li>
                    {/* <!-- /User Menu --> */}

                </ul>
                 {/* <!-- /Header Right Menu --> */}
                
            </div>
            {/* <!-- /Header -->                         */}
           
        </>
        
    );
}

export default Header;
