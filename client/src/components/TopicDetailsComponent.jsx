import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

toast.configure();

export default function TopicDetailsComponent() {
  const [topic, setTopic] = useState({});

  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:8080/api/v1/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (!data.error) return setTopic(data);
        toast.success("Topic id doesn't exist, redirecting...");
      });
  }, []);
  return (
    <div>
      <h1>{topic.title}</h1>
      <h1>{topic.description}</h1>
    </div>
  );
}
