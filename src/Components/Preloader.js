import React, { Component } from 'react';

export default class Preloader extends Component {
	render(){
		return (
			    <div id="preloader">
					<div id="status">
						<img src="assets/images/preloader.gif" id="preloader_image" alt="loader" />
					</div>
				</div>
		);
	}
}