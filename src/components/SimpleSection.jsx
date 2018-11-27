import React, { Component } from 'react';
import {
	Row,
	Col,
} from 'reactstrap';
import './SimpleSection.css'

export default class SimpleSection extends Component {

// need to assert colsPerRow is int type AND it is > 0 && <= 12
	formatCol (col, imgHeight, colsPerRow, key) {
		// console.log ('formatCol', col);
		const compartments = colsPerRow <= 0 || colsPerRow > 12 ? 12 : 12 / colsPerRow;
		const { Title, Content, IconSrc } = col;
		const imgSrc = '/assets/' + IconSrc;

		return (
			<Col md={compartments} className='mb-1' key={key} >
				<img src={imgSrc} width="auto" height={imgHeight} className="d-inline-block align-center" alt="" />
				<h4 className="my-4 font-weight-bold">{Title}</h4>
				<p className="line-breaks">
				    {Content}
				</p>					
			</Col>
		)
	}

	formatRow (row, imgHeight, colsPerRow) {
		return (
			<Row className='justify-content-center mt-5' key={row[0].IconName} >
				{ row.map((col, key) => this.formatCol(col, imgHeight, colsPerRow, key)) }
			</Row>
		)
	}


	render () {
		const { Cols, Rows, IconHeight, Items, Title } = this.props.Items;
		// console.log ('Cols, Rows, IconHeight, Items', Cols, Rows, IconHeight, Items);

		let aRows = [];
		for (let i=0; i<Rows; i++) {
			// needs a new array and not reference to Items in order to split it
			aRows[i] = [Items.slice(i*Rows, i*Rows+Cols)];
		}


		return (
			<div className='container mb-5'>

				<Row>
					<Col className='my-5 display-4 font-weight-bold section-heading underline'>
						{Title}
					</Col>
				</Row>

				{ aRows.map ( row => this.formatRow (...row, IconHeight, Cols)) }
			</div>
		)
	}
}