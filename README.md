# 🇮🇳 Vave Bharat — Frontend Template (React + Tailwind)

A scalable and modular frontend template for the **“Vave Bharat”** project — a biometric-first, offline-ready digital payment framework designed for inclusive transactions in India.

> ✨ Built with **React**, styled using **Tailwind CSS**, and structured for intern collaboration & system architecture documentation.

---

## 🧰 Tech Stack

- ⚛️ React (via Vite)
- 💨 Tailwind CSS
- 🔁 React Router DOM
- 📁 Modular Folder Architecture
- 📱 Responsive by default

---

## 🚀 Getting Started

### 1. Clone the Template

```bash
git clone https://github.com/Ojas2095/vave-bharat-frontend-template.git
cd vave-bharat-frontend-template

2. Install Dependencies
bash
Copy code
npm install
3. Start Development Server
bash
Copy code
npm run dev
4. Build for Production
bash
Copy code
npm run build
📁 Folder Structure
pgsql
Copy code
├── public/
│   └── index.html
├── src/
│   ├── assets/
│   │   └── logos/, charts/, pdfs/
│   ├── components/
│   │   ├── ResearchCard.jsx
│   │   ├── ChartCard.jsx
│   │   └── PDFViewer.jsx
│   ├── data/
│   │   ├── weixinData.js
│   │   ├── upiData.js
│   │   ├── biometricTech.js
│   │   └── regulationChecklist.js
│   ├── layouts/
│   │   └── ResearchLayout.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Reports/
│   │   │   ├── WeixinVsBioPay.jsx
│   │   │   ├── BiometricFeasibility.jsx
│   │   │   ├── RegulatoryChecklist.jsx
│   │   │   └── SummaryOverview.jsx
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── SectionTitle.jsx
│   │   └── CallToAction.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md
👥 Intern Task Assignments
Intern	Pages	Components	Data Files	Description
Ojaswee	WeixinVsBioPay.jsx, Home.jsx	ResearchCard.jsx	weixinData.js, upiData.js	🔍 Analyze and visually present a comparative report between Weixin Pay and BioPay Bharat, focusing on architecture, biometrics, and offline readiness.
Paridhi	BiometricFeasibility.jsx	ChartCard.jsx	biometricTech.js	📊 Research biometric technology (PalmID, VeinID, IR sensors) and visualize feasibility in low-resource Indian environments.
Harshita	RegulatoryChecklist.jsx, SummaryOverview.jsx	PDFViewer.jsx	regulationChecklist.js	📑 Break down RBI, Aadhaar, and UPI compliance rules; summarize findings in a PDF-style layout for report submission.

🧠 Project Context
This frontend is part of a broader R&D project titled:

“Vave Bharat: A Biometric-First, Offline-Ready Digital Payment Framework for Inclusive Digital Transactions in India”
(Startup: Sentienta QualityAI)

The final outcome is a research paper with working mockups, APIs, and architecture.

✅ Guidelines
Write clean, reusable, and accessible code.

Follow Tailwind utility-first styling.

Keep components modular and isolated.

Use React Router for navigation.

Commit with clear messages (feat:, fix:, chore:).

🙌 Contribution
Each intern will be assigned a specific folder. Submit your progress via Pull Requests to the main branch.

📄 License
All rights reserved by Sentienta QualityAI.
This project is part of an internal research initiative. Do not redistribute without permission.