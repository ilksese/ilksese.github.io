import React from 'react';
import ReactDOM from 'react-dom/client';
import 'antd/dist/antd.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Router, Routes } from "react-router-dom"
import ComponentsPage from './views/ComponentsPage'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes >
      <Route path="/" element={<App />} />
      <Route path="/components" element={<ComponentsPage />}/>
    </Routes>
  </BrowserRouter>
);
reportWebVitals();
