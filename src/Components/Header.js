import React, { Component } from 'react';

export default class Header extends Component {
	render(){
		return (
			<div className="edu_logo_header_wrapper float_left">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div className="edu_border_line">
								<div className="row">
									<div className="col-md-3">
										<div className="edu_logo_main_wrapper">
											<a href="index-2.html">
												<img src="assets/images/logo.png" alt="logo"/>
											</a>
										</div>
									</div>
									<div className="col-md-9 d-none d-sm-none d-md-block">
										<div className="lv_share_info_wrapper">
											<ul>
												<li>
													<div className="lv_header_icon">
														<img src="assets/images/phone.png" alt="Call Icon" title="Call Icon" />
													</div>
													<p>+91 967 965 5952
														<br />+91 956 679 5505</p>
												</li>
												<li>
													<div className="lv_header_icon">
														<img src="assets/images/env.png" alt="Mail Icon" title="Mail Icon" />
													</div>
													<p> <a href="mailto:koyelrana91@gmail.com">koyelrana91@gmail.com</a>
														<br /> <a href="mailto:suryaselva910@gmail.com">suryaselva910@gmail.com</a>
													</p>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}