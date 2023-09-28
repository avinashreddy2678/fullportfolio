import React from "react";
import "./App.css";
import Header from "./Headercomponents/Header";
import Home from "./Homecompnents/Home";
import About from "./About/About";
import Projects from "./Projects/Projects";
import Social from "./Social/Social";

function App() {
  return (
    <div className="app">
      <Header />
      <Home />
      <div className="scroll">
        <About />
        <Projects />
        <Social />
      </div>
    </div>
  );
}

export default App;
