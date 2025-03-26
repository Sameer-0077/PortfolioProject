import {
  Home,
  About,
  Project,
  Contact,
  Header,
  Services,
} from "./components/index";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Layout from "./Layout";

function App() {
  return (
    <>
      <div className="bg-gradient-to-tr from-blue-500 to-blue-200 min-h-screen">
        <Router>
          <Layout />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
