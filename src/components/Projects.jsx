import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import {
	Row, 
	Col, 
	Card, 
	// CardDeck,
	CardImg, 
	CardText, 
	CardBody,
  CardTitle, 
  CardSubtitle, 
} from 'reactstrap';

import './Projects.css';

class Projects extends Component {
	renderWelcome (welcome) {
		const { Title, Content } = welcome;

		return (
			<React.Fragment>
				<Row className="justify-content-center text-white">
					<Col md={10}>
						<h2 className="pt-5 mt-5 display-3">
							{Title}
						</h2>
					</Col>
				</Row>

				<Row className="justify-content-center text-white">
					<Col md={8}>
						<h2 className='WelcomeText' >
							{Content}
						</h2>
						<hr color="white" className='mt-5'/>
					</Col>
				</Row>
			</React.Fragment>
		);
	};

	renderProject (item, imgWidth, itemsPerRow, key) {
		const { Title, SubTitle, Content, hRef, ImageSrc, ImageName } = item;

		return (
			<Col key={key} md={12/itemsPerRow}>
				<Card >
					<a href={hRef} target="_blank" rel="noopener noreferrer" >
						<CardImg top width={imgWidth} src={'/assets/'+ImageSrc} alt={ImageName} />
					</a>
					<CardBody >
						<CardTitle tag="h3"> {Title} </CardTitle>
						<CardSubtitle> {SubTitle} </CardSubtitle>
						<CardText> {Content} </CardText>
						{ hRef.length > 0 
							? 
								<a href={hRef} target="_blank" rel="noopener noreferrer" >
									 GitHub
								</a>
							: "" }
					</CardBody>
				</Card>
			</Col>
		);
	}

	render () {
		const { welcome } = this.props;
		let { Items } = this.props;

		const { Title, SectionRef, ImgWidth, CardsPerRow } = Items;
		Items = Items.Items;
		return (
			<div className='Projects' id={SectionRef} >
			<div className='container pb-5'>
				{ this.renderWelcome(welcome) }

				<h1 className="my-5 display-3 font-weight-bold section-heading text-white">
					{Title}
				</h1>
				<Row className="justify-content-center">
					{ Items.map ((item, key) => this.renderProject(item, ImgWidth, CardsPerRow, key)) }
				</Row>

			</div>
			</div>
		)
	}
}

export default Projects;