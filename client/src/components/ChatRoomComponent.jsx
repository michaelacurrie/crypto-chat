import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ChatRoomComponent.scss";
import bgImg from "../assets/rocket-pink-bg.jpeg";

const ChatRoomComponent = () => {
  const [roomName, setRoomName] = useState("beginner");
  const [username, setUsername] = useState("Anonymous");

  return (
    <section className="chatRoom">
      <div class="chatRoom__container">
        <div class="chatRoom__box user signinBx">
          <div class="chatRoom__imgBx">
            <img src={bgImg} />
          </div>
          <div class="chatRoom__formBox formBx">
            <form>
              <h2>Join a chat room</h2>
              <select
                name="chatRoom"
                onChange={(e) => setRoomName(e.target.value)}
              >
                <option value="">Select Room</option>
                <option value="beginner">Beginner</option>
                <option value="proffesional">Proffesional</option>
              </select>
              <input
                type="text"
                placeholder="enter username"
                onChange={(e) => setUsername(e.target.value)}
              />
              <Link to={`/chat/${roomName}/${username}`}>Join Chatroom</Link>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatRoomComponent;
