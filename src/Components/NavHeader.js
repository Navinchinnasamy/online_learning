import React, { Component } from 'react';

export default class NavHeader extends Component {
	render(){
		return (
			<div className="edu_navihation_header_wrapper float_left">
				<div className="container">
					<header className="mobail_menu d-block d-sm-block d-md-block d-lg-none d-xl-none">
						<div className="cd-dropdown-wrapper">
							<a className="house_toggle" href="#0"> <i className="flaticon-menu"></i>
							</a>
							<nav className="cd-dropdown">
								<h2><a href="#">Edu365</a></h2>
								<a href="#0" className="cd-close">Close</a>
								<ul className="cd-dropdown-content">
									<li> <a href="/">Home</a></li>
									<li><a href="/about">About</a></li>
									<li className="has-children"> <a href="#">Courses</a>
										<ul className="cd-secondary-dropdown icon_menu is-hidden">
											<li className="go-back"><a href="#0">Menu</a>
											</li>
											<li><a href="error.html">Error</a>
											</li>
											<li><a href="course.html">Course</a>
											</li>
											<li><a href="course_single.html">Course-Single</a>
											</li>
											<li><a href="service.html">Services</a>
											</li>
										</ul>
									</li>
									<li><a href="contact_us.html">Contact Us</a>
									</li>
								</ul>
							</nav>
						</div>
					</header>
					<div className="kv_navigation_wrapper">
						<div className="mainmenu d-xl-block d-lg-block d-md-none d-sm-none d-none">
							<ul className="main_nav_ul">
								<li className="has-mega gc_main_navigation"><a href="/" className="gc_main_navigation hover_color">  Home </a></li>
								<li className="has-mega gc_main_navigation"><a href="/about" className="gc_main_navigation hover_color">About Us</a>
								</li>
								<li className="has-mega gc_main_navigation"><a href="#" className="gc_main_navigation hover_color">  Courses&nbsp; <i className="fas fa-angle-down"></i></a>
									<ul>
										<li className="parent"><a href="error.html">Error</a>
										</li>
										<li className="parent"><a href="course.html">Course</a>
										</li>
										<li className="parent"><a href="course_single.html">Course-Single</a>
										</li>
										<li className="parent"><a href="service.html">Services</a>
										</li>
									</ul>
								</li>
								<li className="has-mega gc_main_navigation"><a href="contact_us-2.html" className="gc_main_navigation hover_color">Contact Us</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		);
	}
}