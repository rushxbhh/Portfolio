import { motion } from "framer-motion";

export default function CertificateDetailPanel({ cert, onClose }) {
  if (!cert) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
    >
      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.7, opacity: 0 }}
        transition={{ type: "spring", stiffness: 60, damping: 18 }}
        className="bg-white border-4 border-black shadow-[12px_12px_0_0_#000] 
                    w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6"
      >
        {/* HEADER */}
        <div className="flex justify-between items-center mb-4 border-b-4 border-black pb-3">
          <h2 className="text-xl font-black">{cert.title}</h2>

          <button
            onClick={onClose}
            className="px-3 py-1 border-2 border-black bg-red-400 shadow-[4px_4px_0_0_#000] 
                      font-bold hover:-translate-x-1 hover:-translate-y-1 transition"
          >
            X
          </button>
        </div>

        {/* CERT IMAGE */}
        <div className="w-full h-auto border-4 border-black shadow-[6px_6px_0_0_#000] overflow-hidden">
          <img
            src={cert.image}
            alt={cert.title}
            className="w-full h-auto"
          />
        </div>

        {/* DETAILS */}
        <div className="mt-4 space-y-2">
          <p className="text-sm">
            <strong>Issuer:</strong> {cert.issuer}
          </p>
          <p className="text-sm">
            <strong>Year:</strong> {cert.year}
          </p>

          <a
            href={cert.pdf}
            target="_blank"
            className="inline-block mt-4 px-4 py-2 border-2 border-black bg-[#22c55e] 
                       shadow-[4px_4px_0_0_#000] text-sm uppercase font-bold hover:-translate-x-1 hover:-translate-y-1 transition"
          >
            Download PDF
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}
