import AdminLayout from "./AdminLayout";

export default function Dashboard() {
  const bookings =
    JSON.parse(localStorage.getItem("padelBookings")) || [];

  const income = bookings.reduce(
    (sum, b) => sum + b.price,
    0
  );

  return (
    <AdminLayout>
      <h2 className="text-2xl font-bold mb-6">
        Dashboard Admin
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

        <Card title="Total Booking" value={bookings.length} />
        <Card title="Court Aktif" value="3" />
        <Card title="Pendapatan" value={`Rp ${income.toLocaleString("id-ID")}`} />
        <Card title="User Aktif" value="-" />

      </div>
    </AdminLayout>
  );
}

function Card({ title, value }) {
  return (
    <div className="bg-white p-5 rounded-xl shadow">
      <p className="text-sm text-slate-500">{title}</p>
      <p className="text-2xl font-bold mt-2">{value}</p>
    </div>
  );
}
