import React, { Component } from 'react';
import SimpleSection from './SimpleSection';
import './Volunteers.css';

// Same as Awards class, except the # of cols and md={??}
// we can generalize this
class Volunteers extends Component {
	render () {
		const Items = this.props.Items;

		return (
			<div className='Volunteers' id={Items.SectionRef} >
				<SimpleSection Items={Items} />			
			</div>
		)
	};
};

export default Volunteers;