import React, { Component } from 'react';
import CommentsDisplay from './CommentsDisplay';
import CommentsCreate from './CommentsCreate';

export default class CourseDetail extends Component {
	render(){
		return (
			<div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-xs-12">
				<div className="blog-post-wrapper iner_blog">
					<div className="post-thumbnail">
						<img src="assets/images/blog_single.jpg" className="img-responsive " alt="Image" />
					</div>
					<div className="row">
						<div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
							<div className="single_course_box_wrapper">
								<div className="single_course_categories_box">	<i className="fa fa-graduation-cap"></i>
								</div>
								<div className="single_course_box_content">
									<p>Graphic & UI Designer</p>
									<h4><b>Lilton Fandores</b></h4>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
							<div className="single_course_box_wrapper">
								<div className="single_course_categories_box">	<i className="fa fa-calendar"></i>
								</div>
								<div className="single_course_box_content">
									<p>Course Start Date</p>
									<h4><b>April 22 2016</b></h4>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
							<div className="single_course_box_wrapper">
								<div className="single_course_categories_box">	<i className="fa fa-clock"></i>
								</div>
								<div className="single_course_box_content">
									<p>Course Duration</p>
									<h4><b>2 Months 5 hrs</b></h4>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
							<div className="single_course_box_wrapper">
								<div className="single_course_categories_box">	<i className="fa fa-bookmark"></i>
								</div>
								<div className="single_course_box_content">
									<p>Language</p>
									<h4><b>English</b></h4>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
							<div className="single_course_box_wrapper">
								<div className="single_course_categories_box">	<i className="fa fa-star"></i>
								</div>
								<div className="single_course_box_content">
									<p>Review</p>	<span><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i></span>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
							<div className="single_course_box_wrapper">
								<div className="single_course_categories_box">	<i className="fas fa-dollar-sign"></i>
								</div>
								<div className="single_course_box_content">
									<p>Price</p>
									<h4><b>240$</b></h4>
								</div>
							</div>
						</div>
						<div className="col-md-12">
							<div className="edu_bottom_btn_wrapper float_left">	<a href="#">Join Now</a>
							</div>
							<div className="course_second_content_wrapper float_left">
								<h4><b>Description Graphic & Web Design</b></h4>
								<p>Mauris mattis lorem sit amet elit dictum aliquet. Fusce vel blandit nisl, vel rhoncus nisi. Aliquam scelerisque sapien sagittis pellentesque mollis, ipsum velit lobortis velit, vel pharetra quam nunc.</p>
							</div>
							<div className="course_third_content_wrapper float_left">
								<h4><b>What You Will Learn</b></h4>
								<p>Nulla erat quam, rhoncus sit amet neque nec, pulvinar euismod tortor. Pellentesque id nunc vitae risus sagittis facilisis sit amet faucibus tortor. Etiam ornare urna in ligula interdum sagittis gravida ut odio. Sed dignissim turpis id auctor rutrum. Nullam eu hendrerit eros, ut lobortis erat.
									<br />
									<br />Morbi bibendum quis lectus nec gravida. Donec bibendum viverra urna a euismod. Nam eget nunc tortor. Integer odio purus, elementum vel auctor in, tincidunt nec est. Sed et felis imperdiet, laoreet lacus in, faucibus eros. Ut quis vulputate dolor, in sagittis nulla. Etiam at pretium magna.</p>
							</div>
							<div className="contant_img_course_wrapper float_left">
								<div className="row">
									<div className="col-lg-3 col-md-3 col-sm-6 col-6">
										<div className="content_img1">
											<img src="assets/images/content_img1.jpg" alt="contnt_img" className="img-responsive" />
										</div>
									</div>
									<div className="col-lg-3 col-md-3 col-sm-6 col-6">
										<div className="content_img1">
											<img src="assets/images/content_img2.jpg" alt="contnt_img" className="img-responsive" />
										</div>
									</div>
									<div className="col-lg-3 col-md-3 col-sm-6 col-6">
										<div className="content_img1">
											<img src="assets/images/content_img3.jpg" alt="contnt_img" className="img-responsive" />
										</div>
									</div>
									<div className="col-lg-3 col-md-3 col-sm-6 col-6">
										<div className="content_img1">
											<img src="assets/images/content_img4.jpg" alt="contnt_img" className="img-responsive" />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="blog_dark_wrapper  blog_single_box float_left">
					<img src="assets/images/quote.png" alt="img" />
					<h1>" The Education of Tomorrow, Rooted in Tradition Invite You
Learning Management System"</h1>
					<div className="port-single-entry-meta">
						<ul>
							<li> <a href="#">
								  by- joahn doe</a>
							</li>
						</ul>
					</div>
				</div>
				<div className="float_left">
					<p>Sollicitudin, lorem quis bibe u auctor, nisi elit conat ipsu, nec sagittis sem ni id elit. Duis sed odio sit amet nibh vulpute rsus. Proin gravida nibh vel velit auctor aliquet. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
						<br />
						<br />Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
				</div>
				<div className="blog_single_img float_left">
					<div className="blog_image_single">
						<img src="assets/images/bs1.png" className="img-responsive" alt="blog_img1" />
					</div>
					<div className="blog_text_single">
						<p>Duis et nibh blat, eifend liberost amet, suscipit enim. Sed rutrum suere orci. Lorem ipsum dolor sitt amet. This is Photoshoctor aliqet. Aenean sollicitudin, lorem quis bibendum.</p>
						<ul>
							<li>
								<a href="#"> <i className="far fa-thumbs-up"></i> lorem quis bibendum auctor, nisi elit.</a>
							</li>
							<li>
								<a href="#"> <i className="far fa-thumbs-up"></i> bibendum Sollib bibendum auctor, nisi elit.</a>
							</li>
							<li>
								<a href="#"> <i className="far fa-thumbs-up"></i> citudin, lorem quis bibendum consequat bibendum</a>
							</li>
						</ul>
					</div>
				</div>
				<div className="blog_single_img float_left">
					<div className="blog_image_single">
						<img src="assets/images/bs2.png" className="img-responsive" alt="blog_img1" />
					</div>
					<div className="blog_text_single">
						<p>Duis et nibh blat, eifend liberost amet, suscipit enim. Sed rutrum suere orci. Lorem ipsum dolor sitt amet. This is Photoshoctor aliqet. Aenean sollicitudin, lorem quis bibendum.</p>
						<ul>
							<li>
								<a href="#"> <i className="far fa-thumbs-up"></i> lorem quis bibendum auctor, nisi elit.</a>
							</li>
							<li>
								<a href="#"> <i className="far fa-thumbs-up"></i> bibendum Sollib bibendum auctor, nisi elit.</a>
							</li>
							<li>
								<a href="#"> <i className="far fa-thumbs-up"></i> citudin, lorem quis bibendum consequat bibendum</a>
							</li>
						</ul>
					</div>
				</div>
				<div className="blog_single_text float_left">
					<p>Sollicitudin, lorem quis bibe u auctor, nisi elit conat ipsu, nec sagittis sem ni id elit. Duis sed odio sit amet nibh vulpute rsus. Proin gravida nibh vel velit auctor aliquet. Lorem ipsum dolor sit amet, consecteolore magna aliqua.
						<br />
						<br />Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis auttur adipisicing elit, sed do eiod tempor incididunt ut labore et dolore magna aliqua. Ut en esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
				</div>
				<div className="tb_btm_link_left">
					<ul>
						<li><span><i className="fa fa-tag"></i> Tags :</span>
						</li>
						<li><a href="#">business </a>
						</li>
						<li><a href="#">corporate </a>
						</li>
						<li><a href="#">services</a>
						</li>
					</ul>
				</div>
				<div className="tb_btm_link_right">
					<ul>
						<li>share :</li>
						<li><a href="#"><i className="fab fa-facebook-f"></i></a>
						</li>
						<li><a href="#"><i className="fab fa-twitter"></i></a>
						</li>
						<li><a href="#"><i className="fab fa-google-plus-g"></i></a>
						</li>
						<li><a href="#"><i className="fab fa-linkedin-in"></i></a>
						</li>
					</ul>
				</div>
				<div className="btc_blog_post_admin_main_wrapper float_left">
					<div className="btc_blog_single_post_admin_img">
						<img src="assets/images/author.png" alt="admin_img" />
					</div>
					<div className="btc_blog_single_post_admin_img_cont">
						<h2>about admin</h2>
						<h1><a href="#">joahn doe</a></h1>
						<p className="ggg">Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctorm, nec sagittis sem nibh id elit.</p>
					</div>
				</div>
				
				
				<CommentsDisplay />
				<CommentsCreate />
			</div>
		);
	}
}