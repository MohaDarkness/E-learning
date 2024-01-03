import React , {components, useEffect, useState} from 'react';
import { Link } from 'react-router-dom'
import { Scrollbars } from 'react-custom-scrollbars';


const Sidebar = () => {
	useEffect(() => {
       
		var Sidemenu = function() {
			this.$menuItem = $('#sidebar-menu a');
		};

		function init() {
			var $this = Sidemenu;
			$('#sidebar-menu a').on('click', function(e) {
				if($(this).parent().hasClass('submenu')) {
					e.preventDefault();
				}
				if(!$(this).hasClass('subdrop')) {
					$('ul', $(this).parents('ul:first')).slideUp(350);
					$('a', $(this).parents('ul:first')).removeClass('subdrop');
					$(this).next('ul').slideDown(350);
					$(this).addClass('subdrop');
				} else if($(this).hasClass('subdrop')) {
					$(this).removeClass('subdrop');
					$(this).next('ul').slideUp(350);
				}
			});
			$('#sidebar-menu ul li.submenu a.active').parents('li:last').children('a:first').addClass('active').trigger('click');
		}

		$(document).on('mouseover', function(e) {
			e.stopPropagation();
			if($('body').hasClass('mini-sidebar') && $('#toggle_btn').is(':visible')) {
				var targ = $(e.target).closest('.sidebar').length;
				if(targ) {
					$('body').addClass('expand-menu');
					$('.subdrop + ul').slideDown();
				} else {
					$('body').removeClass('expand-menu');
					$('.subdrop + ul').slideUp();
				}
				return false;
			}
		});
		// Sidebar Initiate
		init();
    }, [])
	
				
    return (
<>
			{/* <!-- Sidebar --> */}
			<div className="sidebar" id="sidebar">
			<Scrollbars
      
        autoHide
        autoHideTimeout={1000}
        autoHideDuration={200}
        autoHeight
        autoHeightMin={0}
        autoHeightMax="100vh"
        thumbMinSize={30}
        universal={false}
		hideTracksWhenNotNeeded={true}
		
       >
                <div className="sidebar-inner slimscroll">
					<div id="sidebar-menu" className="sidebar-menu">
						
						<ul>
							<li className="menu-title"> 
								<span>Main Menu</span>
							</li>
							<li className="submenu active">
								<a><i className="fas fa-user-graduate"></i> <span> Dashboard</span> <span className="menu-arrow"></span></a>
								<ul>
									<li><Link to="/dashboard" className="active">Admin Dashboard</Link></li>
									<li><Link to ="/teacherdashboard">Teacher Dashboard</Link></li>
									<li><Link to ="/studentdashboard">Student Dashboard</Link></li>
								</ul>
							</li>
							<li className="submenu">
								<a><i className="fas fa-user-graduate"></i> <span> Students</span> <span className="menu-arrow"></span></a>
								<ul>
									<li><Link to="/students">Student List</Link></li>
									<li><Link to="/studentdetails">Student View</Link></li>
									<li><Link to="/addstudents">Student Add</Link></li>
									<li><Link to="/editstudents">Student Edit</Link></li>
								</ul>
							</li>
							<li className="submenu">
								<a ><i className="fas fa-chalkboard-teacher"></i> <span> Teachers</span> <span className="menu-arrow"></span></a>
								<ul>
									<li><Link to="/teachers">Teacher List</Link></li>
									<li><Link to="/teacherdetails">Teacher View</Link></li>
									<li><Link to="/addteacher">Teacher Add</Link></li>
									<li><Link to="/Editteacher">Teacher Edit</Link></li>
								</ul>
							</li>
							<li className="submenu">
								<a><i className="fas fa-building"></i> <span> Departments</span> <span className="menu-arrow"></span></a>
								<ul>
									<li><Link to="/departments">Department List</Link></li>
									<li><Link to="/adddepartment">Department Add</Link></li>
									<li><Link to="/Editdepartments">Department Edit</Link></li>
								</ul>
							</li>
							<li className="submenu">
								<a ><i className="fas fa-book-reader"></i> <span> Subjects</span> <span className="menu-arrow"></span></a>
								<ul>
									<li><Link to="/Subject">Subject List</Link></li>
									<li><Link to="/addsubject">Subject Add</Link></li>
									<li><Link to="/editsubject">Subject Edit</Link></li>
								</ul>
							</li>
							<li className="menu-title"> 
								<span>Management</span>
							</li>
							<li className="submenu">
								<a ><i className="fas fa-file-invoice-dollar"></i> <span> Accounts</span> <span className="menu-arrow"></span></a>
								<ul>
									<li><Link to="/Feescollection">Fees Collection</Link></li>
									<li><Link to="/expenses">Expenses</Link></li>
									<li><Link to="/salary">Salary</Link></li>
									<li><Link to="/addfeescollection">Add Fees</Link></li>
									<li><Link to="/addexpenses">Add Expenses</Link></li>
									<li><Link to="/addsalary">Add Salary</Link></li>
								</ul>
							</li>
							<li> 
								<Link to="/holiday"><i className="fas fa-holly-berry"></i> <span>Holiday</span></Link>
							</li>
							<li> 
								<Link to="/fees"><i className="fas fa-comment-dollar"></i> <span>Fees</span></Link>
							</li>
							<li> 
								<Link to="/exam"><i className="fas fa-clipboard-list"></i> <span>Exam list</span></Link>
							</li>
							<li> 
								<Link to="/event"><i className="fas fa-calendar-day"></i> <span>Events</span></Link>
							</li>
							<li> 
								<Link to="/timetable"><i className="fas fa-table"></i> <span>Time Table</span></Link>
							</li>
							<li> 
								<Link to="/library"><i className="fas fa-book"></i> <span>Library</span></Link>
							</li>
							<li className="menu-title"> 
								<span>Pages</span>
							</li>
							<li className="submenu">
								<a><i className="fas fa-shield-alt"></i> <span> Authentication </span> <span className="menu-arrow"></span></a>
								<ul>
									<li><Link to="/login">Login</Link></li>
									<li><Link to="/register">Register</Link></li>
									<li><Link to="/forgotpassword">Forgot Password</Link></li>
									<li><Link to="/Page404">Error Page</Link></li>
								</ul>
							</li>
							<li> 
								<Link to="/Blankpage"><i className="fas fa-file"></i> <span>Blank Page</span></Link>
							</li>
							<li className="menu-title"> 
								<span>Others</span>
							</li>
							<li> 
								<Link to="/sports"><i className="fas fa-baseball-ball"></i> <span>Sports</span></Link>
							</li>
							<li> 
								<Link to="/hostel"><i className="fas fa-hotel"></i> <span>Hostel</span></Link>
							</li>
							<li> 
								<Link to="/transport"><i className="fas fa-bus"></i> <span>Transport</span></Link>
							</li>
							<li className="menu-title"> 
								<span>UI Interface</span>
							</li>
							<li> 
								<Link to="/components"><i className="fas fa-vector-square"></i> <span>Components</span></Link>
							</li>
							<li className="submenu">
								<a><i className="fas fa-columns"></i> <span> Forms </span> <span className="menu-arrow"></span></a>
								<ul>
									<li><Link to="/formbasicinputs">Basic Inputs </Link></li>
									<li><Link to="/forminputgroups">Input Groups </Link></li>
									<li><Link to="/formhorizontal">Horizontal Form </Link></li>
									<li><Link to="/formvertical"> Vertical Form </Link></li>
									<li><Link to="/formmask"> Form Mask </Link></li>
									<li><Link to="/formvalidation"> Form Validation </Link></li>
								</ul>
							</li>
							<li className="submenu">
								<a><i className="fas fa-table"></i> <span> Tables </span> <span className="menu-arrow"></span></a>
								<ul>
									<li><Link to="/tables-basic">Basic Tables </Link></li>
									<li><Link to="/datatable">Data Table </Link></li>
								</ul>
							</li>
							<li className="submenu">
								<a><i className="fas fa-code"></i> <span>Multi Level</span> <span className="menu-arrow"></span></a>
								<ul>
									<li className="submenu">
										<a > <span>Level 1</span> <span className="menu-arrow"></span></a>
										<ul>
											<li><a><span>Level 2</span></a></li>
											<li className="submenu">
												<a > <span> Level 2</span> <span className="menu-arrow"></span></a>
												<ul>
													<li><a >Level 3</a></li>
													<li><a >Level 3</a></li>
												</ul>
											</li>
											<li><a > <span>Level 2</span></a></li>
										</ul>
									</li>
									<li>
										<a> <span>Level 1</span></a>
									</li>
								</ul>
							</li>
						</ul>
					</div>
                </div>
				</Scrollbars>
         </div>
		{/* <!-- /Sidebar --> */}
		</>
    );
}

export default  Sidebar;
