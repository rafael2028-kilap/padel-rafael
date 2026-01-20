// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import DataImage from "./data";
import { listProyek } from "./data";

import Reservation from "./components/Reservation";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

function Home() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section
        id="beranda"
        className="relative overflow-hidden"
      >
        <div className="absolute inset-0 -z-10 bg-linear-to-br from-slate-900 via-slate-800 to-blue-900" />
        <div className="absolute top-10 left-10 w-40 h-40 bg-blue-400/20 blur-3xl rounded-full -z-10" />
        <div className="absolute bottom-10 right-10 w-52 h-52 bg-cyan-400/20 blur-3xl rounded-full -z-10" />

        <div className="container mx-auto px-5 sm:px-6 md:px-12 pt-24 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6 text-center md:text-left"
            >
              <div className="backdrop-blur-xl bg-white/10 border border-white/20 shadow-xl
                              mx-auto md:mx-0 w-fit px-5 py-3 rounded-2xl flex items-center gap-3">
                <img
                  src={DataImage.HeroImage}
                  className="w-12 h-8 sm:w-16 sm:h-10 rounded-lg object-contain"
                  alt="Hero"
                />
                <span className="text-white/90 text-sm sm:text-base font-medium">
                  Main padel hari ini — energi naik, mood ikut hidup 🎾🔥
                </span>
              </div>

              <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold leading-tight max-w-xl mx-auto md:mx-0">
                Booking Lapangan Padel Lebih Mudah —
                <span className="block text-cyan-300"> Nikmati Permainannya</span>
              </h1>

              <p className="text-slate-300 leading-relaxed text-sm sm:text-base md:text-lg max-w-xl mx-auto md:mx-0">
                Website ini dirancang sebagai pengalaman reservasi padel modern —
                simple, cepat, dan nyaman untuk semua pemain.
              </p>

              <div className="flex justify-center md:justify-start">
                <a href="#reservasi">
                  <button className="px-6 py-3 rounded-xl bg-cyan-400 text-slate-900 font-semibold hover:scale-105 transition">
                    Mulai Booking
                  </button>
                </a>
              </div>
            </motion.div>

            {/* RIGHT IMAGE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex justify-center items-center"
            >
              <img
                src={DataImage.HeroImage}
                alt="Padel Court"
                className="w-full max-w-sm rounded-3xl object-cover shadow-2xl"
              />
            </motion.div>

          </div>
        </div>
      </section>

      {/* ================= GALLERY ================= */}
      <section className="mt-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 place-items-center">
            {listProyek.map((item) => (
              <div
                key={item.id}
                className="group transition-transform duration-500 hover:scale-105"
              >
                <img
                  src={item.gambar}
                  alt=""
                  className="object-contain rounded-xl
                    drop-shadow-[0_25px_60px_rgba(0,0,0,0.55)]
                    group-hover:drop-shadow-[0_40px_90px_rgba(56,189,248,0.4)]
                    transition-all duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TENTANG ================= */}
      <section id="tentang" className="mt-24 py-10">
        <div className="container mx-auto px-6 md:px-12 max-w-3xl space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Tentang Padel
          </h2>

          <p className="text-slate-300 leading-relaxed">
            Padel adalah olahraga modern yang memadukan tenis dan squash,
            populer karena fun, ringan, dan cocok semua usia.
          </p>
        </div>
      </section>

      {/* ================= RESERVASI ================= */}
      <section id="reservasi" className="mt-5 py-5">
        <Reservation />
      </section>

      {/* ================= KONTAK ================= */}
      <section id="kontak" className="mt-24">
        <ContactSection />
      </section>

      {/* ================= FOOTER ================= */}
      <Footer />
    </>
  );
}

export default Home;
