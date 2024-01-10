import React from "react";
const HomeTech = ({ sampletech }) => {
  return (
    <div className="flex-1">
      
        <div className="bg-transparent p-2 flex justify-start items-center">
          <div>
            <img className="w-12 h-12" src={sampletech.imageurl} alt="" />
          </div>

          <div className="text-white text-xl ml-6">{sampletech.name}</div>
        </div>
      
    </div>
  );
};

export default HomeTech;
