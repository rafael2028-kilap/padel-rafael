import AdminLayout from "./AdminLayout";

const courts = [
  { name: "Court A", price: 100000 },
  { name: "Court B", price: 120000 },
  { name: "Court C", price: 150000 },
];

export default function Courts() {
  return (
    <AdminLayout>
      <h2 className="text-2xl font-bold mb-6">
        Daftar Court
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {courts.map((c) => (
          <div key={c.name} className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-bold text-lg">{c.name}</h3>
            <p className="text-slate-500 mt-2">
              Harga / jam
            </p>
            <p className="text-cyan-500 font-semibold">
              Rp {c.price.toLocaleString("id-ID")}
            </p>
          </div>
        ))}
      </div>
    </AdminLayout>
  );
}
