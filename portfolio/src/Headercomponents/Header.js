import React from "react";
import "./Header.css";
import Info from '@mui/icons-material/Info';
import InstagramIcon from '@mui/icons-material/Instagram';
import AccountTreeIcon from '@mui/icons-material//AccountTree';
import Contact from '@mui/icons-material//ContactEmergency';
function Header() {
  const scrollToTop = () => {
    window.scrollTo({
      top: (0,0),
      behavior: 'auto', 
    });
  };
  return (
    <div className="sidebar shadow-sm  mb-5 bg-body-blue rounded  text-white">
      <div className="title px-4 shadow-md bg-body-white">
        <h1>Avinash</h1>
      </div>
      <div className="navbars text-white">
        <ul>
          <a className="text-decoration-none text-justify focus " onClick={ scrollToTop}><li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-home"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg><span className="m-3">Home</span> </li></a>
          <a href="#about" className="text-decoration-none text-white"><li className="nav-link"><Info/> <span  className="m-3">About</span ></li></a>
          <a href="#projects" className="text-decoration-none text-white"><li><AccountTreeIcon/><span  className="m-3">Projects</span></li></a>
          <a href="#social" className="text-decoration-none text-white"><li><InstagramIcon/><span  className="m-3">Social</span></li></a>
          <a href="#contact" className="text-decoration-none text-white"><li><Contact></Contact><span  className="m-3">Contact</span></li></a>
        </ul>
      </div>
    </div>
  );
}

export default Header;
