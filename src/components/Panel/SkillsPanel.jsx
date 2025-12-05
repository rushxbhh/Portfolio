import { motion } from "framer-motion";

export default function SkillsPanel({ onClose }) {

  const panelVariants = {
    hidden: { y: "100%", opacity: 1 },

    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 15,
      },
    },

    exit: {
      y: "100%",
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 90,
        damping: 15,
      },
    },
  };

  return (
    <motion.div
      variants={panelVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="
        fixed inset-0 bg-black/30 backdrop-blur-sm z-50
        flex items-end justify-center
        md:items-start md:justify-center
      "
    >
      {/* PANEL BODY */}
      <div
        className="
          w-full h-dvh md:h-full
          max-w-md md:max-w-2xl 
          bg-white border-t-4 md:border-t-4 md:border-b-0 md:border-r-4 border-black
          shadow-[0px_-8px_0_0_#000] md:shadow-[0px_-8px_0_0_#000]
          md:rounded-none
          p-5 md:p-6 overflow-y-auto
        "
      >
        {/* HEADER */}
        <div className="flex justify-between items-center mb-6 border-b-4 border-black pb-3">
          <div>
            <h2 className="text-2xl font-black">CORE COMEPETENCIES</h2>
          </div>

          <button
            onClick={onClose}
            className="px-3 py-1 border-2 border-black bg-red-400 shadow-[3px_3px_0_0_#000] font-bold 
                      hover:-translate-x-1 hover:-translate-y-1 transition"
          >
            X
          </button>
        </div>

        {/* SKILL CATEGORIES */}
        <motion.div className="space-y-6">
          <SkillCategory
            title="Core Development"
            color="#22c55e"
            items={[
              "Java",
              "Spring Boot",
              "REST APIs",
              "JavaScript",
              "React",
              "Redux Toolkit",
              "TailwindCSS",
            ]}
          />

          <SkillCategory
            title="Real-Time & Distributed Systems"
            color="#a855f7"
            items={[
              "WebSockets",
              "Distributed Blockchain Design",
              "Consensus Mechanisms",
            ]}
          />

          <SkillCategory
            title="Backend Architecture"
            color="#f97316"
            items={[
              "Microservices Basics",
              "Layered Architecture",
              "DTO Mapping (ModelMapper)",
              "JPA + Hibernate",
              "Spring Security + JWT",
              "OAuth 2.0",
            ]}
          />

          <SkillCategory
            title="Databases & Storage"
            color="#38bdf8"
            items={["MongoDB", "MySQL", "Schema Design"]}
          />

          <SkillCategory
            title="Tools & DevOps"
            color="#e11d48"
            items={[
              "Git & GitHub",
              "Docker",
              "Vite",
              "Postman",
              "Stripe API",
              "DBeaver",
              "Swagger UI",
              "Actuator Monitoring",
            ]}
          />

          <SkillCategory
            title="System Design"
            color="#14b8a6"
            items={[
              "Load Balancing",
              "Sharding",
              "Replication",
              "Scalability Principles",
            ]}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

/* --------------------------------------------
   INTERACTIVE CATEGORY COMPONENT
-------------------------------------------- */

function SkillCategory({ title, color, items }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, x: 4 }}
      transition={{ type: "spring", stiffness: 120, damping: 10 }}
      className="border-4 border-black p-4 shadow-[6px_6px_0_0_#000] bg-[#fefefe] rounded-lg"
    >
      {/* Heading */}
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-bold uppercase">{title}</h3>
        <span
          className="w-4 h-4 border-2 border-black rounded-sm"
          style={{ backgroundColor: color }}
        ></span>
      </div>

      {/* Skill Chips */}
      <div className="flex flex-wrap gap-2">
        {items.map((item, index) => (
          <motion.span
            key={index}
            whileHover={{ scale: 1.1, rotate: -2 }}
            className="px-2 py-1 text-xs border-2 border-black bg-white shadow-[3px_3px_0_0_#000] 
                       font-semibold rounded-md"
            style={{ backgroundColor: `${color}22` }}
          >
            {item}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}
