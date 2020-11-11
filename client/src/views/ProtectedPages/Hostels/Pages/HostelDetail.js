import "../Hostels.css";
import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { StoreContext } from "../../../../store";
import Container from "../../../../components/Container";
import HostelCard from "../../../../components/HostelCard";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const Index = (props) => {
  const { id } = useParams();
  const { store } = useContext(StoreContext);
  const detailsOfHostelOfInterest = store.hostels.find(
    (hostel) => hostel.id === id
  );

  if (!detailsOfHostelOfInterest) {
    return null;
  }

  return (
    <div className="V-whitespace">
      <Container>
	  <h1 className="ViewHeading">Hostel Detail</h1>
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
				room_type
				/>
			</div>
			<div className="HostelDetail__facilities">
				<h2 className="HostelDetail__facilities__title ViewHeading">Facilities</h2>
				<ul className="HostelDetail__facilities__list">
					<li><FiberManualRecordIcon fontSize="small" /> Facility 1</li>
					<li><FiberManualRecordIcon fontSize="small" /> Facility 2</li>
					<li><FiberManualRecordIcon fontSize="small" /> Facility 3</li>
					<li><FiberManualRecordIcon fontSize="small" /> Facility 4</li>
					<li><FiberManualRecordIcon fontSize="small" /> Facility 5</li>
					<li><FiberManualRecordIcon fontSize="small" /> Facility 6</li>
					<li><FiberManualRecordIcon fontSize="small" /> Facility 7</li>
				</ul>
			</div>
		  </div>
		  <div className="HostelDetail__bottom">
		  <h2 className="ViewHeading">Room Types</h2>
			<div className="HostelFinder__Main">
				<HostelCard room_type="1 in 1" price="GHS 5000" img={detailsOfHostelOfInterest.img}/>
				<HostelCard room_type="1 in 1" price="GHS 5000" img={detailsOfHostelOfInterest.img}/>
				<HostelCard room_type="1 in 1" price="GHS 5000" img={detailsOfHostelOfInterest.img}/>
				<HostelCard room_type="1 in 1" price="GHS 5000" img={detailsOfHostelOfInterest.img}/>
				<HostelCard room_type="1 in 1" price="GHS 5000" img={detailsOfHostelOfInterest.img}/>
			</div>
		  </div>
        </div>
      </Container>
    </div>
  );
};

export default Index;
