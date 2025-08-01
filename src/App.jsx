import React from "react";
import { FaGithubAlt, FaLinkedin, FaSitemap, FaFacebook } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { Link } from "react-router-dom";

const App = () => {
  // ------------ DATA-------------
  const data = [
    {
      id: 1,
      icon: <FaGithubAlt size={25} />,
      name: "Git Hub",
      url: "https://github.com/BetancourtDev/",
    },
    {
      id: 2,
      icon: <FaFacebook size={26} />,
      name: "Facebook",
      url: "https://www.facebook.com/people/Kim-Betancourt/61554889582624/",
    },
    {
      id: 3,
      icon: <FaLinkedin size={25} />,
      name: "Linkedin",
      url: "https://www.linkedin.com/in/kimberlyn-betancourt-06ba42ba/",
    },
    {
      id: 4,
      icon: <TbWorldWww size={25} />,
      name: "Sitio Web",
      url: "https://betancourtdev.com/",
    },
  ];
  // ------------ DATA-------------
  return (
    <div className="gradient-background flex items-center justify-center flex-col">
      {/* ----------- Animations-------START */}
      <ul class="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      {/* ------------- Animations-------END */}
      <div className=" flex items-center justify-center flex-col ">
        {/* ------------- IMAGE ----- START */}
        <div className=" flex items-center justify-center gap-2 flex-col">
          <img
            className=" w-[100px] rounded-full bg-black "
            src="/avatar/kim.jpg"
            alt=""
          />
          <h2 className=" text-white text-[1.65rem] font-bold">
            Kim Betancourt
          </h2>
          <div className=" w-[360px] text-center">
            <p className=" text-white text-[1rem] font-medium">
              Freelancing | Web Development
            </p>
          </div>
        </div>
        {/* ----------- IMAGE ----- END */}

        {/* -------------- SOCIAL LINKS ---- START */}
        <div className=" mt-8 space-y-4">
          {/* ------------ CARDS ----- START */}

          {data.map((i) => (
            <Link
              to={i.url}
              target="_blank"
              key={i.id}
              className=" flex items-center gap-2 w-[320px] bg-white bg-opacity-20 border border-white text-white backdrop-blur-lg rounded drop-shadow-lg p-3 px-4 cursor-pointer hover:bg-opacity-40"
            >
              {i.icon}
              <p className=" font-medium ">{i.name}</p>
            </Link>
          ))}

          {/* --------- CARDS ----- END */}
        </div>
        {/* -------- SOCIAL LINKS ---- END */}

        <div className=" w-[320px] text-justify mt-6 text-[10.38px] text-white">
          <p>All rights reserved Betancourt Dev , by Kim Betancourt</p>
        </div>
      </div>
    </div>
  );
};

export default App;
