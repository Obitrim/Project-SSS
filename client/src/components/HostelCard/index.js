import React from "react";
import './HostelCard.css';
import StarRateIcon from '@material-ui/icons/StarRate';


const Index = (props) => {
    const hostelRating = [];
    for (let i=0; i<props.hostel_rating; i++){
        hostelRating.push(<StarRateIcon />)
    }
    
  return (
    <div className="HostelCard">
      <div className="HostelCard__img">
        <img src={props.img} alt="" />
      </div>
      <div className="HostelCard__info">
        <div className="HostelCard__info__header">
          <h4 className="HostelCard__info__title">{props.hostel_name}</h4>
          <div className="HostelCard__info__ratings">
            {hostelRating}
          </div>
        </div>
        <div className="HostelCard__info__desc">
          <p>
            {props.hostel_desc}
          </p>
        </div>
        <div className="HostelCard__buttons">
          <div>
            <button>Preview</button>
          </div>
          <div>
            <button>Room Types</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;