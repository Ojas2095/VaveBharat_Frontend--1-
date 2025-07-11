
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './pages/Home.jsx';
import WeixinVsBiopay from './pages/Reports/WeixinVsBiopay.jsx';
import BiometricFeasibility from './pages/Reports/BiometricFeasibility.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reports/weixin-vs-biopay" element={<WeixinVsBiopay />} />
        <Route path="/reports/biometric-feasibility" element={<BiometricFeasibility />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
