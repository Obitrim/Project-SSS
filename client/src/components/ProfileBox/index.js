import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import "./ProfileBox.css";

const Index = (props) => {
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
			</div>
		</div>
	)
}

export default Index;