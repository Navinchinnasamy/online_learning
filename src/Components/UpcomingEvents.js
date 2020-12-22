import React, { Component } from 'react';

export default class UpcomingEvents extends Component {
	render(){
		return (
			<div className="sidebar_widget float_left">
				<div className="widget_heading">
					<h2>upcoming events</h2>
				</div>
				<div className="blog_wrapper22 float_left">
					<div className="blog_image">
						<img src="assets/images/blog1.jpg" className="img-responsive" alt="blog_img1" />
					</div>
					<div className="blog_text blog_single_text2">
						<h5><a href="#">
Online MBA Course 2019 </a></h5>
						<div className="blog_date"> <i className="fa fa-map-marker-alt"></i> 950, Street Avenue,Viana</div>
					</div>
				</div>
				<div className="blog_wrapper22 float_left">
					<div className="blog_image">
						<img src="assets/images/blog2.jpg" className="img-responsive" alt="blog_img2" />
					</div>
					<div className="blog_text blog_single_text2">
						<h5><a href="#">Reading Skill Development</a></h5>
						<div className="blog_date"> <i className="fa fa-map-marker-alt"></i> 950, Street Avenue,Viana</div>
					</div>
				</div>
				<div className="blog_wrapper22 float_left">
					<div className="blog_image">
						<img src="assets/images/blog3.jpg" className="img-responsive" alt="blog_img3" />
					</div>
					<div className="blog_text blog_single_text2">
						<h5><a href="#">
Online Education for Women</a></h5>
						<div className="blog_date"> <i className="fa fa-map-marker-alt"></i> 950, Street Avenue,Viana</div>
					</div>
				</div>
			</div>
		);
	}
}