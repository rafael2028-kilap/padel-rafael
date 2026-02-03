import { NavLink } from "react-router-dom";
import {
  FiHome,
  FiCalendar,
  FiGrid,
  FiUsers,
  FiLogOut,
} from "react-icons/fi";

const menu = [
  {
    name: "Dashboard",
    path: "/admin",
    icon: <FiHome size={18} />,
  },
  {
    name: "Booking",
    path: "/admin/booking",
    icon: <FiCalendar size={18} />,
  },
  {
    name: "Courts",
    path: "/admin/courts",
    icon: <FiGrid size={18} />,
  },
  {
    name: "Users",
    path: "/admin/users",
    icon: <FiUsers size={18} />,
  },
];

export default function Sidebar() {
  function handleLogout() {
    // clear semua data frontend
    localStorage.clear();

    // redirect ke landing page GitHub Pages
    window.location.href =
      "https://rafael2028-kilap.github.io/padel-rafael/";
  }

  return (
    <aside className="w-64 min-h-screen bg-slate-900 text-white p-6 hidden md:flex flex-col">
      
      {/* Logo / Title */}
      <div className="mb-10">
        <h1 className="text-2xl font-bold text-cyan-400">
          Admin Panel
        </h1>
        <p className="text-xs text-slate-400 mt-1">
          Padel Booking System
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-2">
        {menu.map((m) => (
          <NavLink
            key={m.path}
            to={m.path}
            end
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg transition-all
              ${
                isActive
                  ? "bg-cyan-400 text-slate-900 font-semibold shadow"
                  : "text-slate-300 hover:bg-white/10 hover:text-white"
              }`
            }
          >
            {m.icon}
            <span>{m.name}</span>
          </NavLink>
        ))}
      </nav>

      {/* Logout */}
      <button
        onClick={handleLogout}
        className="flex items-center gap-3 px-4 py-3 rounded-lg
        text-slate-300 hover:bg-red-500 hover:text-white transition"
      >
        <FiLogOut size={18} />
        Logout
      </button>
    </aside>
  );
}
