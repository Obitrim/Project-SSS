import React from "react";
import "./Hostels.css";
import Container from "../../../components/Container";
import HostelList from "./Pages/HostelList";

const Index = (props) => {
  return (
    <div className="HostelFinder V-whitespace">
      <Container>
        <HostelList />
      </Container>
    </div>
  );
};

export default Index;
