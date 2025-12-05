// src/components/Panel/ExperienceCertPopup.jsx
import { motion } from "framer-motion";

export default function ExperienceCertPopup({ cert, onClose }) {
  if (!cert) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[999]"
    >
      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.7, opacity: 0 }}
        transition={{ type: "spring", stiffness: 60, damping: 18 }}
        className="bg-[#e9e4e4] border-4 border-black shadow-[12px_12px_0_0_#000]
                   w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6"
      >
        {/* HEADER */}
        <div className="flex justify-between items-center mb-4 border-b-4 border-black pb-3">
          <h2 className="text-xl font-black">{cert.company} Certificate</h2>

          <button
            onClick={onClose}
            className="px-3 py-1 border-2 border-black bg-red-400 shadow-[4px_4px_0_0_#000]"
          >
            X
          </button>
        </div>

        {/* CERTIFICATE IMAGE */}
        <div className="w-full border-4 border-black shadow-[6px_6px_0_0_#000] overflow-hidden bg-white">
          <img src={cert.certificate} className="w-full h-auto" />
        </div>

        {/* DOWNLOAD */}
        <a
          href={cert.certificate}
          download
          className="inline-block mt-4 px-4 py-2 border-2 border-black bg-[#22c55e]
                     shadow-[4px_4px_0_0_#000] text-sm font-bold uppercase"
        >
          Download PDF
        </a>
      </motion.div>
    </motion.div>
  );
}
