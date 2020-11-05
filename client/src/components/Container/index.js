import React from 'react';
import './Container.css';
import PropTypes from 'prop-types';

const Index = ({children}) => {
  return (
    <div className="Container">
    	{children}
    </div>
  )
}

Index.propTypes = {
	children: PropTypes.node
}

export default Index;