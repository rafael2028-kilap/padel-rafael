import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Navbar from "./components/Navbar";

// admin pages
import Dashboard from "./admin/Dashboard";
import Booking from "./admin/Booking";
import Courts from "./admin/Courts";
import Users from "./admin/Users";

export default function App() {
  return (
    <Routes>

      {/* USER WEBSITE */}
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <Home />
          </>
        }
      />

      {/* ADMIN DASHBOARD */}
      <Route path="/admin" element={<Dashboard />} />
      <Route path="/admin/booking" element={<Booking />} />
      <Route path="/admin/courts" element={<Courts />} />
      <Route path="/admin/users" element={<Users />} />

    </Routes>
  );
}
