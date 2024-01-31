import React, { useState } from "react";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import "./social.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import Twitter from "@mui/icons-material/Twitter";
import Github from "@mui/icons-material/GitHub";
import Linkedin from "@mui/icons-material/LinkedIn";
import SocialCard from "./SocailCard";
import { Card } from "../UI/TechUI";
function Social() {

  const socialdata=[
    {
      name:"Github",
      icon:Github,
      link:"https://github.com/avinashreddy2678",
      title:"avinashreddy2678"
    },
    {
      name:"Instagram",
      icon:InstagramIcon,
      link:"https://www.instagram.com/avinashreddy.2689/",
      title:"avinashreddy.2689"
    },
    {
      name:"Twitter",
      icon:Twitter,
      link:"https://www.Twitter.com/avinashreddy.2689/",
      title:"Avinash Mamidi"
    },
    {
      name:"Linkedin",
      icon:Linkedin,
      link:"https://www.linkedin.com/in/avinash-mamidi-2687782i/",
      title:"Avinash Mamidi"
    }
  ]
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
        <div className="lg:py-28 py-16 text-white">
        <h1 className="text-gray-500">Connect with Me</h1>
          <Card className="mt-4">
            <div>
              <div className="grid sm:grid md:grid-cols-2 lg:grid-cols-2 gap-6">
                {
                  socialdata.map((item)=>(
                    <SocialCard item={item}/>
                  ))
                }
              </div>
            </div>
          </Card>
          
        </div>
        <div className="py-2 text-[#2a2b3f]">
          <p>
            @ 2023 <span>-</span>. All Rights Reserved.
          </p>
        </div>
      </div>
      
    </div>
  );
}

export default Social;
