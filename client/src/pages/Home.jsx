import React from "react";

export default function Home() {
  return (
    <>
      <nav className="nav">
        <div className="nav__container">
          <div className="nav__container-left">
            <p>CryptoChat</p>
          </div>

          <div className="nav__container-right">
            <ul className="nav__list">
              <li className="nav__list-item">HOME</li>
              <li className="nav__list-item">CHAT</li>
              <li className="nav__list-item">FAQ</li>
              <li className="nav__list-item">RESOURCES</li>
              <li className="nav__list-item">CONTACT</li>
            </ul>
          </div>
        </div>
      </nav>

      <section className="hero">
        <div className="hero__container">
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
              <input type="email" name="email" id="email" />
              <label for="email">Please provide an email address</label>
              <button className="hero__btn">Register!</button>
            </form>
          </div>
        </div>
      </section>

      <section className="card">
        <h2 className="card__title">Trending Coins</h2>
        <div className="card__container">
          <div className="card__container-one">
            <div className="card__one"></div>
            <div className="card__two"></div>
            <div className="card__three"></div>
          </div>
          <div className="card__container-two">
            <div className="card__four"></div>
            <div className="card__five"></div>
            <div className="card__six"></div>
          </div>
        </div>
      </section>

      <section className="information">
        <div className="information__container">
          <div className="information__crypto-chat">
            <h2 className="information__title">What Is Crypto Chat?</h2>
            <ul className="information__list">
              <li className="information__list-item">Point One </li>
              <li className="information__list-item">Point Two </li>
              <li className="information__list-item">Point Three </li>
              <li className="information__list-item">Point Four </li>
            </ul>
          </div>
        </div>

        <div className="information__image-box">
          <img src="#" alt="crypto currency image" />
        </div>
      </section>

      <section className="carousel">
        <div className="carousel__container">
          <p>Image Carousel Will Go Here</p>
        </div>
      </section>

      <footer className="footer">
        <div className="footer__container">
          <div className="footer__social">
            <h4>Follow Crypto Chat On The Web</h4>
            <div className="footer__social-container">
              <ul className="footer__social-list">
                <li className="footer__social-icons"></li>
                <li className="footer__social-icons"></li>
                <li className="footer__social-icons"></li>
                <li className="footer__social-icons"></li>
              </ul>
            </div>
          </div>

          <div className="footer__details">
            <h4 className="footer__details-title">Details</h4>
            <p>Location: Vancouver,BC</p>
            <p>Email:michael@cryptochat.com</p>
            <p>Toll-Free:+1(800)-604-932-1212</p>
          </div>

          <div className="footer__privacy">
            <h4 className="footer__privacy-title">Other</h4>
            <p> Newsroom</p>
            <p> Investors</p>
            <p> Events</p>
            <p> Privacy</p>
            <p> Ethics & Compliance</p>
          </div>
        </div>
      </footer>
    </>
  );
}
