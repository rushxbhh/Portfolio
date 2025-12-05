// src/components/Panel/CertsPanel.jsx
import { motion } from "framer-motion";
import { useState } from "react";
import CertificateDetailPanel from "./CertificateDetailPanel";

export default function CertsPanel({ onClose }) {
  const [activeCert, setActiveCert] = useState(null);
  // Detect Mobile
const isMobile = window.innerWidth < 640;


  const CERT_DATA = {
    aws: {
      title: "AWS Cloud Practitioner",
      issuer: "Geeks-for-Geeks",
      year: "2025",
      pdf: "https://media.geeksforgeeks.org/courses/certificates/684cb20ec8f58e10f9c511d71e213d78.pdf",
      image: "/assets/aws.jpeg",
    },
    tcs: {
      title: "TCS NQT Prep Test Series",
      issuer: "Geeks-for-Geeks",
      year: "2024",
      pdf: "https://media.geeksforgeeks.org/courses/certificates/ca23244df786fe8393ed8266de9591e6.pdf",
      image: "/assets/tcs.jpeg",
    },
  };

  return (
    <motion.div
      initial={{ y: "-100%" }}
      animate={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ type: "spring", stiffness: 70, damping: 15 }}
      className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-start z-50"
    >
      {/* FLOATING PANEL */}
      <div className="w-full max-w-lg bg-white border-4 border-black shadow-[0px_8px_0_0_#000] p-6 mt-20 mb-20">
        {/* HEADER */}
        <div className="flex justify-between items-center mb-6 border-b-4 border-black pb-3">
          <div>
            {/* <p className="text-xs uppercase tracking-[0.25em]">Wall // Badges</p> */}
            <h2 className="text-4xl font-black">EARNED CREDENTIALS</h2>
          </div>

          <button
            onClick={onClose}
            className="px-3 py-1 border-2 border-black bg-red-400 shadow-[3px_3px_0_0_#000] font-bold hover:-translate-x-1 hover:-translate-y-1 transition"
          >
            X
          </button>
        </div>

        {/* BADGES (VERTICAL) */}
        <div className="flex flex-col gap-4">
          <BadgeCard
            title="AWS Cloud Practitioner"
            issuer="Geeks-for-Geeks"
            year="2025"
            color="#38bdf8"
        //    bgImage="/assets/aws.jpeg"
            onClick={() => setActiveCert("aws")}
          />

          <BadgeCard
            title="TCS NQT Prep Test Series"
            issuer="Geeks-for-Geeks"
            year="2024"
            color="#22c55e"
          //  bgImage="/assets/tcs.jpeg"
            onClick={() => setActiveCert("tcs")}
          />
        </div>
      </div>

      {/* POPUP MODAL */}
      <CertificateDetailPanel
        cert={CERT_DATA[activeCert]}
        onClose={() => setActiveCert(null)}
      />
    </motion.div>
  );
}

/* ------------ Badge card component ------------ */

function BadgeCard({ title, issuer, year, color, bgImage, onClick }) {
  return (
    <div
      onClick={onClick}
      className="
        relative border-4 border-black p-4 shadow-[6px_6px_0_0_#000] 
         overflow-hidden cursor-pointer transform transition
        hover:scale-[1.03] hover:shadow-[10px_10px_0_0_#000]
      "
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10">
        <span
          className="px-2 py-1 text-xs border-2 border-black shadow-[3px_3px_0_0_#000] 
                     font-semibold inline-block mb-2"
          style={{ backgroundColor: color }}
        >
          {year}
        </span>

        <h3 className="text-lg font-black">{title}</h3>
        <p className="text-xs mt-1 opacity-80 uppercase tracking-wide">
          {issuer}
        </p>
      </div>
    </div>
  );
}
