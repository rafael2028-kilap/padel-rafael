import { FaInstagram, FaTwitter, FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-32 text-white">

      <div className="container mx-auto px-6 md:px-12 py-20">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-14">

          {/* BRAND */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold">
              Padel <span className="text-cyan-300">Rafael</span>
            </h2>

            <p className="mt-4 text-slate-300 max-w-sm mx-auto md:mx-0 leading-relaxed">
              Platform reservasi lapangan padel modern. Cepat, simple,
              dan dirancang untuk pengalaman bermain yang lebih menyenangkan.
            </p>

            {/* SOCIAL */}
            <div className="flex justify-center md:justify-start gap-6 mt-6 text-white/70">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-300 transition"
              >
                Instagram
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-300 transition"
              >
                Twitter
              </a>

              <a
                href="https://wa.me/628xxxxxxxxx"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-300 transition"
              >
                WhatsApp
              </a>

              <a
                href="mailto:rafaelramosvalen21@gmail.com"
                className="hover:text-cyan-300 transition"
              >
                Email
              </a>
            </div>
          </div>

          {/* MENU */}
          <div className="text-center md:text-left">
            <h3 className="font-semibold mb-5 text-lg">Menu</h3>

            <ul className="space-y-3 text-slate-300">
              <li>
                <a href="#beranda" className="hover:text-cyan-300 transition">
                  Beranda
                </a>
              </li>

              <li>
                <a href="#tentang" className="hover:text-cyan-300 transition">
                  Tentang
                </a>
              </li>

              <li>
                <a href="#reservasi" className="hover:text-cyan-300 transition">
                  Reservasi
                </a>
              </li>

              <li>
                <a href="#kontak" className="hover:text-cyan-300 transition">
                  Kontak
                </a>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div className="text-center md:text-left">
            <h3 className="font-semibold mb-5 text-lg">Hubungi Kami</h3>

            <div className="space-y-3 text-slate-300">
              <p>📍 Jakarta, Indonesia</p>

              <p className="break-all md:break-normal">
                📧 rafaelramosvalen21@gmail.com
              </p>

              <p>⏰ 08:00 – 22:00</p>
            </div>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="mt-16 border-t border-white/10 pt-6 text-center text-white/40 text-sm">
          © 2026 Padel Rafael. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
