import React, { Component } from 'react';

export default class CommentsCreate extends Component {
	render(){
		return (
			<div className="comments_form float_left">
				<div className="widget_heading">
					<h2>leave a comment</h2>
				</div>
				<div className="row">
					<div className="col-md-6 col-sm-12">
						<div className="formsix-pos">
							<div className="form-group i-name">
								<label className="sr-only">Name</label>
								<input type="text" className="form-control" required="" id="namTen-first" placeholder="Full Name *" /> 
								<i className="fas fa-user-alt"></i>
							</div>
						</div>
					</div>
					<div className="col-md-6 col-sm-12">
						<div className="formsix-e">
							<div className="form-group i-email">
								<label className="sr-only">Email</label>
								<input type="email" className="form-control" required="" id="emailTen" placeholder="Email Address *" /> <i className="fas fa-envelope"></i>
							</div>
						</div>
					</div>
					<div className="col-md-12 col-sm-12">
						<div className="formsix-m">
							<div className="form-group i-message">
								<label className="sr-only">Message</label>
								<textarea className="form-control" required="" rows="4" id="messageTen" placeholder="Message"></textarea> <i className="fas fa-comment"></i>
							</div>
						</div>
					</div>
				</div>
				<div className="edu_bottom_btn_wrapper edu_btn float_left">	<a href="#">Send Now</a>
				</div>
			</div>
		);
	}
}