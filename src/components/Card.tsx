// components/ClothingCard.js

import Image from "next/image";
import { Button } from "./ui/button";

const ClothingCard = ({
  title,
  image,
  content,
}: {
  title: string;
  image: string;
  content: string;
}) => {
  return (
     
    <div className="max-w-sm  rounded flex-col flex w-1/3 flex-shrink-0 overflow-hidden shadow-lg bg-white">
      <img
        src={image}
        alt="Clothing Style"
        
        className="w-full"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{content}</p>
      </div>
      
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #fashion
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #style
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #clothing
        </span>
      </div>
    </div>
  );
};

export default ClothingCard;
