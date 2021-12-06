import Home from "./pages/HomePage/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Faq from "./pages/Faq";
import Price from "./pages/Price";
import Chat from "./pages/Chat";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/price" element={<Price />} />
          <Route path="/chat/:id" element={<Chat />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
