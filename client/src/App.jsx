import Home from "./pages/HomePage/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Faq from "./pages/Faq";
import Price from "./pages/Price";
import Chat from "./pages/Chat";
import TopicDetailsComponent from "./components/TopicDetailsComponent";
import ChatRoom from "./pages/ChatRoom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/price" element={<Price />} />
          <Route path="/chatRoom" element={<ChatRoom />} />
          <Route path="/chat/:roomName/:userName" element={<Chat />} />
          <Route path="/topic/:id" element={<TopicDetailsComponent />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
