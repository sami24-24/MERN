function Login() {
  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <input className="w-full mb-3 p-2 border rounded" placeholder="Email" />
      <input className="w-full mb-3 p-2 border rounded" placeholder="Password" type="password" />
      <button className="w-full bg-blue-500 text-white p-2 rounded">Login</button>
    </div>
  );
}

export default Login;
