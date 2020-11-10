import './WhistleBlowStyle.css';
import React from 'react';

const Index = (props) => {
  return (
    <div class="content">
      <div class="whistle-head">
        {/* <h1>Whistle Blow</h1> */}
      </div>

      <div class="descrip-body">
        <span class="descrip-head" > Description </span>
        <div class="input-section">
          <textarea class="text-input" rows="12" cols="70" placeholder="Your message">

          </textarea>
        </div>
        <span class="send-bttn">
          <input type="button" value="send" name="send"></input>
        </span>
      </div>
    </div>
  )
}

export default Index;