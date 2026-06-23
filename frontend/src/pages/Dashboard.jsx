import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

function Dashboard() {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const userName = localStorage.getItem("name");

  const [stats, setStats] = useState({
    companies: 0,
    questions: 0,
    roadmaps: 0,
  });

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/dashboard-stats"
      );

      setStats(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  if (!token) {
    return <Navigate to="/login" />;
  }

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");

    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-black text-white">

      <nav className="flex justify-between items-center px-8 py-6 border-b border-white/10">

        <h1 className="text-3xl font-bold">
          CareerOS Dashboard
        </h1>

        <div className="flex items-center gap-4">

          <p className="text-gray-300">
            Hi, {userName} 👋
          </p>

          <button
            onClick={handleLogout}
            className="px-5 py-2 rounded-xl border border-red-500 text-red-400 hover:bg-red-500 hover:text-white transition-all"
          >
            Logout
          </button>

        </div>

      </nav>

      <div className="max-w-6xl mx-auto px-8 py-12">

        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-10">

          <h1 className="text-5xl font-bold mb-4">
            Welcome Back, {userName} 👋
          </h1>

          <p className="text-gray-400 text-lg">
            Continue your placement preparation journey.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-blue-500 transition-all">
            <h2 className="text-4xl font-bold text-blue-400">
              {stats.companies}
            </h2>

            <p className="mt-3 text-gray-400">
              Companies
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-purple-500 transition-all">
            <h2 className="text-4xl font-bold text-purple-400">
              {stats.questions}
            </h2>

            <p className="mt-3 text-gray-400">
              Questions
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-green-500 transition-all">
            <h2 className="text-4xl font-bold text-green-400">
              {stats.roadmaps}
            </h2>

            <p className="mt-3 text-gray-400">
              Roadmaps
            </p>
          </div>

        </div>

        <div className="mt-10 text-center">

          <button
            onClick={() => navigate("/")}
            className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 rounded-xl text-lg font-semibold hover:scale-105 transition-all"
          >
            Browse Companies
          </button>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;
