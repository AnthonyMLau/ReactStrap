import React, { Component } from 'react';
import SimpleSection from './SimpleSection';
import './Awards.css';

class Awards extends Component {
	render () {
		const { Items } = this.props;
		return (
			<div className='Awards' id={Items.SectionRef} >
				<SimpleSection Items={Items} />
			</div>
		)
	};

};

export default Awards;