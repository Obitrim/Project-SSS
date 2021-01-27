import React, { useContext } from "react";
import { StoreContext } from "../../../../store";
import HostelCard from "../../../../components/HostelCard";

const Index = () => {
  const { store } = useContext(StoreContext);

  return (
    <>
      <h1 className="ViewHeading">Hostels</h1>
      <div className="HostelFinder__Main">
        {store.hostels.map(hostel => (
           <HostelCard
              key={hostel.id}
              id={hostel.id}
              img={hostel.img}
              hostel_name={hostel.name}
              hostel_desc={hostel.desc}
              hostel_rating={hostel.hostel_rating}
            />
          ))}
      </div>
    </>
  );
};

export default Index;
