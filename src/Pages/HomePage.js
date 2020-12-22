import React, { Component } from 'react';
import Slider from '../Components/Slider';
import Books from '../Components/Books';
import Counter from '../Components/Counter';
import Team from '../Components/Team';

export default class HomePage extends Component {
	render(){
		return (
			<div>
			  <Slider />
			  <Books />
			  <Counter />
			  <Team />
			</div>
		);
	}
}