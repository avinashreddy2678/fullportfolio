import React from "react";
import SingleProject from "../SingleProject/SingleProject";
import Project from "../Projectindividual/Project";
import './Projects.css'
function Projects() {
  const data = [
    {
      imageurl:
        "./assets/four.png",
      name: "Daily-Blogs",
      overview:"A Dynamic web application built with using Technologies MERN (mongodb Express.js React.js Node.js) .In This we have Features Like User Authentication, Create, Edit & Delete Postsand Find the Posts posted by the User Who Logged in.",
      live:"https://dayblogsmern26.netlify.app"
    },
    {
      imageurl:
        "./assets/one.png",
      name: "Movie-App",
      overview:"It is a user-friendly movie app built with React and the Movie Database (TMDb)API.It lets you search a specific movie , filter by genres, and discover trending, toprated, and upcoming movies.Click on movie images to access detailed descriptions and enjoy a seamlessmovie-watching experience.",
      live:"https://cinemate1001clone.netlify.app/"
    },
    {
      imageurl:
        "./assets/three.png",
      name: "Random-Quotes",
      overview:"Created a Random Quote Generator website with dynamic background color changes using React.js , fetching quotes from a public API..",
      live:"https://randomquotebyavin.netlify.app/"
      
    },
    {
      imageurl:
        "./assets/two.png",
      name: "Food-Findare",
      overview:"A website which lists down food items and allows you to add cart and display theitems in the cart component and remove the items from cart. Using React redux",
      live:"https://foodfindare26.netlify.app"
    },
  ];
  const fronttechdata = [
    {
      imageurl:
        "https://ez-snippet.vercel.app/_next/image?url=%2Ftech%2Ffrontend%2Fhtmlcss.jpeg&w=1920&q=75",
      name: "Html,Css",
    },
    {
      imageurl:
        "data:image/png;base64,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",
      name: "JavaScript",
    },
    {
      imageurl:
        "https://ez-snippet.vercel.app/_next/image?url=%2Ftech%2Ffrontend%2Freactjs.jpg&w=1920&q=75",
      name: "React.js",
    },
  ];
  const backtechdata = [
    {
      imageurl:
        "https://ez-snippet.vercel.app/_next/image?url=%2Ftech%2Fbackend%2Fnodejs.webp&w=1920&q=75",
      name: "Node.js",
    },
    {
      imageurl:
        "https://ez-snippet.vercel.app/_next/image?url=%2Ftech%2Fbackend%2Fexpress.png&w=1920&q=75",
      name: "Express.js",
    },
  ];
  const database = [
    {
      imageurl:
        "https://ez-snippet.vercel.app/_next/image?url=%2Ftech%2Fdatabase%2Fmysql.jpeg&w=1920&q=75",
      name: "MySql",
    },
    {
      imageurl:
        "https://ez-snippet.vercel.app/_next/image?url=%2Ftech%2Fdatabase%2Fmongo.png&w=1920&q=75",
      name: "MongoDB",
    },
  ];
  return (
    <div className="formargine text-white py-3" id="projects">
        <h1 className="d-flex h flex-wrap pt-5 justify-content-center">Projects</h1>
        <div className="singleproject my-2">
          {data.map((item) => (
            <Project item={item} />
          ))}
        </div>



        
        <h1 className="d-flex h  justify-content-center">Front-End</h1>
        <div className="singlepost">
          {fronttechdata.map((item) => (
            <SingleProject item={item} />
          ))}
        </div>
        <h1 className="d-flex h justify-content-center ">Back-End</h1>
        <div className="singlepost">
          {backtechdata.map((item) => (
            <SingleProject item={item} />
          ))}
        </div>
        <h1 className="d-flex h justify-content-center">Databases</h1>
        <div className="singlepost">
          {database.map((item) => (
            <SingleProject item={item} />
          ))}
        </div>
      </div>

  );
}

export default Projects;
