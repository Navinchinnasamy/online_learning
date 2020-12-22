import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NavHeader extends Component {
	render(){
		return (
			<div className="edu_navihation_header_wrapper float_left">
				<div className="container">
					<header className="mobail_menu d-block d-sm-block d-md-block d-lg-none d-xl-none">
						<div className="cd-dropdown-wrapper">
							<Link to={'/'} className="house_toggle"> <i className="flaticon-menu"></i>
							</Link>
							<nav className="cd-dropdown">
								<h2><Link to="/">Edu365</Link></h2>
								<Link to="/" className="cd-close">Close</Link>
								<ul className="cd-dropdown-content">
									<li> <Link to="/">Home</Link></li>
									<li><Link to="/about">About</Link></li>
									<li className="has-children"> <Link to="/courses">Courses</Link>
										<ul className="cd-secondary-dropdown icon_menu is-hidden">
											<li className="go-back"><Link to="#0">Menu</Link>
											</li>
											<li><Link to="/courses/1">Error</Link>
											</li>
											<li><Link to="/courses/2">Course</Link>
											</li>
											<li><Link to="/courses/3">Course-Single</Link>
											</li>
											<li><Link to="/courses/4">Services</Link>
											</li>
										</ul>
									</li>
									<li><Link to="/contact">Contact Us</Link>
									</li>
								</ul>
							</nav>
						</div>
					</header>
					<div className="kv_navigation_wrapper">
						<div className="mainmenu d-xl-block d-lg-block d-md-none d-sm-none d-none">
							<ul className="main_nav_ul">
								<li className="has-mega gc_main_navigation"><Link to="/" className="gc_main_navigation hover_color">  Home </Link></li>
								<li className="has-mega gc_main_navigation"><Link to="/about" className="gc_main_navigation hover_color">About Us</Link>
								</li>
								<li className="has-mega gc_main_navigation"><Link to="/courses" className="gc_main_navigation hover_color">  Courses&nbsp; <i className="fas fa-angle-down"></i></Link>
									<ul>
										<li className="parent"><Link to="/courses/1">Error</Link>
										</li>
										<li className="parent"><Link to="/courses/2">Course</Link>
										</li>
										<li className="parent"><Link to="/courses/3">Course-Single</Link>
										</li>
										<li className="parent"><Link to="/courses/4">Services</Link>
										</li>
									</ul>
								</li>
								<li className="has-mega gc_main_navigation"><Link to="/contact" className="gc_main_navigation hover_color">Contact Us</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		);
	}
}