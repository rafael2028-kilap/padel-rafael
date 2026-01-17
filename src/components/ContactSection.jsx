import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import BgContact from "/assets/proyek/backgroundkontak.png";

export default function ContactSection() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_padel",
        "template_contact",
        formRef.current,
        "4pXOSo9yFTL0f_5KX"
      )
      .then(
        () => {
          setLoading(false);
          setSuccess(true);
          formRef.current.reset();
          setTimeout(() => setSuccess(false), 5000);
        },
        (error) => {
          setLoading(false);
          alert("Gagal mengirim pesan. Coba lagi.");
          console.error(error);
        }
      );
  };

  return (
    <section className="relative w-full py-28 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${BgContact})` }}
      />
      <div className="absolute inset-0 -z-10 bg-slate-900/80 backdrop-blur-sm" />

      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">

          {/* LEFT */}
          <div className="space-y-6 text-white">
            <h2 className="text-4xl font-bold">
              Hubungi <span className="text-cyan-300">Padel Rafael</span>
            </h2>

            <p className="text-white/70 leading-relaxed">
              Mau booking lapangan, tanya jadwal, atau kolaborasi?
              Kirim pesan lewat form ini dan kami akan membalas ke email kamu.
            </p>

            <div className="space-y-4 text-sm text-white/70">
              <p>📍 Jakarta, Indonesia</p>
              <p>⏰ Buka setiap hari — 08:00 s/d 22:00</p>
              <p>📧 rafaelramosvalen21@gmail.com</p>
            </div>
          </div>

          {/* RIGHT FORM */}
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="space-y-5"
          >
            <input
              type="text"
              name="name"
              placeholder="Nama kamu"
              required
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/40 focus:ring-2 focus:ring-cyan-400 outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="Email kamu"
              required
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/40 focus:ring-2 focus:ring-cyan-400 outline-none"
            />

            <input
              type="text"
              name="title"
              placeholder="Judul pesan"
              required
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/40 focus:ring-2 focus:ring-cyan-400 outline-none"
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Tulis pesan kamu..."
              required
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/40 focus:ring-2 focus:ring-cyan-400 outline-none resize-none"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl bg-linear-to-r from-cyan-400 to-blue-500 text-slate-900 font-bold hover:scale-105 transition disabled:opacity-50"
            >
              {loading ? "Mengirim..." : "Kirim ke Padel Rafael"}
            </button>

            {success && (
              <p className="text-green-400 text-sm text-center">
                ✅ Pesan berhasil dikirim.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
