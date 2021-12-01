import React from "react";

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
