export default (state, action) => {
	switch(action.type){
		case 'SHOW_SIDEBAR':
			return {
				...state,
				sidebarOpen: action.open
			}
		case 'LOGIN_USER':
			return {
				...state,
				user: action.user
			}
		case 'LOGOUT_USER': 
			return {
				...state,
				user: null
			}
		default: 
			return state
	}
}