import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import WeixinVsBiopay from "./pages/Reports/WeixinVsBiopay";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reports/weixin-vs-biopay" element={<WeixinVsBiopay />} />
      </Routes>
    </Router>
  );
}

export default App;
