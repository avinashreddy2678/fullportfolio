import React from "react";
import { urlFor } from "../../libs/image";

const HomeCard = ({ item }) => {
  return (
    <div>
      <div className=" w-[70%] mx-auto pb-4 bg-[#23202d] border-1 border-[#23212c] rounded-lg p-[-4] shadow-xl ring ring-gray-800">
        <figure>
          <img
            className="rounded-lg m-auto cover sm:w-full h-[250px]"
            src={urlFor(item.imageurl1)}
            alt="Shoes"
          />
        </figure>
        <div className="card-body bg-[#23202d] px-2 text-slate-200">
          <h4 className="text-slate-400 pt-2 px-2">{item.name}</h4>
          <p className="p-2 text-slate-400 text-sm lg:text-md ">
            {item.overview.slice(0,200)}....
          </p>
          <div className="flex py-2 justify-between items-center ">
            {/* tech stack */}
            <div className="lg:flex sm:flex hidden ">
             <img className="h-8 mx-2" src={`https://skillicons.dev/icons?i=${item.TechStack.map(a=>a)}`} alt="" />
            </div>

            <div
              onClick={() => {
                window.open(item.live, "_blank");
              }}
              className="card-actions ml-20 mx-4 lg:mr-10 px-3 py-2 cursor-pointer hover:bg-green-700 text-white bg-green-600 rounded-lg"
            >
              Live
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
