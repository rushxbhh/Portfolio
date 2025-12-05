import { motion } from "framer-motion";
import ModuleBlock from "./ModuleBlock";

export default function ModuleGrid({ setActivePanel }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 110, damping: 15 },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen flex flex-col items-center justify-center px-4"
    >
      <h2 className="text-2xl sm:text-3xl font-black mb-8 tracking-[0.25em] text-center">
        CHAPTERS OF MY CRAFT
      </h2>

      <motion.div
        variants={containerVariants}
        className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full max-w-2xl"
      >
        <motion.div variants={itemVariants}>
          <ModuleBlock
            label="DEVELOPED SOLUTIONS"
            accent="projects"
            onClick={() => setActivePanel("projects")}
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <ModuleBlock
            label="ACADEMIC JOURNEY"
            accent="education"
            onClick={() => setActivePanel("education")}
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <ModuleBlock
            label="CORE COMPETENCIES"
            accent="skills"
            onClick={() => setActivePanel("skills")}
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <ModuleBlock
            label="EARNED CREDENTIALS"
            accent="certs"
            onClick={() => setActivePanel("certs")}
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <ModuleBlock
            label="CAREER MILESTONES"
            accent="experience"
            onClick={() => setActivePanel("experience")}
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <ModuleBlock
            label="GET IN TOUCH"
            accent="contact"
            onClick={() => setActivePanel("contact")}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
