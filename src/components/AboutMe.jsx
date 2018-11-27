import React, { Component } from 'react';
import SimpleSection from './SimpleSection';
import './AboutMe.css';

// Same as Awards class, except the # of cols and md={??}
// we can generalize this
class Aboutme extends Component {
	render () {
		const Items = this.props.Items;

		return (
			<div className='Aboutme' id={Items.SectionRef} >
				<SimpleSection Items={Items} />			
			</div>
		)
	};

};

export default Aboutme;