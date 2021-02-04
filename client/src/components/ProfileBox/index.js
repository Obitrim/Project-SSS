import React, { useState, useEffect, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';

import "./ProfileBox.css";
import { StoreContext } from '../../store';

const Index = (props) => {
	const history = useHistory();
	const { dispatch } = useContext(StoreContext);
	const [profileMenuIsOpen, setProfileMenuIsOpen] = useState(false);

	useEffect(() => {
		document.body.addEventListener('click', closeProfileMenuHandler);
		return () => document.body.removeEventListener('click', closeProfileMenuHandler);
	}, []);
	/**
	 *
	 * Closes profile menu box
	 * @returns {undefined}
	 */
	function closeProfileMenuHandler(){
		showProfileMenu(false);
	}
	/**
	 *
	 * Logs out user and return to login page
	 * @returns {undefined}
	 */
	function logoutUser(){
		dispatch({ type: 'LOGOUT_USER' });
		history.push("/");
	}

	function showProfileMenu(show=true){
		setProfileMenuIsOpen(show)
	}

	return (
		<div className="ProfileBox">
			<button className="IconBtn ProfileToggler" type="button" onClick={() => showProfileMenu()}>
				<img src="/svgs/profile.svg" alt="profile icon"/>
			</button>
			<div className={`ProfileItems ${profileMenuIsOpen && 'ProfileItems--Show'}`}>
				<Link className="ViewProfileBtn" to="/app/profile">Profile</Link>
				<button className="LogoutBtn" type="button" onClick={logoutUser}>Logout</button>
			</div>
		</div>
	)
}

export default Index;