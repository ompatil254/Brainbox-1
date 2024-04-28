import AccordionImageComponent from "../components/AccordionImageComponent";
import AnimatedComponent from "../components/AnimatedComponent";
import ColorfulMarquee from "../components/ColorfulMarquee";
import { VortexDemo } from "../components/VortexDemo";
import { motion } from "framer-motion";

function Home() {
  return (
    <div>
      <VortexDemo />
      <div></div>
      <div className="bg-black  ">
        <AccordionImageComponent />
        <div className="max-w-xl mx-auto p-8 mt-5"></div>
      </div>
      <ColorfulMarquee />
      <AnimatedComponent />
      <AnimatedComponent />

      <div className="bg-gradient-to-r from-purple-700 via-pink-500 to-purple-700 py-12 px-6 text-center">
        <h2 className="text-3xl font-semibold text-white mb-4">
          A leap to the future.
        </h2>
        <p className="text-lg text-white mb-8">Sign up now!</p>
        <button className="bg-white text-purple-700 hover:bg-purple-100 text-lg font-semibold py-2 px-6 rounded-full transition-colors duration-300">
          <a href="/signup">Get Started</a>
        </button>
      </div>
      {/* <TextParallaxContentExample/> */}
    </div>
  );
}

export default Home;
