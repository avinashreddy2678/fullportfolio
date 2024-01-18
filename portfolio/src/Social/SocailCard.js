import React from "react";
import { Card } from "../UI/TechUI";
const SocialCard = ({ item }) => {
  return (
    <div
      onClick={() => {
        window.open(item.link, "_blank");
      }}
    >
      <Card className=" m-1 hover:bg-gray-900">
        <div className="flex justify-start m-3  items-center">
          <div className="w-[100%] flex items-center justify-evenly ml-4">
            <div>
              <div className=" text-gray-200 pb-2 font-bold">
                <item.icon />
              </div>
              <div>{item.name}</div>
            </div>
            <div>
                {
                    item.title
                }
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default SocialCard;
