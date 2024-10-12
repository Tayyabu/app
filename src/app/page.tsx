import Card from '@/components/Card';
import React from 'react';
import Image from 'next/image';
import mainPic from "./main_pic.jpg"
import { ThreeCardSlider } from '@/components/three-card-slider';
const HomePage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative flex justify-center bg-slate-800 text-white">
        <Image 
          src={mainPic} 
          
          objectFit="cover" 
          alt="Place holder" 
          width={600}
          height={300}
          className="opacity-50"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-end text-center p-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Our Store</h1>
          <p className="text-lg md:text-xl mb-8">Discover the latest trends in fashion and style</p>
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

