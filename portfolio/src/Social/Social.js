import React, { useState } from "react";
import ContactMailIcon from "@mui/icons-material/ContactMail";

import "./social.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import Twitter from "@mui/icons-material/Twitter";
import Github from "@mui/icons-material/GitHub";
import Linkedin from "@mui/icons-material/LinkedIn";
function Social() {
  return (
    <div className="min-h-[100vh]">
      <div className="formargine" id="social">
        <div className="header">
          <button
            onClick={() =>
              window.open("mailto:imavinashreddy777@gmail.com.br>")
            }
            className="btn bg-[#0F1035]"
          >
            <p className="text-decoration-none text-white px-2">
              <ContactMailIcon />
              <span className="px-2 contactinfo">Mail</span>
            </p>
          </button>
        </div>
        <div className="lg:py-28 py-16"></div>
      </div>
    </div>
  );
}

export default Social;
