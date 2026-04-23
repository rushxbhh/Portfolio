import { motion } from "framer-motion";
import { useState } from "react";
import ProjectDetailPanel from "./ProjectDetailPanel";

export default function ProjectsPanel({ onClose }) {
  const [activeProject, setActiveProject] = useState(null);

  // 🔥 SAME animation style as EducationPanel (but mirrored for right side)
  const panelVariants = {
    hidden: { x: "100%", opacity: 1 },

    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 15,
      },
    },

    exit: {
      x: "100%",
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 160,
        damping: 20,
        mass: 0.55,
      },
    },
  };

  const PROJECT_DATA = {
    workpilot: {
      title: "WorkPilot – Employee Management System",
      github: "https://github.com/rushxbhh/WorkPilot-Project",
      imagePlaceholder: "WorkPilot Screenshot Coming Soon",
      description:
        "Production-grade backend with JWT, OAuth2, auditing, salary module, attendance, logging, global exception handling and layered architecture.",
      features: [
        "Role-based access (Admin / Manager / Worker)",
        "Google OAuth2 login",
        "Salary & attendance modules with full history",
        "Global exception handling",
        "DTO mapping with ModelMapper",
        "Spring Boot Actuator monitoring",
      ],
      stack: [
        "Java",
        "Spring Boot",
        "JWT",
        "OAuth2",
        "MySQL",
        "ModelMapper",
        "Swagger",
        "Actuator",
      ],
    },

    blockchain: {
      title: "Distributed Blockchain for Supply Chain",
      github: "https://github.com/rushxbhh/blockchain-supply",
      imagePlaceholder: "Blockchain Diagram Coming Soon",
      description:
        "A real multi-node blockchain system using WebSockets, cryptographic signatures, proof-of-work mining, and MongoDB as persistent ledger.",
      features: [
        "Real-time node communication via WebSockets",
        "ECDSA digital signing",
        "SHA-256 hashing for blocks",
        "Mining + block validation",
        "MongoDB persistent ledger",
      ],
      stack: [
        "Java",
        "Spring Boot",
        "WebSockets",
        "ECDSA",
        "SHA-256",
        "MongoDB",
      ],
    },

    currency: {
      title: "Real-Time Currency Converter (React)",
      github: "https://github.com/rushxbhh/Currency-Convertor",
      imagePlaceholder: "Currency UI Screenshot Coming Soon",
      description:
        "Live conversion for 200+ currencies using reusable components, custom hooks, and Tailwind.",
      features: [
        "Live rate fetching from API",
        "INR ↔ USD swap feature",
        "useCurrencyInfo custom hook",
        "Reusable UI components",
      ],
      stack: ["React", "TailwindCSS", "API", "JavaScript"],
    },

    momento: {
  title: "Momento – Real-Time Ephemeral Chat Platform",
  github: "https://github.com/rushxbhh/Momento-Chat-Application",
  imagePlaceholder: "Momento Screenshot Coming Soon",
  description:
    "Real-time chat platform built with WebSockets and Redis, designed for ephemeral communication with automatic lifecycle management and horizontal scalability.",
  features: [
    "WebSocket-based real-time messaging (STOMP)",
    "Ephemeral rooms with Redis TTL auto-expiry",
    "Auto room cleanup on user disconnect",
    "Handles 500+ concurrent users with low latency (~100ms)",
    "Stateless architecture enabling horizontal scaling",
    "Room-based isolation to prevent data leakage",
  ],
  stack: [
    "Java",
    "Spring Boot",
    "WebSockets",
    "Redis",
    "React",
    "STOMP",
    "Docker",
  ],
},

    jobScheduler: {
  title: "Distributed Job Orchestration Platform",
  github: "https://github.com/rushxbhh/Job-Orchestration-System-in-Micro-services-using-Kafka",
  imagePlaceholder: "Job Scheduler Dashboard Coming Soon",
  description:
    "Distributed job processing system using Kafka and microservices, designed for scalable, fault-tolerant background task execution with guaranteed consistency.",
  features: [
    "Kafka-based asynchronous job queue",
    "Processes 10,000+ jobs/day across worker nodes",
    "Idempotent job execution to avoid duplicates",
    "Job lifecycle tracking (PENDING → RUNNING → COMPLETED/FAILED)",
    "Retry & failure handling with backoff strategy",
    "Optimistic locking for consistency",
  ],
  stack: [
    "Java",
    "Spring Boot",
    "Apache Kafka",
    "MySQL",
    "Microservices",
    "Docker",
  ],
},
  };

  return (
    <div
      className="
        fixed inset-0 bg-black/30 backdrop-blur-sm z-50
        flex items-start justify-end
        md:items-stretch md:justify-end
      "
    >
      {/* PANEL */}
      <motion.div
        variants={panelVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="
          w-full h-dvh md:h-full 
          max-w-md md:max-w-xl 
          bg-[#e9e4e4] border-t-4 md:border-t-0 md:border-l-4 border-black
          shadow-[0px_-8px_0_0_#000] md:shadow-[-8px_0px_0_0_#000]
          md:rounded-none
          p-5 md:p-6 overflow-y-auto
        "
      >
        {/* HEADER */}
        <div className="flex justify-between items-center mb-6 border-b-4 border-black pb-3">
          <h2 className="text-4xl font-black">DEVELOPED SOLUTIONS</h2>

          <button
            onClick={onClose}
            className="px-3 py-1 border-2 border-black bg-red-400 shadow-[4px_4px_0_0_#000]
                       font-bold hover:-translate-x-1 hover:-translate-y-1 transition"
          >
            X
          </button>
        </div>

        {/* PROJECT LIST */}
        <div className="space-y-10">
          <ProjectCard
            title="WorkPilot – Employee Management System"
            placeholder="WorkPilot Screenshot Coming Soon"
            description="Production-grade backend with JWT, OAuth2, auditing, salary module, attendance, logging, global exception handling, DTO mapping."
            tags={["Java", "Spring Boot", "JWT", "OAuth2", "MySQL"]}
            onView={() => setActiveProject(PROJECT_DATA.workpilot)}
          />

          <ProjectCard
            title="Distributed Blockchain for Supply Chain"
            placeholder="Blockchain Diagram Coming Soon"
            description="Multi-node blockchain with WebSockets, ECDSA signing, SHA-256 hashing, mining, and MongoDB ledger."
            tags={["Java", "Spring Boot", "WebSockets", "ECDSA", "MongoDB"]}
            onView={() => setActiveProject(PROJECT_DATA.blockchain)}
          />

          <ProjectCard
            title="Real-Time Currency Converter (React)"
            placeholder="Currency UI Screenshot Coming Soon"
            description="Live converter for 200+ currencies with reusable components and custom hooks."
            tags={["React", "Tailwind", "API"]}
            onView={() => setActiveProject(PROJECT_DATA.currency)}
          />

           <ProjectCard
            title="Momento Chat Application"
            placeholder="Momento Screenshot Coming Soon"
            description="Real time chat application using WebSockets (STOMP), dockerized the backend and deployed it on AWS and deployed react frontend on Ngnix"
            tags={["Java", "Spring Boot", "React" , "Redis" , "Docker", "AWS (s3)"]}
            onView={() => setActiveProject(PROJECT_DATA.momento)}
          />

           <ProjectCard
            title="Distributed Job orchestration System"
            placeholder="JOB scheduler Screenshot Coming Soon"
            description="Distributed Job Scheduler using Springboot and Kafka on microservices architecture ensured idempotency accross nodes"
            tags={["Java", "Spring Boot", "Microservices" , "MYSQL" , "Docker", "Kafka"]}
            onView={() => setActiveProject(PROJECT_DATA.jobScheduler)}
          />
        </div>
      </motion.div>

      {/* DETAIL POPUP */}
      <ProjectDetailPanel
        project={PROJECT_DATA[activeProject]}
        onClose={() => setActiveProject(null)}
      />
    </div>
  );
}

/* --------------------------------------------
   PROJECT CARD COMPONENT
-------------------------------------------- */
function ProjectCard({ title, description, placeholder, tags, onView }) {
  return (
    <div className="border-4 border-black p-5 shadow-[8px_8px_0_0_#000] bg-[#fffff0]">
      <div className="w-full h-40 bg-gray-200 border-4 border-black shadow-[4px_4px_0_0_#000]
                      flex items-center justify-center mb-4 ">
        <span className="text-xs uppercase opacity-60">{placeholder}</span>
      </div>

      <h3 className="text-2xl font-black">{title}</h3>
      <p className="text-sm mt-3 opacity-80">{description}</p>

      <StackTags tags={tags} />

      <button
        onClick={onView}
        className="mt-5 px-4 py-2 border-2 border-black bg-[#22c55e] shadow-[4px_4px_0_0_#000]
                   text-sm font-bold uppercase hover:-translate-x-1 hover:-translate-y-1 transition"
      >
        View Details
      </button>
    </div>
  );
}

/* --------------------------------------------
   STACK TAGS
-------------------------------------------- */
function StackTags({ tags }) {
  return (
    <div className="flex flex-wrap gap-2 mt-4">
      {tags.map((t, i) => (
        <span
          key={i}
          className="px-2 py-1 text-xs border-2 border-black bg-yellow-200 
                     shadow-[3px_3px_0_0_#000] font-semibold"
        >
          {t}
        </span>
      ))}
    </div>
  );
}
