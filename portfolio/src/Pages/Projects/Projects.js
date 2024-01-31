import React, { useEffect } from "react";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import "./Projects.css";
import HomeCard from "../Homecompnents/HomeCard";
function Projects() {
  useEffect(() => {
    document.title = `Projects`;
  }, []);

  const next = [
    {
      createdAt: "12:00",
      techstack: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRAusOjZJF_V7_0HtgK9QjLgB3J2Jn3KOQjQ&usqp=CAU",
        "https://cdn.iconscout.com/icon/premium/png-512-thumb/react-2752089-2284906.png?f=webp&w=256",
        "https://yt3.googleusercontent.com/UqT_vCkJIn1P2fH1pchr6lbe3xeEekY61h4bUpJkVuityqKOEtUYcNy3pLiJ5OKdj4uKA81FWE8=s900-c-k-c0x00ffffff-no-rj",
        "https://testrigor.com/wp-content/uploads/2023/04/nextjs-logo-square.png",
        "https://res.cloudinary.com/practicaldev/image/fetch/s--6ebjy0LI--/c_imagga_scale,f_auto,fl_progressive,h_1080,q_auto,w_1080/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/dxy1c2bvl6odeo52dodk.jpg",
      ],
      imageurl1: "./assets/ai2.png",
      imageurl2: "./assets/ai1.png",
      imageurl3: "./assets/ai3.png",
      imageurl4: "./assets/ai4.png",
      github: "https://github.com/avinashreddy2678/AIAssistant",
      live: "https://ai-assistant26.vercel.app/",
      name: "AI_Assistant",
      overview:
        "Developed a dynamic web application using Next.js, Tailwind CSS, and Clerk authentication, integrating OpenAI for advanced natural language processing. Key features include real-time chat with the AI model and image generation based on user prompts. Achieved seamless user interaction, responsive design, and secure authentication.",
    },
    {
      techstack: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRAusOjZJF_V7_0HtgK9QjLgB3J2Jn3KOQjQ&usqp=CAU",
        "https://cdn.iconscout.com/icon/premium/png-512-thumb/react-2752089-2284906.png?f=webp&w=256",
        "https://yt3.googleusercontent.com/UqT_vCkJIn1P2fH1pchr6lbe3xeEekY61h4bUpJkVuityqKOEtUYcNy3pLiJ5OKdj4uKA81FWE8=s900-c-k-c0x00ffffff-no-rj",
        "https://testrigor.com/wp-content/uploads/2023/04/nextjs-logo-square.png",
        "https://res.cloudinary.com/practicaldev/image/fetch/s--6ebjy0LI--/c_imagga_scale,f_auto,fl_progressive,h_1080,q_auto,w_1080/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/dxy1c2bvl6odeo52dodk.jpg",
      ],
      imageurl1: "./assets/tweet1.png",
      imageurl2: "./assets/tweet2.png",
      imageurl3: "./assets/tweet3.png",
      imageurl4: "./assets/tweet4.png",
      github: "https://github.com/avinashreddy2678/newtwitter",
      live: "https://tweetnow226.vercel.app/",
      name: "Tweet_Now",
      overview:
        "Tweet_Now is a simplified Twitter clone built using Next.js, a React framework for building server-rendered React applications. The project aims to replicate some of the core features of Twitter, allowing users to post tweets, follow other users, and view a of tweets from people",
    },
  ];

  const data = [
    {
      createdAt: "12:00",
      github: "https://github.com/avinashreddy2678/Receipe/tree/main/fooddoor",
      imageurl1: "./assets/recepie1.png",
      imageurl2: "./assets/recepie2.png",
      imageurl3: "./assets/recepie3.png",
      imageurl4: "./assets/recepie4.png",
      name: "Receipe_book",
      techstack: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRAusOjZJF_V7_0HtgK9QjLgB3J2Jn3KOQjQ&usqp=CAU",
        "https://cdn.iconscout.com/icon/premium/png-512-thumb/react-2752089-2284906.png?f=webp&w=256",
        "https://yt3.googleusercontent.com/UqT_vCkJIn1P2fH1pchr6lbe3xeEekY61h4bUpJkVuityqKOEtUYcNy3pLiJ5OKdj4uKA81FWE8=s900-c-k-c0x00ffffff-no-rj",
        "https://testrigor.com/wp-content/uploads/2023/04/nextjs-logo-square.png",
        "https://res.cloudinary.com/practicaldev/image/fetch/s--6ebjy0LI--/c_imagga_scale,f_auto,fl_progressive,h_1080,q_auto,w_1080/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/dxy1c2bvl6odeo52dodk.jpg",
      ],
      overview:
        "A Dynamic web application built with using Technologies MERN. Can help for Making new Receipes and to post them in public .The Logged in user can write,Like,Save and view others Receipes the others added ",
      live: "https://receipebook26.netlify.app",
    },
    {
      createdAt: "12:00",
      imageurl1: "./assets/day1.png",
      imageurl2: "./assets/day2.png",
      imageurl3: "./assets/day3.png",
      imageurl4: "./assets/day4.png",
      techstack: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRAusOjZJF_V7_0HtgK9QjLgB3J2Jn3KOQjQ&usqp=CAU",
        "https://cdn.iconscout.com/icon/premium/png-512-thumb/react-2752089-2284906.png?f=webp&w=256",
        "https://yt3.googleusercontent.com/UqT_vCkJIn1P2fH1pchr6lbe3xeEekY61h4bUpJkVuityqKOEtUYcNy3pLiJ5OKdj4uKA81FWE8=s900-c-k-c0x00ffffff-no-rj",
        "https://testrigor.com/wp-content/uploads/2023/04/nextjs-logo-square.png",
        "https://res.cloudinary.com/practicaldev/image/fetch/s--6ebjy0LI--/c_imagga_scale,f_auto,fl_progressive,h_1080,q_auto,w_1080/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/dxy1c2bvl6odeo52dodk.jpg",
      ],
      github: "https://github.com/avinashreddy2678/day_blogger",
      name: "Daily-Blogs",
      overview:
        "A Dynamic web application built with using Technologies MERN (mongodb Express.js React.js Node.js) .In This we have Features Like User Authentication, Create, Edit & Delete Postsand Find the Posts posted by the User Who Logged in.",
      live: "https://dayblogsmern26.netlify.app",
    },
    {
      createdAt: "12:00",
      imageurl1: "./assets/movie1.png",
      imageurl2: "./assets/movie2.png",
      imageurl3: "./assets/movie3.png",
      imageurl4: "./assets/movie3.png",
      techstack: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRAusOjZJF_V7_0HtgK9QjLgB3J2Jn3KOQjQ&usqp=CAU",
        "https://cdn.iconscout.com/icon/premium/png-512-thumb/react-2752089-2284906.png?f=webp&w=256",
        "https://yt3.googleusercontent.com/UqT_vCkJIn1P2fH1pchr6lbe3xeEekY61h4bUpJkVuityqKOEtUYcNy3pLiJ5OKdj4uKA81FWE8=s900-c-k-c0x00ffffff-no-rj",
        "https://testrigor.com/wp-content/uploads/2023/04/nextjs-logo-square.png",
        "https://res.cloudinary.com/practicaldev/image/fetch/s--6ebjy0LI--/c_imagga_scale,f_auto,fl_progressive,h_1080,q_auto,w_1080/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/dxy1c2bvl6odeo52dodk.jpg",
      ],
      name: "Movie-App",
      github: "https://github.com/avinashreddy2678/Movie-app",
      overview:
        "It is a user-friendly movie app built with React and the Movie Database (TMDb)API.It lets you search a specific movie , filter by genres, and discover trending, toprated, and upcoming movies.Click on movie images to access detailed descriptions and enjoy a seamlessmovie-watching experience.",
      live: "https://cinemate1001clone.netlify.app/",
    },
    {
      createdAt: "12:00",
      imageurl1: "./assets/three.png",
      imageurl2: "./assets/threee.png",
      imageurl3: "./assets/three.png",
      imageurl4: "./assets/threee.png",
      name: "Random-Quotes",
      techstack: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRAusOjZJF_V7_0HtgK9QjLgB3J2Jn3KOQjQ&usqp=CAU",
        "https://cdn.iconscout.com/icon/premium/png-512-thumb/react-2752089-2284906.png?f=webp&w=256",
        "https://yt3.googleusercontent.com/UqT_vCkJIn1P2fH1pchr6lbe3xeEekY61h4bUpJkVuityqKOEtUYcNy3pLiJ5OKdj4uKA81FWE8=s900-c-k-c0x00ffffff-no-rj",
        "https://testrigor.com/wp-content/uploads/2023/04/nextjs-logo-square.png",
        "https://res.cloudinary.com/practicaldev/image/fetch/s--6ebjy0LI--/c_imagga_scale,f_auto,fl_progressive,h_1080,q_auto,w_1080/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/dxy1c2bvl6odeo52dodk.jpg",
      ],
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
      <div className="singleproject grid grid-cols-2 my-2">
        <>
          {next.map((item, index) => (
            <div className="py-4">
              <HomeCard item={item} />
            </div>
          ))}
        </>
      </div>
      <p className="w-100 mt-5 text-3xl pl-12">MERN</p>
      <div className="singleproject grid grid-cols-2 my-2">
        {data.map((item, index) => (
          <div className="py-5">
            <HomeCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
