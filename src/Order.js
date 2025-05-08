import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './styles.css';

const OrderedPage = () => {
  const [searchText, setSearchText] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  
  // Order details
  const order = {
    destination: "Sri Lanka/Highland Waterfall Region",
    startDate: "06-07",
    endDate: "2025-06-15",
    adults: 1,
    children: 1,
    orderId: "123987348"
  };
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="container-fluid p-0" style={{ backgroundColor: '#FAF6F1', minHeight: '100vh' }}>
      {/* Header */}
      <header className="d-flex justify-content-between align-items-center px-4 py-3">
        <div className="d-flex align-items-center">
          <div className="rounded-circle overflow-hidden me-2" style={{ width: '36px', height: '36px' }}>
            <img src="/images/logo.png" alt="Logo" className="w-100 h-100 object-fit-cover" />
          </div>
          <span className="fw-bold">NAME</span>
        </div>

        {/* Centered Navigation */}
        <nav className="position-absolute start-50 translate-middle-x d-none d-md-block">
          <ul className="nav">
            <li className="nav-item"><a className="nav-link px-3" href="/">Home</a></li>
            <li className="nav-item"><a className="nav-link px-3" href="/packages">Our Offer</a></li>
            <li className="nav-item"><a className="nav-link px-3 active fw-bold" href="/booking" style={{ color: '#DAB955' }}>Booking</a></li>
            <li className="nav-item"><a className="nav-link px-3" href="/register">Register</a></li>
          </ul>
        </nav>

        {/* Search Bar */}
        <div className="position-relative d-none d-md-block">
          <input
            type="text"
            placeholder="Search"
            className="form-control rounded-pill pe-5 search-bar"
            style={{ 
              width: '220px', 
              backgroundColor: 'transparent', 
              borderColor: '#DDD',
              height: '40px',
              color: '#000'
            }}
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button 
            className="btn position-absolute end-0 top-0 h-100" 
            style={{ borderRadius: '0 50px 50px 0' }}
          >
            <i className="bi bi-search text-warning"></i>
          </button>
        </div>

        {/* Mobile menu button */}
        <button 
          className="btn d-md-none border-0" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <i className={`bi ${menuOpen ? 'bi-x-lg' : 'bi-list'}`} style={{ fontSize: '1.5rem' }}></i>
        </button>
      </header>
      
      {/* Mobile menu (collapsible) */}
      <div className={`mobile-menu position-relative ${menuOpen ? 'show' : ''}`}>
        {menuOpen && (
          <div className="bg-white shadow p-3 rounded-3 position-absolute w-100 z-3">
            <ul className="nav flex-column align-items-center">
              <li className="nav-item"><a className="nav-link py-2 nav-custom" href="/">Home</a></li>
              <li className="nav-item"><a className="nav-link py-2 nav-custom" href="/packages">Our Offer</a></li>
              <li className="nav-item"><a className="nav-link py-2 nav-custom fw-bold" href="/booking" style={{ color: '#DAB955' }}>Booking</a></li>
              <li className="nav-item"><a className="nav-link py-2 nav-custom" href="/register">Register</a></li>
            </ul>
            <div className="position-relative d-flex align-items-center mt-3">
              <input
                type="text"
                placeholder="Search"
                className="form-control form-control-sm rounded-pill pe-4"
                style={{ height: '40px', width: '100%', border: '1px solid rgb(202, 202, 202)', backgroundColor: '#f8f9fa', color: '#000' }}
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
              <i className="bi bi-search position-absolute" style={{ right: '12px', top: '50%', transform: 'translateY(-50%)', color: '#f59e0b' }}></i>
            </div>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="container py-5">
        <div className="row align-items-center">
          {/* Order Confirmation Left Side */}
          <div className="col-12 col-md-6 mb-4 mb-md-0">
            <h1 className="fw-bold mb-4 fs-2">Your order is Pending!</h1>
            <div className="mb-4">
              <p className="mb-1">Thank you for booking a trip with us.</p>
              <p className="mb-1">we have received your</p>
              <p className="mb-1">reservation and our agents are working</p>
              <p className="mb-1">out the details.</p>
              <p className="mb-1">Our travel agent will contact you</p>
              <p className="mb-1">soon and will finish the order</p>
              <p className="mb-1">with you.</p>
            </div>
            
            <a href="/" className="btn btn-dark rounded-pill px-4 py-2 fw-bold">
              Go to Homepage
            </a>
          </div>
          
          {/* Order Confirmation Right Side - Order Card */}
          <div className="col-12 col-md-6">
            <div className="rounded-4 overflow-hidden" style={{ backgroundColor: '#4B8063', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
              {/* Image with person looking at waterfall */}
              <div className="p-3 pt-3">
                <div className="rounded-3 overflow-hidden" style={{ height: '320px' }}>
                  <img 
                    src="/images/waterfall.jpg" 
                    alt="Person by waterfall" 
                    className="w-100 h-100" 
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
              
              {/* Order details */}
              <div className="px-4 pb-4 text-white">
                <h3 className="fw-bold mb-2">{order.destination}</h3>
                <p className="mb-1">
                  {order.startDate} - {order.endDate}, {order.adults} Adult, {order.children} Child
                </p>
                <p className="mb-0">
                  Order Id - {order.orderId}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <section className="py-4 text-white pb-4 pb-md-5 text-center" style={{ backgroundColor: '#082811' }}>
        <div className="container px-4">
          <h2 className="fw-bold">Subscribe to our news letter</h2>
          <p className="mb-3">Know about our newest offers</p>
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 col-lg-6 position-relative">
              <div className="input-group">
                <input
                  type="email"
                  className="form-control rounded-pill py-2 py-md-3"
                  placeholder="Enter your email"
                  style={{ 
                    backgroundColor: '#FAF6F1',
                    paddingRight: '100px' 
                  }}
                />
                <button className="h-100 btn btn-warning rounded-pill position-absolute end-0 top-50 translate-middle-y px-3 px-md-4 text-white">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-3 py-3 text-white" style={{ backgroundColor: '#082811' }}>
        <div className="d-flex flex-column flex-md-row align-items-center justify-content-between gap-3">
          <div className="d-flex align-items-center">
            <img src="/images/logo.png" alt="Logo" className="me-2" style={{ width: '20px', height: '20px', borderRadius: '50%' }} />
            <span className="fw-bold">NAME</span>
          </div>
          <div className="small text-center text-md-start">
            Copyright 2010-2023, All rights reserved.
          </div>
          <div className="d-flex gap-3 small">
            <a href="#" className="text-decoration-none text-white">Legal</a>
            <a href="#" className="text-decoration-none text-white">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default OrderedPage;