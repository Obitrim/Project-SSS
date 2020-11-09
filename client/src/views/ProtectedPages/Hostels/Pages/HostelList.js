import React from "react";
import HostelCard from "../../../../components/HostelCard";


const Index = () => {
  return (
    <>
      <h1 className="ViewHeading">Hostels</h1>
      <div className="HostelFinder__Main">
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
          hostel_rating={4}
        />
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
          hostel_rating={2}
        />
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
        <HostelCard
          img={"/images/hostel_img.jpg"}
          hostel_name={"Hostel Name"}
          hostel_desc={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem totam ipsam vitae veniam, nesciunt voluptate voluptatum."
          }
          hostel_rating={3}
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
    </>
  );
};

export default Index;
