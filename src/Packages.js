import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './styles.css';

// Update the component name to match your project structure
const Packages = () => {
  const [searchText, setSearchText] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  
  // Destination data
  const destinations = [
    {
      id: 1,
      name: "Sigiriya",
      category: "ROCK",
      price: 300,
      image: "/images/sigiriya.jpg",
      color: "#F8E9A1" // Yellow background
    },
    {
      id: 2,
      name: "Polonnaruwa",
      category: "ANCIENT CITY",
      price: 100,
      image: "/images/polonnaruwa.jpg",
      color: "#A3CCB5" // Green background
    },
    {
      id: 3,
      name: "Trincomalee",
      category: "TROPICAL",
      price: 500,
      image: "/images/trincomalee.jpg",
      color: "#E8E8E0" // Light beige background
    },
    {
      id: 4,
      name: "Waterfall tour",
      category: "HIKE",
      price: 300,
      image: "/images/waterfall.jpg",
      color: "#F8E9A1" // Yellow background
    },
    {
      id: 5,
      name: "Southern Beaches",
      category: "SURF OUT",
      price: 100,
      image: "/images/beaches.jpg",
      color: "#A3CCB5" // Green background
    },
    {
      id: 6,
      name: "Ella",
      category: "TRAIN RIDE",
      price: 500,
      image: "/images/ella.jpg", 
      color: "#E8E8E0" // Light beige background
    }
  ];

  // Current page category
  const currentCategory = "Ancient Sites";
  const backgroundImage = "/images/sigiriyabackground.jpg";
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="container-fluid p-0 destination-page">
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
            <li className="nav-item"><a className="nav-link px-3 active fw-bold" href="/packages" style={{ color: '#DAB955' }}>Our Offer</a></li>
            <li className="nav-item"><a className="nav-link px-3" href="/booking">Booking</a></li>
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
              height: '40px'
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
              <li className="nav-item"><a className="nav-link py-2 nav-custom fw-bold" href="/packages" style={{ color: '#DAB955' }}>Our Offer</a></li>
              <li className="nav-item"><a className="nav-link py-2 nav-custom" href="/booking">Booking</a></li>
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

      {/* Hero Banner */}
      <section className="mx-2 mx-md-3 mb-4 mb-md-5">
          <div className="position-relative rounded-4 overflow-hidden" style={{ height: '350px', minHeight: '350px' }}>
            <img
              src={backgroundImage}
              alt="sigirya background"
              className="w-100 h-100"
              style={{ objectFit: 'cover' }}
            />
            <div 
              className="position-absolute top-0 start-0 bottom-0 d-flex flex-column justify-content-center p-3 p-md-5 text-white text-start hero-overlay2"
              style={{ 
                backgroundColor: '#C59A26', 
                opacity: 0.8,
                width: '45%', 
                maxWidth: '100%' 
              }}
            >
              <h1 className="fw-bold mb-2">
                <span style={{ fontSize: 'calc(2rem + 1.5vw)' }}>Ancient</span><br />
                <span style={{ fontSize: 'calc(2rem + 1.5vw)' }}>Sites</span>
              </h1>
              <p className="mb-3 mb-md-4">Discover the best tours & plans</p>
            </div>
          </div>
        </section>

      {/* Plans Counter */}
      <section className="mx-4 mb-4">
        <h2 className="fw-bold">150 Plans Available</h2>
      </section>

      {/* Destination Cards */}
      <section className="px-2 px-md-5 mb-4 mb-md-5">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 g-md-5">
          {destinations.map(destination => (
            <div className="col" key={destination.id}>
              <div className="position-relative mb-4 h-100">
                {/* Make the entire card clickable by wrapping it in a link */}
                <a href={`/tour/${destination.id}`} className="text-decoration-none">
                  {/* Image */}
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="img-fluid rounded-4 w-100"
                    style={{ height: '250px', objectFit: 'cover' }}
                  />
        
                  {/* Info box overlapping the bottom of the image */}
                  <div
                    className="position-absolute p-3 rounded-3 text-center text-md-start"
                    style={{
                      backgroundColor: destination.color,
                      bottom: '-20px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '80%',
                      zIndex: 2,
                      color: '#333' // Ensure text is dark for readability
                    }}
                  >
                    <p className="text-uppercase mb-1" style={{ fontSize: '0.75rem', letterSpacing: '1px', opacity: 0.8 }}>
                      {destination.category}
                    </p>
                    <div>
                      <div className="fw-bold mb-1" style={{ fontSize: '1.25rem', display: 'block' }}>{destination.name}</div>
                      <div style={{ fontSize: '0.875rem', display: 'block' }}>from ${destination.price}</div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Load More Button */}
      <section className="text-center mb-5">
        <button className="btn btn-outline-dark rounded-pill px-4 load-more-btn">
          Load more
        </button>
      </section>

      {/* Newsletter */}
      <section className="py-4 text-white pb-4 pb-md-5 bg-opacity-75" style={{ backgroundColor: '#082811' }}>
        <div className="container px-4">
          <h2 className="text-center fw-bold">Subscribe to our news letter</h2>
          <p className="text-center mb-3">Know about our newest offers</p>
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 col-lg-6 position-relative">
              <div className="input-group">
                <input
                  type="email"
                  className="form-control rounded-pill py-2 py-md-3"
                  placeholder="Enter your email"
                  style={{ paddingRight: '100px' }}
                />
                <button className=" h-100 btn btn-warning rounded-pill position-absolute end-0 top-50 translate-middle-y px-3 px-md-4">
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
            Copyright 2010-2023. All rights reserved.
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

export default Packages;