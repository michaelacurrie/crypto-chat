import React, { useEffect } from "react";
import HeaderComponent from "../components/HeaderComponent";
import TopicsComponent from "../components/TopicsComponent";
import PriceComponent from "../components/PriceComponent";

const Topics = () => {
  //  "hostname": "rest.coinapi.io",
  //   "path": "/v1/exchanges",
  //   "headers": {'X-CoinAPI-Key': '73034021-THIS-IS-SAMPLE-KEY'}
  //https://rest.coinapi.io/v1/exchanges
  // API GOES HERE

  // CE9B8103-BC60-42F3-A867-B18BB5640FB2

  // axios
  //   .get(url, {
  //     headers: {
  //       "X-CoinAPI-Key": "CE9B8103-BC60-42F3-A867-B18BB5640FB2",
  //     },
  //   })
  //   .then((res) => res.data);

  return (
    <div>
      <HeaderComponent useHomeStyle={false} />
      <PriceComponent />
    </div>
  );
};

export default Topics;
