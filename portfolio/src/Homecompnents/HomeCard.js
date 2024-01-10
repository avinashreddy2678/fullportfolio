import React from "react";
const HomeCard = ({ item }) => {
  return (
    <div>
      <div className=" w-[80%] mx-auto pb-4 bg-[#23202d] border-1 border-[#23212c] rounded-lg p-[-4] shadow-xl ring ring-gray-800">
        <figure>
          <img className="rounded-lg w-full" src={item.imageurl1} alt="Shoes" />
        </figure>
        <div className="card-body bg-[#23202d] px-2 text-slate-200">
          <h4 className="text-slate-400 pt-2 px-2">{item.name}</h4>
          <p className="p-2 text-slate-400 text-sm lg:text-md ">{item.overview.slice(0, 120)}...</p>
          <div className="flex py-2 justify-between items-center ">
            {/* tecj stack */}
            <div className="lg:flex sm:flex hidden ">
              {item.techstack.map((tech, index) => (
                <img className="w-6 rounded-full h-6 mx-2" key={index} src={tech} alt="" />
              ))}
            </div>

            <div
              onClick={() => {
                window.open(item.live, "_blank");
              }}
              className="card-actions ml-20 mx-4 lg:mr-10 px-2 py-1 text-white bg-green-600 rounded-lg"
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
