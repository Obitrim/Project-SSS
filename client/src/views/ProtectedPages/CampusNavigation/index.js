import React from 'react';
import './CampusNavigation.css';

const Index = (props) => {
  return (
    <div>
      <h1>Campus Navigation</h1>
      <form class="search">

          <div class="contents">
            <fieldset>
          <label class="content_label_from">From</label>
          <input name="From" class="content_input" type="text"></input><br></br>
          <label class="content_label_to" for="to">To</label>
          <input name="To" class="content_input" type="text"></input>
          </fieldset>
          </div>

      </form>
      <div class="maparea">
        
      </div>
    </div>
    

  )
}

export default Index;