import React, { useContext } from 'react';
import './Profile.css';
import { StoreContext } from '../../../store';

const Index = (props) => {
	const { store }  = useContext(StoreContext);

	function onChangeHandler(){

	}

	return (
		<div className="ProfileView">
			<img className="ProfileView__ProfileImg" src="/svgs/Big Profile.svg" alt="profile"/>
			<h2 className="ProfileView__Name">SURNAME, First Name</h2>
			<form className="ProfileView__Form">
				<input type="text" 
					name="username" 
					className="ProfileView__Form__Input"
					value={store.user.username}
					readOnly
				/>
				<input type="text" 
					name="studentNo"
					className="ProfileView__Form__Input"
					value={store.user.studentNo}
					readOnly 
				/>
				<div className="FormGroup">
					<input type="text" 
						name="phoneNo"
						className="ProfileView__Form__Input" 
						onChange={onChangeHandler} 
						value={store.user.phoneNo}
					/>
					<button type="button" className="EditBtn">
						<img src="/svgs/edit.svg" alt="edit image"/>
					</button>
				</div>
				<div className="FormGroup">
					<input type="text"
					 name="email" 
					 className="ProfileView__Form__Input"
					 onChange={onChangeHandler} 
					 value={store.user.email}
					/>
					<button type="button" className="EditBtn">
						<img src="/svgs/edit.svg" alt="edit image"/>
					</button>
				</div>
				<input type="text" 
					name="knustEmail"
					className="ProfileView__Form__Input"
					value={store.user.knustEmail}
					readOnly
				/>  
				<button type="submit" className="ProfileView__SubmitBtn">Save</button>	
			</form>
		</div>
	)
}

export default Index;