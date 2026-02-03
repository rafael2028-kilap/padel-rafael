import { useState } from "react";
import AdminLayout from "./AdminLayout";

export default function Users() {
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("padelUsers")) || []
  );

  const [form, setForm] = useState({ name: "", email: "", title: "" });

  function addUser(e) {
    e.preventDefault();
    const updated = [...users, form];
    setUsers(updated);
    localStorage.setItem("padelUsers", JSON.stringify(updated));
    setForm({ name: "", email: "", title: "" });
  }

  return (
    <AdminLayout>
      <h2 className="text-2xl font-bold mb-6">Data Users</h2>

      <form
        onSubmit={addUser}
        className="bg-white p-6 rounded-xl shadow mb-6 grid md:grid-cols-4 gap-4"
      >
        <input
          className="border p-3 rounded"
          placeholder="Nama"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          className="border p-3 rounded"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          className="border p-3 rounded"
          placeholder="Role"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />
        <button className="bg-cyan-500 text-white rounded">
          Tambah
        </button>
      </form>

      <div className="bg-white rounded-xl shadow overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-slate-100">
            <tr>
              <th className="p-4">Nama</th>
              <th className="p-4">Email</th>

            </tr>
          </thead>
          <tbody>
            {users.map((u, i) => (
              <tr key={i} className="border-t hover:bg-slate-50">
                <td className="p-4">{u.name}</td>
                <td className="p-4">{u.email}</td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
}
