import React from 'react';
import './CampusNavigation.css';
import Paper from '@material-ui/core/Paper';
import Googlemap from '../../../components/GoogleMap';

const Index = (props) => {

  return (
    <div className="CampusNavigator">
      <Paper className="CampusNavigator__EndPoints">
      	<div className="FormGroup">
      		<label className="FormGroup__Label" >Current Location</label>
      		<input type="text" 
      			className="EndPoints__Input"
      			value="Kumasi, Ghana"
      			name="currentLocation" 
      			disabled
      		/>
      	</div>
      	<div className="FormGroup">
      		<label className="FormGroup__Label" htmlFor="destination">Destination</label>
      		<input type="text" 
      			className="EndPoints__Input EndPoints__Input--Destination"
      			id="destination" 
      			placeholder="where are you going?" 
      			name="destination"
      		/>
      	</div>
      </Paper>
       <Googlemap/>
    </div>
  )
}

export default Index;