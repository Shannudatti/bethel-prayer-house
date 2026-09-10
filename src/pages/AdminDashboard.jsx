import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getPrayerRequests } from "../components/services/api";

const API_BASE_URL = "https://bethel-prayer-house.onrender.com";

function AdminDashboard() {
  const [prayerRequests, setPrayerRequests] = useState([]);
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const adminUser = JSON.parse(
    localStorage.getItem("admin_user") || "null"
  );

  // ==================================================
  // GET PRAYER REQUESTS
  // ==================================================

  const fetchPrayerRequests = async () => {
    try {
      setLoading(true);
      setError("");

      const data = await getPrayerRequests();

      setPrayerRequests(data.data || []);
    } catch (error) {
      console.error("Prayer requests error:", error);

      setError(
        error.message || "Unable to fetch prayer requests."
      );
    } finally {
      setLoading(false);
    }
  };

  // ==================================================
  // LOGOUT
  // ==================================================

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("admin_user");

    navigate("/admin/login");
  };

  // ==================================================
  // MARK AS PRAYED
  // ==================================================

  const handleMarkAsPrayed = async (prayerId) => {
    const token = localStorage.getItem("access_token");

    if (!token) {
      navigate("/admin/login");
      return;
    }

    try {
      const response = await fetch(
        `${API_BASE_URL}/api/prayer-requests/${prayerId}/status?status=prayed`,
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.detail || "Unable to update prayer status"
        );
      }

      // Refresh prayer requests
      await fetchPrayerRequests();
    } catch (error) {
      console.error("Mark as prayed error:", error);

      alert(error.message);
    }
  };

  // ==================================================
  // FILTER PRAYER REQUESTS
  // ==================================================

  const filteredPrayerRequests = prayerRequests.filter(
    (prayer) => {
      if (filter === "new") {
        return prayer.status === "new";
      }

      if (filter === "prayed") {
        return prayer.status === "prayed";
      }

      return true;
    }
  );

  // ==================================================
  // LOAD REQUESTS
  // ==================================================

  useEffect(() => {
    fetchPrayerRequests();
  }, []);

  // ==================================================
  // LOADING
  // ==================================================

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <p className="text-xl text-gray-400">
          Loading prayer requests...
        </p>
      </div>
    );
  }

  // ==================================================
  // ERROR
  // ==================================================

  if (error) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center p-6">
        <div className="text-center">
          <p className="text-red-400 text-xl mb-4">
            {error}
          </p>

          <button
            onClick={fetchPrayerRequests}
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-6 py-3 rounded-xl"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  // ==================================================
  // DASHBOARD
  // ==================================================

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="mb-8">

          {/* TOP HEADER */}
          <div className="flex items-center justify-between mb-6">

            <div>
              <p className="text-lg font-semibold">
                Welcome, {adminUser?.name} 👋
              </p>

              <p className="text-sm text-gray-400 capitalize">
                {adminUser?.role} Team
              </p>
            </div>

            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-semibold transition"
            >
              Logout
            </button>

          </div>

          {/* TITLE + TOTAL */}
          <div className="flex items-center justify-between mb-6">

            <div>
              <h1 className="text-4xl font-bold text-yellow-400">
                Prayer Requests
              </h1>

              <p className="text-gray-400 mt-2">
                Manage prayer requests from the church website.
              </p>
            </div>

            <div className="bg-[#111827] border border-gray-800 rounded-xl px-5 py-3">
              <span className="text-gray-400">
                Total
              </span>

              <span className="text-yellow-400 font-bold text-xl ml-2">
                {prayerRequests.length}
              </span>
            </div>

          </div>

          {/* FILTERS */}
          <div className="flex flex-wrap gap-3">

            {/* ALL */}
            <button
              onClick={() => setFilter("all")}
              className={`px-5 py-2 rounded-xl font-semibold transition ${
                filter === "all"
                  ? "bg-yellow-400 text-black"
                  : "bg-[#111827] text-gray-400 border border-gray-800 hover:text-white"
              }`}
            >
              All ({prayerRequests.length})
            </button>

            {/* NEW */}
            <button
              onClick={() => setFilter("new")}
              className={`px-5 py-2 rounded-xl font-semibold transition ${
                filter === "new"
                  ? "bg-yellow-400 text-black"
                  : "bg-[#111827] text-gray-400 border border-gray-800 hover:text-white"
              }`}
            >
              🟡 New (
              {
                prayerRequests.filter(
                  (prayer) => prayer.status === "new"
                ).length
              }
              )
            </button>

            {/* PRAYED */}
            <button
              onClick={() => setFilter("prayed")}
              className={`px-5 py-2 rounded-xl font-semibold transition ${
                filter === "prayed"
                  ? "bg-green-500 text-white"
                  : "bg-[#111827] text-gray-400 border border-gray-800 hover:text-white"
              }`}
            >
              🟢 Prayed (
              {
                prayerRequests.filter(
                  (prayer) => prayer.status === "prayed"
                ).length
              }
              )
            </button>

          </div>

        </div>

        {/* NO REQUESTS */}
        {filteredPrayerRequests.length === 0 ? (
          <div className="bg-[#111827] border border-gray-800 rounded-2xl p-10 text-center">
            <p className="text-gray-400 text-lg">
              No prayer requests found.
            </p>
          </div>
        ) : (

          /* REQUEST LIST */
          <div className="space-y-5">

            {filteredPrayerRequests.map((prayer) => (

              <div
                key={prayer.id}
                className="bg-[#111827] border border-gray-800 rounded-2xl p-6"
              >

                {/* NAME + STATUS */}
                <div className="flex items-center justify-between">

                  <h2 className="text-xl font-bold">
                    {prayer.name}
                  </h2>

                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      prayer.status === "prayed"
                        ? "bg-green-400/10 text-green-400"
                        : "bg-yellow-400/10 text-yellow-400"
                    }`}
                  >
                    {prayer.status === "prayed"
                      ? "PRAYED"
                      : "NEW"}
                  </span>

                </div>

                {/* PHONE */}
                <p className="text-gray-400 mt-3">
                  📞 {prayer.phone}
                </p>

                {/* PRAYER */}
                <div className="mt-5">
                  <p className="text-gray-300 leading-7">
                    {prayer.prayer}
                  </p>
                </div>

                {/* DATE */}
                {prayer.created_at && (
                  <p className="text-gray-500 text-sm mt-5">
                    Submitted:{" "}
                    {new Date(
                      prayer.created_at
                    ).toLocaleString()}
                  </p>
                )}

                {/* MARK AS PRAYED */}
                {prayer.status === "new" &&
                  ["admin", "prayer"].includes(
                    adminUser?.role
                  ) && (
                    <button
                      onClick={() =>
                        handleMarkAsPrayed(prayer.id)
                      }
                      className="mt-5 bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-lg font-semibold transition"
                    >
                      🙏 Mark as Prayed
                    </button>
                  )}

              </div>

            ))}

          </div>
        )}

      </div>
    </div>
  );
}

export default AdminDashboard;