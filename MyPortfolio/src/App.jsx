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
      <div className="bg-gradient-to-r from-slate-800 via-slate-900 to-black min-h-screen overflow-x-hidden pt-16">
        <Router>
          <Layout />
          <Home />
          <About />
          <Project />
          <Services />
          <Contact />
        </Router>
      </div>
    </>
  );
}

export default App;
