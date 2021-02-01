import "../Hostels.css";
import React, { useContext } from "react";
import Paper from '@material-ui/core/Paper';
import { useParams } from "react-router-dom";

import { StoreContext } from "../../../../store";
import Container from "../../../../components/Container";
import HostelCard from "../../../../components/HostelCard";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const Index = (props) => {
  const { id } = useParams();
  const { store } = useContext(StoreContext);
  const detailsOfHostelOfInterest = store.hostels.find(hostel => hostel.id === id);

  if (!detailsOfHostelOfInterest) {
    return null;
  }

  return (
   <Container className="HostelDetail__Container">
   		<Paper elevation={2} className="HostelDetail__ExternalImgBox">
   			<img className="ExteriorImg" src="/images/hostel_img.jpg" alt="exterior view" />
   			<div className="HostelDetail__Content">
   				<h1>Hostel Name</h1>
   				<p>Lorem ipsum dolor sit amet lorem25 consectetur temporibus ad optio ullam.</p>
   			</div>
   		</Paper>
		<div className="HostelDetail">
			<div className="HostelDetail__top">
				<div className="HostelDetail__card">
					<HostelCard
						key={detailsOfHostelOfInterest.id}
						id={detailsOfHostelOfInterest.id}
						img={detailsOfHostelOfInterest.img}
						hostel_name={detailsOfHostelOfInterest.name}
						hostel_desc={detailsOfHostelOfInterest.desc}
						hostel_rating={detailsOfHostelOfInterest.hostel_rating}
						previewBtn={false}
						room_type
					/>
				</div>
				<div className="HostelDetail__facilities">
					<h2 className="HostelDetail__facilities__title ViewHeading">Facilities</h2>
					<ul className="HostelDetail__facilities__list">
						<li><FiberManualRecordIcon fontSize="small"/> Facility 1</li>
						<li><FiberManualRecordIcon fontSize="small"/> Facility 2</li>
						<li><FiberManualRecordIcon fontSize="small"/> Facility 3</li>
						<li><FiberManualRecordIcon fontSize="small"/> Facility 4</li>
						<li><FiberManualRecordIcon fontSize="small"/> Facility 5</li>
						<li><FiberManualRecordIcon fontSize="small"/> Facility 6</li>
						<li><FiberManualRecordIcon fontSize="small"/> Facility 7</li>
					</ul>
				</div>
				</div>
				<div className="HostelDetail__bottom">
				<h2 className="ViewHeading">Room Types</h2>
				<div className="HostelFinder__Main">
					<HostelCard 
						room_type="1 in 1" 
						price="GHS 9000" 
						img={detailsOfHostelOfInterest.img} 
						previewBtn={false}
					/>
					<HostelCard 
						room_type="2 in 1" 
						price="GHS 2000" 
						img={detailsOfHostelOfInterest.img} 
						previewBtn={false}
					/>
					<HostelCard 
						room_type="3 in 1" 
						price="GHS 1000" 
						img={detailsOfHostelOfInterest.img} 
						previewBtn={false}
					/>
					<HostelCard 
						room_type="4 in 1" 
						price="GHS 500" 
						img={detailsOfHostelOfInterest.img} 
						previewBtn={false}
					/>
				</div>
			</div>
		</div>
	</Container>
  );
};

export default Index;
