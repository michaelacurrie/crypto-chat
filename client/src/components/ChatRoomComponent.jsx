import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ChatRoomComponent = () => {
  const [chatRooms, setChatRooms] = useState([]);
  const [roomName, setRoomName] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/api/v1/chatRoom")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setChatRooms(data);
      });
  }, []);
  return (
    <div>
      <h1>Chat rooms</h1>

      <div>
        <select name="chatRoom" onChange={(e) => setRoomName(e.target.value)}>
          {chatRooms.map((i) => (
            <option value={i.roomName}>{i.roomName}</option>
          ))}
        </select>
        <input type="text" placeholder="enter username" />
        <Link to={`/chat/${roomName}`}>Join Chatroom</Link>
      </div>
    </div>
  );
};

export default ChatRoomComponent;
