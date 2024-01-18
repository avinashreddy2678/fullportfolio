import React, { useEffect } from "react";
import "./Home.css";

import { useNavigate } from "react-router-dom";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import About from "../../About/About";
import DownloadIcon from "@mui/icons-material/Download";
import HomeCard from "./HomeCard";
import HomeTech from "./HomeTech";
import Marquee from "react-fast-marquee";
import GitHub from "@mui/icons-material/GitHub";
import LinkedIn from "@mui/icons-material/LinkedIn";
// import axios from "axios";
// import { baseurl } from "../../helper";
function Home() {
  
  const router = useNavigate();
  useEffect(()=>{
    document.title=`Avinash's`
  },[]);
  // useEffect(()=>{
  //   const fetch=async()=>{
  //       const res= await axios.get('http://localhost:5001/');
  //       // console.log(res);
  //   }
  //   fetch();
  // },[])
  const data = [
    {
      createdAt: "12:00",
      imageurl1: "./assets/ai2.png",
      imageurl2: "./assets/ai1.png",
      imageurl3: "./assets/ai3.png",
      imageurl4: "./assets/ai4.png",
      techstack: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRAusOjZJF_V7_0HtgK9QjLgB3J2Jn3KOQjQ&usqp=CAU",
        "https://cdn.iconscout.com/icon/premium/png-512-thumb/react-2752089-2284906.png?f=webp&w=256",
        "https://yt3.googleusercontent.com/UqT_vCkJIn1P2fH1pchr6lbe3xeEekY61h4bUpJkVuityqKOEtUYcNy3pLiJ5OKdj4uKA81FWE8=s900-c-k-c0x00ffffff-no-rj",
        "https://testrigor.com/wp-content/uploads/2023/04/nextjs-logo-square.png",
        "https://res.cloudinary.com/practicaldev/image/fetch/s--6ebjy0LI--/c_imagga_scale,f_auto,fl_progressive,h_1080,q_auto,w_1080/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/dxy1c2bvl6odeo52dodk.jpg",
      ],
      github: "https://github.com/avinashreddy2678/AIAssistant",
      live: "https://dub.sh/AI-assistant",
      name: "AI_Assistant",
      overview:
        "Developed a dynamic web application using Next.js, Tailwind CSS, and Clerk authentication, integrating OpenAI for advanced natural language processing. Key features include real-time chat with the AI model and image generation based on user prompts. Achieved seamless user interaction, responsive design, and secure authentication.",
    },
    {
      createdAt: "11",
      techstack: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRAusOjZJF_V7_0HtgK9QjLgB3J2Jn3KOQjQ&usqp=CAU",
        "https://yt3.googleusercontent.com/UqT_vCkJIn1P2fH1pchr6lbe3xeEekY61h4bUpJkVuityqKOEtUYcNy3pLiJ5OKdj4uKA81FWE8=s900-c-k-c0x00ffffff-no-rj",
        "https://testrigor.com/wp-content/uploads/2023/04/nextjs-logo-square.png",
        "https://res.cloudinary.com/practicaldev/image/fetch/s--6ebjy0LI--/c_imagga_scale,f_auto,fl_progressive,h_1080,q_auto,w_1080/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/dxy1c2bvl6odeo52dodk.jpg",
      ],
      imageurl1: "./assets/tweet1.png",
      imageurl2: "./assets/tweet2.png",
      imageurl3: "./assets/tweet3.png",
      imageurl4: "./assets/tweet4.png",
      github: "https://github.com/avinashreddy2678/newtwitter",
      live: "https://dub.sh/tweetnow",
      name: "Tweet_Now",
      overview:
        "Tweet_Now is a simplified Twitter clone built using Next.js, a React framework for building server-rendered React applications. The project aims to replicate some of the core features of Twitter, allowing users to post tweets, follow other users, and view a of tweets from people",
    },
  ];
  const sampletech = [
    {
      imageurl: "https://testrigor.com/wp-content/uploads/2023/04/nextjs-logo-square.png",
      name: "Next.js",
    },
    {
      imageurl:
        "https://cdn.iconscout.com/icon/premium/png-512-thumb/react-2752089-2284906.png?f=webp&w=256",
      name: "React.js",
    },
    {
      imageurl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRAusOjZJF_V7_0HtgK9QjLgB3J2Jn3KOQjQ&usqp=CAU",
      name: "MongoDb",
    },
    {
      imageurl: "https://res.cloudinary.com/practicaldev/image/fetch/s--6ebjy0LI--/c_imagga_scale,f_auto,fl_progressive,h_1080,q_auto,w_1080/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/dxy1c2bvl6odeo52dodk.jpg",
      name: "Tailwind css",
    },
  ];
  return (
    <div className="min-h-[100vh]">
      <div className="formargine">
        <div className="header">
          <button
            onClick={() => window.open("mailto:imavinashreddy777@gmail.com")}
            className="btn bg-[#14131a]"
          >
            <p className="text-decoration-none text-white px-2">
              <ContactMailIcon />
              <span className="px-2 contactinfo">Mail</span>
            </p>
          </button>
        </div>
        <div className="content-below-header">
          <div className="images">
            <div className="img-left">
              <div>
                <img
                  src="./assets/images.jpeg"
                  className="rounded-pill bg-contain opacity-20"
                  width={"100px"}
                  height={"100px"}
                  alt=""
                />
              </div>
              <div className="nameall px-3 text-gray-500">
                <h2>Avinash_Reddy</h2>
                <h6 className="name">@avinash</h6>
                
              </div>
              
            </div>
            <div className="img-right ">
              <a
                href={"./assets/AvinashMamidi.pdf"}
                className="btn btn-dark px-3 text-gray-100 "
                download={"AvinashMamidi.pdf"}
              >
                <DownloadIcon color="inherit" />

                <span className=" insta-info px-2 text-gray-300">Resume</span>
              </a>
            </div>
          </div>
          <div className="pt-12 hidden lg:block px-24 hover:text-white">
              <button
              className="button btn text-gray-100 px-1"
              onClick={() => {
                window.open("https://github.com/avinashreddy2678", "_blank");
              }}
            >
              <GitHub />
            </button>
            <button
              className="button btn text-gray-300 px-1"
              onClick={() => {
                window.open(
                  "https://www.linkedin.com/in/avinash-mamidi-2687782i/",
                  "_blank"
                );
              }}
            >
              <LinkedIn />
            </button>
              </div>
        </div>
        <About />

        <div className=" m-auto">
          <div className="flex lg:mx-24 mx-3 items-center my-3 justify-between">
            <h4 className="text-white lg:text-2xl text-sm md:text-md ">
              Latest projects...
            </h4>
            <button
              className="btn mr-10 hover:underline lg:text-md text-xs text-white"
              onClick={() => {
                router("/Projects");
              }}
            >
              View All
            </button>
          </div>
          <div className=" lg:flex block lg:justify-evenly">
            {data.map((item, index) => (
              <div key={index + item} className="lg:my-6 my-12">
                <HomeCard item={item} />
              </div>
            ))}
          </div>
        </div>

        <div className="py-3">
          <div className="flex lg:mx-24 mx-3 items-center my-3 justify-between">
            <h4 className="text-gray-300 lg:text-2xl text-sm md:text-md ">
              Tech Stack
            </h4>
            <button
              className="btn text-white  mr-10 hover:underline lg:text-md text-xs "
              onClick={() => {
                router("/TechStack");
              }}
            >
              View All
            </button>
          </div>
          {/* <div className="flex flex-wrap border"> */}
          <div className="pt-3 bg-transparent text-start grid sm:grid lg:grid-cols-2 gap-6">
            {sampletech.map((item, index) => (
              <div key={index} className="mx-12 shadow-lg bg-[#1d1b24]">
                <HomeTech sampletech={item} />
              </div>
            ))}
            {/* </div> */}
          </div>
        </div>
        <div className="min-h-[20vh]  py-12 mx-12 text-black">
          <Marquee className="bg-green-300 font-mono py-2 text-lg">
           Hello, World! doesn't mean addressing the world instead,it signals that U'r a programmer.
          </Marquee>
        </div>
        <div className="text-gray-100 text-center pb-12">@ 2023 -. All Rights Reserved.</div>
      </div>
    </div>
  );
}

export default Home;
