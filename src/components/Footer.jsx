export default function Footer() {

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

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

            <div className="flex justify-center md:justify-start gap-6 mt-6 text-white/70">
              <span className="hover:text-cyan-300 transition cursor-pointer">Instagram</span>
              <span className="hover:text-cyan-300 transition cursor-pointer">Twitter</span>
              <span className="hover:text-cyan-300 transition cursor-pointer">WhatsApp</span>
              <span className="hover:text-cyan-300 transition cursor-pointer">Email</span>
            </div>
          </div>

          {/* MENU */}
          <div className="text-center md:text-left">
            <h3 className="font-semibold mb-5 text-lg">Menu</h3>

            <ul className="space-y-3 text-slate-300">

              <li>
                <button
                  onClick={() => scrollTo("beranda")}
                  className="hover:text-cyan-300 transition"
                >
                  Beranda
                </button>
              </li>

              <li>
                <button
                  onClick={() => scrollTo("tentang")}
                  className="hover:text-cyan-300 transition"
                >
                  Tentang
                </button>
              </li>

              <li>
                <button
                  onClick={() => scrollTo("reservasi")}
                  className="hover:text-cyan-300 transition"
                >
                  Reservasi
                </button>
              </li>

              <li>
                <button
                  onClick={() => scrollTo("kontak")}
                  className="hover:text-cyan-300 transition"
                >
                  Kontak
                </button>
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
              <p>⏰ 08:00 – 19:00</p>
            </div>
          </div>

        </div>

        <div className="mt-16 border-t border-white/10 pt-6 text-center text-white/40 text-sm">
          © 2026 Padel Rafael. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
