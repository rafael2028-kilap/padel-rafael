import { useState, useEffect } from "react";

const sections = ["beranda", "tentang", "reservasi", "kontak"];

const Navbar = () => {
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
      { threshold: 0.6 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-blue-900/70">
      <div className="container mx-auto px-6 py-6 flex items-center justify-between">

        {/* LOGO */}
        <h1 className="text-4xl font-bold text-white">
          Padel Rafael
        </h1>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-10 text-white text-lg">
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
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-3xl"
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden fixed inset-0 bg-slate-900/90 backdrop-blur-xl
        transition-all duration-300 z-40
        ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
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
            className="mt-10 text-sm text-white/50 hover:text-white"
          >
            Tutup
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
