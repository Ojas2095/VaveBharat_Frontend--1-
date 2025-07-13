import React, { useRef } from 'react';
import regulationChecklist from '../../data/regulationChecklist';
import PDFViewer from '../../components/PDFViewer';
import html2pdf from 'html2pdf.js';
import {
  reportMeta,
  section1,
  section2,
  section3,
  outcomes,
  interns,
  nextSteps,
} from '../../data/technicalReportData';

function SummaryOverview() {
  const pdfRef = useRef();

const handleDownloadPDF = () => {
  const element = pdfRef.current;
  const opt = {
    margin: 0.5,
    filename: 'VaveBharat_Research _Summary.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: {
      scale: 3,
      useCORS: true
    },
    jsPDF: {
      unit: 'in',
      format: 'a4',
      orientation: 'portrait'
    }
  };

  html2pdf().set(opt).from(element).save();
};

  return (
    <div className="min-h-screen p-6 md:p-12 bg-gray-50">
      {/* Download Button */}
      <div className="flex justify-end mb-4">
        <button
          onClick={handleDownloadPDF}
          className="bg-black text-white px-4 py-2 rounded-lg hover:bg-black transition"
        >
          Download as PDF
        </button>
      </div>

      {/* Exportable Content */}
      <div ref={pdfRef} className="bg-white p-8 rounded-xl shadow-lg max-w-4xl mx-auto">

        {/* Summary Intro */}
        <div className="mb-8 text-left">
          <h1 className="text-4xl font-bold text-black mb-4">{reportMeta.title}</h1>
          <p className="text-black italic max-w-3xl mx-auto">
            <strong>{reportMeta.subtitle}</strong>
          </p>
        </div>

        {/* Section 1: Comparative Analysis */}
        <div className="mt-10">
          <h3 className="text-xl font-semibold mb-2">{section1.heading}</h3>
          <p className="text-sm text-black mb-4">
            Prepared by: {section1.preparedBy} <br /></p>
          <table className="w-full text-sm text-left text-black border mb-4">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-2">Feature</th>
                <th className="p-2">Weixin Pay</th>
                <th className="p-2">BioPay Bharat (Proposed)</th>
              </tr>
            </thead>
            <tbody>
              {section1.table.map(([feature, weixin, biopay], i) => (
                <tr key={i}>
                  <td className="p-2">{feature}</td>
                  <td className="p-2">{weixin}</td>
                  <td className="p-2">{biopay}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <p className="text-black italic mb-6">{section1.summary}</p>

          {/* Section 2: Biometric Feasibility */}
          <h3 className="text-xl font-semibold mb-2">{section2.heading}</h3>
          <p className="text-sm text-black mb-4">
            Prepared by: {section2.preparedBy} <br /></p>
          <ul className="list-disc list-inside mb-2 text-black">
            {section2.points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
          <p className="text-black mb-2">Challenges include:</p>
          <ul className="list-disc list-inside text-black mb-4">
            {section2.challenges.map((challenge, i) => (
              <li key={i}>{challenge}</li>
            ))}
          </ul>
          <p className="italic text-black mb-6">{section2.recommendation}</p>

          {/* Section 3: Regulatory Checklist */}
          <div className="avoid-break mt-10">
          <h3 className="text-xl font-semibold mb-2">{section3.heading}</h3>
          <p className="text-sm text-black mb-4">
            Prepared by: {section3.preparedBy} <br /></p>
          <table className="w-full text-sm text-left text-black border my-4">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-2">Regulation Body</th>
                <th className="p-2">Requirement</th>
                <th className="p-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {section3.table.map(([body, req, status], i) => (
                <tr key={i}>
                  <td className="p-2">{body}</td>
                  <td className="p-2">{req}</td>
                  <td className="p-2">{status}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-sm text-black italic mb-6">{section3.note}</p>
</div>
          {/* Outcomes Table */}
          <h3 className="text-xl font-semibold text-black mt-6 mb-2">
            {outcomes.heading}
          </h3>
          <table className="w-full text-sm text-left text-black border my-4">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-2">Deliverable</th>
                <th className="p-2">Owner</th>
                <th className="p-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {outcomes.items.map(([deliverable, owner, status], i) => (
                <tr key={i}>
                  <td className="p-2">{deliverable}</td>
                  <td className="p-2">{owner}</td>
                  <td className="p-2">{status}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <h3 className="text-xl font-semibold text-black mt-8 mb-2">
            {nextSteps.heading}
            </h3>
            <ul className="list-disc list-inside text-black mb-4">
            {nextSteps.items.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
            </ul>
            <p className="text-sm text-black italic">{nextSteps.note}</p>
        </div>

        {/* Intern Contributions */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4 text-black">Intern Contributions</h2>
          <ul className="list-disc list-inside text-black space-y-2">
            {interns.map((intern, i) => (
              <li key={i}>
                <strong>{intern.name}:</strong> {intern.contribution}
              </li>
            ))}
          </ul>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-6 border-t text-center text-black text-sm">
          © 2025 Sentienta QualityAI Intern Project — All rights reserved.
        </div>
      </div>
    </div>
  );
}

export default SummaryOverview;
