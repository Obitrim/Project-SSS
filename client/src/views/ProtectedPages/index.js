import React from 'react';
import AppHome from './Home';
import Hostels from './Hostels';
import Profile from './Profile';
import WhistleBlow from './WhistleBlow';
import DistressCall from './DistressCall';
import { Route } from 'react-router-dom';
import CampusNavigation from './CampusNavigation';
import AppHeader from '../../components/AppHeader';
import FinancialAssistance from './FinancialAssistance';
import HostelDetails from './Hostels/Pages/HostelDetail';
import NewsAndAnnouncements from './NewsAndAnnouncements';
import CounsellingAssistance from './CounsellingAssistance';

const Index = (props) => {
	return (
		<>
			<AppHeader/>
			<main className="ProtectedRouterView">
				<Route exact path="/app" component={AppHome}/>
				<Route path="/app/hostels" exact component={Hostels}/>
				<Route path="/app/profile" component={Profile}/>
				<Route path="/app/distress" component={DistressCall}/>
				<Route path="/app/whistle-blow" component={WhistleBlow}/>
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