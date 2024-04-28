import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className=" py-4">
      <div className="max-w-7xl mx-auto px-">
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img src="/logo.svg" alt="Logo" className="h-8" />
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-transparent hover:bg-purple-500 text-white hover:text-white font-semibold py-2 px-4 rounded-full shadow-md border border-purple-500"
          >
            <a href="/signup">
            Get Started
            </a>
          </motion.button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
