import React, { useState } from "react";
import api from "../api/client";
import backgroundImage from "../assets/bg.png"; // use your background

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("Login clicked 🚀");
    console.log("Email:", email);
    console.log("Password:", password);

    setError("");
    setSuccess("");

    try {
      const response = await api.post("/api/auth/login", {
        email: email,
        password: password,
      });

      const token = response.data.token;
      localStorage.setItem("jbxtoken", token);
      setSuccess("✅ Login successful");
      console.log("Token stored:", token);

      // You can navigate to dashboard here
      // window.location.href = "/dashboard";
    } catch (err) {
      console.error("Login error:", err);
      setError("❌ Invalid email or password");
    }
  };

  return (
    <div
      className="relative flex items-center justify-center h-screen w-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-transparent"></div>

      <div className="relative z-10 backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl shadow-2xl p-8 w-[380px]">
        <h1 className="text-3xl font-semibold text-center mb-6 text-white tracking-wide">
          Welcome Back 👋
        </h1>
        <p className="text-center text-gray-300 text-sm mb-6">
          Find your dream job with JobBoardX
        </p>

        <form className="flex flex-col space-y-4" onSubmit={handleLogin}>
          {/* Email */}
          <div>
            <label className="block text-gray-200 text-sm mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 bg-white/20 text-white rounded-lg placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-200 text-sm mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 bg-white/20 text-white rounded-lg placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {error && <p className="text-red-400 text-sm">{error}</p>}
          {success && <p className="text-green-400 text-sm">{success}</p>}

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg mt-4 transition duration-200"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
