import React from "react";
import { Card } from "../UI/TechUI";
import { Progress } from "../UI/Progress";

const TechCard = ({ item }) => {
  return (
    <>
      <Card className="border-gray-800 border-none hover:bg-gray-900 ">
        <div className="flex justify-start m-3 items-center">
          <div className="">
            <img
              src={item.imageurl}
              className="w-12 object-cover h-12"
              alt=""
            />
          </div>
          <div className="w-[100%] ml-4">
            <div className=" text-gray-500 pb-2 font-bold">{item.name}</div>
            <div className="w-[60%]">
              <Progress value={item.rating} />
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};

export default TechCard;
