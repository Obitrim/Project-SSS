import React from 'react';
import './SearchBox.css';
import SearchIcon from '@material-ui/icons/Search';

const Index = (props) => {
  return (
  	<div className="SearchBox">
    	<input className="SearchBox__Input" type="text" placeholder="Search website" />
  		<SearchIcon className="SearchBox__Icon"/>
  	</div>
  )
}

export default Index;