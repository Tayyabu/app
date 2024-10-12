"use client";

import { useState, useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import Card from "@/components/Card";
import { Button } from "@/components/ui/button";
import image1 from "@/app/public/IMG-20241011-WA0050.jpg";
import image2 from "@/app/public/IMG-20241011-WA0051.jpg";
import image3 from "@/app/public/IMG-20241011-WA0055.jpg";
import image4 from "@/app/public/IMG-20241011-WA0069.jpg";
import image5 from "@/app/public/IMG-20241011-WA0070.jpg";
import image6 from "@/app/public/IMG-20241011-WA0069.jpg";
export function ThreeCardSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const cards = [
    {
      title: "Mountain Vista",
      content: "Breathtaking views of majestic peaks.",
      image: image1.src,
    },
    {
      title: "Coastal Sunset",
      content: "Serene beaches at golden hour.",
      image: image2.src,
    },
    {
      title: "Forest Trail",
      content: "Lush green paths through ancient woods.",
      image: image5.src,
    },
    {
      title: "Desert Oasis",
      content: "Unexpected beauty in arid landscapes.",
      image: image4.src,
    },
    {
      title: "Alpine Lake",
      content: "Crystal clear waters reflect snowy peaks.",
      image: image5.src,
    },
    {
      title: "Tropical Paradise",
      content: "Palm-fringed beaches and turquoise waters.",
      image: image6.src,
    },
  ];

  const totalSlides = Math.ceil(cards.length / 3);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isPlaying) {
      interval = setInterval(() => {
        nextSlide();
      }, 5000); // Change slide every 5 seconds
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying, nextSlide]);

  return (
    <div className="w-full overflow-hidden mx-auto px-4">
      <div className="relative overflow-hidden  ">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {Array.from({ length: totalSlides }).map((_, slideIndex) => (
            <div
              key={slideIndex}
              className="w-full flex-shrink-0 flex space-x-4"
            >
              {cards
                .slice(slideIndex * 3, slideIndex * 3 + 3)
                .map((card, cardIndex) => (
                  <Card key={cardIndex} {...card} />
                ))}
            </div>
          ))}
        </div>
        <div className="absolute inset-y-0 left-0 flex items-center">
          <Button
            onClick={prevSlide}
            variant="outline"
            size="icon"
            className="bg-background/80 backdrop-blur-sm ml-2"
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Previous slide</span>
          </Button>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center">
          <Button
            onClick={nextSlide}
            variant="outline"
            size="icon"
            className="bg-background/80 backdrop-blur-sm mr-2"
          >
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Next slide</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
