import React from "react";
import HomeComponent from "../../components/HomeComponent";
import FooterComponent from "../../components/FooterComponent";
import FaqComponent from "../../components/FaqComponent";
import TopicsComponent from "../../components/TopicsComponent";

function Home() {
  return (
    <>
      <HomeComponent />
      <TopicsComponent />
      <FooterComponent />
    </>
  );
}

export default Home;
