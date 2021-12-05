import React, { useEffect, useState } from "react";

export default function TopicsComponent() {
  const [exchange, setExchange] = useState({});
  const [values, setValues] = useState({
    asset: "",
    symbol: "",
  });
  const [value, setValue] = useState("");

  useEffect(() => {
    fetch("https://rest.coinapi.io/v1/exchangerate/BTC/USD", {
      headers: {
        "X-CoinAPI-Key": "CE9B8103-BC60-42F3-A867-B18BB5640FB2",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setExchange(data); //functional
      });
  }, []);

  let car = {
    model: "Rx",
    make: "Toyota",
    year: "1992",
  };

  console.log(car);
  car["make"] = "lexus";
  console.log(car);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log("name:", name);
    console.log("value:", value);
    setValues({ ...values, [name]: e.target.value });
  };

  return (
    <>
      {value}
      <div className="asset">
        <div className="asset__container">
          <header className="asset__header">
            <div className="asset__header-form">
              <select name="asset" onChange={handleChange}>
                <option value="">Select Asset</option>
                <option value="BTC">BTC</option>
                <option value="ETH">ETH</option>
              </select>
              <select name="symbol" onChange={handleChange}>
                <option value="">Select Symbol</option>
                <option value="USD">USD</option>
                <option value="CAD">CAD</option>
                <option value="gibberish">Mountain Dew</option>
              </select>
              <input
                type="checkbox"
                name=""
                id=""
                onChange={handleChange}
                value="yes"
              />
              <input
                type="text"
                placeholder="Enter value" //change keypress click sub input.addEventListenr("change", handleChange)
                onChange={handleChange}
              />
              <button>Get Exchange Rate</button>
            </div>
          </header>
          <div className="asset__group">
            <div className="asset__group-right">
              <div className="asset_img-container">
                <img src="" alt="" />
              </div>
            </div>
            <div className="asset__group-left">
              <div className="asset_info">
                <h3>BTC / USD</h3>
                <p>$44444</p>
                <p>wed 2nd oct 2021</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
