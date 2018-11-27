import React, { Component } from 'react';
import SimpleSection from './SimpleSection';
import './Experiences.css';

// Same as Awards class, except the # of cols and md={??}
// we can generalize this
class Experiences extends Component {
	render () {
		const Items = this.props.Items;
		return (
			<div className='Experiences' id={Items.SectionRef} >
				{<SimpleSection Items={Items} />}
			</div>
		)
	};

};

export default Experiences;