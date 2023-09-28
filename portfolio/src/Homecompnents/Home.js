import React from "react";
import "./Home.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import ContactMailIcon from "@mui/icons-material/ContactMail";

function Home() {
  return (
    <div>
      <div className="formargine">
        <div className="header">
          <button className="btn btn-success" ><a href="#contact" className="text-decoration-none text-white px-2"><ContactMailIcon/><span className="px-2 contactinfo">Contact</span></a></button>
        </div>
        <div className="content-below-header"> 
        <div className="images">
          <div className="img-left">
            <div>
              <img
                src="./assets/dpp.jpg"
                className="rounded-circle"
                width={"100px"}
                height={"100px"}
                alt=""
              />
            </div>
            <div className="nameall px-3 text-white">
              <h2>Avinash_Reddy</h2>
              <h6 className="name">@avinash</h6>
            </div>
          </div>
          <div className="img-right">
          <button className="btn btn-dark px-3" onClick={() => { window.open('https://www.instagram.com/avinashreddy.2689/', '_blank'); }}>
              <InstagramIcon />
              <span className=" insta-info px-2">Instagram</span>
            </button>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Home;
