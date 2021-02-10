import React, { useEffect, useContext } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import { 
	HomeRounded, HotelRounded, 
	MapRounded, AccountBalanceRounded, 
	HelpRounded, AnnouncementRounded, AddAlert
} from '@material-ui/icons';

import './Navbar.css';
import { StoreContext } from "../../store";

const Index = (props) => {
	const history = useHistory();
	const location = useLocation();
	const { store, dispatch } = useContext(StoreContext);

	useEffect(() => {
		dispatch({ type: 'SHOW_SIDEBAR', open: false})
	}, [location, dispatch]);
	/**
	 *
	 * Logs out user and return to login page
	 * @returns {undefined}
	 */
	function logoutUser(){
		dispatch({ type: 'LOGOUT_USER' });
		history.push("/");
	}

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
					Inform
				</NavLink>
				{/**<NavLink 
					className="NavLink" 
					to="/app/news" 
					activeClassName="ActiveLink">
					<AnnouncementRounded/>
					News
				</NavLink>**/}
				<NavLink 
					className="NavLink" 
					to="/app/counselling" 
					activeClassName="ActiveLink">
					<HelpRounded/>
					Counselling
				</NavLink>
				<button className="LogoutBtn" type="button" onClick={logoutUser}>Logout</button>
			</nav>
			<div className={`AppNavbar__Overlay ${store.sidebarOpen && 'AppNavbar__Overlay--NavOpen'}`} onClick={() => dispatch({ type: 'SHOW_SIDEBAR', open: false})}></div>
		</>
	)
}

export default Index;