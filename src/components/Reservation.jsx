import { useState } from "react";

const courts = [
  { name: "Court A", price: 100000, label: "Standard" },
  { name: "Court B", price: 120000, label: "Pro" },
  { name: "Court C", price: 150000, label: "VIP" },
];

const times = ["08","09","10","11","12","13","14","15","16","17","18","19"];

export default function Reservation() {
  const today = new Date();
  const [month, setMonth] = useState(today.getMonth());
  const [year, setYear] = useState(today.getFullYear());
  const [selectedDate, setSelectedDate] = useState(null);

  const [team, setTeam] = useState("");
  const [court, setCourt] = useState(courts[0]);
  const [selectedTimes, setSelectedTimes] = useState([]);

  const [bookings, setBookings] = useState(() => {
    const saved = localStorage.getItem("padelBookings");
    return saved ? JSON.parse(saved) : [];
  });

  const days = new Date(year, month + 1, 0).getDate();
  const total = selectedTimes.length * court.price;
  const dateKey = selectedDate ? `${selectedDate}-${court.name}` : null;

  const isBooked = (t) =>
    bookings.some((b) => b.key === dateKey && b.time === t);

  const toggleTime = (t) => {
    if (!selectedDate) return alert("Pilih tanggal dulu");
    if (isBooked(t)) return;
    setSelectedTimes((prev) =>
      prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]
    );
  };

  const confirmBooking = () => {
    if (!team || !selectedDate || selectedTimes.length === 0) {
      alert("Lengkapi data booking");
      return;
    }

    const newBookings = selectedTimes.map((t) => ({
      id: Date.now() + t,
      team,
      court: court.name,
      date: selectedDate,
      time: t,
      price: court.price,
      key: dateKey,
    }));

    const updated = [...bookings, ...newBookings];
    setBookings(updated);
    localStorage.setItem("padelBookings", JSON.stringify(updated));
    setSelectedTimes([]);
  };

  const deleteBooking = (id) => {
    const updated = bookings.filter((b) => b.id !== id);
    setBookings(updated);
    localStorage.setItem("padelBookings", JSON.stringify(updated));
  };

  return (
    <section
      id="reservasi"
      className="py-28 bg-linear-to-br from-blue-950 via-slate-900 to-blue-900"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

        {/* LEFT */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 space-y-6">
          <h2 className="text-3xl font-bold text-white">Booking Lapangan</h2>

          <input
            placeholder="Nama Tim"
            value={team}
            onChange={(e) => setTeam(e.target.value)}
            className="w-full bg-white/10 border border-white/20 px-4 py-3 rounded-xl text-white"
          />

          {/* Calendar */}
          <div>
            <div className="flex justify-between text-white mb-3">
              <button
                onClick={() => {
                  if (month === 0) {
                    setMonth(11);
                    setYear(year - 1);
                  } else setMonth(month - 1);
                }}
              >
                ‹
              </button>

              <span className="font-semibold">
                {new Date(year, month).toLocaleString("id-ID", {
                  month: "long",
                  year: "numeric",
                })}
              </span>

              <button
                onClick={() => {
                  if (month === 11) {
                    setMonth(0);
                    setYear(year + 1);
                  } else setMonth(month + 1);
                }}
              >
                ›
              </button>
            </div>

            <div className="grid grid-cols-7 gap-2">
              {Array.from({ length: days }, (_, i) => {
                const day = i + 1;
                const date = `${year}-${String(month+1).padStart(2,"0")}-${String(day).padStart(2,"0")}`;
                const past = new Date(date) < new Date().setHours(0,0,0,0);

                return (
                  <button
                    key={date}
                    disabled={past}
                    onClick={() => {
                      setSelectedDate(date);
                      setSelectedTimes([]);
                    }}
                    className={`py-2 rounded-lg ${
                      past
                        ? "bg-white/5 text-white/30"
                        : selectedDate === date
                        ? "bg-cyan-400 text-slate-900"
                        : "bg-white/10 text-white hover:bg-cyan-500/20"
                    }`}
                  >
                    {day}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col gap-6 h-180">

          {/* Time */}
          <div className="bg-white/5 rounded-2xl p-6">
            <p className="text-white mb-3">Pilih Jam</p>
            <div className="grid grid-cols-4 sm:grid-cols-6 gap-3">
              {times.map((t) => (
                <button
                  key={t}
                  onClick={() => toggleTime(t)}
                  className={`py-2 rounded-lg ${
                    isBooked(t)
                      ? "bg-red-500/30 text-red-300"
                      : selectedTimes.includes(t)
                      ? "bg-cyan-400 text-slate-900"
                      : "bg-white/10 text-cyan-300 hover:bg-cyan-500/20"
                  }`}
                >
                  {t}:00
                </button>
              ))}
            </div>
          </div>

          {/* Courts */}
          <div className="bg-white/5 rounded-2xl p-6">
            <p className="text-white mb-3">Pilih Court</p>
            <div className="grid grid-cols-3 gap-4">
              {courts.map((c) => (
                <button
                  key={c.name}
                  onClick={() => setCourt(c)}
                  className={`p-4 rounded-xl text-left ${
                    court.name === c.name
                      ? "bg-cyan-400 text-slate-900"
                      : "bg-white/10 text-white"
                  }`}
                >
                  <p className="font-bold">{c.name}</p>
                  <p className="text-sm">{c.label}</p>
                  <p className="text-sm">Rp {c.price.toLocaleString()}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Total */}
          <div className="bg-white/5 rounded-2xl p-6 flex justify-between text-white">
            <span>Total</span>
            <span className="text-cyan-300 font-bold">
              Rp {total.toLocaleString("id-ID")}
            </span>
          </div>

          <button
            onClick={confirmBooking}
            className="w-full py-3 rounded-xl bg-cyan-400 text-slate-900 font-bold hover:scale-105 transition"
          >
            Konfirmasi Booking
          </button>

          {/* History — FIXED HEIGHT, SCROLL */}
          <div className="flex-1 min-h-0 overflow-hidden">
            {bookings.length > 0 && (
              <div className="bg-white/5 rounded-2xl p-4 h-full overflow-y-auto space-y-3">
                <p className="text-white font-semibold mb-2">
                  Booking Aktif
                </p>

                {bookings.map((b) => (
                  <div
                    key={b.id}
                    className="flex justify-between items-center bg-white/5 px-3 py-2 rounded-lg text-sm text-white/80"
                  >
                    <span>
                      {b.team} — {b.date} — {b.time}:00
                    </span>
                    <button
                      onClick={() => deleteBooking(b.id)}
                      className="text-red-400 hover:text-red-300"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
