import React, { useState, useRef, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './styles.css';

const PackageDetailsPage = () => {
  const [searchText, setSearchText] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const datePickerRef = useRef(null);
  
  // Tour data
  const tour = {
    name: "Tour Water Fall",
    location: "Badulla, Rathnapura",
    region: "Sri Lanka/Highland Waterfall Region",
    rating: 4,
    price: 80,
    mainImage: "/images/detail.jpg",
    galleryImages: [
      "/images/waterfall-1.jpg",
      "/images/waterfall-2.jpg",
      "/images/waterfall-3.jpg",
      "/images/waterfall-4.jpg"
    ],
    features: [
      "3 Nights' Accommodation in a Scenic Eco Lodge",
      "All Ground Transfers",
      "Guided Full-Day Waterfall Hike",
      "Visit to 5 Breathtaking Waterfalls",
      "Natural Pool Swims & Jungle Trails",
      "Picnic Lunch in the Highlands",
      "Tea Estate Visit & Tasting",
      "Village Cultural Experience",
      "Photography Stops at Viewpoints"
    ],
    description: "The Highland Waterfall Trail, nestled in the heart of Sri Lanka's central highlands, offers a scenic escape into nature's untouched beauty. This guided day tour takes you across misty mountains, lush tea plantations, and forest trails leading to some of the country's most stunning waterfalls.\n\nYou'll visit hidden gems like Bambarakanda, Sri Lanka's tallest waterfall, and Diyaluma, known for its natural infinity pools. Along the way, enjoy a picnic lunch surrounded by nature, with plenty of time to relax or take a dip in the cool, clear water."
  };
  
  // Add state for the currently displayed main image
  const [currentMainImage, setCurrentMainImage] = useState(tour.mainImage);
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Function to handle gallery image click
  const handleGalleryImageClick = (imageUrl) => {
    setCurrentMainImage(imageUrl);
  };
  
  // Date picker functions
  useEffect(() => {
    // Close date picker when clicking outside
    function handleClickOutside(event) {
      if (datePickerRef.current && !datePickerRef.current.contains(event.target)) {
        setShowDatePicker(false);
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [datePickerRef]);
  
  const toggleDatePicker = () => {
    setShowDatePicker(!showDatePicker);
  };
  
  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setShowDatePicker(false);
  };
  
  const goToPreviousMonth = () => {
    const previousMonth = new Date(currentMonth);
    previousMonth.setMonth(previousMonth.getMonth() - 1);
    setCurrentMonth(previousMonth);
  };
  
  const goToNextMonth = () => {
    const nextMonth = new Date(currentMonth);
    nextMonth.setMonth(nextMonth.getMonth() + 1);
    setCurrentMonth(nextMonth);
  };
  
  // Generate days for current month
  const generateCalendarDays = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    
    // First day of the month (0 = Sunday, 1 = Monday, etc.)
    const firstDay = new Date(year, month, 1).getDay();
    
    // Last day of the month
    const lastDate = new Date(year, month + 1, 0).getDate();
    
    // Get last day of previous month
    const prevMonthLastDay = new Date(year, month, 0).getDate();
    
    // Create array of day objects
    const days = [];
    
    // Add days from previous month to fill the first week
    for (let i = 0; i < firstDay; i++) {
      const prevMonthDay = prevMonthLastDay - firstDay + i + 1;
      const prevMonth = month === 0 ? 11 : month - 1;
      const prevYear = month === 0 ? year - 1 : year;
      
      days.push({
        date: `${prevYear}-${String(prevMonth + 1).padStart(2, '0')}-${String(prevMonthDay).padStart(2, '0')}`,
        day: prevMonthDay,
        currentMonth: false
      });
    }
    
    // Add days from current month
    for (let i = 1; i <= lastDate; i++) {
      days.push({
        date: `${year}-${String(month + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`,
        day: i,
        currentMonth: true
      });
    }
    
    // Calculate how many days we need from next month to complete the grid
    // We want to have complete weeks (multiples of 7)
    const nextMonthDays = 42 - days.length; // 6 rows of 7 days
    
    // Add days from next month
    for (let i = 1; i <= nextMonthDays; i++) {
      const nextMonth = month === 11 ? 0 : month + 1;
      const nextYear = month === 11 ? year + 1 : year;
      
      days.push({
        date: `${nextYear}-${String(nextMonth + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`,
        day: i,
        currentMonth: false
      });
    }
    
    return days;
  };

  // Generate stars based on rating
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<i key={i} className="bi bi-star-fill text-warning me-1"></i>);
      } else {
        stars.push(<i key={i} className="bi bi-star text-warning me-1"></i>);
      }
    }
    return stars;
  };

  return (
    <div className="container-fluid p-0">
      {/* Header - Dark background with no gap to hero section */}
      <header className="d-flex justify-content-between align-items-center px-4 py-3" style={{ backgroundColor: '#003C21' }}>
        <div className="d-flex align-items-center">
          <div className="rounded-circle overflow-hidden me-2" style={{ width: '36px', height: '36px' }}>
            <img src="/images/logo.png" alt="Logo" className="w-100 h-100 object-fit-cover" />
          </div>
          <span className="fw-bold text-white">NAME</span>
        </div>

        {/* Centered Navigation */}
        <nav className="position-absolute start-50 translate-middle-x d-none d-md-block">
          <ul className="nav">
            <li className="nav-item"><a className="nav-link px-3 text-white" href="/">Home</a></li>
            <li className="nav-item"><a className="nav-link px-3 text-white" href="/packages">Our Offer</a></li>
            <li className="nav-item"><a className="nav-link px-3 text-white fw-bold" style={{ color: '#FFD12E' }} href="/booking">Booking</a></li>
            <li className="nav-item"><a className="nav-link px-3 text-white" href="/register">Register</a></li>
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
              backgroundColor: 'rgba(255, 255, 255, 0.1)', 
              borderColor: 'rgba(255, 255, 255, 0.3)',
              color: 'white',
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
          <i className={`bi ${menuOpen ? 'bi-x-lg' : 'bi-list'} text-white`} style={{ fontSize: '1.5rem' }}></i>
        </button>
      </header>
      
      {/* Mobile menu (collapsible) */}
      <div className={`mobile-menu position-relative ${menuOpen ? 'show' : ''}`}>
        {menuOpen && (
          <div className="bg-dark shadow p-3 rounded-bottom-3 position-absolute w-100 z-3">
            <ul className="nav flex-column align-items-center">
              <li className="nav-item"><a className="nav-link py-2 text-white" href="/">Home</a></li>
              <li className="nav-item"><a className="nav-link py-2 text-white" href="/packages">Our Offer</a></li>
              <li className="nav-item"><a className="nav-link py-2 text-white fw-bold" style={{ color: '#FFD12E' }} href="/booking">Booking</a></li>
              <li className="nav-item"><a className="nav-link py-2 text-white" href="/register">Register</a></li>
            </ul>
            <div className="position-relative d-flex align-items-center mt-3">
              <input
                type="text"
                placeholder="Search"
                className="form-control form-control-sm rounded-pill pe-4"
                style={{ 
                  height: '40px', 
                  width: '100%', 
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  borderColor: 'rgba(255, 255, 255, 0.3)',
                  color: 'white'
                }}
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
              <i className="bi bi-search position-absolute" style={{ right: '12px', top: '50%', transform: 'translateY(-50%)', color: '#FFD12E' }}></i>
            </div>
          </div>
        )}
      </div>

      {/* Hero Section - No gap from header */}
      <section className="hero-banner position-relative" style={{ height: '350px' }}>
        <img 
            src={tour.mainImage} 
            alt={tour.name} 
            className="w-100 h-100 hero-image-crop" 
            style={{ objectFit: 'cover', objectPosition: 'center 70%' }}
        />
        <div 
            className="position-absolute start-0 top-0 bottom-0 d-flex flex-column justify-content-center p-4 p-md-5 text-white text-start" 
            style={{ backgroundColor: 'rgba(0, 0, 0, 0)', width: '50%' }}
        >
            <h1 className="fw-bold mb-0" style={{ fontSize: 'calc(2.5rem + 1vw)' }}>
            Tour<br />
            Water Fall
            </h1>
            <p className="mb-0">{tour.location}</p>
        </div>
        </section>

      {/* Filter/Option Buttons */}
      <div className="py-3 px-5">
        <div className="container-fluid px-4">
          <div className="row g-4 justify-content-center">
            <div className="col-12 col-md-3 position-relative">
              <button 
                className={`btn rounded-pill w-100 d-flex align-items-center justify-content-between ${selectedDate ? 'text-white' : ''}`}
                onClick={toggleDatePicker}
                style={{ 
                  backgroundColor: selectedDate ? '#082811' : '#E0DCCC',
                  border: 'none',
                  borderRadius: '30px'
                }}
              >
                {selectedDate ? new Date(selectedDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : 'Date'} 
                <i className="bi bi-chevron-down"></i>
              </button>
              
              {/* Date Picker */}
              {showDatePicker && (
                <div 
                  ref={datePickerRef}
                  className="position-absolute start-0 mt-2 bg-white rounded-4 shadow-lg p-4" 
                  style={{ 
                    width: '340px', 
                    zIndex: 1000,
                    border: '1px solid rgba(0,0,0,0.1)'
                  }}
                >
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <button 
                      className="btn btn-sm" 
                      onClick={goToPreviousMonth}
                      style={{ color: '#082811' }}
                    >
                      <i className="bi bi-chevron-left fs-4"></i>
                    </button>
                    <h5 className="mb-0 fw-bold" style={{ color: '#082811' }}>
                      {currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                    </h5>
                    <button 
                      className="btn btn-sm" 
                      onClick={goToNextMonth}
                      style={{ color: '#082811' }}
                    >
                      <i className="bi bi-chevron-right fs-4"></i>
                    </button>
                  </div>
                  
                  <div className="calendar">
                    {/* Days of week header */}
                    <table className="w-100 mb-2">
                      <thead>
                        <tr>
                          {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day, index) => (
                            <th key={index} className="text-center pb-2" style={{ 
                              color: '#082811', 
                              fontWeight: 'bold',
                              fontSize: '14px'
                            }}>
                              {day}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {/* Render calendar in rows of 7 days each */}
                        {Array.from({ length: 6 }).map((_, rowIndex) => (
                          <tr key={rowIndex}>
                            {generateCalendarDays().slice(rowIndex * 7, (rowIndex + 1) * 7).map((day, dayIndex) => {
                              const isSelected = selectedDate === day.date;
                              const today = new Date();
                              const isToday = 
                                today.getDate() === day.day && 
                                today.getMonth() === currentMonth.getMonth() && 
                                today.getFullYear() === currentMonth.getFullYear() && 
                                day.currentMonth;
                                
                              return (
                                <td 
                                  key={dayIndex}
                                  className="text-center p-0"
                                  style={{ height: '38px' }}
                                  onClick={() => day.currentMonth && handleDateSelect(day.date)}
                                >
                                  <div 
                                    className="d-flex align-items-center justify-content-center h-100"
                                    style={{ cursor: day.currentMonth ? 'pointer' : 'default' }}
                                  >
                                    <div 
                                      className={`d-flex align-items-center justify-content-center rounded-circle ${isSelected ? 'text-white' : isToday ? 'text-dark fw-bold' : ''}`}
                                      style={{ 
                                        width: '34px',
                                        height: '34px',
                                        opacity: day.currentMonth ? 1 : 0.3,
                                        backgroundColor: isSelected ? '#082811' : isToday ? '#FFBB00' : 'transparent',
                                        fontSize: '14px'
                                      }}
                                    >
                                      {day.day}
                                    </div>
                                  </div>
                                </td>
                              );
                            })}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    
                    <div className="d-flex justify-content-between mt-4">
                      <button 
                        className="btn rounded-3 px-4 py-2" 
                        onClick={() => setShowDatePicker(false)}
                        style={{ 
                          borderColor: '#082811',
                          color: '#082811',
                          fontSize: '14px',
                          fontWeight: 'bold'
                        }}
                      >
                        Cancel
                      </button>
                      <button 
                        className="btn rounded-3 px-4 py-2 text-white" 
                        onClick={() => setShowDatePicker(false)}
                        style={{ 
                          backgroundColor: '#FFBB00',
                          border: 'none',
                          fontSize: '14px',
                          fontWeight: 'bold'
                        }}
                      >
                        Apply
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <div className="col-12 col-md-3">
              <button className="btn rounded-pill w-100 d-flex align-items-center justify-content-between" 
                style={{ 
                    border: 'none',
                    backgroundColor: '#E0DCCC',
                    borderRadius: '30px'
                }}>
                Guests <i className="bi bi-chevron-down"></i>
              </button>
            </div>
            
            <div className="col-12 col-md-3">
              <button className="btn rounded-pill w-100 d-flex align-items-center justify-content-between" 
                style={{ 
                  border: 'none',
                  backgroundColor: '#E0DCCC',
                  borderRadius: '30px'
                }}>
                Transfer Types <i className="bi bi-chevron-down"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-fluid py-4 px-5 text-start">
        <div className="row px-4">
          {/* Left Column - Tour Image and Gallery */}
          <div className="col-lg-6 mb-4">
            <div className="mb-3">
              <img 
                src={currentMainImage} 
                alt={tour.name} 
                className="img-fluid rounded-3 w-100" 
                style={{ height: '350px', objectFit: 'cover' }} 
              />
            </div>
            <div className="row g-2">
              {/* Main image also included as clickable thumbnail */}
              <div className="col-3">
                <img 
                  src={tour.mainImage} 
                  alt={`${tour.name} main`} 
                  className="img-fluid rounded-3 gallery-thumbnail" 
                  style={{ 
                    height: '80px', 
                    width: '100%', 
                    objectFit: 'cover',
                    cursor: 'pointer',
                    border: currentMainImage === tour.mainImage ? '3px solid #FFD12E' : 'none'
                  }} 
                  onClick={() => handleGalleryImageClick(tour.mainImage)}
                />
              </div>
              {tour.galleryImages.map((image, index) => (
                <div className="col-3" key={index}>
                  <img 
                    src={image} 
                    alt={`${tour.name} gallery ${index+1}`} 
                    className="img-fluid rounded-3 gallery-thumbnail" 
                    style={{ 
                      height: '80px', 
                      width: '100%', 
                      objectFit: 'cover',
                      cursor: 'pointer',
                      border: currentMainImage === image ? '3px solid #FFD12E' : 'none'
                    }} 
                    onClick={() => handleGalleryImageClick(image)}
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Column - Tour Details */}
          <div className="col-lg-6">
            <h2 className="mb-2">{tour.region}</h2>
            <div className="mb-4">
              {renderStars(tour.rating)}
            </div>

            <ul className="ps-3 mb-4">
              {tour.features.map((feature, index) => (
                <li key={index} className="mb-2">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  {feature}
                </li>
              ))}
            </ul>

            <div className="mb-4">
              {tour.description.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="d-flex align-items-center justify-content-between mb-4">
              <div>
                <h3 className="mb-0">${tour.price}</h3>
                <span className="text-muted">/Person</span>
              </div>
              <a href="/purchase">
                  <button className="btn btn-dark rounded-pill px-4 py-2">
                    Purchase
                  </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <section className="py-5 text-white text-center" style={{ backgroundColor: '#082811' }}>
        <div className="container">
          <h2 className="fw-bold mb-2">Subscribe to our news letter</h2>
          <p className="mb-4">Know about our newest offers</p>
          <div className="row justify-content-center">
            <div className="col-md-6 position-relative newsletter-form">
              <input
                type="email"
                className="form-control rounded-pill py-3 px-4"
                placeholder=""
                style={{ paddingRight: '140px' }}
              />
              <button 
                className="btn btn-warning rounded-pill subscribe-btn px-4 py-2"
                style={{ right: '8px' }}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-3 text-white d-flex flex-column flex-md-row align-items-center justify-content-between" style={{ backgroundColor: '#082811' }}>
        <div className="d-flex align-items-center mb-3 mb-md-0">
          <div className="rounded-circle overflow-hidden me-2" style={{ width: '36px', height: '36px' }}>
            <img src="/images/logo.png" alt="Logo" className="w-100 h-100 object-fit-cover" />
          </div>
          <span className="fw-bold">NAME</span>
        </div>
        <div className="small mb-3 mb-md-0">
          Copyright 2010-2023. All rights reserved.
        </div>
        <div className="d-flex gap-4">
          <a href="#" className="text-decoration-none text-white">Legal</a>
          <a href="#" className="text-decoration-none text-white">Privacy Policy</a>
        </div>
      </footer>
    </div>
  );
};

export default PackageDetailsPage;