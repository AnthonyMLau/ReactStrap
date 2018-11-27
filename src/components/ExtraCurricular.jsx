import React, { Component } from 'react';
import SimpleSection from './SimpleSection';
import './ExtraCurricular.css';

// Same as Awards class, except the # of cols and md={??}
// we can generalize this
class Extracurricular extends Component {
	render () {
		const Items = this.props.Items;

		return (
			<div className='Extracurricular' id={Items.SectionRef} >
				<SimpleSection Items={Items} />
			</div>
		)
	};

};

export default Extracurricular;