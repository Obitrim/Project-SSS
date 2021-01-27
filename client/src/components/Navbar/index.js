import React, { useEffect, useContext } from 'react';
import './Navbar.css';
import { NavLink, useLocation } from 'react-router-dom';
import { StoreContext } from "../../store";

const Index = (props) => {
	const location = useLocation();
	const { store, dispatch } = useContext(StoreContext);

	useEffect(() => {
		dispatch({ type: 'SHOW_SIDEBAR', open: false})
	}, [location, dispatch]);

	return (
		<>
			<nav className={`AppNavbar ${store.sidebarOpen && 'Show'}`}>
				<NavLink className="NavLink" to="/app" exact activeClassName="ActiveLink">Home</NavLink>
				<NavLink className="NavLink" to="/app/hostels" activeClassName="ActiveLink">Hostels</NavLink>
				<NavLink className="NavLink" to="/app/finance" activeClassName="ActiveLink">Financial Assistance</NavLink>
				<NavLink className="NavLink" to="/app/navigation" activeClassName="ActiveLink">Campus Navigator</NavLink>
				<NavLink className="NavLink" to="/app/whistle-blow" activeClassName="ActiveLink">Whistle Blow</NavLink>
				<NavLink className="NavLink" to="/app/news" activeClassName="ActiveLink">News</NavLink>
				<NavLink className="NavLink" to="/app/counselling" activeClassName="ActiveLink">Counselling</NavLink>
				<NavLink className="NavLink" to="/app/distress" activeClassName="ActiveLink">SOS</NavLink>
			</nav>
			<div className={`AppNavbar__Overlay ${store.sidebarOpen && 'AppNavbar__Overlay--NavOpen'}`} onClick={() => dispatch({ type: 'SHOW_SIDEBAR', open: false})}></div>
		</>
	)
}

export default Index;