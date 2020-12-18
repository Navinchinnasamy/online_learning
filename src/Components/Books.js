import React, { Component } from 'react';

export default class Books extends Component {
	render(){
		return (
			<div className="edu_books_main_wrapper float_left">
				<div className="container">
					<div className="row">
						<div className="col-lg-12 col-md-12 col-sm-12">
							<div className="edu_heading_wrapper float_left">
								<h3>OUR SCHOOL SERVICES</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean auctor, libero non
									<br/>interdum maximus, ligula nulla pretium ligula, a egestas ex nibh.</p>
							</div>
						</div>
						<div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
							<figure className='book'>
								<ul className='hardcover_front'>
									<li>
										<img src="assets/images/cover4.jpg" alt="" />
									</li>
									<li></li>
								</ul>

								<ul className='page'>
									<li></li>
									<li> <a className="btn" href="#">Download</a>
									</li>
									<li></li>
									<li></li>
									<li></li>
								</ul>

								<ul className='hardcover_back'>
									<li></li>
									<li></li>
								</ul>
								<ul className='book_spine'>
									<li></li>
									<li></li>
								</ul>
								<figcaption className="edu_books_text">
									<h3><a href="#">HTML / CSS</a></h3>
									<p>Lorem ipsum dolor sit amet, consecteturadipiscing elit. Aenean auctor, libero noninterdum maximus, ligula nulla pretium ligula.</p>
									<h4><a href="#">Read More</a></h4>
								</figcaption>
							</figure>
						</div>
						<div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
							<figure className='book'>

								<ul className='hardcover_front'>
									<li>
										<div className="coverDesign blue"> <span className="ribbon">NEW</span>
											<h1>Web</h1>
											<p>Design</p>
										</div>
									</li>
									<li></li>
								</ul>

								<ul className='page'>
									<li></li>
									<li> <a className="btn" href="#">Download</a>
									</li>
									<li></li>
									<li></li>
									<li></li>
								</ul>

								<ul className='hardcover_back'>
									<li></li>
									<li></li>
								</ul>
								<ul className='book_spine'>
									<li></li>
									<li></li>
								</ul>
								<figcaption className="edu_books_text">
									<h3><a href="#">Web Design</a></h3>
									<p>Lorem ipsum dolor sit amet, consecteturadipiscing elit. Aenean auctor, libero noninterdum maximus, ligula nulla pretium ligula.</p>
									<h4><a href="#">Read More</a></h4>
								</figcaption>
							</figure>
						</div>
						<div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
							<figure className='book'>

								<ul className='hardcover_front'>
									<li>
										<img src="assets/images/cover3.jpg" alt="" />
									</li>
									<li></li>
								</ul>

								<ul className='page'>
									<li></li>
									<li> <a className="btn" href="#">Download</a>
									</li>
									<li></li>
									<li></li>
									<li></li>
								</ul>

								<ul className='hardcover_back'>
									<li></li>
									<li></li>
								</ul>
								<ul className='book_spine'>
									<li></li>
									<li></li>
								</ul>
								<figcaption className="edu_books_text">
									<h3><a href="#">Certified Courses</a></h3>
									<p>Lorem ipsum dolor sit amet, consecteturadipiscing elit. Aenean auctor, libero noninterdum maximus, ligula nulla pretium ligula.</p>
									<h4><a href="#">Read More</a></h4>
								</figcaption>
							</figure>
						</div>
						
					</div>
				</div>
			</div>
		);
	}
}