import './HostelCard.css';
import React, { useContext } from "react";
import { StoreContext } from '../../store';
import { useHistory } from 'react-router-dom';
import StarRateIcon from '@material-ui/icons/StarRate';

const Index = (props) => {
  const history = useHistory();
  const { dispatch } = useContext(StoreContext);

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
            <button className="HostelCard__Button" 
              onClick={() => history.push(`/app/hostels/${props.id}`)}
              > Preview
            </button>
          </div>
          <div>
            <button className="HostelCard__Button">Room Types</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;