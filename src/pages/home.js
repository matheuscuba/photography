import React, { Component } from 'react';
import Container from '../components/container';
import Sidebar from '../components/sidebar';
import Strip from '../components/strip';

import './../assets/sass/main.scss'

export default class Home extends Component {
	render() {
		return (
			<main className="main">
				<Container>
					<Strip left={-200} top={-100} foward/>
					<Strip left={-50} />
					<Strip left={-300} foward/>
					<Strip left={50}/>
					<Strip left={-300} foward/>
					<Strip />
					<Strip  foward/>
				</Container>
				<Sidebar />
			</main>
		);
	}
}
