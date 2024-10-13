import Image from "next/image";
import mainPic from "./main_pic.jpg";
import gentImage from "./public/download.jpg";
import { ThreeCardSlider } from "@/components/three-card-slider";
import LandingPageText from "@/components/LandingPageText";
import Link from "next/link";
import { Button } from "@/components/ui/button";
const HomePage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative w-full flex justify-center bg-slate-800 object-cover text-white">
        <div className="flex w-full md:flex-row  lg:flex-row flex-col items-center">
          <Image
            src={gentImage.src}
            alt="Place holder"
            width={560}
            height={300}
            className="lg:w-1/2 w-full h-full"
          />
          <Image
            src={mainPic.src}
            alt="Place holder"
            objectFit="cover"
            width={600}
            height={300}
            className="w-full lg:w-1/2   h-full"
          />
        </div>
        <LandingPageText />
      </section>

      {/* Featured Products Section */}
      <section className="py-16">
        <div className="max-w-screen-xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Featured Products
          </h2>
          <div className="flex justify-center font-serif w-full gap-8">
            <Button asChild variant={"ghost"}>
              <Link  className="bg-for" href={{pathname:"/",query:{ selectedCategory: "men" },}}
              scroll={false}
              
              >
                Men
              </Link>
            </Button>
            <Button asChild  variant={"ghost"}>
              <Link
                className="bg-for" href={{pathname:"/",query:{ selectedCategory: "women" }}}
                scroll={false}
              >
                Women
              </Link>
            </Button>
            <Button asChild variant={"ghost"}>
              <Link
                className="bg-for" href={{pathname:"/",query:{ selectedCategory: "kids" }}}
                scroll={false}
              >
                Kids
              </Link>
            </Button>
          </div>
          <ThreeCardSlider />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
