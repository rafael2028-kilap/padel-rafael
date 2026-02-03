import { NavLink } from "react-router-dom";

const menu = [
  { name: "Dashboard", path: "/admin" },
  { name: "Booking", path: "/admin/booking" },
  { name: "Courts", path: "/admin/courts" },
  { name: "Users", path: "/admin/users" },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-slate-900 text-white p-6 relative z-50">

      <h1 className="text-2xl font-bold text-cyan-400 mb-8">
        Admin Panel
      </h1>

      <nav className="space-y-3">
        {menu.map((m) => (
          <NavLink
            key={m.path}
            to={m.path}
            end
            className={({ isActive }) =>
              `block px-4 py-3 rounded-lg transition cursor-pointer
              ${isActive
                ? "bg-cyan-400 text-slate-900 font-semibold"
                : "hover:bg-white/10"}`
            }
          >
            {m.name}
          </NavLink>
        ))}
      </nav>

    </aside>
  );
}
