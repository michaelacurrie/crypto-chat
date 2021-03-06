import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { data } from "../data";
import { useState } from "react";
import "./FaqComponent.scss";
export default function FaqComponent() {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };

  return (
    <>
      <div className="faq">
        <div className="faq__accordian">
          {data.map((item, i) => (
            <div className="faq__item">
              <div className="faq__title" onClick={() => toggle(i)}>
                <h2>{item.question}</h2>
                <span>{selected === i ? "-" : "+"}</span>
              </div>
              <div
                className={selected === i ? "faq__answer-show" : "faq__answer"}
              >
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
