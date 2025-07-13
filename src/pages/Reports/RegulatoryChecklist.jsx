import React from 'react';
import regulationChecklist from '../../data/regulationChecklist';
import ResearchCard from "../../components/ResearchCard";


const RegulatoryChecklist= () => {
  return (
    <div className="min-h-screen p-6 md:p-12 bg-gray-50">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900">
        Regulatory Compliance Checklist
      </h1>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  {regulationChecklist.insights.map((item, index) => (
    <ResearchCard
      key={index}
      title={item.title}
      points={item.points}
      icon={item.icon}
      bg="bg-violet-50"
    />
  ))}
</div>

    </div>
  );
}

export default RegulatoryChecklist;
