export default (state, action) => {
	switch(action.type){
		case 'SHOW_SIDEBAR':
			return {
				...state,
				sidebarOpen: action.open
			}
		default: 
			return state
	}
}