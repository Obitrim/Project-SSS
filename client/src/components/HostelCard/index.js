import "./HostelCard.css";
import React from "react";
import { useHistory } from "react-router-dom";
import StarRateIcon from "@material-ui/icons/StarRate";

const Index = ({ 
    hostel_rating, img, hostel_name, room_type, price, hostel_desc, id, previewBtn 
  }) => {

  const history = useHistory();
  const hostelRating = [];

  for (let i = 0; i < hostel_rating; i++) {
    hostelRating.push(<StarRateIcon key={i}/>);
  }

  return (
    <div className="HostelCard">
      <div className="HostelCard__img">
        <img src={img} alt="" />
      </div>
      <div className="HostelCard__info">
        <div className="HostelCard__info__header">
          <h4 className="HostelCard__info__title">
            {hostel_name ? hostel_name : room_type}
          </h4>
          <div className="HostelCard__info__ratings">
            {hostel_rating ? hostelRating : price}
          </div>
        </div>
        <div className="HostelCard__info__desc">
          <p>{hostel_desc}</p>
        </div>
        <div className="HostelCard__buttons">
        <div>
          {previewBtn && (
            <button
              className="HostelCard__Button"
              onClick={() => history.push(`/app/hostels/${id}`)}
              >
              Preview
            </button>
            )}
        </div>
        </div>
      </div>
    </div>
  );
};

Index.defaultProps = {
  previewBtn: true
}

export default Index;
