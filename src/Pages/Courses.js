import React, { Component } from 'react';
import CourseDetail from '../Components/CourseDetail';
import RightSideBar from '../Components/RightSideBar';

export default class Courses extends Component {
	render(){
		return (
			<div>
			<div className="page_title_section float_left">
				<div className="page_header">
					<div className="container">
						<div className="row">
							<div className="col-lg-12 col-md-12 col-12 col-sm-12">
								<h1>Course single</h1>
							</div>
							<div className="col-lg-12 col-md-12 col-12 col-sm-12">
								<div className="sub_title_section">
									<ul className="sub_title">
										<li> <a href="/"> Home </a> &nbsp;&nbsp;&nbsp; &gt; &nbsp;&nbsp;</li>
										<li>Course single</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			
			<div className="blog_wrapper float_left">
				<div className="container">
					<div className="row">
						<CourseDetail />
						<RightSideBar />
					</div>
				</div>
			</div>
			</div>
		);
	}
}