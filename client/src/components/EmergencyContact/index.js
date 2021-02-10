import React from 'react';
import PropTypes from 'prop-types';

import './EmergencyContact.css';

const Index = ({phone, name, text}) => {
	
	return (
		<div className="EmergencyNumber">
			<strong>{name}<br/> <span className="PhoneNumber">({phone})</span></strong>
			<a className="EmergencyNumber__CallBtn" href={`tel:${phone}`}>Call</a>
		</div>
	)
}

Index.propTypes = {
	phone: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	text: PropTypes.oneOf(['small', 'normal', 'large'])
}

Index.defaultProps = {
	text: 'normal'
}

export default Index;