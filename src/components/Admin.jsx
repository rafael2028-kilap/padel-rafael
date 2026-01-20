export default function Admin() {
  const bookings = [
    {
      id: 1,
      team: "Padel Alpha",
      court: "Court A",
      date: "2026-01-12",
      time: "18:00",
      price: 100000,
    },
    {
      id: 2,
      team: "Padel Bravo",
      court: "Court B",
      date: "2026-01-12",
      time: "20:00",
      price: 120000,
    },
    {
      id: 3,
      team: "Padel Sigma",
      court: "Court C",
      date: "2026-01-13",
      time: "19:00",
      price: 150000,
    },
  ];

  return (
    <div className="container mx-auto px-6 md:px-12 py-20 text-white">
      <h2 className="text-4xl font-bold mb-8">
        Admin <span className="text-cyan-300">Dashboard</span>
      </h2>

      {/* SUMMARY */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
        <div className="bg-white/5 rounded-2xl p-6">
          <p className="text-white/60">Total Booking</p>
          <p className="text-3xl font-bold text-cyan-300">
            {bookings.length}
          </p>
        </div>

        <div className="bg-white/5 rounded-2xl p-6">
          <p className="text-white/60">Pendapatan</p>
          <p className="text-3xl font-bold text-cyan-300">
            Rp{" "}
            {bookings
              .reduce((a, b) => a + b.price, 0)
              .toLocaleString("id-ID")}
          </p>
        </div>

        <div className="bg-white/5 rounded-2xl p-6">
          <p className="text-white/60">Court Aktif</p>
          <p className="text-3xl font-bold text-cyan-300">3</p>
        </div>
      </div>

      {/* TABLE */}
      <div className="bg-white/5 rounded-3xl overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-white/10">
            <tr>
              <th className="p-4">Tim</th>
              <th className="p-4">Court</th>
              <th className="p-4">Tanggal</th>
              <th className="p-4">Jam</th>
              <th className="p-4">Harga</th>
            </tr>
          </thead>

          <tbody>
            {bookings.map((b) => (
              <tr
                key={b.id}
                className="border-t border-white/10 hover:bg-white/5"
              >
                <td className="p-4">{b.team}</td>
                <td className="p-4">{b.court}</td>
                <td className="p-4">{b.date}</td>
                <td className="p-4">{b.time}</td>
                <td className="p-4 text-cyan-300 font-semibold">
                  Rp {b.price.toLocaleString("id-ID")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
