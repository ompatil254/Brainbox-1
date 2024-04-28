import React from "react";
import { Vortex } from "../components/Vortex";
import { motion } from "framer-motion";

export function VortexDemo() {
  return (
    <div className="w-[calc(100%-4rem)] mx-auto rounded-md  h-screen overflow-hidden">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
        Your Ultimate Student Buddy!
        </h2>
        <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
        Unleash Your Potential, Connect, and Thrive!"
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
        <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-transparent hover:bg-blue-500 text-white hover:text-white font-semibold py-2 px-4 rounded-full shadow-md border border-blue-500"
          >
            Get Started
          </motion.button>
          <button className="px-4 py-2  text-white ">Discover</button>
        </div>
        
      </Vortex>
      
    </div>
  );
}
