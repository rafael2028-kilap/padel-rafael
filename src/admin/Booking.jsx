import AdminLayout from "./AdminLayout";

export default function Booking() {
  const bookings =
    JSON.parse(localStorage.getItem("padelBookings")) || [];

  return (
    <AdminLayout>
      <h2 className="text-2xl font-bold mb-6">
        Data Booking
      </h2>

      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-slate-100">
            <tr>
              <th className="p-4 text-left">Team</th>
              <th className="p-4 text-left">Court</th>
              <th className="p-4 text-left">Date</th>
              <th className="p-4 text-left">Time</th>
              <th className="p-4 text-left">Price</th>
            </tr>
          </thead>

          <tbody>
            {bookings.map((b) => (
              <tr key={b.id} className="border-t">
                <td className="p-4">{b.team}</td>
                <td className="p-4">{b.court}</td>
                <td className="p-4">{b.date}</td>
                <td className="p-4">{b.time}:00</td>
                <td className="p-4">
                  Rp {b.price.toLocaleString("id-ID")}
                </td>
              </tr>
            ))}

            {bookings.length === 0 && (
              <tr>
                <td colSpan="5" className="p-6 text-center text-slate-400">
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
