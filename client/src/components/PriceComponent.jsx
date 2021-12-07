import React, { useEffect, useState } from "react";

export default function TopicsComponent() {
  const [exchange, setExchange] = useState({});
  const [values, setValues] = useState({
    asset: "BTC",
    symbol: "USD",
  });

  const [symbols, setSymbols] = useState({});

  const getExchangeRate = () => {
    fetch(
      `https://min-api.cryptocompare.com/data/price?fsym=${values.asset}&tsyms=${values.symbol}`,
      {
        headers: {
          authorization:
            "fdc90dc5f95337039137f73383d274cf722beb7b7958c72820f57f48dd1ee340",
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
    fetch(`https://min-api.cryptocompare.com/data/all/coinlist?summary=true`, {
      headers: {
        authorization:
          "fdc90dc5f95337039137f73383d274cf722beb7b7958c72820f57f48dd1ee340",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log(Object.keys(data.Data));
        setSymbols(data.Data);
      });
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
    console.log(symbols[values.asset]);
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
                {Object.keys(symbols).map((i, index) => (
                  <option key={index} value={i}>
                    {i}
                  </option>
                ))}
                <option value="BTC">BTC</option>
                <option value="ETH">ETH</option>
              </select>
              <select name="symbol" onChange={handleChange}>
                <option value="">Select Symbol</option>
                <option value="USD">USD</option>
                <option value="AUD">AUD</option>
                <option value="GBP">GBP</option>
                <option value="CAD">CAD</option>
                <option value="CHF">CHF</option>
                <option value="NZD">NZD</option>
                <option value="JPY">JPY</option>
                <option value="EUR">EUR</option>
                <option value="RUB">RUB</option>
                <option value="CHY">CHY</option>
              </select>

              <button className="asset__btn" onClick={handleClick}>
                Get Exchange Rate
              </button>
            </div>
          </header>
          <div className="asset__group">
            <div className="asset__group-right">
              <div className="asset_img-container">
                <img
                  src={`https://min-api.cryptocompare.com${
                    symbols[values.asset]?.ImageUrl
                  }`}
                  alt=""
                />
              </div>
            </div>
            <div className="asset__group-left">
              <div className="asset_info">
                <h3>
                  {values.asset} / {values.symbol}
                </h3>
                {symbols[values.asset]?.FullName}
                <p>${exchange[values.symbol]}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
