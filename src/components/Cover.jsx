import React, { Component } from 'react';
import logo from '../logo.svg';
import {
	Button,
	Col,
	Row,
} from 'reactstrap';
import './Cover.css';

class Cover extends Component {
	render () {
		const btnImgHeight = 16;
		const btnImgReadMore = '/assets/ico-books.png';
		const btnImgResume = '/assets/ico-logo.png';
		const btnHRefReadMore = 'Projects';

		return (
			<div className="Cover" id='Cover'>
			  <header className="Cover-header">
			  	<img src='/assets/avarta1-220a.png' className='rounded-circle' alt='Pic of me' />

			    <img src={logo} className="Cover-logo" alt="logo" />
					<Row >
				  	<Col >
							<h2 className="display-4 font-weight-bold animated bounceInDown">
								Welcome
							</h2>

					  	<hr color="white" className="thickLine" />

					  	<h4 className="text-white my-2 font-weight-bold animated bounceInUp">
					  		Anthony Lau
					  	</h4>
				  	</Col>
				  </Row> 

			  	<div className='mt-5' >
			  		<a href={'#'+btnHRefReadMore}  >
					  	<Button color='primary' className='mx-1'>
					  		Read More
					  		<img src={btnImgReadMore} height={btnImgHeight} className='ml-2' alt=''/>
					  	</Button>
				  	</a>

				  	{/***<a href='/assets/Resume - Anthony Lau.pdf' target="_blank" rel="noopener noreferrer" > ***/}
				  	<a href='/assets/Resume - Anthony Lau.pdf' target="_blank"  >
					  	<Button color='primary' className='mx-1'>
					  		Resume
					  		<img src={btnImgResume} height={btnImgHeight} className='ml-2' alt=''/>
					  	</Button>
				  	</a>
			  	</div>
			  </header>
			 </div>
		)
	}
}

export default Cover;