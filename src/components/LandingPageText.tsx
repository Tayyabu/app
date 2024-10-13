"use client";
import { motion } from "framer-motion"
import { useWindowSize } from "@/hooks/useWindowSize";
function LandingPageText() {



    const {w}=useWindowSize()
  return (
    <div className="absolute inset-0 flex flex-col items-start justify-start text-center p-4">
    <motion.h1
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{ duration: 1 }}
      className=" linear__text__gradient text-3xl font-serif font-extrabold  tracking-tight  lg:text-5xl w-full sm:leading-none "
    >
      Welcome to our company website 
    </motion.h1>
    {/* <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to our company website </h1> */}
    <div className="flex w-full justify-center ">
        <motion.p
          initial={{
            translateY: 1000,
          }}
          whileHover={{ fontSize: "30px" }}
          whileFocus={{ fontSize: "30px" }}
          animate={{
            translateY: 0,
          }}
          
        
          transition={{ duration: 1.6 }}
          className="text-2xl md:1/2  lg:w-1/3 font-serif font-extralight md:text-2xl text-center leading-snug mb-8"
        >
          Since 2015, our clothing company has crafted high-quality, stylish
          apparel that blends timeless elegance with modern trends.
        </motion.p>
    </div>
  </div>
  )
}



export default LandingPageText

