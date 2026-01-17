import { useState, useEffect } from "react";

const sections = ["beranda", "tentang", "reservasi", "kontak"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("beranda");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setActive(e.target.id);
          }
        });
      },
      {
        threshold: 0.55,
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-blue-950/70 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        {/* LOGO */}
        <h1 className="text-2xl md:text-3xl font-bold text-white">
          Padel <span className="text-cyan-300">Rafael</span>
        </h1>

        {/* DESKTOP */}
        <ul className="hidden md:flex items-center gap-10 text-white">
          {sections.map((item) => (
            <li key={item} className="relative">
              <a
                href={`#${item}`}
                className="capitalize hover:text-cyan-300 transition"
              >
                {item}
              </a>

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

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-xl
        transition-all duration-300
        ${open ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-10 text-white text-2xl">

          {sections.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => setOpen(false)}
              className={`capitalize transition ${
                active === item ? "text-cyan-300" : "text-white"
              }`}
            >
              {item}
            </a>
          ))}

          <button
            onClick={() => setOpen(false)}
            className="mt-10 text-sm text-white/60 hover:text-white"
          >
            Tutup
          </button>
        </div>
      </div>
    </header>
  );
}
