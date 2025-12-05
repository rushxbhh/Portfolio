import { motion } from "framer-motion";

function ContactPanel({ onClose }) {

  // Detect Mobile
const isMobile = window.innerWidth < 640;

  return (
   <motion.div
  initial={{ y: "100%", opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  exit={{ y: "100%", opacity: 0 }}
  transition={{ type: "spring", stiffness: 70, damping: 15 }}
  className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex justify-center"
>
  <motion.div
    className="
      w-full h-full max-w-xl 
      bg-white border-l-4 border-r-4 border-black 
      shadow-[0px_8px_0_0_#000] 
      p-6 overflow-y-auto
      rounded-none
    "
  >
    {/* ⭐ YOUR EXISTING CONTACT CONTENT STAYS SAME BELOW */}
        {/* HEADER */}
        <div className="flex justify-between items-center mb-6 border-b-4 border-black pb-3">
          <div>
            {/* <p className="text-xs uppercase tracking-[0.25em]">Door // Connect</p> */}
            <h2 className="text-4xl font-black">GET IN TOUCH</h2>
          </div>

          <button
            onClick={onClose}
            className="px-3 py-1 border-2 border-black bg-red-400 shadow-[3px_3px_0_0_#000] font-bold 
                       hover:-translate-x-1 hover:-translate-y-1 transition"
          >
            X
          </button>
        </div>

        {/* TERMINAL INTRO */}
        <div className="border-4 border-black p-4 shadow-[6px_6px_0_0_#000] bg-[#111827] text-[#22c55e] text-sm mb-6">
          <pre className="whitespace-pre-wrap">
{`> initializing communication protocol...
> verifying identity...
> status: secure
> channel: open
`}
          </pre>
        </div>

        {/* CONTACT BLOCKS */}
        <div className="space-y-4">
          <ContactCard
            label="Email"
            value="rushabhsinghbaghel@gmail.com"
            color="#38bdf8"
            href="mailto:rushabhsinghbaghel@gmail.com"
          />

          <ContactCard
            label="GitHub"
            value="github.com/rushabh"
            color="#22c55e"
            href="https://github.com/rushxbhh"
          />

          <ContactCard
            label="LinkedIn"
            value="linkedin.com/in/rushabhsinghbaghel"
            color="#f97316"
            href="https://www.linkedin.com/in/rushabh-singh-baghel-1795a22a5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          />

          <ContactCard
            label="Resume"
            value="Download PDF"
            color="#e11d48"
            href="/assets/resume.pdf"
          />
        </div>

        {/* AVAILABILITY */}
        <div className="mt-8 border-4 border-black p-4 bg-white shadow-[6px_6px_0_0_#000]">
          <h3 className="text-lg font-bold uppercase">Availability</h3>
          <p className="text-sm mt-2">
            Open to internship roles, freelance projects, and SDE opportunities.
          </p>
          <p className="text-xs mt-1 opacity-70">Response time: 1–6 hours</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default ContactPanel;



/* --------------------------------------------
   Contact Card (no changes needed)
-------------------------------------------- */

function ContactCard({ label, value, href, color }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block border-4 border-black p-4 bg-white shadow-[6px_6px_0_0_#000] 
                 hover:-translate-x-1 hover:-translate-y-1 transition"
    >
      <div className="flex justify-between items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] font-bold">{label}</p>
          <p className="text-sm font-semibold">{value}</p>
        </div>

        <span
          className="w-4 h-4 border-2 border-black"
          style={{ backgroundColor: color }}
        ></span>
      </div>
    </a>
  );
}
