import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './styles.css';

const PurchasePage = () => {
  const [searchText, setSearchText] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  
  // Tour package data
  const tourPackage = {
    name: "Ordering the Hike of Waterfalls",
    destination: "Ella & Central Highlands, Sri Lanka",
    packageName: "Highland Waterfall Hiking Tour",
    rating: 4,
    lodging: "3-Night Stay in Eco Lodge (Double Occupancy)",
    transferType: "Private Ground Transfer",
    date: "2025-06-21",
    packageDetails: "1 Package – 3 Nights / 4 Days",
    adultFee: 450,
    childFee: 150,
    travelFee: 80,
    adminFee: 80
  };
  
  // Calculate total
  const totalPrice = tourPackage.adultFee + tourPackage.childFee + tourPackage.travelFee + tourPackage.adminFee;
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="container-fluid p-0 bg-light" style={{ backgroundColor: '#FAF6F1' }}>
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
              color: '#000',
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
                style={{ height: '40px', width: '100%', border: '1px solid rgb(202, 202, 202)', backgroundColor: '#f8f9fa' }}
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
        <div className="row">
          {/* Page Title */}
          <div className="col-12 mb-4">
            <h1 className="fw-bold fs-2">{tourPackage.name}</h1>
          </div>
          
          {/* Guest Info Form */}
          <div className="col-12 col-lg-5 mb-4">
            {/* Guest Info Section */}
            <div className="mb-4">
              <div className="bg-success text-white py-2 px-3 rounded-top mb-0">
                <h2 className="mb-0 fs-5">1. Guest Info</h2>
              </div>
              <div className="p-3 rounded-bottom" style={{ backgroundColor: '#E1E5D6' }}>
                <div className="mb-3">
                  <p className="mb-2">Guest 1</p>
                  <input 
                    type="text" 
                    className="form-control mb-2" 
                    placeholder="Full name of the guest" 
                  />
                  <div className="dropdown">
                    <button className="btn btn-light border dropdown-toggle w-100 text-start" type="button" id="dobDropdown1" data-bs-toggle="dropdown" aria-expanded="false">
                      Date of Birth
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dobDropdown1">
                      <li><a className="dropdown-item" href="#">Select date</a></li>
                    </ul>
                  </div>
                </div>
                
                <div>
                  <p className="mb-2">Guest 2</p>
                  <input 
                    type="text" 
                    className="form-control mb-2" 
                    placeholder="Full name of the guest" 
                  />
                  <div className="dropdown">
                    <button className="btn btn-light border dropdown-toggle w-100 text-start" type="button" id="dobDropdown2" data-bs-toggle="dropdown" aria-expanded="false">
                      Date of Birth
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dobDropdown2">
                      <li><a className="dropdown-item" href="#">Select date</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Billing Info Section */}
            <div className="mb-4">
              <div className="bg-success text-white py-2 px-3 rounded-top mb-0">
                <h2 className="mb-0 fs-5">1. Billing info</h2>
              </div>
              <div className="p-3 rounded-bottom" style={{ backgroundColor: '#E1E5D6' }}>
                <p className="mb-2">Card Details</p>
                <input type="text" className="form-control mb-2" placeholder="Card name" />
                <input type="text" className="form-control mb-2" placeholder="Card number" />
                <input type="text" className="form-control mb-2" placeholder="xxx" />
                <input type="text" className="form-control" placeholder="Expiry date" />
              </div>
            </div>
            
            {/* Contact Info Section */}
            <div>
              <div className="bg-success text-white py-2 px-3 rounded-top mb-0">
                <h2 className="mb-0 fs-5">1. Contact info</h2>
              </div>
              <div className="p-3 rounded-bottom" style={{ backgroundColor: '#E1E5D6' }}>
                <input type="email" className="form-control mb-2" placeholder="E-mail" />
                <div className="row">
                  <div className="col-4">
                    <input type="text" className="form-control" placeholder="Prefix (+104)" />
                  </div>
                  <div className="col-8">
                    <input type="text" className="form-control" placeholder="Phone number" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Tour Summary */}
          <div className="col-12 col-lg-7">
            <div className="border rounded-4 p-4">
              <div className="row mb-2">
                <div className="col-4 fw-bold">Destination:</div>
                <div className="col-8 text-end">{tourPackage.destination}</div>
              </div>
              <div className="row mb-2">
                <div className="col-4 fw-bold">Tour Package:</div>
                <div className="col-8 text-end">{tourPackage.packageName}</div>
              </div>
              <div className="row mb-2">
                <div className="col-4 fw-bold">Rating:</div>
                <div className="col-8 text-end">{tourPackage.rating}</div>
              </div>
              <div className="row mb-2">
                <div className="col-4 fw-bold">Lodging:</div>
                <div className="col-8 text-end">{tourPackage.lodging}</div>
              </div>
              <div className="row mb-2">
                <div className="col-4 fw-bold">Transfer type:</div>
                <div className="col-8 text-end">{tourPackage.transferType}</div>
              </div>
              <div className="row mb-4">
                <div className="col-4 fw-bold">Date:</div>
                <div className="col-8 text-end">{tourPackage.date}</div>
              </div>
              
              <hr />
              
              <div className="row mb-2">
                <div className="col-8 fw-bold">{tourPackage.packageDetails}</div>
              </div>
              <div className="row mb-2">
                <div className="col-8">1 adult fee</div>
                <div className="col-4 text-end">${tourPackage.adultFee}</div>
              </div>
              <div className="row mb-2">
                <div className="col-8">1 Child fee</div>
                <div className="col-4 text-end">${tourPackage.childFee}</div>
              </div>
              <div className="row mb-2">
                <div className="col-8">Travel fee</div>
                <div className="col-4 text-end">${tourPackage.travelFee}</div>
              </div>
              <div className="row mb-4">
                <div className="col-8">Admin fee</div>
                <div className="col-4 text-end">${tourPackage.adminFee}</div>
              </div>
              
              <hr />
              
              <div className="row mb-4">
                <div className="col-8 fw-bold">Total</div>
                <div className="col-4 text-end fw-bold">${totalPrice}</div>
              </div>
              
              <div className="text-center">
                <a href="/order">
                  <button className="btn btn-warning text-white rounded-pill px-5 py-2 fw-bold">
                    Buy Tour
                  </button>
                </a>
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
                  style={{ paddingRight: '100px' }}
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

export default PurchasePage;