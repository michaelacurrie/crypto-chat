import React from "react";
import "../components/HomeComponent.scss";
import image1 from "../assets/Crypto-logos/1.png";
import image2 from "../assets/Crypto-logos/2.png";
import image3 from "../assets/Crypto-logos/3.png";
import image4 from "../assets/Crypto-logos/4.png";
import image5 from "../assets/Crypto-logos/5.png";
import image6 from "../assets/Crypto-logos/6.png";

export default function HomeComponent() {
  const cardInfo = [
    {
      id: 1,
      image: image1,
      name: "bitcoin",
    },
    {
      id: 2,
      image: image2,
      name: "ethereum",
    },
    {
      id: 3,
      image: image3,
      name: "doge",
    },
    {
      id: 4,
      image: image4,
      name: "lite",
    },
    {
      id: 5,
      image: image5,
      name: "solana",
    },
    {
      id: 6,
      image: image6,
      name: "tether",
    },
  ];
  return (
    <>
      <section className="hero">
        <div className="hero__container">
          <div className="hero__container-overlay">
            <div className="hero__container-left">
              <h1 className="hero__title">
                CryptoChat-Level Up Your Knowledge And Wallet
              </h1>
              <p className="hero__text">
                Learn about this new technology from industry leaders
              </p>
            </div>

            <div className="hero__container-right">
              <h2 className="hero__container-title">
                Join Our Next Training Session, Feb 2022
              </h2>
              <form className="hero-form" action="submit">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Please provide an email address"
                />
                <button className="hero__btn">Register!</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="card">
        <div className="card__container">
          <h2 className="card__title">Trending Coins</h2>
          <div className="card__group">
            {cardInfo.map((i) => (
              <div className="card__item" key={i.id}>
                <div className="card__img">
                  <img src={i.image} alt="" />
                </div>
                <div className="card__body">
                  <ul className="card__body-list">
                    <li className="card__body-text">
                      <strong>price</strong> <span>$10,000</span>
                    </li>
                    <li lassName="card__body-text">Buy</li>
                  </ul>
                </div>
                <div className="card__footer">{i.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="information">
        <div className="information__container">
          <div className="information__crypto-chat">
            <h2 className="information__title">What Is Crypto Chat?</h2>
            <ul className="information__list">
              <li className="information__list-item">
                An Interactive Community
              </li>
              <li className="information__list-item">
                Popular & Trending Topics{" "}
              </li>
              <li className="information__list-item">
                {" "}
                Investment Tips & Forecasts
              </li>
              <li className="information__list-item">Group Training</li>
            </ul>
          </div>

          <div className="information__crypto-img"></div>
        </div>

        <div className="information__image-box">
          {/* <img src="#" alt="crypto currency image" /> */}
        </div>
      </section>

      <section className="carousel">
        <h2 className="carousel__title">Follow Our Instagram Page</h2>
        <div className="carousel__container">
          <p>Image Carousel Will Go Here</p>
        </div>
      </section>
    </>
  );
}
