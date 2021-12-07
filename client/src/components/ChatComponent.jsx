import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import { toast } from "react-toastify";
import io from "socket.io-client";
const socket = io("http://localhost:8080");
const ChatComponent = () => {
  const { roomName } = useParams();
  const [chatMessage, setChatMessage] = useState("");
  const [username, setUsername] = useState("Anonymous");
  const [chat, setChat] = useState([]);
  const [toggleMessageSent, setTogglemessageSent] = useState(false);
  const socketRef = useRef();
  // const socket = io("http://localhost:8080");
  let tempMessages = [];

  useEffect(() => {
    // socket = io("http://localhost:8080");
    socket.on("chat", (data) => {
      tempMessages = [...tempMessages, data];
      localStorage.setItem("messages", JSON.stringify(data));
      // setTogglemessageSent(!toggleMessageSent);
      setChat([...chat, data]);
    });

    socket.on("botMessage", (data) => {
      toast.info(data);
    });
  }, [toggleMessageSent, chat]);

  // useEffect(() => {
  //   const temp = JSON.parse(localStorage.getItem("messages"));
  //   setChat([...chat, temp]);
  //   console.log(chat, "ontoggle");
  // }, [toggleMessageSent]);

  useEffect(() => {
    socket.emit("joinRoom", { username, room: roomName });
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    setTogglemessageSent(!toggleMessageSent);
    socket.emit("chat", { username, message: chatMessage }); //dispatch chat event along with the data to the server
  }

  return (
    <section>
      <div>
        <div>
          {chat.length &&
            chat.map((i, index) => (
              <div key={index}>
                <p>username: {i.username}</p>
                <p>message: {i.message}</p>
              </div>
            ))}
        </div>
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={(e) => setChatMessage(e.target.value)} />
          <button>send</button>
        </form>
      </div>
    </section>
  );
};

export default ChatComponent;
