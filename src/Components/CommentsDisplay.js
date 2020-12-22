import React, { Component } from 'react';

export default class CommentsDisplay extends Component {
	render(){
		return (
			<div className="comments_wrapper float_left">
				<div className="widget_heading">
					<h2>comments (04)</h2>
				</div>
				<div className="row">
					<div className="col-lg-12 col-md-12 col-12 col-sm-12">
						<div className="comments_Box">
							<div className="img_wrapper">
								<img src="assets/images/author1.jpg" className="" alt="author_img" />
							</div>
							<div className="text_wrapper">
								<div className="author_detail"> <span className="author_name"> Jhon Doe <i className="fa fa-circle"></i> </span>
									<span className="publish_date"> July 1, 2019 - <a href="#">Reply</a> </span>
								</div>
								<div className="author_content">
									<p>Integer porttitor fringilla vestibulum. Phasellus curs our tinnt nulla, ut mattis augue finibus ac. Vivamus elementum enim ac enim ultrices rhoncus.</p>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-12 col-md-12 col-12 col-sm-12">
						<div className="comments_Box">
							<div className="row">
								<div className="col-lg-11 col-md-12 col-12 col-sm-12 offset-lg-1">
									<div className="img_wrapper">
										<img src="assets/images/author2.jpg" className="" alt="author_img" />
									</div>
									<div className="text_wrapper">
										<div className="author_detail"> <span className="author_name"> Steffa Ferello  <i className="fa fa-circle"></i> </span>
											<span className="publish_date"> July 4, 2019 - <a href="#">Reply</a> </span>
										</div>
										<div className="author_content">
											<p>Integer porttitor fringilla vestibulum. Phasellus curs our tinnt nulla, ut mattis augue finibus ac. Vivamus elementum enim ac enim ultrices rhoncus.</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-12 col-md-12 col-12 col-sm-12">
						<div className="comments_Box">
							<div className="img_wrapper">
								<img src="assets/images/author3.jpg" className="" alt="author_img" />
							</div>
							<div className="text_wrapper">
								<div className="author_detail"> <span className="author_name"> Matin Lauran <i className="fa fa-circle"></i> </span>
									<span className="publish_date"> March 1, 2019 - <a href="#">Reply</a> </span>
								</div>
								<div className="author_content">
									<p>Integer porttitor fringilla vestibulum. Phasellus curs our tinnt nulla, ut mattis augue finibus ac. Vivamus elementum enim ac enim ultrices rhoncus.</p>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-12 col-md-12 col-12 col-sm-12">
						<div className="comments_Box last_comment_box">
							<div className="img_wrapper">
								<img src="assets/images/author4.jpg" className="" alt="author_img" />
							</div>
							<div className="text_wrapper">
								<div className="author_detail"> <span className="author_name"> Eva Marilla <i className="fa fa-circle"></i></span>
									<span className="publish_date"> July 10, 2019 - <a href="#">Reply</a> </span>
								</div>
								<div className="author_content">
									<p>Integer porttitor fringilla vestibulum. Phasellus curs our tinnt nulla, ut mattis augue finibus ac. Vivamus elementum enim ac enim ultrices rhoncus.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}