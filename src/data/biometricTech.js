// src/data/biometricTech.js
export default {
  devicePenetration: {
    labels: ['Urban', 'Semi-Urban', 'Rural'],
    values: [80, 55, 38]
  },
  insights: [
    {
      title: "Fingerprint Sensor Availability",
      points: [
        "Most mid-range smartphones in India come with fingerprint sensors",
        "Especially widespread in devices post-2020"
      ],
      icon: "🧤"
    },
    {
      title: "Power Constraints in Rural Areas",
      points: [
        "Offline-first capabilities are essential",
        "Frequent electricity and internet outages make cloud-only solutions unreliable"
      ],
      icon: "🔋"
    },
    {
      title: "Aadhaar Integration",
      points: [
        "Aadhaar APIs support biometric verification",
        "Widespread acceptance in government and fintech sectors"
      ],
      icon: "🆔"
    },
    {
      title: "Affordable Devices",
      points: [
        "Biometric scanners available below ₹2,000",
        "Encourages merchant adoption in rural markets"
      ],
      icon: "💰"
    }
  ]
};
