// Login component for user authentication
function Login() {
  // Return the JSX for the login form
  return (
    // Main container with horizontal padding, vertical padding, max width, and auto margins for centering
    <div className="px-12 py-6 max-w-md mx-auto">
      {/* Login heading */}
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      {/* Email input field */}
      <input className="w-full mb-8 p-2 border rounded" placeholder="Email" />
      {/* Password input field */}
      <input className="w-full mb-3 p-2 border rounded" placeholder="Password" type="password" />
      {/* Login button */}
      <button className="w-full bg-blue-500 text-white p-2 rounded">Login</button>
    </div>
  );
}

// Export the Login component as default
export default Login;
