
import React from 'react';
import Image from 'next/image';
import mainPic from "./main_pic.jpg"
import { ThreeCardSlider } from '@/components/three-card-slider';
const HomePage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative flex justify-center bg-slate-800 object-cover text-white">
        <img 
          src={mainPic.src} 
          
           
          alt="Place holder" 
          width={600}
          height={300}
          className=""
        />
        <div className="absolute inset-0 flex flex-col items-center justify-end text-center p-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to our company website </h1>
          <p className="text-lg md:text-xl mb-8">
          Since 2015, our clothing company  has crafted high-quality, stylish apparel that blends timeless elegance with modern trends.

          </p>
          <a href="#featured-products" className="bg-black text-white px-6 py-3 rounded-full text-lg">
            Shop Now
          </a>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16">
        <div className="max-w-screen-xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
          <ThreeCardSlider/>
        </div>
      </section>

          
    </div>
  );
};

export default HomePage;

