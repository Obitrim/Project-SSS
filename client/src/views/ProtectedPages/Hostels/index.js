import React from "react";
import "./Hostels.css";
import Container from "../../../components/Container";
import HostelCard from "../../../components/HostelCard";

const Index = (props) => {
  return (
    <div className="HostelFinder">
      <Container>
        <div className="HostelFinder__Main">
          <div className="HostelFinder__row">
            <HostelCard
              img={"/images/hostel_img.jpg"}
              hostel_name={"Hostel Name"}
              hostel_desc={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem totam ipsam vitae veniam, nesciunt voluptate voluptatum."
              }
              hostel_rating={5}
            />

            <HostelCard
              img={"/images/hostel_img.jpg"}
              hostel_name={"Hostel Name"}
              hostel_desc={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem totam ipsam vitae veniam, nesciunt voluptate voluptatum."
              }
              hostel_rating={5}
            />
          </div>

          <div className="HostelFinder__row">
            <HostelCard
              img={"/images/hostel_img.jpg"}
              hostel_name={"Hostel Name"}
              hostel_desc={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem totam ipsam vitae veniam, nesciunt voluptate voluptatum."
              }
              hostel_rating={5}
            />

            <HostelCard
              img={"/images/hostel_img.jpg"}
              hostel_name={"Hostel Name"}
              hostel_desc={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem totam ipsam vitae veniam, nesciunt voluptate voluptatum."
              }
              hostel_rating={5}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Index;
