import React, { useContext, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';

import AppHome from './Home';
import Hostels from './Hostels';
import Profile from './Profile';
import DistressCall from './DistressCall';
import { StoreContext } from '../../store';
import CampusNavigation from './CampusNavigation';
import AppHeader from '../../components/AppHeader';
import FinancialAssistance from './FinancialAssistance';
import HostelDetails from './Hostels/Pages/HostelDetail';
import NewsAndAnnouncements from './NewsAndAnnouncements';
import CounsellingAssistance from './CounsellingAssistance';
import Dos from './Dos'

const Index = (props) => {
	const { store, dispatch } = useContext(StoreContext);

	if (store.user === null && localStorage.getItem('user') === 'null') {
		return <Redirect to="/"/>
	} else {
		dispatch({ type: 'AUTO_LOGIN_USER' });
	}

	return (
		<>
			<AppHeader/>
			<main className="ProtectedRouterView">
				<Route exact path="/app" component={AppHome}/>
				<Route path="/app/profile" component={Profile}/>
				<Route path="/app/hostels" exact component={Hostels}/>
				<Route path="/app/distress-call" component={DistressCall}/>
				<Route path="/app/news" component={NewsAndAnnouncements}/>
				<Route path="/app/hostels/:id" component={HostelDetails}/>
				<Route path="/app/finance" component={FinancialAssistance}/>
				<Route path="/app/navigation" component={CampusNavigation}/>
				<Route path="/app/counselling" component={CounsellingAssistance}/>
				<Route path="/app/appointment-with-DOS" component={Dos}/>
			</main>
		</>
	)
}

export default Index;