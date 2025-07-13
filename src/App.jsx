import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import WeixinVsBiopay from "./pages/Reports/WeixinVsBiopay";
import RegulatoryChecklist from './pages/Reports/RegulatoryChecklist';
import SummaryOverview from './pages/Reports/SummaryOverview';
import BiometricFeasibility from './pages/Reports/BiometricFeasibility';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/reports/weixin-vs-biopay" element={<WeixinVsBiopay />} />
      <Route path="/reports/regulatory-checklist" element={<RegulatoryChecklist />} />
      <Route path="/reports/summary" element={<SummaryOverview />} />
      <Route path="/reports/biometric-feasibility" element={<BiometricFeasibility />} />
    </Routes>
  );
}

export default App;
