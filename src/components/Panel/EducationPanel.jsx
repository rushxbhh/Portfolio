import { motion } from "framer-motion";

export default function EducationPanel({ onClose }) {

  const panelVariants = {
    hidden: { x: "-100%", opacity: 1 },

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
  x: "-100%",
  opacity: 1,
  transition: {
    type: "spring",
    stiffness: 160,
    damping: 20,
    mass: 0.55,
  },
},
  };

  const lineVariants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: {
        duration: 0.8,
        delay: 0.3,
        ease: "easeOut",
      },
    },
  };

  const entryVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.45 + i * 0.35,
        duration: 0.7,
        ease: "easeOut",
      },
    }),
  };

  return (
   <div
  className="
    fixed inset-0 bg-black/30 backdrop-blur-sm z-50
    flex items-start justify-start
    md:items-start md:justify-start
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
          bg-[#e9e4e4] border-t-4 md:border-t-0 md:border-r-4 border-black 
          shadow-[0px_-8px_0_0_#000] md:shadow-[6px_6px_0_0_#000]
           md:rounded-none
          p-5 md:p-6 overflow-y-auto
        "
      >
        {/* HEADER */}
        <div className="flex justify-between items-center mb-6 border-b-4 border-black pb-3">
          <div>
            <h2 className="text-4xl font-black">ACADEMIC JOURNEY</h2>
          </div>

          <button
            onClick={onClose}
            className="px-3 py-1 border-2 border-black bg-red-400 shadow-[3px_3px_0_0_#000] 
                       font-bold hover:-translate-x-1 hover:-translate-y-1 transition"
          >
            X
          </button>
        </div>

        {/* TIMELINE */}
        <div className="relative pl-6">
          {/* Vertical Line */}
          <motion.div
            variants={lineVariants}
            initial="hidden"
            animate="visible"
            className="absolute left-0 top-0 w-1 bg-black rounded-full h-full"
          ></motion.div>

          <div className="space-y-10">
            {/* ENTRY 1 */}
            <motion.div
              custom={0}
              variants={entryVariants}
              initial="hidden"
              animate="visible"
              className="relative"
            >
              <span className="absolute -left-[18px] top-1 w-4 h-4 bg-black border-2 border-black rounded-full"></span>

              <h3 className="text-lg font-black">10th Board — MP Board</h3>
              <p className="text-xs mt-1">2020</p>

              <div className="mt-3 border-4 border-black p-3 bg-[#fffff0] shadow-[5px_5px_0_0_#000]">
                <p className="text-sm">
                  Secured <strong>89.6%</strong>.
                </p>
              </div>
            </motion.div>

            {/* ENTRY 2 */}
            <motion.div
              custom={1}
              variants={entryVariants}
              initial="hidden"
              animate="visible"
              className="relative"
            >
              <span className="absolute -left-[18px] top-1 w-4 h-4 bg-black border-2 border-black rounded-full"></span>

              <h3 className="text-lg font-black">12th Board — MP Board</h3>
              <p className="text-xs mt-1">2022</p>

              <div className="mt-3 border-4 border-black p-3 bg-[#fffff0] shadow-[5px_5px_0_0_#000]">
                <p className="text-sm">
                  Completed PCM with <strong>85.6%</strong>.
                </p>
              </div>
            </motion.div>

            {/* ENTRY 3 */}
            <motion.div
              custom={2}
              variants={entryVariants}
              initial="hidden"
              animate="visible"
              className="relative"
            >
              <span className="absolute -left-[18px] top-1 w-4 h-4 bg-black border-2 border-black rounded-full"></span>

              <h3 className="text-lg font-black">B.Tech — CSE</h3>
              <p className="text-xs mt-1">2021 — Present</p>
              <p className="text-xs opacity-80">Medicaps University</p>

              <div className="mt-3 border-4 border-black p-3 bg-[#fffff0] shadow-[5px_5px_0_0_#000]">
                <p className="text-sm">
                  Current CGPA: <strong>7.38</strong>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
