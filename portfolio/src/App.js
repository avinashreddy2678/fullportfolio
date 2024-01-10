import React from "react";
import "./App.css";
import Header from "./Headercomponents/Header";
import {Routes} from 'react-router-dom';
import {Route} from 'react-router-dom'
import Home from "./Homecompnents/Home";
import About from "./About/About";
import Projects from "./Projects/Projects";
import Social from "./Social/Social";
import Techstack from "./TechStack/Techstack";
import Contact from "./Contact/Contact";

function App() {
  return (
    <div className="app">
      
      <Header />
      <Routes>
          {/* <Route path="/" Component={<Home/>}>Home</Route> */}
          <Route path="/" element={<Home/>}/>
          <Route path="/Techstack" element={<Techstack/>}/>
          <Route path="/Projects" element={<Projects/>}/>
          <Route path="/Social" element={<Social/>}/>
          <Route path="/Contact" element={<Contact/>}/>
        </Routes>
    </div>
  );
}

export default App;
