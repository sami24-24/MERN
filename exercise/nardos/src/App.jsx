import { useState } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Application from "./pages/Application";

export default function App() {
  const [page, setPage] = useState("home");

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-white shadow p-4 flex justify-center gap-4">
        <button onClick={() => setPage("home")} className="hover:text-blue-500">Home</button>
        <button onClick={() => setPage("login")} className="hover:text-blue-500">Login</button>
        <button onClick={() => setPage("register")} className="hover:text-blue-500">Register</button>
        <button onClick={() => setPage("application")} className="hover:text-blue-500">Application</button>
      </nav>

      {/* Pages */}
      {page === "home" && <Home />}
      {page === "login" && <Login />}
      {page === "register" && <Register />}
      {page === "application" && <Application />}
    </div>
  );
}
