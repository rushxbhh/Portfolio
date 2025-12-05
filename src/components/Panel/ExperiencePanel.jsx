// src/components/Panel/ExperiencePanel.jsx
import { motion } from "framer-motion";
import { useState } from "react";
import ExperienceCertPopup from "./ExperienceCertPopup";

export default function ExperiencePanel({ onClose }) {
  const [activeCert, setActiveCert] = useState(null);

  const EXPERIENCES = [
    {
      id: 1,
      company: "CodeForSuccess Pvt Ltd",
      role: "Backend Intern (Remote)",
      duration: "6 Months Internship",
      certificate: "/assets/image.png",
      description:
        "Worked on backend API development, debugging, documentation, and real-world project modules. Gained experience with Spring Boot, REST APIs, authentication flows, API structuring, and production-level practices.",
      tech: ["Java", "Spring Boot", "REST APIs", "MongoDB", "Postman", "Git"],
    },
    // Add more easily later
  ];

  return (
    <>
      <motion.div
        initial={{ y: "-100%" }}
        animate={{ y: 0 }}
        exit={{ y: "-100%" }}
        transition={{ type: "spring", stiffness: 70, damping: 15 }}
        className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex justify-center items-start"
      >
        <div className="w-full max-w-xl bg-[#e9e4e4] border-4 border-black shadow-[0px_10px_0_0_#000] p-6 mt-20 h-fit">

          {/* HEADER */}
          <div className="flex justify-between items-center mb-6 border-b-4 border-black pb-3">
            <h2 className="text-2xl font-black">CAREER MILESTONES</h2>

            <button
              onClick={onClose}
              className="px-3 py-1 border-2 border-black bg-red-400 shadow-[3px_3px_0_0_#000] font-bold"
            >
              X
            </button>
          </div>

          {/* EXPERIENCE LIST */}
          <div className="flex flex-col gap-6">
            {EXPERIENCES.map((exp) => (
              <ExperienceCard
                key={exp.id}
                data={exp}
                onViewCert={() => setActiveCert(exp)}
              />
            ))}
          </div>
        </div>
      </motion.div>

      {/* POPUP PANEL */}
      <ExperienceCertPopup cert={activeCert} onClose={() => setActiveCert(null)} />
    </>
  );
}


/* ============================================================================
   EXPERIENCE CARD (NO IMAGE, ONLY BUTTON)
============================================================================ */

function ExperienceCard({ data, onViewCert }) {
  return (
    <div className="border-2 border-black p-4 sm:p-6 shadow-[6px_6px_0_0_#000] bg-[#fffff0]">
      <h3 className="text-lg sm:text-xl font-black">{data.company}</h3>
      <p className="text-sm sm:text-base font-semibold mt-1">{data.role}</p>
      <p className="text-xs sm:text-sm mt-1 opacity-70">{data.duration}</p>

      <p className="mt-4 text-xs sm:text-sm leading-relaxed">
        {data.description}
      </p>

      <button
        onClick={onViewCert}
        className="mt-4 px-3 py-2 border-2 border-black bg-blue-300 font-semibold shadow-[3px_3px_0_0_#000] hover:-translate-x-1 hover:-translate-y-1 transition"
      >
        View Certificate
      </button>

      <div className="mt-4 flex flex-wrap gap-2">
        {data.tech.map((item, i) => (
          <span
            key={i}
            className="px-2 py-1 text-[10px] sm:text-xs border-2 border-black bg-yellow-200 shadow-[3px_3px_0_0_#000] font-semibold rounded-md"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
