import React from "react";
import "./HeaderComponent.scss";

export default function HeaderComponent() {
  return (
    <>
      <header>
        <nav className="nav">
          <div className="nav__container">
            <div className="nav__container-left">
              <p className="nav__wordmark">CryptoChat</p>
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
      </header>
    </>
  );
}
