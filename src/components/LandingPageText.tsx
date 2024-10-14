"use client";
import { motion } from "framer-motion"
function LandingPageText() {



    
  return (
    <div className="flex flex-col items-start justify-start text-center p-4">
    <motion.h1
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{ duration: 1 }}
      className="  text-3xl  font-bold  tracking-tight  lg:text-5xl w-full sm:leading-none "
    >
      Welcome to our company website 
    </motion.h1>
    {/* <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to our company website </h1> */}
    <div className="flex w-full justify-center ">
        <motion.p
          initial={{
            translateX: 1000,
          }}
         
          animate={{
            translateX: 0,
          }}
          
        
          transition={{ duration: 1.6 }}
          className="text-2xl md:1/2 p-3 lg:w-1/3 font-extralight md:text-2xl text-center leading-snug mb-8"
        >
          Introducing "Snitch": A cutting-edge clothing company dedicated to bringing you the latest in fashion-forward designs and sustainable style. Discover your unique look with us today! 

        </motion.p>
    </div>
  </div>
  )
}



export default LandingPageText

