import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./TopicsComponent.scss";

const TopicsComponent = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/v1")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTopics(data);
      });
  }, []);
  return (
    <div className="topics">
      <h1 className="topics__head"> ChatTopics</h1>
      <div className="topics__container">
        {topics.length &&
          topics.map((i) => (
            <div className="topics__item">
              <h2 className="topics__titles">{i.title}</h2>
              <p className="topics__text">{i.description}</p>
              <Link to={`/topic/${i.id}`}>View more</Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default TopicsComponent;
