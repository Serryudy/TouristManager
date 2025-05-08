import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './styles.css';

const Dashboard = () => {
  // State for login
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  // State for dashboard
  const [activeTab, setActiveTab] = useState('notifications');
  
  // States for hotel responses
  const [hotelResponses, setHotelResponses] = useState({});
  
  // States for guide responses
  const [guideResponses, setGuideResponses] = useState({});
  
  // Mock data for notifications
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      tourName: 'Highland Waterfall Trail',
      dates: '2025-06-21 to 2025-06-24',
      guests: '2 Adults, 1 Child',
      status: 'pending',
      location: 'Ella & Central Highlands',
      requirements: 'Double Room, Extra Bed',
      transportNeeded: true
    },
    {
      id: 2,
      tourName: 'Ancient City Tour - Polonnaruwa',
      dates: '2025-07-15 to 2025-07-17',
      guests: '4 Adults',
      status: 'pending',
      location: 'Polonnaruwa',
      requirements: '2 Double Rooms',
      transportNeeded: true
    },
    {
      id: 3,
      tourName: 'Beach Gateway - Trincomalee',
      dates: '2025-08-10 to 2025-08-15',
      guests: '2 Adults, 2 Children',
      status: 'confirmed',
      location: 'Trincomalee',
      requirements: 'Family Suite',
      transportNeeded: true
    }
  ]);
  
  // Initialize responses for each notification if not already set
  const initializeResponses = (notificationId) => {
    // Initialize hotel responses
    if (!hotelResponses[notificationId]) {
      setHotelResponses(prev => ({
        ...prev,
        [notificationId]: {
          isAvailable: true,
          roomTypes: [],
          amenities: {
            wifi: false,
            ac: false,
            pool: false
          }
        }
      }));
    }
    
    // Initialize guide responses
    if (!guideResponses[notificationId]) {
      setGuideResponses(prev => ({
        ...prev,
        [notificationId]: {
          isAvailable: true,
          canProvideTransport: false,
          languages: []
        }
      }));
    }
  };
  
  // Handle login
  const handleLogin = (e) => {
    e.preventDefault();
    // In a real app, this would validate against backend
    if (email && password) {
      setIsLoggedIn(true);
      // Determine user type from email for demo purposes
      if (email.includes('hotel')) {
        setUserType('hotel');
      } else {
        setUserType('guide');
      }
      
      // Initialize responses for all notifications
      notifications.forEach(notification => {
        initializeResponses(notification.id);
      });
    }
  };
  
  // Handle logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    setEmail('');
    setPassword('');
    setUserType('');
  };
  
  // Hotel response handlers
  const handleHotelAvailabilityChange = (notificationId, value) => {
    setHotelResponses(prev => ({
      ...prev,
      [notificationId]: {
        ...prev[notificationId],
        isAvailable: value
      }
    }));
  };
  
  const handleHotelRoomTypeChange = (notificationId, value, checked) => {
    setHotelResponses(prev => {
      const currentRoomTypes = prev[notificationId]?.roomTypes || [];
      let newRoomTypes;
      
      if (checked) {
        newRoomTypes = [...currentRoomTypes, value];
      } else {
        newRoomTypes = currentRoomTypes.filter(type => type !== value);
      }
      
      return {
        ...prev,
        [notificationId]: {
          ...prev[notificationId],
          roomTypes: newRoomTypes
        }
      };
    });
  };
  
  const handleHotelAmenityChange = (notificationId, name, checked) => {
    setHotelResponses(prev => ({
      ...prev,
      [notificationId]: {
        ...prev[notificationId],
        amenities: {
          ...prev[notificationId].amenities,
          [name]: checked
        }
      }
    }));
  };
  
  // Guide response handlers
  const handleGuideAvailabilityChange = (notificationId, value) => {
    setGuideResponses(prev => ({
      ...prev,
      [notificationId]: {
        ...prev[notificationId],
        isAvailable: value
      }
    }));
  };
  
  const handleGuideTransportChange = (notificationId, checked) => {
    setGuideResponses(prev => ({
      ...prev,
      [notificationId]: {
        ...prev[notificationId],
        canProvideTransport: checked
      }
    }));
  };
  
  const handleGuideLanguageChange = (notificationId, value, checked) => {
    setGuideResponses(prev => {
      const currentLanguages = prev[notificationId]?.languages || [];
      let newLanguages;
      
      if (checked) {
        newLanguages = [...currentLanguages, value];
      } else {
        newLanguages = currentLanguages.filter(lang => lang !== value);
      }
      
      return {
        ...prev,
        [notificationId]: {
          ...prev[notificationId],
          languages: newLanguages
        }
      };
    });
  };
  
  // Handle response submission
  const handleResponseSubmit = (notification) => {
    const id = notification.id;
    let available, responseDetails;
    
    if (userType === 'hotel') {
      available = hotelResponses[id].isAvailable;
      responseDetails = {
        roomTypes: hotelResponses[id].roomTypes,
        amenities: hotelResponses[id].amenities
      };
    } else {
      available = guideResponses[id].isAvailable;
      responseDetails = {
        canProvideTransport: guideResponses[id].canProvideTransport,
        languages: guideResponses[id].languages
      };
    }
    
    // Update notification status
    const updatedNotifications = notifications.map(notif => 
      notif.id === id 
        ? { ...notif, status: available ? 'confirmed' : 'declined' } 
        : notif
    );
    setNotifications(updatedNotifications);
  };
  
  // Login Form
  const renderLoginForm = () => (
    <div className="container-fluid p-0" style={{ backgroundColor: '#FAF6F1', minHeight: '100vh' }}>
      {/* Header */}
      <header className="d-flex justify-content-between align-items-center px-4 py-3" style={{ backgroundColor: '#082811', color: 'white' }}>
        <div className="d-flex align-items-center">
          <div className="rounded-circle overflow-hidden me-2" style={{ width: '36px', height: '36px', backgroundColor: 'white' }}>
            <img src="/images/logo.png" alt="Logo" className="w-100 h-100 object-fit-cover" />
          </div>
          <span className="fw-bold">NAME</span>
        </div>

        <nav className="position-absolute start-50 translate-middle-x d-none d-md-block">
          <ul className="nav">
            <li className="nav-item"><a className="nav-link px-3 text-white" href="/">Home</a></li>
            <li className="nav-item"><a className="nav-link px-3 text-white" href="/packages">Our Offer</a></li>
            <li className="nav-item"><a className="nav-link px-3 text-white" href="/booking">Booking</a></li>
            <li className="nav-item"><a className="nav-link px-3 text-white" href="/register">Register</a></li>
          </ul>
        </nav>

        <div className="position-relative d-none d-md-block">
          <input
            type="text"
            placeholder="Search"
            className="form-control rounded-pill pe-5"
            style={{ 
              width: '220px', 
              backgroundColor: 'white', 
              borderColor: '#DDD',
              height: '40px'
            }}
          />
          <button 
            className="btn position-absolute end-0 top-0 h-100" 
            style={{ borderRadius: '0 50px 50px 0' }}
          >
            <i className="bi bi-search text-warning"></i>
          </button>
        </div>
      </header>

      {/* Login Container */}
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-5">
            <div className="card shadow-sm border-0 overflow-hidden">
              <div className="card-header text-white text-center py-4" style={{ backgroundColor: '#082811' }}>
                <h3 className="mb-0">Partner Login</h3>
                <p className="small mb-0">Access your hotel or guide dashboard</p>
              </div>
              <div className="card-body p-4" style={{ backgroundColor: '#E8E5D5' }}>
                <div onSubmit={handleLogin}>
                  <div className="mb-3">
                    <input 
                      type="email"
                      className="form-control"
                      placeholder="Email Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <input 
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div className="d-grid">
                    <button 
                      type="submit"
                      className="btn btn-warning rounded-pill py-2 text-white fw-bold"
                      onClick={handleLogin}
                    >
                      Login
                    </button>
                  </div>
                  <div className="text-center mt-3">
                    <a href="#" className="text-decoration-none text-success">Forgot password?</a>
                  </div>
                </div>
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
  
  // Hotel Response Form
  const renderHotelResponseForm = (notification) => {
    // Make sure response state is initialized
    if (!hotelResponses[notification.id]) {
      initializeResponses(notification.id);
      return <div>Loading response form...</div>;
    }
    
    const response = hotelResponses[notification.id];
    
    return (
      <div className="bg-light p-3 rounded mt-3 w-50">
        <h5 className="fs-6 fw-bold mb-3">Your Response</h5>
        
        <div className="mb-3">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name={`availability-${notification.id}`}
              id={`available-${notification.id}`}
              checked={response.isAvailable}
              onChange={() => handleHotelAvailabilityChange(notification.id, true)}
            />
            <label className="form-check-label" htmlFor={`available-${notification.id}`}>
              Available for this booking
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name={`availability-${notification.id}`}
              id={`unavailable-${notification.id}`}
              checked={!response.isAvailable}
              onChange={() => handleHotelAvailabilityChange(notification.id, false)}
            />
            <label className="form-check-label" htmlFor={`unavailable-${notification.id}`}>
              Not available
            </label>
          </div>
        </div>
        
        {response.isAvailable && (
          <>
            <div className="mb-3">
              <p className="small fw-semibold mb-2">Available Room Types:</p>
              <div className="d-flex flex-wrap gap-3">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id={`standard-${notification.id}`}
                    value="standard"
                    checked={response.roomTypes.includes('standard')}
                    onChange={(e) => handleHotelRoomTypeChange(notification.id, 'standard', e.target.checked)}
                  />
                  <label className="form-check-label small" htmlFor={`standard-${notification.id}`}>
                    Standard
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id={`deluxe-${notification.id}`}
                    value="deluxe"
                    checked={response.roomTypes.includes('deluxe')}
                    onChange={(e) => handleHotelRoomTypeChange(notification.id, 'deluxe', e.target.checked)}
                  />
                  <label className="form-check-label small" htmlFor={`deluxe-${notification.id}`}>
                    Deluxe
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id={`family-${notification.id}`}
                    value="family"
                    checked={response.roomTypes.includes('family')}
                    onChange={(e) => handleHotelRoomTypeChange(notification.id, 'family', e.target.checked)}
                  />
                  <label className="form-check-label small" htmlFor={`family-${notification.id}`}>
                    Family
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id={`suite-${notification.id}`}
                    value="suite"
                    checked={response.roomTypes.includes('suite')}
                    onChange={(e) => handleHotelRoomTypeChange(notification.id, 'suite', e.target.checked)}
                  />
                  <label className="form-check-label small" htmlFor={`suite-${notification.id}`}>
                    Suite
                  </label>
                </div>
              </div>
            </div>
            
            <div className="mb-3">
              <p className="small fw-semibold mb-2">Amenities Available:</p>
              <div className="d-flex flex-wrap gap-3">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id={`wifi-${notification.id}`}
                    name="wifi"
                    checked={response.amenities.wifi}
                    onChange={(e) => handleHotelAmenityChange(notification.id, 'wifi', e.target.checked)}
                  />
                  <label className="form-check-label small" htmlFor={`wifi-${notification.id}`}>
                    WiFi
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id={`ac-${notification.id}`}
                    name="ac"
                    checked={response.amenities.ac}
                    onChange={(e) => handleHotelAmenityChange(notification.id, 'ac', e.target.checked)}
                  />
                  <label className="form-check-label small" htmlFor={`ac-${notification.id}`}>
                    A/C
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id={`pool-${notification.id}`}
                    name="pool"
                    checked={response.amenities.pool}
                    onChange={(e) => handleHotelAmenityChange(notification.id, 'pool', e.target.checked)}
                  />
                  <label className="form-check-label small" htmlFor={`pool-${notification.id}`}>
                    Pool
                  </label>
                </div>
              </div>
            </div>
          </>
        )}
        
        <button
          onClick={() => handleResponseSubmit(notification)}
          className="btn btn-warning text-white rounded-pill px-4 py-2"
        >
          Submit Response
        </button>
      </div>
    );
  };
  
  // Guide Response Form
  const renderGuideResponseForm = (notification) => {
    // Make sure response state is initialized
    if (!guideResponses[notification.id]) {
      initializeResponses(notification.id);
      return <div>Loading response form...</div>;
    }
    
    const response = guideResponses[notification.id];
    
    return (
      <div className="bg-light p-3 rounded mx-auto" style={{width: '100%', float: 'right' }}>
        <h5 className="fs-6 fw-bold mb-3 text-center">Your Response</h5>
        
        <div className="mb-3 d-flex justify-content-between align-items-center">
          <label className="form-check-label" htmlFor={`available-${notification.id}`}>
            Available for this tour
          </label>
          <div>
            <input
              className="form-check-input"
              type="radio"
              name={`availability-${notification.id}`}
              id={`available-${notification.id}`}
              checked={response.isAvailable}
              onChange={() => handleGuideAvailabilityChange(notification.id, true)}
            />
          </div>
        </div>
        
        <div className="mb-3 d-flex justify-content-between align-items-center">
          <label className="form-check-label" htmlFor={`unavailable-${notification.id}`}>
            Not available
          </label>
          <div>
            <input
              className="form-check-input"
              type="radio"
              name={`availability-${notification.id}`}
              id={`unavailable-${notification.id}`}
              checked={!response.isAvailable}
              onChange={() => handleGuideAvailabilityChange(notification.id, false)}
            />
          </div>
        </div>
        
        {response.isAvailable && (
          <>
            <div className="mb-3 d-flex justify-content-between align-items-center">
              <label className="form-check-label" htmlFor={`transport-${notification.id}`}>
                I can provide transportation
              </label>
              <div>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id={`transport-${notification.id}`}
                  checked={response.canProvideTransport}
                  onChange={(e) => handleGuideTransportChange(notification.id, e.target.checked)}
                />
              </div>
            </div>
            
            <div className="mb-3">
              <p className="small fw-semibold mb-2 text-left">Languages Spoken:</p>
              <div className="d-flex flex-column">
                <div className="d-flex justify-content-between align-items-center mb-1">
                  <label className="form-check-label small" htmlFor={`english-${notification.id}`}>
                    English
                  </label>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id={`english-${notification.id}`}
                    value="english"
                    checked={response.languages.includes('english')}
                    onChange={(e) => handleGuideLanguageChange(notification.id, 'english', e.target.checked)}
                  />
                </div>
                <div className="d-flex justify-content-between align-items-center mb-1">
                  <label className="form-check-label small" htmlFor={`sinhala-${notification.id}`}>
                    Sinhala
                  </label>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id={`sinhala-${notification.id}`}
                    value="sinhala"
                    checked={response.languages.includes('sinhala')}
                    onChange={(e) => handleGuideLanguageChange(notification.id, 'sinhala', e.target.checked)}
                  />
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <label className="form-check-label small" htmlFor={`tamil-${notification.id}`}>
                    Tamil
                  </label>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id={`tamil-${notification.id}`}
                    value="tamil"
                    checked={response.languages.includes('tamil')}
                    onChange={(e) => handleGuideLanguageChange(notification.id, 'tamil', e.target.checked)}
                  />
                </div>
              </div>
            </div>
          </>
        )}
        
        <div className="text-center mt-4">
          <button
            onClick={() => handleResponseSubmit(notification)}
            className="btn btn-warning text-white rounded-pill px-4 py-2"
          >
            Submit Response
          </button>
        </div>
      </div>
    );
  };
  
  // Notification Card
  const renderNotificationCard = (notification) => (
    <div key={notification.id} className="card mb-4 shadow-sm border-0">
      <div className="card-header d-flex justify-content-between align-items-center py-3" style={{ backgroundColor: '#3D7A5D', color: 'white' }}>
        <h5 className="mb-0 fs-6 fw-bold">{notification.tourName}</h5>
        <span className={`badge rounded-pill ${
          notification.status === 'pending' ? 'bg-warning' : 
          notification.status === 'confirmed' ? 'bg-success' : 'bg-danger'
        }`}>
          {notification.status.charAt(0).toUpperCase() + notification.status.slice(1)}
        </span>
      </div>
      
      <div className="card-body" style={{ backgroundColor: '#E8E5D5' }}>
        <div className="row g-4">
          {/* Left Column: Notification Details */}
          <div className="col-md-6">
            <div className="row g-3">
              <div className="col-12">
                <div className="d-flex">
                  <span className="text-muted me-2 small">Dates:</span>
                  <span className="small">{notification.dates}</span>
                </div>
              </div>
              <div className="col-12">
                <div className="d-flex">
                  <span className="text-muted me-2 small">Guests:</span>
                  <span className="small">{notification.guests}</span>
                </div>
              </div>
              <div className="col-12">
                <div className="d-flex">
                  <span className="text-muted me-2 small">Location:</span>
                  <span className="small">{notification.location}</span>
                </div>
              </div>
              <div className="col-12">
                <div className="d-flex">
                  <span className="text-muted me-2 small">Required:</span>
                  <span className="small">{notification.requirements}</span>
                </div>
              </div>
              {userType === 'guide' && (
                <div className="col-12">
                  <div className="d-flex">
                    <span className="text-muted me-2 small">Transport Needed:</span>
                    <span className="small">{notification.transportNeeded ? 'Yes' : 'No'}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
  
          {/* Right Column: Response Form or Status Message */}
          <div className="col-md-6">
            {notification.status === 'pending' && (
              userType === 'hotel' 
                ? renderHotelResponseForm(notification) 
                : renderGuideResponseForm(notification)
            )}
            
            {notification.status !== 'pending' && (
              <div className="alert alert-light mb-0">
                <small>
                  {notification.status === 'confirmed' 
                    ? 'You have confirmed this booking. The customer will be notified.' 
                    : 'You have declined this booking.'}
                </small>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
  
  // Dashboard content
  const renderDashboard = () => (
    <div className="container-fluid p-0" style={{ backgroundColor: '#FAF6F1', minHeight: '100vh' }}>
      {/* Header */}
      <header className="d-flex justify-content-between align-items-center px-4 py-3" style={{ backgroundColor: '#082811', color: 'white' }}>
        <div className="d-flex align-items-center">
          <div className="rounded-circle overflow-hidden me-2" style={{ width: '36px', height: '36px', backgroundColor: 'white' }}>
            <img src="/images/logo.png" alt="Logo" />
          </div>
          <span className="fw-bold">NAME</span>
        </div>

        <nav className="position-absolute start-50 translate-middle-x d-none d-md-block">
          <ul className="nav">
            <li className="nav-item"><a className="nav-link px-3 text-white" href="/">Home</a></li>
            <li className="nav-item"><a className="nav-link px-3 text-white" href="/packages">Our Offer</a></li>
            <li className="nav-item"><a className="nav-link px-3 text-white" href="/booking">Booking</a></li>
            <li className="nav-item"><a className="nav-link px-3 text-white" href="/register">Register</a></li>
          </ul>
        </nav>

        <div className="d-flex align-items-center">
          <button 
            onClick={handleLogout}
            className="btn btn-warning text-white rounded-pill px-3 py-1"
          >
            Logout
          </button>
        </div>
      </header>
      
      {/* Welcome Banner */}
      <div className="bg-success text-white p-4">
        <div className="container">
          <h1 className="fs-4 fw-bold">
            Welcome back, {userType === 'hotel' ? 'Hotel Partner' : 'Tour Guide'}
          </h1>
          <p className="mb-0 small">
            Manage your bookings and update your availability
          </p>
        </div>
      </div>
      
      {/* Dashboard Tabs */}
      <div className="container py-4">
        <ul className="nav nav-tabs mb-4">
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === 'notifications' ? 'active' : ''}`}
              onClick={() => setActiveTab('notifications')}
            >
              Tour Notifications
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === 'profile' ? 'active' : ''}`}
              onClick={() => setActiveTab('profile')}
            >
              Profile
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === 'calendar' ? 'active' : ''}`}
              onClick={() => setActiveTab('calendar')}
            >
              Availability Calendar
            </button>
          </li>
        </ul>
        
        {/* Notifications Tab Content */}
        {activeTab === 'notifications' && (
          <div>
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h2 className="fs-4 fw-bold" style={{ color: '#3D7A5D' }}>Tour Plan Notifications</h2>
              <div>
                <select className="form-select form-select-sm" style={{ width: '160px' }}>
                  <option>All Notifications</option>
                  <option>Pending</option>
                  <option>Confirmed</option>
                  <option>Declined</option>
                </select>
                </div>
            </div>
            
            {notifications.map(notification => renderNotificationCard(notification))}
          </div>
        )}
        
        {/* Profile Tab Content */}
        {activeTab === 'profile' && (
          <div className="card shadow-sm border-0">
            <div className="card-body" style={{ backgroundColor: '#E8E5D5' }}>
              <h2 className="fs-4 fw-bold mb-4" style={{ color: '#3D7A5D' }}>Your Profile</h2>
              
              {userType === 'hotel' ? (
                <div className="row g-3 text-start">
                  <div className="col-md-6">
                    <label className="form-label small fw-semibold">Hotel Name</label>
                    <input type="text" className="form-control" defaultValue="Waterfall Eco Lodge" />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label small fw-semibold">Email</label>
                    <input type="email" className="form-control" defaultValue={email} />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label small fw-semibold">Phone</label>
                    <input type="text" className="form-control" defaultValue="+94 123456789" />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label small fw-semibold">Address</label>
                    <input type="text" className="form-control" defaultValue="123 Kandy Road, Ella" />
                  </div>
                  <div className="col-12">
                    <label className="form-label small fw-semibold">Hotel Description</label>
                    <textarea className="form-control" rows="3" defaultValue="A beautiful eco-friendly lodge located in the heart of Sri Lanka's central highlands."></textarea>
                  </div>
                  <div className="col-12 mt-4">
                    <button className="btn btn-warning text-white rounded-pill px-4">
                      Save Changes
                    </button>
                  </div>
                </div>
              ) : (
                <div className="row g-3 text-start">
                  <div className="col-md-6">
                    <label className="form-label small fw-semibold">Full Name</label>
                    <input type="text" className="form-control" defaultValue="Samantha Perera" />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label small fw-semibold">Email</label>
                    <input type="email" className="form-control" defaultValue={email} />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label small fw-semibold">Phone</label>
                    <input type="text" className="form-control" defaultValue="+94 123456789" />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label small fw-semibold">Languages</label>
                    <input type="text" className="form-control" defaultValue="English, Sinhala, Tamil" />
                  </div>
                  <div className="col-12">
                    <label className="form-label small fw-semibold">Bio</label>
                    <textarea className="form-control" rows="3" defaultValue="Experienced tour guide specializing in nature trails and waterfall hikes in Sri Lanka's central highlands."></textarea>
                  </div>
                  <div className="col-12 mt-4">
                    <button className="btn btn-warning text-white rounded-pill px-4">
                      Save Changes
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
        
        {/* Calendar Tab Content */}
        {activeTab === 'calendar' && (
          <div className="card shadow-sm border-0">
            <div className="card-body" style={{ backgroundColor: '#E8E5D5' }}>
              <h2 className="fs-4 fw-bold mb-4" style={{ color: '#3D7A5D' }}>Availability Calendar</h2>
              <p className="text-muted small mb-4">Mark your availability for upcoming dates.</p>
              
              <div className="bg-light p-4 rounded mb-4">
                <p className="small mb-2">
                  Select dates when you are <strong>not available</strong> to receive bookings.
                </p>
                
                {/* Calendar View */}
                <div className="mb-4">
                  <div className="row text-center mb-2">
                    <div className="col">Sun</div>
                    <div className="col">Mon</div>
                    <div className="col">Tue</div>
                    <div className="col">Wed</div>
                    <div className="col">Thu</div>
                    <div className="col">Fri</div>
                    <div className="col">Sat</div>
                  </div>
                  
                  {/* Week 1 */}
                  <div className="row mb-2">
                    <div className="col p-1">
                      <button className="btn btn-sm btn-light border w-100">1</button>
                    </div>
                    <div className="col p-1">
                      <button className="btn btn-sm btn-light border w-100">2</button>
                    </div>
                    <div className="col p-1">
                      <button className="btn btn-sm btn-light border w-100">3</button>
                    </div>
                    <div className="col p-1">
                      <button className="btn btn-sm btn-danger border w-100">4</button>
                    </div>
                    <div className="col p-1">
                      <button className="btn btn-sm btn-light border w-100">5</button>
                    </div>
                    <div className="col p-1">
                      <button className="btn btn-sm btn-light border w-100">6</button>
                    </div>
                    <div className="col p-1">
                      <button className="btn btn-sm btn-light border w-100">7</button>
                    </div>
                  </div>
                  
                  {/* Week 2 */}
                  <div className="row mb-2">
                    <div className="col p-1">
                      <button className="btn btn-sm btn-light border w-100">8</button>
                    </div>
                    <div className="col p-1">
                      <button className="btn btn-sm btn-danger border w-100">9</button>
                    </div>
                    <div className="col p-1">
                      <button className="btn btn-sm btn-light border w-100">10</button>
                    </div>
                    <div className="col p-1">
                      <button className="btn btn-sm btn-light border w-100">11</button>
                    </div>
                    <div className="col p-1">
                      <button className="btn btn-sm btn-light border w-100">12</button>
                    </div>
                    <div className="col p-1">
                      <button className="btn btn-sm btn-light border w-100">13</button>
                    </div>
                    <div className="col p-1">
                      <button className="btn btn-sm btn-light border w-100">14</button>
                    </div>
                  </div>
                  
                  {/* Week 3 */}
                  <div className="row mb-2">
                    <div className="col p-1">
                      <button className="btn btn-sm btn-danger border w-100">15</button>
                    </div>
                    <div className="col p-1">
                      <button className="btn btn-sm btn-light border w-100">16</button>
                    </div>
                    <div className="col p-1">
                      <button className="btn btn-sm btn-light border w-100">17</button>
                    </div>
                    <div className="col p-1">
                      <button className="btn btn-sm btn-light border w-100">18</button>
                    </div>
                    <div className="col p-1">
                      <button className="btn btn-sm btn-light border w-100">19</button>
                    </div>
                    <div className="col p-1">
                      <button className="btn btn-sm btn-light border w-100">20</button>
                    </div>
                    <div className="col p-1">
                      <button className="btn btn-sm btn-light border w-100">21</button>
                    </div>
                  </div>
                  
                  {/* Week 4 */}
                  <div className="row mb-2">
                    <div className="col p-1">
                      <button className="btn btn-sm btn-danger border w-100">22</button>
                    </div>
                    <div className="col p-1">
                      <button className="btn btn-sm btn-light border w-100">23</button>
                    </div>
                    <div className="col p-1">
                      <button className="btn btn-sm btn-light border w-100">24</button>
                    </div>
                    <div className="col p-1">
                      <button className="btn btn-sm btn-light border w-100">25</button>
                    </div>
                    <div className="col p-1">
                      <button className="btn btn-sm btn-light border w-100">26</button>
                    </div>
                    <div className="col p-1">
                      <button className="btn btn-sm btn-light border w-100">27</button>
                    </div>
                    <div className="col p-1">
                      <button className="btn btn-sm btn-light border w-100">28</button>
                    </div>
                  </div>
                  
                  {/* Week 5 */}
                  <div className="row">
                    <div className="col p-1">
                      <button className="btn btn-sm btn-light border w-100">29</button>
                    </div>
                    <div className="col p-1">
                      <button className="btn btn-sm btn-light border w-100">30</button>
                    </div>
                    <div className="col p-1">
                      <button className="btn btn-sm btn-light border w-100">31</button>
                    </div>
                    <div className="col p-1"></div>
                    <div className="col p-1"></div>
                    <div className="col p-1"></div>
                    <div className="col p-1"></div>
                  </div>
                </div>
                
                <div className="d-flex gap-3 mb-3">
                  <div className="d-flex align-items-center">
                    <div className="bg-light border me-2" style={{ width: '15px', height: '15px' }}></div>
                    <span className="small">Available</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="bg-danger me-2" style={{ width: '15px', height: '15px' }}></div>
                    <span className="small">Unavailable</span>
                  </div>
                </div>
              </div>
              
              <button className="btn btn-warning text-white rounded-pill px-4">
                Save Availability
              </button>
            </div>
          </div>
        )}
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
  
  return (
    <div>
      {isLoggedIn ? renderDashboard() : renderLoginForm()}
    </div>
  );
};

export default Dashboard;