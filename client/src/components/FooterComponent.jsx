import React from "react";
import "./FooterComponent.scss";

export default function FooterComponent() {
  return (
    <>
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
            <ul>
              <li>Location: Vancouver,BC</li>
              <li>Email:michael@cryptochat.com</li>
              <li>Toll-Free:+1(800)-604-932-1212</li>
            </ul>
          </div>

          <div className="footer__privacy">
            <h4 className="footer__privacy-title">Other</h4>
            <ul className="footer__privacy-list">
              <li className="footer__privacy-item"> Newsroom</li>
              <li className="footer__privacy-item"> Investors</li>
              <li className="footer__privacy-item"> Events</li>
              <li className="footer__privacy-item"> Privacy</li>
              <li className="footer__privacy-item"> Ethics & Compliance</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
