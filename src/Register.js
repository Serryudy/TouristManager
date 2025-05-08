import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './styles.css';

const Register = () => {
  const [searchText, setSearchText] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  
  // Form state
  const [formData, setFormData] = useState({
    type: 'Hotel',
    // Hotel specific fields
    hotelName: '',
    email: '',
    prefix: '',
    phoneNumber: '',
    hotelAddress: '',
    district: '',
    city: '',
    category: '',
    starRating: '',
    roomTypes: '',
    price: '',
    shortDescription: '',
    detailedDescription: '',
    amenities: {
      wifi: false,
      ac: false,
      pool: false
    },
    password: '',
    confirmPassword: '',
    documents: null,
    
    // Tour Guide specific fields
    fullName: '',
    language: 'English',
    experience: '',
    specialties: '',
    shortBio: ''
  });
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      amenities: {
        ...formData.amenities,
        [name]: checked
      }
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Process registration
    console.log('Registration data:', formData);
  };

  // Render Hotel Registration Form
  const renderHotelForm = () => (
    <div className="mb-4">
      <div className="bg-success text-white py-2 px-3 rounded-top">
        <h2 className="mb-0 fs-6 text-start">1. Hotel Registration</h2>
      </div>
      <div className="p-3 rounded-bottom-3" style={{ backgroundColor: '#E8E5D5' }}>
        {/* Hotel Name */}
        <div className="mb-3">
          <input 
            type="text" 
            className="form-control" 
            placeholder="Hotel Name" 
            name="hotelName"
            value={formData.hotelName}
            onChange={handleInputChange}
          />
        </div>
        
        {/* Email */}
        <div className="mb-3">
          <input 
            type="email" 
            className="form-control" 
            placeholder="E-mail" 
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        
        {/* Phone */}
        <div className="row mb-3">
          <div className="col-md-6 mb-3 mb-md-0">
            <input 
              type="text" 
              className="form-control" 
              placeholder="Prefix (+104)" 
              name="prefix"
              value={formData.prefix}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-6">
            <input 
              type="text" 
              className="form-control" 
              placeholder="Phone number" 
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
            />
          </div>
        </div>
        
        {/* Hotel Address */}
        <div className="mb-3">
          <input 
            type="text" 
            className="form-control" 
            placeholder="Hotel Address" 
            name="hotelAddress"
            value={formData.hotelAddress}
            onChange={handleInputChange}
          />
        </div>
        
        {/* Region */}
        <div className="row mb-3">
          <div className="col-md-6 mb-3 mb-md-0">
            <select 
              className="form-select" 
              name="district"
              value={formData.district}
              onChange={handleInputChange}
            >
              <option value="">District</option>
              <option value="Colombo">Colombo</option>
              <option value="Kandy">Kandy</option>
              <option value="Galle">Galle</option>
            </select>
          </div>
          <div className="col-md-6">
            <select 
              className="form-select" 
              name="city"
              value={formData.city}
              onChange={handleInputChange}
            >
              <option value="">City</option>
              <option value="Colombo">Colombo</option>
              <option value="Kandy">Kandy</option>
              <option value="Galle">Galle</option>
            </select>
          </div>
        </div>
        
        {/* Category and Star Rating */}
        <div className="row mb-3">
          <div className="col-md-6 mb-3 mb-md-0">
            <select 
              className="form-select" 
              name="category"
              value={formData.category}
              onChange={handleInputChange}
            >
              <option value="">Category</option>
              <option value="Luxury">Luxury</option>
              <option value="Budget">Budget</option>
              <option value="Boutique">Boutique</option>
              <option value="Resort">Resort</option>
            </select>
          </div>
          <div className="col-md-6">
            <select 
              className="form-select" 
              name="starRating"
              value={formData.starRating}
              onChange={handleInputChange}
            >
              <option value="">Star Rating</option>
              <option value="1">1 Star</option>
              <option value="2">2 Stars</option>
              <option value="3">3 Stars</option>
              <option value="4">4 Stars</option>
              <option value="5">5 Stars</option>
            </select>
          </div>
        </div>
        
        {/* Room Types and Price */}
        <div className="row mb-3">
          <div className="col-md-6 mb-3 mb-md-0">
            <input 
              type="text" 
              className="form-control" 
              placeholder="Available Room Types" 
              name="roomTypes"
              value={formData.roomTypes}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-6">
            <input 
              type="text" 
              className="form-control" 
              placeholder="Price" 
              name="price"
              value={formData.price}
              onChange={handleInputChange}
            />
          </div>
        </div>
        
        {/* Short Description */}
        <div className="mb-3">
          <textarea 
            className="form-control" 
            rows="5" 
            placeholder="Short Description" 
            name="shortDescription"
            value={formData.shortDescription}
            onChange={handleInputChange}
          ></textarea>
        </div>
        
        {/* Detailed Description */}
        <div className="mb-3">
          <textarea 
            className="form-control" 
            rows="5" 
            placeholder="Detailed Description" 
            name="detailedDescription"
            value={formData.detailedDescription}
            onChange={handleInputChange}
          ></textarea>
        </div>
        
        {/* Amenities */}
        <div className="mb-3">
          <label className="mb-2">Amenities Offered</label>
          <div className="d-flex gap-4 mb-3">
            <div className="form-check">
              <input 
                className="form-check-input" 
                type="checkbox" 
                id="wifi" 
                name="wifi"
                checked={formData.amenities.wifi}
                onChange={handleCheckboxChange}
              />
              <label className="form-check-label" htmlFor="wifi">WiFi</label>
            </div>
            <div className="form-check">
              <input 
                className="form-check-input" 
                type="checkbox" 
                id="ac" 
                name="ac"
                checked={formData.amenities.ac}
                onChange={handleCheckboxChange}
              />
              <label className="form-check-label" htmlFor="ac">A/C</label>
            </div>
            <div className="form-check">
              <input 
                className="form-check-input" 
                type="checkbox" 
                id="pool" 
                name="pool"
                checked={formData.amenities.pool}
                onChange={handleCheckboxChange}
              />
              <label className="form-check-label" htmlFor="pool">Pool</label>
            </div>
          </div>
        </div>
        
        {/* Password */}
        <div className="mb-3">
          <input 
            type="password" 
            className="form-control" 
            placeholder="Password" 
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
        
        {/* Confirm Password */}
        <div className="mb-3">
          <input 
            type="password" 
            className="form-control" 
            placeholder="Confirm Password" 
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
          />
        </div>
        
        {/* Document Upload */}
        <div className="mb-3">
          <label className="mb-2">Business Registration Documents</label>
          <div className="border rounded-3 p-5 text-center bg-white">
            <p className="text-muted mb-0">Drop files here</p>
          </div>
        </div>
        
        {/* Register Button */}
        <div className="d-flex justify-content-end">
          <button 
            type="submit" 
            className="btn btn-warning rounded-pill px-4"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
  
  // Render Tour Guide Registration Form (existing form)
  const renderTourGuideForm = () => (
    <div className="mb-4">
      <div className="bg-success text-white py-2 px-3 rounded-top">
        <h2 className="mb-0 fs-6 text-start">1. Group Registration</h2>
      </div>
      <div className="p-3 rounded-bottom-3" style={{ backgroundColor: '#E8E5D5' }}>
        {/* Full Name */}
        <div className="mb-3">
          <input 
            type="text" 
            className="form-control" 
            placeholder="Full Name" 
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
          />
        </div>
        
        {/* Email */}
        <div className="mb-3">
          <input 
            type="email" 
            className="form-control" 
            placeholder="E-mail" 
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        
        {/* Phone */}
        <div className="row mb-3">
          <div className="col-md-6 mb-3 mb-md-0">
            <input 
              type="text" 
              className="form-control" 
              placeholder="Prefix (+104)" 
              name="prefix"
              value={formData.prefix}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-6">
            <input 
              type="text" 
              className="form-control" 
              placeholder="Phone number" 
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
            />
          </div>
        </div>
        
        {/* Region */}
        <div className="mb-3">
          <label className="mb-2">Region(s) Available to Guide In</label>
          <div className="row">
            <div className="col-md-6 mb-3 mb-md-0">
              <select 
                className="form-select" 
                name="district"
                value={formData.district}
                onChange={handleInputChange}
              >
                <option value="">District</option>
                <option value="Colombo">Colombo</option>
                <option value="Kandy">Kandy</option>
                <option value="Galle">Galle</option>
              </select>
            </div>
            <div className="col-md-5">
              <select 
                className="form-select" 
                name="city"
                value={formData.city}
                onChange={handleInputChange}
              >
                <option value="">City</option>
                <option value="Colombo">Colombo</option>
                <option value="Kandy">Kandy</option>
                <option value="Galle">Galle</option>
              </select>
            </div>
            <div className="col-md-1 d-flex align-items-center justify-content-center">
              <button type="button" className="btn btn-sm btn-outline-success rounded-circle">
                <i className="bi bi-check"></i>
              </button>
            </div>
          </div>
        </div>
        
        {/* Languages */}
        <div className="mb-3">
          <label className="mb-2">Languages Spoken</label>
          <select 
            className="form-select" 
            name="language"
            value={formData.language}
            onChange={handleInputChange}
          >
            <option value="English">English</option>
            <option value="Sinhala">Sinhala</option>
            <option value="Tamil">Tamil</option>
          </select>
        </div>
        
        {/* Experience and Specialties */}
        <div className="row mb-3">
          <div className="col-md-6 mb-3 mb-md-0">
            <input 
              type="text" 
              className="form-control" 
              placeholder="Years of Experience" 
              name="experience"
              value={formData.experience}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-6">
            <input 
              type="text" 
              className="form-control" 
              placeholder="Specialties" 
              name="specialties"
              value={formData.specialties}
              onChange={handleInputChange}
            />
          </div>
        </div>
        
        {/* Bio */}
        <div className="mb-3">
          <textarea 
            className="form-control" 
            rows="5" 
            placeholder="Short Bio" 
            name="shortBio"
            value={formData.shortBio}
            onChange={handleInputChange}
          ></textarea>
        </div>
        
        {/* Amenities */}
        <div className="mb-3">
          <label className="mb-2">Amenities Offered</label>
          <div className="d-flex gap-4 mb-3">
            <div className="form-check">
              <input 
                className="form-check-input" 
                type="checkbox" 
                id="wifi" 
                name="wifi"
                checked={formData.amenities.wifi}
                onChange={handleCheckboxChange}
              />
              <label className="form-check-label" htmlFor="wifi">WiFi</label>
            </div>
            <div className="form-check">
              <input 
                className="form-check-input" 
                type="checkbox" 
                id="ac" 
                name="ac"
                checked={formData.amenities.ac}
                onChange={handleCheckboxChange}
              />
              <label className="form-check-label" htmlFor="ac">A/C</label>
            </div>
            <div className="form-check">
              <input 
                className="form-check-input" 
                type="checkbox" 
                id="pool" 
                name="pool"
                checked={formData.amenities.pool}
                onChange={handleCheckboxChange}
              />
              <label className="form-check-label" htmlFor="pool">Pool</label>
            </div>
          </div>
        </div>
        
        {/* Password */}
        <div className="mb-3">
          <input 
            type="password" 
            className="form-control" 
            placeholder="Password" 
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
        
        {/* Confirm Password */}
        <div className="mb-3">
          <input 
            type="password" 
            className="form-control" 
            placeholder="Confirm Password" 
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
          />
        </div>
        
        {/* Document Upload */}
        <div className="mb-3">
          <label className="mb-2">NIC/Passport/Drivers licence</label>
          <div className="border rounded-3 p-5 text-center bg-white">
            <p className="text-muted mb-0">Drop files here</p>
          </div>
        </div>
        
        {/* Register Button */}
        <div className="d-flex justify-content-end">
          <button 
            type="submit" 
            className="btn btn-warning rounded-pill px-4"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );

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
            <li className="nav-item"><a className="nav-link px-3" href="/booking">Booking</a></li>
            <li className="nav-item"><a className="nav-link px-3 active fw-bold" href="/register" style={{ color: '#DAB955' }}>Register</a></li>
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
              <li className="nav-item"><a className="nav-link py-2 nav-custom" href="/booking">Booking</a></li>
              <li className="nav-item"><a className="nav-link py-2 nav-custom fw-bold" href="/register" style={{ color: '#DAB955' }}>Register</a></li>
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
      <div className="container py-4 text-start">
        <div className="row">
          <div className="col-12">
            <h1 className="fw-bold mb-4">Ordering the Hike of Waterfalls</h1>
            
            {/* Registration Form */}
            <form onSubmit={handleSubmit}>
              {/* Type Selection */}
              <div className="mb-4 w-25">
                <div className="bg-warning text-dark fw-bold py-2 px-3 rounded-top">
                  <h2 className="mb-0 fs-6 text-start">1. Type</h2>
                </div>
                <div className="p-3 rounded-bottom-3" style={{ backgroundColor: '#E8E5D5' }}>
                  <select 
                    className="form-select"
                    name="type"
                    value={formData.type}
                    onChange={handleInputChange}
                  >
                    <option value="Hotel">Hotel</option>
                    <option value="Tour Guide">Tour Guide</option>
                  </select>
                </div>
              </div>
              
              {/* Render different form based on type selection */}
              {formData.type === 'Hotel' ? renderHotelForm() : renderTourGuideForm()}
            </form>
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

export default Register;