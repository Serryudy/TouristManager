import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './styles.css';

const SriLankaTravelPage = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  
  const cards = [
    { id: 1, title: 'Beach\nGateway', icon: 'beach.png' },
    { id: 2, title: 'Ancient\nsites', icon: 'ancient sites.png' },
    { id: 3, title: 'Wildlife\nsafari', icon: 'wildlife.png' },
    { id: 4, title: 'Adventures\nhikes', icon: 'hike.png' },
    { id: 5, title: 'Food &\nCulture', icon: 'food.png' },
    { id: 6, title: 'Wellness\nretreats', icon: 'wellness.png' }
  ];

  const [hotOffer, setHotOffer] = useState({
    destination: "Visit Galle",
    duration: "5 nights",
    price: 80,
    images: {
      main: "/images/coastal-view.png",
      top: "/images/underwater.png",
      bottom: "/images/palm-trees.png"
    }
  });

  const [destinations, setDestinations] = useState([
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
      color: "#6B9080" // Green background
    },
    {
      id: 3,
      name: "Trincomalee",
      category: "TROPICAL",
      price: 500,
      image: "/images/trincomalee.jpg",
      color: "#D9E5D6" // Light green/beige background
    }
  ]);

  const selectCard = (id) => {
    setSelectedCard(selectedCard === id ? null : id);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="container-fluid p-0 bg-light">
      <div className="px-3 px-md-5">
        {/* Header */}
        <header className="d-flex justify-content-between align-items-center px-2 px-md-4 py-3 py-md-4 mb-3">
          <div className="d-flex align-items-center">
            <img src="/images/logo.png" alt="Logo" className="me-2" style={{ width: '20px', height: '20px', borderRadius: '50%' }} />
            <span className="fw-bold">NAME</span>
          </div>
          
          {/* Centered Desktop Navigation */}
          <nav className="d-none d-md-flex position-absolute start-50 translate-middle-x">
            <ul className="nav">
              <li className="nav-item"><a className="nav-link px-3 nav-custom" href="/">Home</a></li>
              <li className="nav-item"><a className="nav-link px-3 nav-custom" href="/packages">Our Offer</a></li>
              <li className="nav-item"><a className="nav-link px-3 nav-custom" href="#">Booking</a></li>
              <li className="nav-item"><a className="nav-link px-3 nav-custom" href="#">Register</a></li>
            </ul>
          </nav>
          
          {/* Mobile menu button */}
          <button 
            className="d-md-none btn border-0 order-2" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <i className={`bi ${menuOpen ? 'bi-x-lg' : 'bi-list'}`} style={{ fontSize: '1.5rem' }}></i>
          </button>
          
          {/* Search */}
          <div className="d-none d-md-flex position-relative align-items-center">
            <input
              type="text"
              placeholder="Search"
              className="form-control form-control-sm rounded-pill pe-4"
              style={{ height: '40px', width: '200px', border: '1px solid rgb(202, 202, 202)', backgroundColor: '#f8f9fa' }}
            />
            <i className="bi bi-search position-absolute" style={{ right: '12px', top: '50%', transform: 'translateY(-50%)', color: '#f59e0b' }}></i>
          </div>
        </header>
        
        {/* Mobile menu (collapsible) */}
        <div className={`mobile-menu position-relative ${menuOpen ? 'show' : ''}`}>
          {menuOpen && (
            <div className="bg-white shadow p-3 rounded-3 position-absolute w-100 z-3">
              <ul className="nav flex-column align-items-center">
                <li className="nav-item"><a className="nav-link py-2 nav-custom" href="#">Home</a></li>
                <li className="nav-item"><a className="nav-link py-2 nav-custom" href="#">Our Offer</a></li>
                <li className="nav-item"><a className="nav-link py-2 nav-custom" href="#">Booking</a></li>
                <li className="nav-item"><a className="nav-link py-2 nav-custom" href="#">Register</a></li>
              </ul>
              <div className="position-relative d-flex align-items-center mt-3">
                <input
                  type="text"
                  placeholder="Search"
                  className="form-control form-control-sm rounded-pill pe-4"
                  style={{ height: '40px', width: '100%', border: '1px solid rgb(202, 202, 202)', backgroundColor: '#f8f9fa' }}
                />
                <i className="bi bi-search position-absolute" style={{ right: '12px', top: '50%', transform: 'translateY(-50%)', color: '#f59e0b' }}></i>
              </div>
            </div>
          )}
        </div>

        {/* Hero Section */}
        <section className="mx-2 mx-md-3 mb-4 mb-md-5">
          <div className="position-relative rounded-4 overflow-hidden" style={{ height: '350px', minHeight: '350px' }}>
            <img
              src="/images/nine-arch-bridge.jpg"
              alt="Nine Arch Bridge in Sri Lanka"
              className="w-100 h-100"
              style={{ objectFit: 'cover' }}
            />
            <div 
              className="position-absolute top-0 start-0 bottom-0 d-flex flex-column justify-content-center p-3 p-md-5 text-white text-start hero-overlay"
              style={{ 
                backgroundColor: 'rgba(30, 58, 40, 0.8)', 
                width: '45%', 
                maxWidth: '100%' 
              }}
            >
              <h1 className="fw-bold mb-2">
                <span style={{ fontSize: 'calc(2rem + 1.5vw)' }}>Explore</span><br />
                <span className="text-warning" style={{ fontSize: 'calc(2rem + 1.5vw)' }}>Sri Lanka</span><br />
                <span style={{ fontSize: 'calc(2rem + 1.5vw)' }}>with us</span>
              </h1>
              <p className="mb-3 mb-md-4">Discover the best tours & plans</p>
              <button className="btn btn-warning rounded-pill px-4 py-2 fw-semibold text-nowrap" style={{ width: 'fit-content' }}>
                Explore
              </button>
            </div>
          </div>
        </section>

        {/* Travel Categories */}
        <h2 className="text-center fw-bold mb-4 mb-md-5">Travel Categories</h2>
        <section className="px-2 px-md-3 mb-4 mb-md-5 d-flex justify-content-center align-items-center">
          <div className="row row-cols-2 row-cols-sm-3 row-cols-md-3 g-3 g-md-4 w-100">
            {cards.map(card => (
              <div className="col" key={card.id}>
                <div
                  className={`d-flex flex-column justify-content-center align-items-center border-0 rounded-3 category-card`}
                  style={{
                    height: '280px',
                    minHeight: '300px',
                    maxWidth: '280px', 
                    margin: '0 auto',
                    backgroundColor: selectedCard === card.id ? '#FFE88B' : '#E0DCCC',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s ease, transform 0.3s ease',
                    transform: selectedCard === card.id ? 'translateY(-5px)' : 'none',
                    boxShadow: selectedCard === card.id ? '0 10px 20px rgba(0,0,0,0.1)' : 'none'
                  }}
                  onClick={() => selectCard(card.id)}
                >
                  <div className="card-body d-flex flex-column justify-content-center align-items-center p-3">
                    <div className="mb-4 d-flex justify-content-center align-items-center" style={{ height: '60px', width: '60px' }}>
                      <img
                        src={`/images/icons/${card.icon}`}
                        alt={`${card.title.split('\n')[0]} icon`}
                        className="img-fluid"
                      />
                    </div>
                    <p className="card-text text-center fw-medium mb-0" style={{ fontSize: '1.1rem' }}>
                      {card.title.split('\n').map((line, i) => (
                        <React.Fragment key={i}>
                          {line}
                          {i < card.title.split('\n').length - 1 && <br />}
                        </React.Fragment>
                      ))}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Hot Offer */}
        <section className="px-2 px-md-3 mb-4 mb-md-5">
          <div className="card border-0 rounded-4" style={{ backgroundColor: '#FFE88B' }}>
            <div className="card-body p-3 p-md-4">
              <div className="row flex-column-reverse flex-md-row">
                {/* Left side with text */}
                <div className="col-md-5 d-flex flex-column justify-content-center py-3 py-md-4 text-center text-md-start px-3 px-md-5">
                  <h2 className="fw-bold mb-2" style={{ fontSize: 'calc(2rem + 1vw)' }}>{hotOffer.destination}</h2>
                  <p className="mb-0 mt-2" style={{ fontSize: 'calc(1rem + 0.5vw)' }}>{hotOffer.duration}</p>
                  <p className="mb-3" style={{ fontSize: 'calc(0.9rem + 0.3vw)' }}>
                    for <span className="fw-bold" style={{ fontSize: 'calc(1.2rem + 0.3vw)' }}>${hotOffer.price}</span> /person
                  </p>
                  <div className="d-flex justify-content-center justify-content-md-start">
                    <button className="btn rounded-pill px-4 py-2 fw-semibold text-nowrap"
                          style={{ backgroundColor: '#FFD500', width: 'fit-content' }}>
                      Explore Now
                    </button>
                  </div>
                </div>
        
                {/* Right side with image grid - 3 images total */}
                <div className="col-md-7 mb-3 mb-md-0">
                  <div className="row g-3">
                    {/* First column - tall image */}
                    <div className="col-12 col-sm-6">
                      <img
                        src={hotOffer.images.main}
                        alt="Main destination view"
                        className="img-fluid rounded-4 w-100"
                        style={{ objectFit: 'cover', height: '300px' }}
                      />
                    </div>
        
                    {/* Second column - two stacked images */}
                    <div className="col-12 col-sm-6 d-flex flex-column">
                      <div className="position-relative mb-3">
                        <img
                          src={hotOffer.images.top}
                          alt="Destination highlight"
                          className="img-fluid rounded-4 w-100"
                          style={{ objectFit: 'cover', height: '140px' }}
                        />
                        <div className="position-absolute"
                            style={{
                              top: '-15px',
                              right: '-15px',
                              width: '90px',
                              height: '90px',
                              backgroundColor: '#FFD500',
                              borderRadius: '50%',
                              display: 'flex',
                              justifyContent: 'center',
                              alignItems: 'center',
                              fontSize: '1rem',
                              fontWeight: 'bold',
                              textAlign: 'center'
                            }}>
                          <span>HOT<br />OFFER</span>
                        </div>
                      </div>
                      <div>
                        <img
                          src={hotOffer.images.bottom}
                          alt="Destination highlight"
                          className="img-fluid rounded-4 w-100"
                          style={{ objectFit: 'cover', height: '140px' }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Best Offers */}
        <h2 className="text-center fw-bold mb-3 mb-md-4">Best Offers This Week</h2>
        <section className="px-2 px-md-5 mb-4 mb-md-5">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 g-md-5">
            {destinations.map(destination => (
              <div className="col" key={destination.id}>
                <div className="position-relative mb-4 h-100">
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
                      zIndex: 2
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
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

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
                <button className="h-100 btn btn-warning rounded-pill position-absolute end-0 top-50 translate-middle-y  px-3 px-md-4">
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

export default SriLankaTravelPage;