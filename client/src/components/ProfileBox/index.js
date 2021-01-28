import React, { useState, useEffect } from 'react';
import "./ProfileBox.css";
import { Link, useHistory } from 'react-router-dom';

const Index = (props) => {
	const history = useHistory();
	const [profileMenuIsOpen, setProfileMenuIsOpen] = useState(false);

	useEffect(() => {
		document.body.addEventListener('click', closeProfileMenuHandler);
		return () => document.body.removeEventListener('click', closeProfileMenuHandler);
	}, []);

	function closeProfileMenuHandler(){
		showProfileMenu(false);
	}

	function logoutUser(){
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