const accentMap = {
  projects: "#22c55e",
  education: "#e11d48",
  skills: "#38bdf8",
  certs: "#f97316",
  contact: "#a855f7",
  experience: "#0ea5e9",
};

export default function ModuleBlock({
  label,
  accent = "projects",
  onClick,
  bgImage = null,
}) {
  const color = accentMap[accent];

  return (
    <button
      onClick={onClick}
      className={`
        relative border-4 border-black bg-white
        rounded-xl overflow-hidden
        
        /* ⭐ Smaller, cleaner box size */
        h-[70px] sm:h-[95px]
        w-full

        flex items-center justify-center p-3 sm:p-4

        shadow-[4px_4px_0_#000] sm:shadow-[6px_6px_0_#000]
        transition-all duration-300 ease-out
        hover:scale-[1.04]
        hover:-rotate-1
        hover:shadow-[8px_8px_0_#000]
        active:scale-95
      `}
    >
      {bgImage && <div className="absolute inset-0 bg-black/20"></div>}

      {/* ⭐ Centered BIG heading */}
      <div className="relative z-10 flex flex-col items-center">
        <span className="text-lg sm:text-xl font-black uppercase tracking-wide text-center">
          {label}
        </span>

        {/* Small color square under heading */}
        <span
          className="w-3.5 h-3.5 border-2 border-black rounded-sm mt-1"
          style={{ backgroundColor: color }}
        ></span>
      </div>
    </button>
  );
}
