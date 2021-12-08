import React from "react";
import { Link } from "react-router-dom";
import "./HeaderComponent.scss";
import styles from "./header.module.scss";

export default function HeaderComponent(props) {
  const { useHomeStyle } = props;
  const componentStyles = {
    nav: {
      paddingTop: "0",
      boxShadow: "0 1px 12px -5px #0000004f",
    },
    p: {
      color: "#000",
    },
    a: {
      color: "#000",
    },
    navContainerRight: {
      background: "transparent",
    },
  };
  return (
    <>
      <header>
        <nav className={`${!useHomeStyle && styles.nav} nav`}>
          <div className="nav__container">
            <div className="nav__container-left">
              <Link
                to="/"
                className="nav__wordmark"
                style={!useHomeStyle ? componentStyles.p : {}}
              >
                CryptoChat
              </Link>
            </div>

            <div
              className="nav__container-right"
              style={!useHomeStyle ? componentStyles.navContainerRight : {}}
            >
              <ul className="nav__list">
                <li className="nav__list-item">
                  <Link to="/" style={!useHomeStyle ? componentStyles.a : {}}>
                    HOME
                  </Link>
                </li>
                <li className="nav__list-item">
                  <Link
                    to="/chatRoom"
                    style={!useHomeStyle ? componentStyles.a : {}}
                  >
                    CHAT
                  </Link>
                </li>
                <li className="nav__list-item">
                  <Link
                    to="/faq"
                    style={!useHomeStyle ? componentStyles.a : {}}
                  >
                    FAQ{" "}
                  </Link>
                </li>
                <li className="nav__list-item">
                  <Link
                    to="/price"
                    style={!useHomeStyle ? componentStyles.a : {}}
                  >
                    PRICE
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
