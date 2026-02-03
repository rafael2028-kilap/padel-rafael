import AdminLayout from "./AdminLayout";

export default function Users() {
  const users =
    JSON.parse(localStorage.getItem("padelUsers")) || [];

  return (
    <AdminLayout>
      <h2 className="text-2xl font-bold mb-6">
        Data Users
      </h2>

      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-slate-100">
            <tr>
              <th className="p-4 text-left">Nama</th>
              <th className="p-4 text-left">Email</th>
              <th className="p-4 text-left">Judul</th>
            </tr>
          </thead>

          <tbody>
            {users.map((u, i) => (
              <tr key={i} className="border-t">
                <td className="p-4">{u.name}</td>
                <td className="p-4">{u.email}</td>
                <td className="p-4">{u.title}</td>
              </tr>
            ))}

            {users.length === 0 && (
              <tr>
                <td colSpan="3" className="p-6 text-center text-slate-400">
                  Belum ada user
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
}
