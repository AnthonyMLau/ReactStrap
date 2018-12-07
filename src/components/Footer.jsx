import React, { Component } from 'react';
import {
	Row,
	Col,
	Badge,
} from 'reactstrap';
import './Footer.css';



class Footer extends Component {

	formatSocial (item, key) {
		const { sID, hRef, displayName, iconSrc } = item;
		const imgSrc = '/assets/' + iconSrc;
		const imgHeight = 22;

		return (
			<Badge pill color="primary" className='mx-1' href={hRef} key={key} target="_blank" >
				<img src={imgSrc} height={imgHeight} className="mr-2" alt={sID}/ >
				{displayName}
			</Badge>
		);
	}


	render () {
		return (
			<footer className='Footer py-3'>
				<div className='container text-white'>
					<Row>
						<Col md={6} className='text-center text-md-left'>
							<p className="FooterMsg">
								{this.props.footerText}
							</p>
						</Col>

						<Col md={6} className='text-center text-md-right'>
							{ this.props.socialItems.map ((item, key) => this.formatSocial(item, key)) }
						</Col>
					</Row>
				</div>
			</footer>
		)
	}
}

export default Footer;