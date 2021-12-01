import HeaderComponent from "./components/HeaderComponent";
import Home from "./pages/HomePage/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Home />
      </Router>
    </>
  );
}
export default App;
