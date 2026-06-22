import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    fetchCompanies();
  }, []);

  const fetchCompanies = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/companies"
      );

      setCompanies(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">

      <nav className="flex justify-between items-center px-8 py-6 border-b border-white/10 backdrop-blur-md">
        <h1 className="text-3xl font-bold tracking-wide">
          CareerOS
        </h1>

        <div className="flex gap-4">
          <button className="px-5 py-2 rounded-xl border border-white/20 hover:border-blue-500 transition-all duration-300">
            Login
          </button>

          <button className="px-5 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 font-semibold hover:scale-105 transition-all duration-300">
            Register
          </button>
        </div>
      </nav>

      <section className="relative flex flex-col items-center justify-center text-center h-[80vh] px-6 overflow-hidden">

        <div className="absolute w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-3xl"></div>

        <div className="absolute right-20 top-20 w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-3xl"></div>

        <h1 className="text-7xl md:text-8xl font-extrabold mb-6 relative z-10 leading-tight">
          Crack Your
          <span className="text-blue-500"> Dream </span>
          Company
        </h1>

        <p className="text-gray-400 text-xl max-w-3xl mb-8 relative z-10">
          Master company-specific interview questions, placement roadmaps,
          aptitude preparation and hiring strategies — all in one platform.
        </p>

        <button className="relative z-10 bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 rounded-xl text-lg font-semibold hover:scale-105 hover:shadow-[0_0_40px_rgba(59,130,246,0.6)] transition-all duration-300">
          Get Started
        </button>
      </section>

      <section className="px-10 pb-20">

        <h2 className="text-4xl font-bold mb-10 text-center">
          Featured Companies
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {companies.map((company) => (
            <div
              key={company.id}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:scale-[1.02] hover:border-blue-500/50 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-blue-400 mb-3">
                {company.company_name}
              </h3>

              <p className="text-gray-300 mb-2">
                Role: {company.role}
              </p>

              <p className="text-gray-300 mb-2">
                Package: {company.package}
              </p>

              <p className="text-gray-300">
                Experience: {company.experience}
              </p>
            </div>
          ))}

        </div>

      </section>

    </div>
  );
}

export default App;