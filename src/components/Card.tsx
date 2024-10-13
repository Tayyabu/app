// components/ClothingCard.js

import Image, { StaticImageData } from "next/image";

import { formatCurrency, sellingPrice } from "@/lib/currency";
import { cn } from "@/lib/utils";

const Card = ({
  title,
  image,
  content,
  price,
  discountInPercentage,
  cardPerSlide,
}: {
  title: string;
  image: string | StaticImageData;
  content: string;
  price: number;
  discountInPercentage: number;
  cardPerSlide: number;
}) => {
  return (
    <div
      className={cn(
        "  rounded flex-col flex  flex-shrink-0 overflow-hidden shadow-lg bg-white",
        cardPerSlide === 1 ? "w-full" : cardPerSlide === 2 ? "w-1/2" : "w-1/3"
      )}
    >
      <div className="flex w-full justify-center">
        <Image
          src={image}
          alt="Clothing Style"
          width={300}
          height={300}
          className=" p-3"
        />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>

        <p className="text-gray-700 text-base">{content} </p>
        <p className="text-gray-700 line-through text-base">
          {formatCurrency(price)}{" "}
        </p>
        <p className="text-gray-700 flex justify-between w-full text-base">
          <span>{sellingPrice(price, discountInPercentage)}</span>{" "}
          <span className="ml-1">
            {discountInPercentage}% <b>OFF</b>{" "}
          </span>{" "}
        </p>
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

export default Card;
