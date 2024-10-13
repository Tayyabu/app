"use client";

import { useState, useCallback, useEffect, useMemo ,Suspense} from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Card from "@/components/Card";
import { Button } from "@/components/ui/button";

import { useWindowSize } from "@/hooks/useWindowSize";
import { cards } from "@/data/products";


export function ThreeCardSlider(props:{selectedCategory:string|null}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const { w } = useWindowSize();

function searchParams() {
  
}


  let selectedCategory= 'men';
selectedCategory =props.selectedCategory||"men"


  const products = useMemo(() => {
    return cards.filter(
      (product) => product.category === (selectedCategory ?? "men")
    );
  }, [selectedCategory]);

  const cardPerSlide = w < 560 ? 1 : w < 700 ? 2 : 3;

  const totalSlides = Math.ceil(products.length / cardPerSlide);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    setIsClient(true);

    interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [nextSlide]);

  return (
    <div className="w-full overflow-hidden ">
      <div className="relative p-3 overflow-hidden  ">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {isClient &&
            Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <div key={slideIndex} className="w-full flex-shrink-0 flex ">
                {products
                  .slice(
                    slideIndex * cardPerSlide,
                    slideIndex * cardPerSlide + cardPerSlide
                  )
                  .map((card, cardIndex) => (
                    <Card
                      cardPerSlide={cardPerSlide}
                      key={cardIndex}
                      {...card}
                    />
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
