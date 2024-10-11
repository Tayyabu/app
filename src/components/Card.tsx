// components/ClothingCard.js

import Image from 'next/image';
import { Button } from './ui/button';

const ClothingCard = () => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <Image
        src="https://images.unsplash.com/photo-1697425603497-878be43708bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNsb3RoaW5nJTIwc3R5bGV8ZW58MHx8MHx8fDA%3D"
        alt="Clothing Style"
        width={500}
        height={500}
        className="w-full"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Stylish Outfit</div>
        <p className="text-gray-700 text-base">
          Discover the latest trends in fashion with this stylish outfit. Perfect for any occasion.
        </p>
      </div>
      <div className=' m-3 flex justify-center'><Button className='w-full'>Purchase</Button></div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#fashion</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#style</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#clothing</span>
      </div>
    </div>
  );
};

export default ClothingCard;
