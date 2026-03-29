import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

export default function App() {
  const [page, setPage] = useState("home");

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar onPageChange={setPage} />

      {/* Pages */}
      {page === "home" && <Home />}
      {page === "login" && <Login />}
      {page === "register" && <Register />}

      <Footer />
    </div>
  );
}
