import React, { Component } from 'react';
import {
	Badge,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

import './CustomNavBar.css'

export default class CustomNavBar extends Component {
	constructor(props) {
	  super(props);

	  this.toggle = this.toggle.bind(this);
	  this.state = {
	    isOpen: false,
	    Items: props.Items,
	    socialItems: props.socialItems
	  };
}
	
	toggle() {
	  this.setState({
	    isOpen: !this.state.isOpen
	  });
	}

	closeCollapse = () => {
		if (this.state.isOpen) {
			this.toggle();
		}
	}

	renderNavItem (item, key) {
		return (
			<NavItem key={key} >
				<NavLink href={'#'+item.hRef} onClick={this.closeCollapse} > 
					{item.displayName}
				</NavLink>
			</NavItem>
		);
	};

	renderSocialItem (item, key) {
		const { sID, hRef, displayName, iconSrc } = item;
		const imgSrc = '/assets/' + iconSrc;
		const imgHeight = 22;

		return (
			<NavItem key={key} className="">
				<Badge className="text-white mr-2" 
							 color="dark" 
							 pill
							 href={hRef} 
							 target="_blank" >
					<img src={imgSrc} height={imgHeight} className='mr-2' alt={sID} />
					{ displayName }
				</Badge>
			</NavItem>
		);
	}

	render () {
		const { Items, socialItems } = this.state;

		return (
				<Navbar color="primary" dark expand="lg" fixed="top">
					<NavbarBrand href="#" className='text-white'>
						<img src='/assets/ico-logo.png' alt='Logo'
								width="24" className='d-inline-block align-center mr-3'/>
						Anthony Lau
					</NavbarBrand>

					<NavbarToggler onClick={this.toggle} />
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav className="ml-1" navbar>
							{ Items.map ( (item, key) => this.renderNavItem(item, key) ) }
						</Nav>

						<Nav navbar className='ml-auto'>
							{ socialItems.map ((item, key) => this.renderSocialItem(item, key)) }
						</Nav>

					</Collapse>
				</Navbar>
		)
	}
}