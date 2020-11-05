import React, { useEffect } from 'react';
import Login from './Login';
import ForgotPassword from './ForgotPassword';
import ProtectedPages from './ProtectedPages';
import { Switch, Route, useLocation } from 'react-router-dom';

const App = (props) => {
	const location = useLocation();

	useEffect(() => {
		document.documentElement.scrollTop = "0px";
	}, [location]);

  return (
    <div className="App">
    	<Switch>
    		<Route path="/" exact component={Login}/>
        <Route paht="/app" component={ProtectedPages}/>
    		<Route path="/forgot-password" component={ForgotPassword}/>
    	</Switch>
    </div>
  )
}

export default App;