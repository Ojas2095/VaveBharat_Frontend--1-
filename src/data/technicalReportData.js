// src/data/technicalReportData.js

export const reportMeta = {
  title: "📄 Technical Research & Landscape Analysis Report",
  subtitle: "“Vave Bharat” is a biometric-first, offline-ready digital payment framework for inclusive financial transactions in India. This summary consolidates key compliance areas, intern contributions, and visual insights from the research.",
};

export const section1 = {
  heading: "🔍 1. Comparative Analysis: Weixin Pay vs BioPay Bharat",
  preparedBy: "Ojaswee",
  table: [
    ["Authentication", "Proprietary vein-scan", "Palm-based biometrics (affordable)"],
    ["Connectivity", "Always-online via cloud", "Offline support via Bluetooth/NFC"],
    ["Inclusion", "Smartphone users only", "Supports feature phones & kiosks"],
    ["Localization", "Chinese language focus", "Multilingual & voice-enabled UI"],
  ],
  summary:
    "While Weixin Pay uses advanced vein-scanning and cloud-reliant infrastructure for a smartphone-centric audience, BioPay Bharat emphasizes affordability, offline readiness, and inclusive access through multilingual, kiosk-friendly, and biometric-first design tailored for India.",
};


export const section2 = {
  heading: "📊 2. Biometric Feasibility in Indian Context",
  preparedBy: "Paridhi",
  points: [
    "Fingerprint sensors are common in post-2020 smartphones.",
    "Aadhaar APIs enable trusted biometric eKYC.",
    "Affordable biometric devices (₹2,000 or less) support rural use.",
    "Offline-first features are essential due to power/internet gaps."
  ],
  challenges: [
    "Feature phone users lack biometric hardware.",
    "Unstable connectivity affects cloud-only models.",
    "Cost may still deter small rural vendors."
  ],
  recommendation:
    "✅ Blend Aadhaar eKYC with offline biometrics for inclusive coverage across devices and regions.",
};


export const section3 = {
  heading: "📑 3. Regulatory Checklist",
  preparedBy: "Harshita",
  table: [
    [
      "RBI",
      "Verify identity, monitor fraud, and ensure secure transactions. No card storage.",
      "✅ Rules followed: KYC, 2FA, privacy-secure payments"
    ],
    [
      "Aadhaar (UIDAI)",
      "Consent-based eKYC, encryption, VID support, and no biometric storage.",
      "✅ Offline XML & legal safeguards integrated"
    ],
    [
      "NPCI / UPI",
      "UPI PIN, OTP, QR compliance, transaction limits, NPCI audit ready.",
      "✅ API mapped, audit controls in place"
    ]
  ],
  note:
    "This checklist aligns with RBI, Aadhaar, and NPCI regulations for secure, inclusive digital payments — including consent handling, encryption, eKYC alternatives, and multi-factor authentication.",
};


export const outcomes = {
  heading: "✅ Final Outcomes for Project 1",
  items: [
    ["Comparative Report (Weixin vs BioPay)", "Ojaswee", "✅ Ready"],
    ["Biometric Feasibility Visuals", "Paridhi", "✅ Ready"],
    ["Regulatory Compliance Summary", "Harshita", "✅ Ready"],
  ],
};

export const nextSteps = {
  heading: "🚀 Next Steps",
  items: [
    "Proceed to System Architecture & API Design",
    "Draft high-level component diagrams for Biometric Layer and Offline Sync Queue.",
  ],
  note:
    "Focus on building a robust, scalable, and inclusive digital payment framework that meets regulatory standards and user needs across India.",
};
export const interns = [
  {
    name: "Ojaswee",
    contribution:
      "Analyzed and compared Weixin Pay with BioPay Bharat in terms of architecture, biometric integration, and offline capabilities.",
  },
  {
    name: "Paridhi",
    contribution:
      "Researched biometric technologies such as PalmID, VeinID, and IR sensors to evaluate their feasibility in rural and low-resource environments.",
  },
  {
    name: "Harshita",
    contribution:
      "Documented and visualized compliance guidelines from RBI, Aadhaar, and UPI systems in a structured, printable report.",
  },
];
