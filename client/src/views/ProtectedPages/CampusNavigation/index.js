import React from 'react';
import './CampusNavigation.css';

import Googlemap from '../../../components/GoogleMap';

const Index = (props) => {

  return (
    <div className="CampusNavigator">
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
      <Googlemap/>
    </div>
  )
}

export default Index;