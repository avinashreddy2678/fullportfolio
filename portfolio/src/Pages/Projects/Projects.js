import React, { useEffect, useState } from "react";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import "./Projects.css";
import HomeCard from "../Homecompnents/HomeCard";
import { client } from "../../libs/client";

function Projects() {
  useEffect(() => {
    document.title = `Projects`;
  }, []);

const [allprojects,setprojects]=useState([]);
  useEffect(()=>{
    client.fetch(`*[_type=="Project"]{
      name,overview,github,live,imageurl1,TechStack
    }`).then((data)=>setprojects(data)).catch(console.error)
  },[])
  return (
    <div className="formargine text-white " id="projects">
      <div className="header z-[100]">
        <button
          onClick={() => window.open("mailto:imavinashreddy777@gmail.com.br>")}
          className="btn bg-[#0F1035]"
        >
          
          <p className="text-decoration-none text-white px-2">
            <ContactMailIcon />
            <span className="px-2 contactinfo">Mail</span>
          </p>
        </button>
      </div>
      <h1 className="d-flex h flex-wrap justify-content-center">Projects</h1>
      <p className="w-100 mt-5 text-3xl pl-12"> Projects</p>
      <div className="singleproject grid grid-cols-2 my-2">
        <>
          {allprojects.length>0 && allprojects.map((item, index) => (
            <div key={index} className="py-4">
              <HomeCard item={item} />
            </div>
          ))}
        </>
      </div>
     
    </div>
  );
}

export default Projects;
