import React, {useState } from "react";
import ContactMailIcon from "@mui/icons-material/ContactMail";

import "./social.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import Twitter from "@mui/icons-material/Twitter";
import Github from "@mui/icons-material/GitHub";
import Linkedin from "@mui/icons-material/LinkedIn";
function Social() {
 
  return (
    <>
      <div
        className="formargine text-white d-flex min-h-[100vh] flex-column align-items-center"
        id="social"
      >
        <div className="header">
        
        <button onClick={()=>window.open('mailto:imavinashreddy777@gmail.com.br>')} className="btn bg-[#0F1035]" ><p className="text-decoration-none text-white px-2"><ContactMailIcon/><span className="px-2 contactinfo">Mail</span></p></button>
      </div>
        <div className="socail-project">
          <h1 className="pt-5">Connect With Me</h1>

          <div className="all-media">
            <button
              className="button btn btn-dark px-3"
              onClick={() => {
                window.open(
                  "https://www.instagram.com/avinashreddy.2689/",
                  "_blank"
                );
              }}
            >
              <InstagramIcon />
            </button>
            <button
              className="button btn btn-dark px-3"
              onClick={() => {
                window.open(
                  "https://www.linkedin.com/in/avinash-mamidi-2687782i/",
                  "_blank"
                );
              }}
            >
              <Linkedin />
            </button>
            <button
              className="button btn btn-dark px-3"
              onClick={() => {
                window.open("https://github.com/avinashreddy2678", "_blank");
              }}
            >
              <Github />
            </button>

            <button
              className="button btn btn-dark px-3"
              onClick={() => {
                window.open("https://twitter.com/Avinash86855738", "_blank");
              }}
            >
              <Twitter />
            </button>
          </div>
        </div>
      </div>
      
      
    </>
  );
}

export default Social;
