import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import { toast } from "react-toastify";
import "./ChatComponent.scss";
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
    <section className="chat">
      <div className="chat__container">
        <div className="chat__header">CryptoChat</div>
        <div className="chat__box">
          {chat.length &&
            chat.map((i, index) => (
              <div className="chat__box-group">
                <div className="chat__box-avatar">
                  <img
                    src="https://www.seekpng.com/png/full/115-1150053_avatar-png-transparent-png-royalty-free-default-user.png"
                    alt=""
                  />
                </div>
                <div className="chat__box-message" key={index}>
                  <div className="chat__box-message-group">
                    <p className="chat__username">{i.username}</p>
                    <p className="chat__time">
                      {new Date().toLocaleTimeString()}
                    </p>
                  </div>
                  <p className="chat__message">{i.message}</p>
                </div>
              </div>
            ))}
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter message"
            onChange={(e) => setChatMessage(e.target.value)}
          />
          <button>send</button>
        </form>
      </div>
    </section>
  );
};

export default ChatComponent;
