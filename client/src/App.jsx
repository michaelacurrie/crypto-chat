import Home from "./pages/HomePage/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Faq from "./pages/Faq";
import Topics from "./pages/Topics";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/topics" element={<Topics />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
