import React, { useEffect } from "react";
import HeaderComponent from "../components/HeaderComponent";
import TopicsComponent from "../components/TopicsComponent";
import PriceComponent from "../components/PriceComponent";

const Topics = () => {
  return (
    <div>
      <HeaderComponent useHomeStyle={false} />
      <PriceComponent />
    </div>
  );
};

export default Topics;
