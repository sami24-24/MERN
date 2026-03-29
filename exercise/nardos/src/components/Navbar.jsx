function Navbar({ onPageChange }) {
  return (
    <nav className="bg-white shadow p-4 flex justify-center gap-32">
      <button onClick={() => onPageChange("home")} className="hover:text-blue-500">Home</button>
      <button onClick={() => onPageChange("login")} className="hover:text-blue-500">Login</button>
      <button onClick={() => onPageChange("register")} className="hover:text-blue-500">Register</button>
    </nav>
  );
}

export default Navbar;
