import React from "react";

export default function Projects() {
  const projects = [
    {
      title: "Face Emotion Recognition (FER)",
      tech: "Python • CNN • OpenCV • FER-2013",
      desc: "Real-time emotion detection using CNN and OpenCV, deployed as a demo app."
    },
    {
      title: "Network Traffic Analysis",
      tech: "Python • Wireshark • KNN/SVM/Decision Trees",
      desc: "Analyzes network packets to detect anomalies and suspicious traffic patterns."
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-gray-950 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-blue-400 mb-8 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <div key={i} className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-[1.02] transition transform">
              <h3 className="text-2xl font-bold text-blue-300 mb-2">{p.title}</h3>
              <p className="text-sm text-gray-400 mb-3">{p.tech}</p>
              <p className="text-gray-200">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
