import { motion } from "framer-motion";

export default function UniversalPanel({ children, onClose, title }) {

  const isMobile = window.innerWidth < 768;

  const variants = {
    hidden: isMobile 
      ? { y: "100%" } 
      : { x: "100%" },

    visible: {
      y: 0,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 15,
      }
    },

    exit: isMobile 
      ? { y: "100%" }
      : { x: "100%" },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={variants}
      className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex justify-end md:justify-end"
    >
      {/* PANEL BODY */}
      <div className={`
        bg-white border-l-4 border-black shadow-[8px_0px_0_0_#000]
        h-full overflow-y-auto
        w-full 
        ${isMobile ? "max-w-full rounded-t-2xl" : "max-w-xl"}
      `}>

        {/* HEADER */}
        <div className="flex justify-between items-center p-5 border-b-4 border-black">
          <h2 className="text-2xl font-black">{title}</h2>

          <button
            onClick={onClose}
            className="px-3 py-1 border-2 border-black bg-red-400 
                       shadow-[3px_3px_0_0_#000] font-bold 
                       hover:-translate-x-1 hover:-translate-y-1 transition"
          >
            X
          </button>
        </div>

        <div className="p-5">
          {children}
        </div>
      </div>
    </motion.div>
  );
}
