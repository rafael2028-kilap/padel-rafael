import AdminLayout from "./AdminLayout";

export default function Booking() {
  const bookings =
    JSON.parse(localStorage.getItem("padelBookings")) || [];

  const income = bookings.reduce((sum, b) => sum + b.price, 0);

  return (
    <AdminLayout>
      <h2 className="text-2xl font-bold mb-6">Data Booking</h2>

      {/* summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <SummaryCard title="Total Booking" value={bookings.length} />
        <SummaryCard
          title="Total Pendapatan"
          value={`Rp ${income.toLocaleString("id-ID")}`}
        />
      </div>

      {/* table */}
      <div className="bg-white rounded-2xl shadow overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-slate-100">
            <tr>
              <th className="p-4 text-left">Team</th>
              <th className="p-4 text-left">Court</th>
              <th className="p-4 text-left">Tanggal</th>
              <th className="p-4 text-left">Jam</th>
              <th className="p-4 text-left">Harga</th>
            </tr>
          </thead>

          <tbody>
            {bookings.map((b) => (
              <tr
                key={b.id}
                className="border-t hover:bg-slate-50"
              >
                <td className="p-4 font-medium">{b.team}</td>

                <td className="p-4">
                  <span className="px-3 py-1 text-xs rounded-full bg-cyan-100 text-cyan-700">
                    {b.court}
                  </span>
                </td>

                <td className="p-4">{b.date}</td>
                <td className="p-4">{b.time}:00</td>
                <td className="p-4 font-semibold">
                  Rp {b.price.toLocaleString("id-ID")}
                </td>
              </tr>
            ))}

            {bookings.length === 0 && (
              <tr>
                <td colSpan="5" className="p-8 text-center text-slate-400">
                  Belum ada booking
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
}

function SummaryCard({ title, value }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <p className="text-sm text-slate-500">{title}</p>
      <p className="text-2xl font-bold mt-2">{value}</p>
    </div>
  );
}
