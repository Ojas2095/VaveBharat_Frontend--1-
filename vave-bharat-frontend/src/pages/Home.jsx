import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-4xl font-bold text-green-800 mb-4">
        Welcome to Vave Bharat Frontend
      </h1>
      <p className="text-lg text-gray-700 max-w-xl mb-6">
        A biometric-first, offline-ready digital payment framework crafted for inclusive digital transactions across India.
      </p>

      {/* Two-column layout for buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-xl">
        <button
          onClick={() => navigate("/reports/weixin-vs-biopay")}
          className="px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-all w-full"
        >
          View Comparative Study
        </button>
        <button
          onClick={() => navigate("/reports/biometric-feasibility")}
          className="px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-all w-full"
        >
          View Biometric Feasibility Report
        </button>
        <button
          onClick={() => navigate("/reports/regulatory-checklist")}
          className="px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-all w-full"
        >
          View Regulatory Checklist Report
        </button>
        <button
          onClick={() => navigate("/reports/summary")}
          className="px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-all w-full"
        >
          View Summary
        </button>
      </div>
    </div>
  );
};

export default Home;
