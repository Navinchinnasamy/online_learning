import React, { Component } from 'react';

export default class Counter extends Component {
	render(){
		return (
			<div className="edu_counter_main_section_wrapper float_left">
				<div className="edu_counter_img_overlay"></div>
				<section className="counter-section section-padding">
					<div className="container">
						<div className="row">
							<div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 icon3">
								<div className="icon">
									<img src="assets/images/c1.png" alt="img" />
								</div>
								<div className="count-description"> <span className="timer">2540</span>
									<h5 className="con1">Enrolled Students</h5>
								</div>
							</div>
							<div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 icon3">
								<div className="icon">
									<img src="assets/images/c2.png" alt="img" />
								</div>
								<div className="count-description"> <span className="timer">7325</span>
									<h5 className="con1">Passed Graduates</h5>
								</div>
							</div>
							<div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 icon2">
								<div className="icon">
									<img src="assets/images/c3.png" alt="img" />
								</div>
								<div className="count-description"> <span className="timer">1924</span>
									<h5 className="con1">Courses Published</h5>
								</div>
							</div>
							<div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 icon2">
								<div className="icon">
									<img src="assets/images/c4.png" alt="img" />
								</div>
								<div className="count-description"> <span className="timer">4275</span>
									<h5 className="con1">Award Winning</h5>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		);
	}
}