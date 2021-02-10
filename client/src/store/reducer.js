export default (state, action) => {
	switch(action.type){
		case 'SHOW_SIDEBAR':
			return {
				...state,
				sidebarOpen: action.open
			}
		case 'AUTO_LOGIN_USER':
			const loggedInUser = localStorage.getItem('user');
			if (state.user == null && loggedInUser !== 'null'){
				state.user = JSON.parse(loggedInUser);
				return {
					...state,
					user: JSON.parse(loggedInUser)
				}
			} else {
				return state
			}
		case 'LOGIN_USER':
			localStorage.setItem('user', JSON.stringify(action.user));
			return {
				...state,
				user: action.user
			}
		case 'LOGOUT_USER': 
			localStorage.setItem("user", null);
			return {
				...state,
				user: null
			}
		default: 
			return state
	}
}