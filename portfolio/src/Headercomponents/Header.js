import React from "react";
import "./Header.css";
import Typewriter from 'typewriter-effect';
import { Home } from "@mui/icons-material";
import Info from '@mui/icons-material/Info';
import InstagramIcon from '@mui/icons-material/Instagram';
import AccountTreeIcon from '@mui/icons-material//AccountTree';
import Contact from '@mui/icons-material//ContactEmergency';
import CodeIcon from '@mui/icons-material/Code';
import { Link } from "react-router-dom";
function Header() {
  const scrollToTop = () => {
    window.scrollTo({
      top: (0,0),
      behavior: 'auto', 
    });
  };
  return (
    <div className="sidebar shadow-sm  mb-5 bg-body-blue rounded  text-gray-700">
      <div className="title px-4 shadow-md  bg-body-white">
        <div className="flex items-center "> 
        <img
                src="./assets/dpp.jpg"
                className="rounded-circle hidden lg:block opacity-25"
                width={"50px"}
                height={"50px"}
                alt=""
              />
          
        <h1 className="text-4xl pl-3">Avinash</h1>
        </div>
        
        


        <p className="text-gray-500 my-3 hidden lg:flex"><Typewriter
  options={{
    strings: ['Front End developer', 'Full Stack developer'],
    autoStart: true,
    loop: true,
  }}
/></p>
      </div>
      <div className="navbars text-gray-500">
        <ul>
          
          <Link to="/" className="text-decoration-none text-justify focus " onClick={ scrollToTop}><li><Home size={"50px"}/><span className="m-3">Home</span> </li></Link>
          <Link to="/Techstack" className="text-decoration-none text-gray-500"><li><CodeIcon/><span  className="m-3">Stack</span></li></Link>
          <Link to="/Projects" className="text-decoration-none text-gray-500"><li><AccountTreeIcon/><span  className="m-3">Projects</span></li></Link>
          <Link to="/Social" className="text-decoration-none text-gray-500"><li><InstagramIcon/><span  className="m-3">Social</span></li></Link>
          <Link to="/Contact" className="text-decoration-none text-gray-500"><li><Contact></Contact><span  className="m-3">Contact</span></li></Link>
        </ul>
      </div>
    </div>
  );
}

export default Header;
