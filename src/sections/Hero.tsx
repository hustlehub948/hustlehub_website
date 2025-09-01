import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Hero() {
  return (
    <section id="home" className="relative py-20 overflow-hidden">
      {/* Ambient gradient lights behind for depth */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* Base soft gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(1200px_400px_at_20%_-100px,rgba(58,141,255,0.18),transparent_60%),radial-gradient(900px_400px_at_80%_-120px,rgba(108,99,255,0.18),transparent_60%)]" />
        {/* Glow blobs */}
        <div className="absolute -top-40 -left-32 w-[420px] h-[420px] rounded-full bg-blue-400/30 blur-3xl" />
        <div className="absolute top-20 -right-32 w-[420px] h-[420px] rounded-full bg-purple-400/30 blur-3xl" />
      </div>

      <div className="container relative z-10">
        {/* Glass main panel */}
        <div className="rounded-3xl border border-white/30 bg-white/10 backdrop-blur-2xl shadow-[0_16px_60px_rgba(0,0,0,0.12)] p-6 md:p-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* LEFT TEXT CONTENT */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              className="space-y-6"
            >
              <span className="inline-block px-4 py-1 rounded-full bg-white/20 text-hhPurple text-sm font-medium backdrop-blur-sm">
                Full-stack digital services
              </span>

              <h1 className="text-4xl md:text-5xl font-extrabold text-hhDark">
                HustleHub — Your Digital Growth Partner
              </h1>

              <p className="text-lg text-hhDark/70 max-w-xl">
                From powerful websites to social media strategies, we connect
                businesses with world-class digital services designed to grow,
                secure, and scale your brand.
              </p>

              {/* Explore button */}
              <div>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-hhPurple text-hhPurple font-semibold hover:bg-hhPurple hover:text-white transition"
                >
                  Explore Services
                </a>
              </div>
            </motion.div>

            {/* RIGHT SHOWCASE (glass card for image) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="rounded-2xl border border-white/30 bg-white/10 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] p-6">
                <img
                  src="/heropic.png" // <-- replace with your actual image path
                  alt="HustleHub showcase"
                  className="h-56 md:h-64 w-full object-cover rounded-xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
