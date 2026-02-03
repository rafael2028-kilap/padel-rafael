import Sidebar from "./Sidebar";

export default function AdminLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-slate-100">
      <Sidebar />

      <main className="flex-1 p-4 md:p-6 overflow-x-auto">
        {children}
      </main>
    </div>
  );
}
