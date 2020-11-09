import React, { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { StoreContext } from '../../../../store';
import HostelCard from '../../../../components/HostelCard';

const Index = (props) => {
	const { id } = useParams();
	const { store } = useContext(StoreContext);
	const detailsOfHostelOfInterest = store.hostels.find(hostel => hostel.id == id);

	if(!detailsOfHostelOfInterest){
		return null;
	}

	return <h1>{detailsOfHostelOfInterest.id}</h1>
}	

export default Index;
