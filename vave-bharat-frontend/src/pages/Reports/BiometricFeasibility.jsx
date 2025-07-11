import React from "react";
import ResearchCard from "../../components/ResearchCard";
import biometricData from "../../data/biometricTech";

const BiometricFeasibility = () => {
  return (
    <div className="min-h-screen p-6 md:p-12 bg-gray-50">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900">
        Biometric Feasibility: Building Inclusive Offline Payments in India
      </h1>

      {/* Card Grid */}
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {biometricData.insights.map((item, index) => (
          <ResearchCard
            key={index}
            title={item.title}
            points={item.points}
            icon={item.icon}
            bg="bg-yellow-50"
          />
        ))}
      </div>

      {/* Insights / Summary */}
      <div className="mt-12 max-w-4xl mx-auto text-gray-700 text-justify leading-relaxed">
        <h2 className="text-2xl font-semibold mb-4 text-yellow-700">Highlights:</h2>
        <ul className="list-disc pl-6 space-y-3">
          <li>
            <strong>Hardware Readiness:</strong> Most smartphones post-2020 support fingerprint/palm recognition.
          </li>
          <li>
            <strong>Power & Network Issues:</strong> Offline-first design is critical due to electricity and internet unreliability.
          </li>
          <li>
            <strong>Aadhaar Integration:</strong> Widely adopted biometric APIs enable rapid rollout using existing national infra.
          </li>
          <li>
            <strong>Affordability:</strong> External biometric scanners cost under ₹2,000, making merchant adoption feasible.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BiometricFeasibility;
