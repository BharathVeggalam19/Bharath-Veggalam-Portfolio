import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-gray-900 text-white">
      <motion.div className="max-w-3xl mx-auto text-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
        <h2 className="text-3xl md:text-4xl font-semibold text-blue-400 mb-4">About Me</h2>
        <p className="text-gray-300 leading-relaxed">
          I am a B.Tech student (CSE, AI & ML) from Malla Reddy Institute of Technology and Science, Telangana (2025).
          I have hands-on experience in Python, HTML, CSS, JavaScript, MySQL and projects in Face Emotion Recognition and Network Traffic Analysis.
        </p>
      </motion.div>
    </section>
  );
}
