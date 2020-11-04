export default (state, action) => {
	switch(action.type){
		case 'OPEN_SIDEBAR':
			return {
				...state,
				navOpen: action.open
			}
		default: 
			return state
	}
}