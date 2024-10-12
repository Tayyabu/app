// components/ClothingCard.js

import Image, { StaticImageData } from "next/image";
import { Button } from "./ui/button";
import { formatCurrency, sellingPrice } from "@/lib/currency";

const ClothingCard = ({
  title,
  image,
  content,
  price,
  discountInPercentage,
}: {
  title: string;
  image: string | StaticImageData;
  content: string;
  price: number;
  discountInPercentage:number

}) => {
  return (
    <div className="  rounded flex-col flex w-1/3 flex-shrink-0 overflow-hidden shadow-lg bg-white">
      <div className="flex w-full justify-center">
        <Image src={image} alt="Clothing Style" width={300} height={300} className=" p-3" />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>

        <p className="text-gray-700 text-base">{content} </p>
        <p className="text-gray-700 line-through text-base">{formatCurrency(price)} </p>
        <p className="text-gray-700 flex justify-between w-full text-base"><span>{sellingPrice(price,discountInPercentage)}</span> <span>{discountInPercentage}%</span> </p>
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
