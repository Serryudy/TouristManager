import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import SriLankaTravel from './SriLankaTravel';
import Packages from './Packages';
import TourDetail from './PackageDetails';
import PurchasePage from './Purchase';
import OrderedPage from './Order';
import Register from './Register';
import Dashboard from './user_Dashbord';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<SriLankaTravel />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/tour/:id" element={<TourDetail />} />
          <Route path="/booking" element={<div className="p-5 text-center"><h1>Booking Page</h1><p>This page is under construction</p></div>} />
          <Route path="/purchase" element={<PurchasePage />} />
          <Route path="/order" element={<OrderedPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* Fallback route - redirects to home if no route matches */}
          <Route path="*" element={<SriLankaTravel />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;