import { useState } from "react";
import Sidebar from "./Sidebar";
import { FiMenu } from "react-icons/fi";

export default function AdminLayout({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-100 flex">
      
      {/* Sidebar Desktop */}
      <Sidebar />

      {/* Sidebar Mobile */}
      {open && (
        <div className="fixed inset-0 z-50 flex md:hidden">
          <div
            className="fixed inset-0 bg-black/40"
            onClick={() => setOpen(false)}
          />
          <div className="relative w-64 bg-slate-900">
            <Sidebar mobile onClose={() => setOpen(false)} />
          </div>
        </div>
      )}

      {/* Content */}
      <div className="flex-1 w-full">
        
        {/* Topbar Mobile */}
        <div className="md:hidden bg-white shadow px-4 py-3 flex items-center gap-3">
          <button onClick={() => setOpen(true)}>
            <FiMenu size={22} />
          </button>
          <h1 className="font-bold">Admin Panel</h1>
        </div>

        <main className="p-4 md:p-6">{children}</main>
      </div>
    </div>
  );
}
