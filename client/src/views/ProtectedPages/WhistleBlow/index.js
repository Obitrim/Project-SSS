import './WhistleBlowStyle.css';
import React from 'react';
import InfoIcon from '@material-ui/icons/Info';

const Index = (props) => {
  return (
    <section class="WhistleBlow V-whitespace">
      <h1 class="ViewHeading">Whistle Blow</h1> 
      <p className="WhistleBlow__Info">
        <InfoIcon className="InfoIcon"/>
        Help a victim of abuse by making a report. Your identity will not be known
      </p>
      <div class="descrip-body">
        <span class="descrip-head"> Report Description </span>
        <div class="input-section">
          <textarea class="text-input" rows="10" cols="70" placeholder="What is happening ?"></textarea>
        </div>
        <span class="send-bttn">
          <input type="button" value="send" name="send"></input>
        </span>
      </div>
    </section>
  )
}

export default Index;