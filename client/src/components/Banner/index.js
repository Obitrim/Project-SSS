import React from 'react';
import "./Banner.css";
import PropTypes from 'prop-types';

const Index = ({children, height, bgSrc}) => {

 	return (
 		<section className="Banner" style={{ height }}>
			<img src={bgSrc} className="Banner__Img" alt="banner img" />
			{ children }
		</section>
 	)
}

Index.propTypes = {
	children: PropTypes.node,
	height: PropTypes.string,
	bgSrc: PropTypes.string
}

Index.defaultProps = {
	height: 'auto'
}

export default Index;