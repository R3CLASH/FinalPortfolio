import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
