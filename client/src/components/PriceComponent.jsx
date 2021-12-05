import React, { useEffect, useState } from "react";

export default function TopicsComponent() {
  const [exchange, setExchange] = useState({});
  const [values, setValues] = useState({
    asset: "BTC",
    symbol: "USD",
  });

  const getExchangeRate = () => {
    fetch(
      `https://rest.coinapi.io/v1/exchangerate/${values.asset}/${values.symbol}`,
      {
        headers: {
          "X-CoinAPI-Key": "CE9B8103-BC60-42F3-A867-B18BB5640FB2",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setExchange(data); //functional
      });
  };

  useEffect(() => {
    getExchangeRate();
  }, []);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log("name:", name);
    console.log("value:", value);
    setValues({ ...values, [name]: e.target.value });
  };

  const handleClick = () => {
    getExchangeRate();
  };

  return (
    <>
      {exchange.error ? <p>Too many request</p> : null}
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

              <button className="asset__btn" onClick={handleClick}>
                Get Exchange Rate
              </button>
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
                <h3>
                  {exchange.asset_id_base} / {exchange.asset_id_quote}
                </h3>
                <p>${exchange.rate}</p>
                <p>{exchange.time}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
