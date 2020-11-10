import './WhistleBlowStyle.css';
import React from 'react';
import InfoIcon from '@material-ui/icons/Info';

const Index = (props) => {
  return (
    <section className="WhistleBlow V-whitespace">
      <h1 className="ViewHeading">Whistle Blow</h1> 
      <p className="WhistleBlow__Info">
        <InfoIcon className="InfoIcon"/>
        Help a victim of abuse by making a report. Your identity will not be known
      </p>
      <div className="descrip-body">
        <h2 className="descrip-head"> Report Description </h2>
        <div className="input-section">
          <textarea className="text-input" rows="10" placeholder="Your message"></textarea>
        </div>
        <button className="SendBtn">Send</button>
      </div>
    </section>
  )
}

export default Index;