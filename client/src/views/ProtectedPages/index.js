import React, { useContext } from 'react';
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

const Index = (props) => {
	const { store } = useContext(StoreContext);

	if (store.user === null) {
		return <Redirect to="/"/>
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
			</main>
		</>
	)
}

export default Index;