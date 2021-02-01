import React, { useEffect, useContext } from 'react';
import './Navbar.css';
import { NavLink, useLocation } from 'react-router-dom';
import { StoreContext } from "../../store";
import { 
	HomeRounded, HotelRounded, 
	MapRounded, AccountBalanceRounded, 
	HelpRounded, AnnouncementRounded, AddAlert
} from '@material-ui/icons';

const Index = (props) => {
	const location = useLocation();
	const { store, dispatch } = useContext(StoreContext);

	useEffect(() => {
		dispatch({ type: 'SHOW_SIDEBAR', open: false})
	}, [location, dispatch]);

	return (
		<>
			<nav className={`AppNavbar ${store.sidebarOpen && 'Show'}`}>
				<div className="NavbarHeader">
					<img className="NavbarHeaderImg" src="/images/logo.png" alt="logo" /><br/>
					<h4 className="NavbarAppName">KNUST Student Support services</h4>
				</div>
				<NavLink 
					className="NavLink" 
					to="/app" 
					exact 
					activeClassName="ActiveLink">
					<HomeRounded/>
					Home
				</NavLink>
				<NavLink 
					className="NavLink" 
					to="/app/navigation" 
					activeClassName="ActiveLink">
					<MapRounded/>
					Campus Navigator
				</NavLink>
				<NavLink 
					className="NavLink" 
					to="/app/hostels" 
					activeClassName="ActiveLink">
					<HotelRounded/>
					Hostel Finder
				</NavLink>
				<NavLink 
					className="NavLink" 
					to="/app/finance" 
					activeClassName="ActiveLink">
					<AccountBalanceRounded/>
					Financial Aid
				</NavLink>
				<NavLink 
					className="NavLink" 
					to="/app/distress-call" 
					activeClassName="ActiveLink">
					<AddAlert/>
					Distress Signal
				</NavLink>
				<NavLink 
					className="NavLink" 
					to="/app/news" 
					activeClassName="ActiveLink">
					<AnnouncementRounded/>
					News
				</NavLink>
				<NavLink 
					className="NavLink" 
					to="/app/counselling" 
					activeClassName="ActiveLink">
					<HelpRounded/>
					Counselling
				</NavLink>
			</nav>
			<div className={`AppNavbar__Overlay ${store.sidebarOpen && 'AppNavbar__Overlay--NavOpen'}`} onClick={() => dispatch({ type: 'SHOW_SIDEBAR', open: false})}></div>
		</>
	)
}

export default Index;