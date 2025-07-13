import React from "react";
import ResearchCard from "../../components/ResearchCard";
import { weixinData } from "../../data/weixinData";
import { upiData } from "../../data/upiData";

const WeixinVsBiopay = () => {
  return (
    <div className="min-h-screen p-6 md:p-12 bg-gray-50">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900">
        Comparative Architecture: Weixin Pay vs BioPay Bharat
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ResearchCard {...weixinData} bg="bg-blue-50" />
        <ResearchCard {...upiData} bg="bg-green-50" />
      </div>

      <div className="mt-12 max-w-4xl mx-auto text-gray-700 text-justify leading-relaxed">
        <h2 className="text-2xl font-semibold mb-4 text-green-800">Insights:</h2>
        <ul className="list-disc pl-6 space-y-3">
          <li>
            <strong>Authentication:</strong> Weixin uses proprietary vein scanning, while BioPay Bharat proposes affordable palm-based biometric integration.
          </li>
          <li>
            <strong>Connectivity:</strong> Weixin relies on constant cloud access. BioPay Bharat introduces offline payments via Bluetooth/NFC.
          </li>
          <li>
            <strong>Inclusion:</strong> Weixin targets smartphone users. BioPay Bharat includes feature phone and kiosk-based flows.
          </li>
          <li>
            <strong>Localization:</strong> BioPay emphasizes multilingual UI with voice features for rural/semi-literate populations.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WeixinVsBiopay;
