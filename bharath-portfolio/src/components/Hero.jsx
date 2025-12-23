import { motion } from "framer-motion";
import Spline3D from "./Spline3D";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative hero-bg pt-20
        flex flex-col md:flex-row 
        items-center justify-center md:justify-between
        text-white overflow-hidden 
        px-8 md:px-16 
      "
    >
      {/* LEFT TEXT */}
      <div className="relative z-10 max-w-xl text-center md:text-left space-y-6">
        <motion.h1
          className="text-5xl md:text-6xl font-bold"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I’m <span className="text-blue-400">Bharath Veggalam</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-300"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          A Python Full-Stack Developer passionate about AI & ML.  
          I build practical web apps and intelligent solutions.
        </motion.p>

        <motion.div
          className="flex gap-4 justify-center md:justify-start"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <a
            href="#contact"
            className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
          >
            Contact Me
          </a>
          <a
            href="https://github.com/BharathVeggalam19"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 border border-blue-600 rounded-lg hover:bg-blue-600 transition"
          >
            View GitHub
          </a>
        </motion.div>
      </div>
      
       {/* SPLINE – BOUNCING */}
      <motion.div
        className="relative w-full md:w-1/2 h-[400px] md:h-[600px] z-0"
        animate={{ y: [0, -20, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
      >
        <Spline3D />
      </motion.div>
    </section>
  );
}
