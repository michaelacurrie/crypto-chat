import React from "react";
import HeaderComponent from "../components/HeaderComponent";
import TopicDetailsComponent from "../components/TopicDetailsComponent";
import ChatComponent from "../components/ChatComponent";

const Chat = () => {
  return (
    <div>
      <HeaderComponent useHomeStyle={false} />
      <TopicDetailsComponent />
      <ChatComponent />
    </div>
  );
};

export default Chat;
