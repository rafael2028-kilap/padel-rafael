import { useState, useEffect } from "react";

const sections = ["beranda", "tentang", "reservasi", "kontak"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("beranda");

  // ======================
  // SCROLL TO SECTION
  // ======================
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setOpen(false);
  };

  // ======================
  // LOCK SCROLL (MOBILE)
  // ======================
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [open]);

  // ======================
  // ACTIVE MENU OBSERVER
  // ======================
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6,
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ================= HEADER ================= */}
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-blue-900/80">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

          {/* LOGO */}
          <h1 className="text-2xl font-bold text-white">
            Padel <span className="text-cyan-300">Rafael</span>
          </h1>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex items-center gap-10 text-white">
            {sections.map((item) => (
              <li key={item} className="relative">
                <button
                  onClick={() => scrollToSection(item)}
                  className="capitalize hover:text-cyan-300 transition"
                >
                  {item}
                </button>

                {/* ACTIVE LINE */}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-cyan-300 transition-all duration-300 ${
                    active === item ? "w-full" : "w-0"
                  }`}
                />
              </li>
            ))}
          </ul>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-white text-3xl"
          >
            ☰
          </button>
        </div>
      </header>

      {/* ================= MOBILE MENU ================= */}
      {open && (
        <div className="fixed inset-0 z-9999 bg-slate-950/95 backdrop-blur-xl flex flex-col items-center justify-center gap-10 text-white text-2xl">

          {sections.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className={`capitalize transition ${
                active === item ? "text-cyan-300" : "text-white"
              }`}
            >
              {item}
            </button>
          ))}

          <button
            onClick={() => setOpen(false)}
            className="mt-10 px-8 py-2 border border-white/30 rounded-full text-sm hover:bg-white/10 transition"
          >
            Tutup
          </button>
        </div>
      )}
    </>
  );
}
