import React from "react";
import "./Header.css";
import Typewriter from "typewriter-effect";
import { Home } from "@mui/icons-material";
import InstagramIcon from "@mui/icons-material/Instagram";
import AccountTreeIcon from "@mui/icons-material//AccountTree";
import Contact from "@mui/icons-material//ContactEmergency";
import CodeIcon from "@mui/icons-material/Code";
import { Link, useLocation } from "react-router-dom";
function Header() {
  // const scrollToTop = () => {
  //   window.scrollTo({
  //     top: (0, 0),
  //     behavior: "auto",
  //   });
  // };
  const location=useLocation();
  const pathname=location.pathname;
  const navitems = [
    {
      label: "Home",
      href: "/",
      icon:Home,
      active:"/"===pathname
    },
    {
      label: "Stack",
      href: "/TechStack",
      icon:CodeIcon,
      active:"/TechStack"===pathname
    },
    {
      label: "Projects",
      href: "/Projects",
      icon:AccountTreeIcon,
      active:"/Projects"===pathname
    },
    {
      label: "Social",
      href: "/Social",
      icon:InstagramIcon,
      active:"/Social"===pathname
    },
    {
      label: "Contact",
      href: "/Contact",
      icon:Contact,
      active:"/Contact"===pathname
    },
  ];
  return (
    <div className="sidebar shadow-sm  mb-5 bg-body-blue rounded  text-gray-400">
      <div className="title px-4 shadow-md  bg-body-white">
        <div className="flex items-center ">
          <img
            src="./assets/dpp.jpg"
            className="rounded-circle hidden lg:block opacity-50"
            width={"50px"}
            height={"50px"}
            alt=""
          />

          <h1 className="text-4xl pl-3">Avinash</h1>
        </div>

        <p className="text-gray-400 my-3 hidden lg:flex">
          <Typewriter
            options={{
              strings: ["Front End developer", "Full Stack developer"],
              autoStart: true,
              loop: true,
            }}
          />
        </p>
      </div>
      <div className="navbars text-gray-400">
        <ul className="px-[2%] py-[3%]">
          {navitems.map((item) => (
            <div key={item.href}>
              <Link
                to={item.href}
                className="text-decoration-none text-justify focus "
                // onClick={scrollToTop}
              >
                <li className={` ${item.active ? "bg-gray-600 text-white":""} cursor-pointer py-[3%] my-[10%] px-[19%] hover:bg-[#212027] rounded-md`}>
                  <item.icon size={"50px"} />
                  <span className="m-3">{item.label}</span>
                </li>
              </Link>
            </div>
          ))}
          {/* <Link
            to="/"
            className="text-decoration-none text-justify focus "
            onClick={scrollToTop}
          >
            <li>
              <Home size={"50px"} />
              <span className="m-3">Home</span>{" "}
            </li>
          </Link> */}
          {/* <Link to="/Techstack" className="text-decoration-none text-gray-500">
            <li>
              <CodeIcon />
              <span className="m-3">Stack</span>
            </li>
          </Link> */}
          {/* <Link to="/Projects" className="text-decoration-none text-gray-500">
            <li>
              <AccountTreeIcon />
              <span className="m-3">Projects</span>
            </li>
          </Link> */}
          {/* <Link to="/Social" className="text-decoration-none text-gray-500">
            <li>
              <InstagramIcon />
              <span className="m-3">Social</span>
            </li>
          </Link> */}
          {/* <Link
            to="/Contact"
            className="text-decoration-none text-gray-500"
          >
            <li>
              <Contact></Contact>
              <span className="m-3">Contact</span>
            </li>
          </Link> */}
        </ul>
      </div>
    </div>
  );
}

export default Header;
