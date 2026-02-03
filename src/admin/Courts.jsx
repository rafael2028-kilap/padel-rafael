import { useState } from "react";
import AdminLayout from "./AdminLayout";

const defaultCourts = [
  { id: 1, name: "Court A", price: 100000, status: "Aktif" },
  { id: 2, name: "Court B", price: 120000, status: "Aktif" },
  { id: 3, name: "Court C", price: 150000, status: "Aktif" },
];

export default function Courts() {
  const [courts, setCourts] = useState(() => {
    const stored = JSON.parse(localStorage.getItem("padelCourts"));
    if (stored && stored.length) return stored;

    localStorage.setItem("padelCourts", JSON.stringify(defaultCourts));
    return defaultCourts;
  });

  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({ name: "", price: "" });
function addCourt(e) {
  e.preventDefault();

  const newCourt = {
    id: Date.now(),
    name: form.name,
    price: Number(form.price.replace(/\./g, "")),
    status: "Aktif",
  };

  const updated = [...courts, newCourt];
  setCourts(updated);
  localStorage.setItem("padelCourts", JSON.stringify(updated));

  setForm({ name: "", price: "" });
  setShowModal(false);
}


  function toggleStatus(id) {
    const updated = courts.map((c) =>
      c.id === id
        ? { ...c, status: c.status === "Aktif" ? "Nonaktif" : "Aktif" }
        : c
    );
    setCourts(updated);
    localStorage.setItem("padelCourts", JSON.stringify(updated));
  }

  function deleteCourt(id) {
    const updated = courts.filter((c) => c.id !== id);
    setCourts(updated);
    localStorage.setItem("padelCourts", JSON.stringify(updated));
  }

  return (
    <AdminLayout>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Daftar Court</h2>
        <button
          onClick={() => setShowModal(true)}
          className="bg-cyan-500 text-white px-4 py-2 rounded-lg hover:bg-cyan-600"
        >
          + Tambah Court
        </button>
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-2xl shadow overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-slate-100">
            <tr>
              <th className="p-4 text-left">Court</th>
              <th className="p-4 text-left">Harga / Jam</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Aksi</th>
            </tr>
          </thead>

          <tbody>
            {courts.map((c) => (
              <tr key={c.id} className="border-t hover:bg-slate-50">
                <td className="p-4 font-semibold">{c.name}</td>
                <td className="p-4">
                  Rp {c.price.toLocaleString("id-ID")}
                </td>
                <td className="p-4">
                  <span
                    className={`px-3 py-1 text-xs rounded-full font-medium
                    ${
                      c.status === "Aktif"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {c.status}
                  </span>
                </td>
                <td className="p-4 flex gap-3">
                  <button
                    onClick={() => toggleStatus(c.id)}
                    className="px-3 py-1 text-xs rounded-lg border hover:bg-slate-100"
                  >
                    Toggle
                  </button>
                  <button
                    onClick={() => deleteCourt(c.id)}
                    className="px-3 py-1 text-xs rounded-lg border text-red-600 hover:bg-red-50"
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))}

            {courts.length === 0 && (
              <tr>
                <td colSpan="4" className="p-6 text-center text-slate-400">
                  Tidak ada court
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* MODAL TAMBAH COURT */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <form
            onSubmit={addCourt}
            className="bg-white p-6 rounded-xl w-full max-w-md"
          >
            <h3 className="font-bold text-lg mb-4">Tambah Court</h3>

            <input
              className="border p-3 rounded w-full mb-3"
              placeholder="Nama Court"
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
              required
            />

            <input
              className="border p-3 rounded w-full mb-4"
              type="number"
              placeholder="Harga / Jam"
              value={form.price}
              onChange={(e) =>
                setForm({ ...form, price: e.target.value })
              }
              required
            />

            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="px-4 py-2 border rounded"
              >
                Batal
              </button>
              <button className="px-4 py-2 bg-cyan-500 text-white rounded">
                Simpan
              </button>
            </div>
          </form>
        </div>
      )}
    </AdminLayout>
  );
}
