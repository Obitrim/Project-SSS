import React, { useState, useEffect, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import AccessAlarm from '@material-ui/icons/AccessAlarm';
import AccountCircle from '@material-ui/icons/AccountCircle';

import "./ProfileBox.css";
import EmergencyContact from '../EmergencyContact';

const Index = (props) => {
	const history = useHistory();
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
			<button type="button" className="IconBtn ProfileToggler" onClick={() => history.push('/app/profile')}>
				<AccountCircle/>
			</button>
			<button type="button" 
				className="IconBtn ProfileToggler" 
				onClick={() => showProfileMenu()}
				title="Emergency Contacts"
				>
				<AccessAlarm/>
			</button>
			<div className={`ProfileItems ${profileMenuIsOpen && 'ProfileItems--Show'}`}>
				<EmergencyContact name="KNUST Security (Hotline)" phone="0322-062-999" />
				<EmergencyContact name="Police Buffalo" phone="0322-033-545" />
				<EmergencyContact name="KNUST Security (office)" phone="0332-060-229" />
				<EmergencyContact name="Police Information" phone="0322-022-323" />
				<EmergencyContact name="Police Information" phone="0322-022-323" />
				<EmergencyContact name="KNUST Police Station" phone="0322-060-051" />
			</div>
		</div>
	)
}

export default Index;