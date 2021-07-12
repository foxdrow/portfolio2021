import React, { Fragment } from "react";
import "./styles/style.scss";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";

function App() {
  return (
    <Fragment>
      <div className="homeSpace">
        <Navbar />
        <Home />
      </div>
      <About />
      <Work />
      <Contact />
    </Fragment>
  );
}
export default App;
