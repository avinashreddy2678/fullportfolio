import React, { useEffect, useState } from "react";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import Project from "../../Projectindividual/Project";
import "./Projects.css";
import axios from "axios";
import ProjectOne from "../../Projectindividual/newProject";
function Projects() {
  useEffect(() => {
    document.title = `Projects`;
  }, []);

  const [allprojects, setprojects] = useState([]);
  // console.log(allprojects[0]);
  // // data fromthe database only porjects related
  // useEffect(() => {
  //   const fetch = async () => {
  //     const res = await axios.get("http://localhost:5001/");
  //     setprojects(res.data);
  //   };
  //   fetch();
  // }, []);

  const next = [
    {
      imageurl1: "./assets/ai2.png",
      imageurl2: "./assets/ai1.png",
      imageurl3: "./assets/ai3.png",
      imageurl4: "./assets/ai4.png",
      github: "https://github.com/avinashreddy2678/AIAssistant",
      live: "https://dub.sh/AI-assistant",
      name: "AI_Assistant",
      overview:
        "Developed a dynamic web application using Next.js, Tailwind CSS, and Clerk authentication, integrating OpenAI for advanced natural language processing. Key features include real-time chat with the AI model and image generation based on user prompts. Achieved seamless user interaction, responsive design, and secure authentication.",
    },
    {
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

  const data = [
    {
      github: "https://github.com/avinashreddy2678/Receipe/tree/main/fooddoor",
      imageurl1: "./assets/recepie1.png",
      imageurl2: "./assets/recepie2.png",
      imageurl3: "./assets/recepie3.png",
      imageurl4: "./assets/recepie4.png",
      name: "Receipe_book",
      overview:
        "A Dynamic web application built with using Technologies MERN. Can help for Making new Receipes and to post them in public .The Logged in user can write,Like,Save and view others Receipes the others added ",
      live: "https://receipebook26.netlify.app",
    },
    {
      imageurl1: "./assets/day1.png",
      imageurl2: "./assets/day2.png",
      imageurl3: "./assets/day3.png",
      imageurl4: "./assets/day4.png",
      github: "https://github.com/avinashreddy2678/day_blogger",
      name: "Daily-Blogs",
      overview:
        "A Dynamic web application built with using Technologies MERN (mongodb Express.js React.js Node.js) .In This we have Features Like User Authentication, Create, Edit & Delete Postsand Find the Posts posted by the User Who Logged in.",
      live: "https://dayblogsmern26.netlify.app",
    },
    {
      imageurl1: "./assets/movie1.png",
      imageurl2: "./assets/movie2.png",
      imageurl3: "./assets/movie3.png",
      imageurl4: "./assets/movie3.png",
      name: "Movie-App",
      github: "https://github.com/avinashreddy2678/Movie-app",
      overview:
        "It is a user-friendly movie app built with React and the Movie Database (TMDb)API.It lets you search a specific movie , filter by genres, and discover trending, toprated, and upcoming movies.Click on movie images to access detailed descriptions and enjoy a seamlessmovie-watching experience.",
      live: "https://cinemate1001clone.netlify.app/",
    },
    {
      imageurl1: "./assets/three.png",
      imageurl2: "./assets/threee.png",
      imageurl3: "./assets/three.png",
      imageurl4: "./assets/threee.png",
      name: "Random-Quotes",
      overview:
        "Created a Random Quote Generator website with dynamic background color changes using React.js , fetching quotes from a public API..",
      live: "https://randomquotebyavin.netlify.app/",
    },
  ];

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
      <p className="w-100 mt-5 text-3xl pl-12"> Next.Js</p>
      <div className="singleproject my-2">
        <>
          {next.map((item, index) => (
            <Project item={item} index={index} />
          ))}
        </>
      </div>
      <p className="w-100 mt-5 text-3xl pl-12">MERN</p>
      <div className="singleproject my-2">
        <>
          {data.map((item, index) => (
            <div key={item.name} className="mt-5">
              <Project item={item} index={index} />
            </div>
          ))}
        </>
      </div>
    </div>
  );
}

export default Projects;
