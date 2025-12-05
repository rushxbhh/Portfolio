import { motion } from "framer-motion";

function Hero({ onEnterLab }) {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6">
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 60, damping: 14 }}
        className="
          border-4 border-black p-6 sm:p-10 shadow-[8px_8px_0_0_#000] 
          bg-white w-full max-w-md text-center rounded-xl 
          hover:shadow-[12px_12px_0_0_#000] hover:-translate-y-1 
          transition-all duration-300
        "
      >
        {/* PHOTO */}
        <div className="
            w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-6 rounded-full border-4 border-black 
            shadow-[5px_5px_0_0_#000] overflow-hidden bg-white
        ">
          <img 
            src="/assets/pic.jpeg"
            alt="Rushabh Singh Baghel"
            className="w-full h-full object-cover"
          />
        </div>

        <p className="text-xs tracking-[0.25em] uppercase mb-2">Portfolio</p>

        <h1 className="text-3xl sm:text-4xl font-black leading-tight mb-4">
          RUSHABH <br /> SINGH BAGHEL
        </h1>

        <p className="text-sm sm:text-base mb-8 px-2">
          Backend engineer specializing in Java, Spring Boot, real-time communication, 
          distributed systems, and production-grade API ecosystems.
        </p>

        {/* BUTTON */}
        <motion.button
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.93 }}
          transition={{ type: "spring", stiffness: 220, damping: 12 }}
          onClick={onEnterLab}
          className="
            px-6 py-3 sm:px-8 sm:py-4 border-4 border-black bg-[#22c55e] rounded-lg 
            shadow-[5px_5px_0_0_#000] text-xs sm:text-sm uppercase font-black tracking-wider
          "
        >
          Start Exploration
        </motion.button>

      </motion.div>
    </section>
  );
}

export default Hero;
