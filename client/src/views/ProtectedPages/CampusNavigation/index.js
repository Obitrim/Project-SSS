import React from 'react';
import './CampusNavigation.css';

import Googlemap from '../../../components/GoogleMap';

const Index = (props) => {

  return (
    <div className="CampusNavigator">
      <h1>Campus Navigation</h1>
       <Googlemap/>
    </div>
  )
}

export default Index;