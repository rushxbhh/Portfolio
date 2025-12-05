import { motion } from "framer-motion";

export default function ProjectDetailPanel({ project, onClose }) {
  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50"
    >
      <motion.div
        initial={{ scale: 0.7, opacity: 0, y: 40 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.7, opacity: 0, y: 40 }}
        transition={{
          type: "spring",
          stiffness: 60,
          damping: 20,
          mass: 0.6,
          delay: 0.15,
        }}
        className="w-full max-w-2xl max-h-[90vh] bg-white border-4 border-black 
                   shadow-[12px_12px_0_#000] p-6 overflow-y-auto rounded-xl"
      >
        {/* HEADER */}
        <div className="flex justify-between items-center mb-4 border-b-4 border-black pb-3">
          <h2 className="text-2xl font-black uppercase">{project.title}</h2>
          <button
            onClick={onClose}
            className="px-3 py-1 border-2 border-black bg-red-400 
                       shadow-[4px_4px_0_0_#000] font-bold hover:-translate-x-1 hover:-translate-y-1 transition"
          >
            X
          </button>
        </div>

        {/* IMAGE SLOT */}
        <div className="w-full h-48 bg-gray-200 border-4 border-black shadow-[6px_6px_0_0_#000] 
                        flex items-center justify-center rounded-lg mb-6">
          <span className="text-xs opacity-60 uppercase">
            {project.imagePlaceholder}
          </span>
        </div>

        {/* DESCRIPTION */}
        <p className="text-sm opacity-80 mb-4">{project.description}</p>

        {/* FEATURES */}
        <h3 className="text-lg font-bold uppercase mt-4 mb-2">Key Features</h3>
        <ul className="list-disc pl-6 text-sm space-y-1">
          {project.features.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>

        {/* TECH STACK */}
        <h3 className="text-lg font-bold uppercase mt-6 mb-2">Tech Stack</h3>
        <div className="flex flex-wrap gap-2">
          {project.stack.map((s, i) => (
            <span 
              key={i}
              className="px-2 py-1 border-2 border-black bg-yellow-200 shadow-[3px_3px_0_0_#000] text-xs font-semibold"
            >
              {s}
            </span>
          ))}
        </div>

        {/* CHALLENGES */}
        {project.challenges && (
          <>
            <h3 className="text-lg font-bold uppercase mt-6 mb-2">Challenges</h3>
            <ul className="list-disc pl-6 text-sm space-y-1">
              {project.challenges.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </>
        )}

        {/* LEARNINGS */}
        {project.learnings && (
          <>
            <h3 className="text-lg font-bold uppercase mt-6 mb-2">Learnings</h3>
            <ul className="list-disc pl-6 text-sm space-y-1">
              {project.learnings.map((l, i) => (
                <li key={i}>{l}</li>
              ))}
            </ul>
          </>
        )}

        {/* BUTTONS */}
        <div className="flex gap-3 mt-8">
          <a className="px-4 py-2 border-2 border-black bg-[#38bdf8] shadow-[4px_4px_0_0_#000] text-sm font-bold uppercase hover:-translate-x-1 hover:-translate-y-1 transition">
            Code
          </a>
          <a className="px-4 py-2 border-2 border-black bg-[#22c55e] shadow-[4px_4px_0_0_#000] text-sm font-bold uppercase hover:-translate-x-1 hover:-translate-y-1 transition">
            Demo
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}
