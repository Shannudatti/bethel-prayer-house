import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        "https://bethel-prayer-house.onrender.com/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.detail || "Invalid email or password"
        );
      }

      // Store JWT
      localStorage.setItem(
        "access_token",
        data.access_token
      );

      // Store admin/team information
      localStorage.setItem(
        "admin_user",
        JSON.stringify(data.data)
      );

      // Redirect to dashboard
      navigate("/admin");

    } catch (error) {
      console.error("Login error:", error);

      setError(
        error.message ||
        "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">

      <div className="w-full max-w-md">

        {/* HEADER */}
        <div className="text-center mb-8">

          <div className="w-20 h-20 mx-auto mb-5 rounded-full bg-yellow-400 flex items-center justify-center text-black text-4xl">
            🙏
          </div>

          <h1 className="text-4xl font-bold text-yellow-400">
            Admin Login
          </h1>

          <p className="text-gray-400 mt-3">
            Bethel Prayer House
          </p>

        </div>

        {/* LOGIN CARD */}
        <form
          onSubmit={handleSubmit}
          className="bg-[#111827] border border-gray-800 rounded-3xl p-8 shadow-2xl"
        >

          {/* ERROR */}
          {error && (
            <div className="bg-red-500/10 border border-red-500/30 text-red-400 rounded-xl px-4 py-3 mb-6">
              {error}
            </div>
          )}

          {/* EMAIL */}
          <div className="mb-5">

            <label
              htmlFor="email"
              className="block text-gray-300 mb-2"
            >
              Email
            </label>

            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
              className="w-full bg-black border border-gray-700 rounded-xl px-4 py-3 text-white outline-none focus:border-yellow-400 transition"
            />

          </div>

          {/* PASSWORD */}
          <div className="mb-7">

            <label
              htmlFor="password"
              className="block text-gray-300 mb-2"
            >
              Password
            </label>

            <input
              id="password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Enter your password"
              className="w-full bg-black border border-gray-700 rounded-xl px-4 py-3 text-white outline-none focus:border-yellow-400 transition"
            />

          </div>

          {/* LOGIN BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-yellow-400 hover:bg-yellow-500 disabled:bg-gray-500 disabled:cursor-not-allowed text-black font-bold py-4 rounded-xl text-lg transition"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>

        </form>

      </div>

    </div>
  );
}

export default AdminLogin;