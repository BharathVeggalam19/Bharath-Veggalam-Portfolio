import React from "react";

export default function Skills() {
  const skills = ["Python", "HTML", "CSS", "JavaScript", "MySQL", "AI/ML", "OpenCV"];

  return (
    <section id="skills" className="py-20 px-6 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-blue-400 mb-6">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((s, i) => (
            <div key={i} className="bg-gray-800 px-4 py-2 rounded-lg text-sm hover:bg-blue-600 transition">{s}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
