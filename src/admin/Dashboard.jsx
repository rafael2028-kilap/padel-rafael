import AdminLayout from "./AdminLayout";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Dashboard() {
  const bookings =
    JSON.parse(localStorage.getItem("padelBookings")) || [];

  const courts =
    JSON.parse(localStorage.getItem("padelCourts")) || [];

  const users =
    JSON.parse(localStorage.getItem("padelUsers")) || [];

  const income = bookings.reduce(
    (sum, b) => sum + b.price,
    0
  );

  const activeCourts = courts.filter(
    (c) => c.status === "Aktif"
  ).length;

  // data grafik: jumlah booking per court
  const chartData = courts.map((court) => ({
    name: court.name,
    total: bookings.filter(
      (b) => b.court === court.name
    ).length,
  }));

  return (
    <AdminLayout>
      <h2 className="text-2xl font-bold mb-6">
        Dashboard Admin
      </h2>

      {/* STAT CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        <Card title="Total Booking" value={bookings.length} />
        <Card title="Court Aktif" value={activeCourts} />
        <Card
          title="Pendapatan"
          value={`Rp ${income.toLocaleString("id-ID")}`}
        />
        <Card title="User Aktif" value={users.length} />
      </div>

      {/* CHART */}
      <div className="bg-white p-6 rounded-2xl shadow">
        <h3 className="font-semibold mb-4">
          Booking per Court
        </h3>

        {chartData.length === 0 ? (
          <p className="text-slate-400 text-sm">
            Belum ada data booking
          </p>
        ) : (
          <ResponsiveContainer width="100%" height={320}>
            <BarChart data={chartData}>
              <XAxis dataKey="name" />
              <YAxis allowDecimals={false} />
              <Tooltip />
              <Bar
                dataKey="total"
                fill="#22d3ee"
                radius={[6, 6, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        )}
      </div>
    </AdminLayout>
  );
}

function Card({ title, value }) {
  return (
    <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition">
      <p className="text-sm text-slate-500">{title}</p>
      <p className="text-2xl font-bold mt-2">{value}</p>
    </div>
  );
}
