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

export default function Sidebar({ mobile = false, onClose }) {
  function handleLogout() {
    localStorage.clear();
    window.location.href =
      "https://rafael2028-kilap.github.io/padel-rafael/";
  }

  return (
    <aside
      className={`w-64 min-h-screen bg-slate-900 text-white p-6 flex flex-col
      ${mobile ? "" : "hidden md:flex"}`}
    >
      {/* Header */}
      <div className="mb-10 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-cyan-400">
          Admin Panel
        </h1>

        {mobile && (
          <button
            onClick={onClose}
            className="text-white text-xl"
          >
            ✕
          </button>
        )}
      </div>

      {/* Menu */}
      <nav className="flex-1 space-y-2">
        {menu.map((m) => (
          <NavLink
            key={m.path}
            to={m.path}
            end
            onClick={mobile ? onClose : undefined}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg transition
              ${
                isActive
                  ? "bg-cyan-400 text-slate-900 font-semibold"
                  : "text-slate-300 hover:bg-white/10"
              }`
            }
          >
            {m.icon}
            {m.name}
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


