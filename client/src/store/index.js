import React, { createContext, useReducer } from 'react';
import reducer from "./reducer.js";
import initialState from './state.js';

export const StoreContext = createContext();

const Index = ({children}) => {
	const [ store, dispatch ] = useReducer(reducer, initialState);
	
	return (
		<StoreContext.Provider value={{ store, dispatch }}>
			{children}
		</StoreContext.Provider>
	)
}

export default Index;