import React from 'react';

function PDFViewer({ title, content }) {
  return (
    <div className="bg-white shadow-xl p-8 max-w-3xl mx-auto border border-gray-300">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-6 whitespace-pre-line">
        {title}
      </h1>
      <div className="text-gray-800 space-y-6 leading-relaxed">
        {content.map((section, index) => (
          <div key={index}>
            <h2 className="text-lg font-semibold text-blue-700 mb-2">{section.title}</h2>
            <pre className="whitespace-pre-wrap text-sm font-sans">{section.description}</pre>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PDFViewer;
