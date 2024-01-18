import React, { useEffect } from "react";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import TechCard from "./TechCard";
import { Card } from "../..//UI/TechUI";
import Marquee from "react-fast-marquee";

const Techstack = () => {
  
  useEffect(()=>{
    document.title=`Tech`
  },[]);
  const fronttechdata = [
    {
      imageurl:
        "https://ez-snippet.vercel.app/_next/image?url=%2Ftech%2Ffrontend%2Fhtmlcss.jpeg&w=1920&q=75",
      name: "Html,Css",
      rating:70
    },
    {
      imageurl:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/768px-JavaScript-logo.png",
       name: "JavaScript",
      rating:80
    },
    {
      imageurl:
      "https://cdn.iconscout.com/icon/premium/png-512-thumb/react-2752089-2284906.png?f=webp&w=256",
      name: "React.js",
      rating:70
    },
    {
      imageurl:
      "https://image.pngaaa.com/95/5100095-middle.png",
      name: "Tailwind",
      rating:80
    },
    {
      imageurl: "https://testrigor.com/wp-content/uploads/2023/04/nextjs-logo-square.png",
      name: "Next.js",
      rating:68
    },
  ];

  const backtechdata = [
    {
      imageurl:
        "https://ez-snippet.vercel.app/_next/image?url=%2Ftech%2Fbackend%2Fnodejs.webp&w=1920&q=75",
      name: "Node.js",
      rating:60
    },
    {
      imageurl:
        "https://d2ooyrflu7lhqd.cloudfront.net/Express_JS_390db1e6f2.jpeg",
      name: "Express.js",
      rating:70
    },
  ];
  const database = [
    {
      imageurl:
        "https://ez-snippet.vercel.app/_next/image?url=%2Ftech%2Fdatabase%2Fmysql.jpeg&w=1920&q=75",
      name: "MySql",
      rating:75
    },
    {
      imageurl:
        "https://ez-snippet.vercel.app/_next/image?url=%2Ftech%2Fdatabase%2Fmongo.png&w=1920&q=75",
      name: "MongoDB",
      rating:70
    },
  ];
  const programming = [
    {
      imageurl:
        "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/181_Java_logo_logos-512.png",
      name: "Java (Core)",
      rating: 76,
    },
   
    {
      imageurl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png",
      name: "TypeScript",
      rating: 73,
    },
  ];
  return (
    <div className="min-h-[100vh]">
      <div className="formargine" id="techstack">
        <div className="header">
          <button
            onClick={() =>
              window.open("mailto:imavinashreddy777@gmail.com.br>")
            }
            className="btn bg-[#0F1035]"
          >
            <a href="#contact" className="text-decoration-none text-gray-500 px-2">
              <ContactMailIcon />
              <span className="px-2 contactinfo">Mail</span>
            </a>
          </button>
        </div>
        <div className="lg:py-28 py-16">
          <div className="text-4xl pb-6 font-bold text-gray-500">Coding Skills</div>
          {/* prgoramming langugae */}
          <Card>
            <div>
                <div className="text-xl ml-4 font-bold text-gray-500">
                Programming Languages
              </div>
              <div className="grid sm:grid md:grid-cols-2 lg:grid-cols-2 gap-6">
                {programming.map((item, index) => (
                  <div key={index} className="mx-3 mt-1 my-1">
                    <TechCard item={item} />
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* front end  */}
          <Card className="mt-4 ">
            <div>
              <div className="text-xl ml-4 font-bold text-gray-500">
                Front End
              </div>
              <div className="grid sm:grid md:grid-cols-2 lg:grid-cols-2 gap-6">
                {fronttechdata.map((item, index) => (
                  <div key={index} className="mx-3 mt-1 my-1">
                    <TechCard item={item} />
                  </div>
                ))}
              </div>
            </div>
          </Card>
          {/* back end */}
          <Card className="mt-4">
            <div>
              <div className="text-xl ml-4 font-bold text-gray-500">
                Back End
              </div>
              <div className="grid sm:grid md:grid-cols-2 lg:grid-cols-2 gap-6">
                {backtechdata.map((item, index) => (
                  <div key={index} className="mx-3 mt-1 my-1">
                    <TechCard item={item} />
                  </div>
                ))}
              </div>
            </div>
          </Card>
          {/* databases */}
          <Card className="mt-4">
            <div>
              <div className="text-xl ml-4 font-bold text-gray-500">
               Databases
              </div>
              <div className="grid sm:grid md:grid-cols-2 lg:grid-cols-2 gap-6">
                {database.map((item, index) => (
                  <div key={index} className="mx-3 mt-1 my-1">
                    <TechCard item={item} />
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
        <div className="min-h-[20vh]  py-3 mx-1 text-black">
          <Marquee className="bg-green-300 font-mono py-2 text-lg">
           To be To be To be To be Like that...! To be To be To be To be Like this....!
          </Marquee>
          
        </div>
      </div>
    </div>
  );
};

export default Techstack;
