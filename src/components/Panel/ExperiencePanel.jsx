import { motion } from "framer-motion";

export default function ExperiencePanel({ onClose }) {

  // Detect Mobile
const isMobile = window.innerWidth < 640;

  const panelVariants = {
    hidden: { y: "-100%", opacity: 1 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 15,
        duration: 0.65,
      },
    },
    exit: {
      y: "-100%",
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 15,
        duration: 0.65,
      },
    },
  };

  return (
    <motion.div
  variants={panelVariants}
  initial="hidden"
  animate="visible"
  exit="exit"
  className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex justify-center items-start"
>
  <div
    className="w-full max-w-xl h-full bg-white border-4 border-black
               shadow-[0px_10px_0_0_#000] p-6 overflow-y-auto rounded-none"
  >
        {/* HEADER */}
        <div className="flex justify-between items-center mb-6 border-b-4 border-black pb-3">
          <div>
            {/* <p className="text-xs uppercase tracking-[0.25em]">Labs // Experience</p> */}
            <h2 className="text-2xl font-black">CAREER MILESTONES</h2>
          </div>

          <button
            onClick={onClose}
            className="px-3 py-1 border-2 border-black bg-red-400 
                       shadow-[3px_3px_0_0_#000] font-bold 
                       hover:-translate-x-1 hover:-translate-y-1 transition"
          >
            X
          </button>
        </div>

        {/* ---------- EXPERIENCE CARDS WRAPPER (Add more easily) ---------- */}
        <div className="flex flex-col gap-6">

          {/* EXPERIENCE CARD #1 */}
          <ExperienceCard
            company="CodeForSuccess Pvt Ltd"
            role="Backend Intern (Remote)"
            duration="6 Months Internship"
            certificate="/assets/image.png"
            description="Worked on backend API development, debugging, documentation, 
              and real-world project modules. Gained experience with Spring Boot, REST APIs, 
              authentication flows, API structuring, and production-level practices."
            tech={["Java", "Spring Boot", "REST APIs", "MongoDB", "Postman", "Git"]}
          />

          {/* 🔥 WANT TO ADD MORE EXPERIENCE? COPY BELOW:  
          
          <ExperienceCard
            company="Another Company"
            role="Software Developer Intern"
            duration="3 Months"
            certificate="/assets/mycert2.png"
            description="Your description..."
            tech={["React", "Node.js", "AWS"]}
          />
          
          */}
          
        </div>
      </div>
    </motion.div>
  );
}


/* ============================================================================
   REUSABLE EXPERIENCE CARD COMPONENT
============================================================================ */

function ExperienceCard({ company, role, duration, certificate, description, tech }) {
  return (
    <div className="
      border-4 border-black p-4 sm:p-6 
      rounded-xl shadow-[6px_6px_0_0_#000] 
      bg-[#fefefe] 
    ">
      
      {/* COMPANY + ROLE */}
      <h3 className="text-lg sm:text-xl font-black">{company}</h3>
      <p className="text-sm sm:text-base font-semibold mt-1">{role}</p>
      <p className="text-xs sm:text-sm mt-1 opacity-70">{duration}</p>

      {/* CERTIFICATE IMAGE */}
      <div className="
        w-full 
        border-4 border-black rounded-xl 
        shadow-[5px_5px_0_0_#000] 
        overflow-hidden mt-4
      ">
        <img 
          src={certificate} 
          alt="Experience Certificate" 
          className="
            w-full 
            max-h-[260px] sm:max-h-none 
            object-contain 
          "
        />
      </div>

      {/* DESCRIPTION */}
      <div className="mt-4 text-xs sm:text-sm leading-relaxed">
        <p>{description}</p>
      </div>

      {/* TECH STACK */}
      <div className="mt-4 flex flex-wrap gap-2">
        {tech.map((item, i) => (
          <span
            key={i}
            className="
              px-2 py-1 
              text-[10px] sm:text-xs 
              border-2 border-black 
              bg-yellow-200 
              shadow-[3px_3px_0_0_#000] 
              font-semibold rounded-md
            "
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}