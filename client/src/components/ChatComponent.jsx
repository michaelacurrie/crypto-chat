import React, { useEffect, useState } from "react";
import io from "socket.io-client";

const ChatComponent = () => {
  const [chatMessage, setChatMessage] = useState("");
  const [username, setUsername] = useState("");
  const [chat, setChat] = useState([]);
  const socket = io("http://localhost:8080");

  useEffect(() => {
    socket.on("connect", () => {
      // join socket connection from server
      console.log(socket.id);
      socket.on("chat", (data) => {
        console.log(data);
        setChat([...chat, data]);
      });
    });
  }, [chat]);

  function handleSubmit(e) {
    e.preventDefault();
    socket.emit("chat", { username, message: chatMessage });
  }
  return (
    <section>
      <div>
        <div>
          {chat.length &&
            chat.map((i) => (
              <>
                <p>username: {i.username}</p>
                <p>message: {i.message}</p>
              </>
            ))}
        </div>
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={(e) => setChatMessage(e.target.value)} />
          <input
            type="text"
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <button>send</button>
        </form>
      </div>
    </section>
  );
};

export default ChatComponent;
