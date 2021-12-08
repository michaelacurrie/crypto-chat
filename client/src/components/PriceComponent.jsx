import React, { useEffect, useState } from "react";
import "./PriceComponent.scss";

export default function TopicsComponent() {
  const [exchange, setExchange] = useState({});
  const [values, setValues] = useState({
    asset: "BTC",
    symbol: "USD",
  });
  const [loading, setLoading] = useState(true);

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
        setLoading(false);
        setExchange(data);
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
    setLoading(true);
    getExchangeRate();
    console.log(symbols[values.asset]);
  };

  return (
    <>
      {exchange.error ? <p>Too many request</p> : null}
      <div className="asset">
        <h1>Get Crypto Price</h1>
        <div className="asset__container">
          <header className="asset__header">
            <div className="asset__header-form">
              <select
                className="asset__dropdown"
                name="asset"
                onChange={handleChange}
              >
                <option value="">Select Asset</option>
                <option value="BTC">BTC</option>
                <option value="ETH">ETH</option>
                {Object.keys(symbols).map((i, index) => (
                  <option key={index} value={i}>
                    {i}
                  </option>
                ))}
              </select>
              <select
                className="asset__dropdown"
                name="symbol"
                onChange={handleChange}
              >
                <option value="">Select Symbol</option>d
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
            <div className="asset__group-left">
              <div className="asset__info">
                {loading ? (
                  <div className="loader">Loading...</div>
                ) : (
                  <>
                    <h3 className="asset__symbol">
                      {values.asset} / {values.symbol}
                    </h3>
                    <p className="asset__lists">
                      {symbols[values.asset]?.FullName}
                    </p>

                    <p className="asset__lists">${exchange[values.symbol]}</p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
