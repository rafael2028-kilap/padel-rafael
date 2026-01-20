import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Home";
import Admin from "./components/Admin";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* WEBSITE UTAMA */}
        <Route path="/" element={<Home />} />

        {/* ADMIN HARDCODED */}
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
