// src/data/regulationCompliance.js

const regulationCompliance = {
  insights: [
    {
      title: "RBI Compliance Rules",
      icon: "🏦",
      points: [
        "Verify customer identity, classify by risk, and update records periodically.",
        "Conduct background checks to prevent financial crimes.",
        "Monitor and report suspicious activity to prevent financial crimes.",
        "Secure digital transactions and user data per RBI privacy laws.",
        "Prevent storage of card details to reduce fraud exposure."
      ]
    },
    {
      title: "Aadhaar Compliance Rules",
      icon: "🆔",
      points: [
        "Comply with legal frameworks on Aadhaar use and authentication.",
        "Obtain clear user consent before using Aadhaar information.",
        "Encrypt Aadhaar data and avoid storing biometrics after use.",
        "Avoid profiling individuals using sensitive Aadhaar data.",
        "Allow VID as an alternative to Aadhaar for verification."
      ]
    },
    {
      title: "UPI Compliance Rules",
      icon: "💳",
      points: [
        "Follow UPI security, transaction limits, and approval norms.",
        "Use multi-factor authentication like UPI PIN and OTP.",
        "Monitor activity and follow NPCI resolution rules.",
        "Ensure QR codes are NPCI-approved.",
        "Conduct annual UPI audits with CERT-In auditors."
      ]
    }
  ]
};

export default regulationCompliance;
