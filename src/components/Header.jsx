import React, { useState } from 'react';
import { Coffee, ShoppingCart, User, Heart, Search, Phone, LogOut } from 'lucide-react';

export default function Header({ 
  user, 
  cart, 
  onLogout, 
  setSelectedCategory, 
  searchQuery, 
  setSearchQuery,
  navigate 
}) {
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const totalCartItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    navigate('menu');
  };

  const handleCategoryClick = (catId) => {
    setSelectedCategory(catId);
    navigate('menu');
  };

  return (
    <header className="header-container">
      {/* Top Banner Contact / Promo */}
      <div className="header-top-bar">
        <div className="container top-bar-flex">
          <span>☕ Welcome to Delighty! Taste the premium organic difference.</span>
          <span className="promo-text">Get 10% off your first pickup order! Code: <b>FIRST10</b></span>
        </div>
      </div>

      {/* Main Header Row */}
      <div className="header-main">
        <div className="container header-main-flex">
          {/* Logo */}
          <a href="#/" className="logo" onClick={() => navigate('home')}>
            <Coffee className="logo-icon" />
            <div className="logo-text">
              <span className="logo-title">DELIGHTY</span>
              <span className="logo-subtitle">EST. 2026</span>
            </div>
          </a>

          {/* Search Form */}
          <form className="search-form" onSubmit={handleSearchSubmit}>
            <div className="search-input-wrapper">
              <input
                type="text"
                placeholder="Search premium coffee, bakery, desserts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
              <button type="submit" className="search-btn">
                <Search size={18} />
              </button>
            </div>
          </form>

          {/* Right Header Controls */}
          <div className="header-controls">
            <div className="control-phone hide-mobile">
              <Phone className="control-icon-orange" size={20} />
              <div className="phone-info">
                <span className="phone-lbl">Call Us Now</span>
                <a href="tel:+918883083366" className="phone-num">+91 888-308-3366</a>
              </div>
            </div>

            <button className="control-btn hide-mobile" title="Wishlist">
              <Heart size={22} />
              <span className="control-badge">0</span>
            </button>

            <button 
              className="control-btn" 
              onClick={() => navigate('cart')} 
              title="Shopping Cart"
            >
              <ShoppingCart size={22} />
              {totalCartItems > 0 && (
                <span className="control-badge badge-bounce">{totalCartItems}</span>
              )}
            </button>

            {/* Profile Menu */}
            <div className="profile-menu-container">
              {user ? (
                <>
                  <button 
                    className="profile-trigger btn-text"
                    onClick={() => setShowProfileDropdown(!showProfileDropdown)}
                  >
                    <User size={20} />
                    <span className="user-firstname">{user.name.split(' ')[0]}</span>
                  </button>
                  {showProfileDropdown && (
                    <div className="profile-dropdown">
                      <div className="dropdown-user-info">
                        <strong>{user.name}</strong>
                        <span>{user.email}</span>
                      </div>
                      <hr className="dropdown-divider" />
                      <button 
                        className="dropdown-item text-danger" 
                        onClick={() => {
                          onLogout();
                          setShowProfileDropdown(false);
                          navigate('home');
                        }}
                      >
                        <LogOut size={16} />
                        Log out
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <button className="btn-login-header" onClick={() => navigate('login')}>
                  <User size={20} />
                  <span>Login</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation & Categories Bar */}
      <nav className="header-nav">
        <div className="container header-nav-flex">
          <div className="nav-categories-trigger">
            <Coffee size={18} />
            <span>All Categories</span>
          </div>

          <div className="nav-links">
            <a href="#/" onClick={() => navigate('home')} className="nav-link">Home</a>
            <button onClick={() => handleCategoryClick('hot-coffee')} className="nav-link">Hot Coffee</button>
            <button onClick={() => handleCategoryClick('cold-brews')} className="nav-link">Cold Brews</button>
            <button onClick={() => handleCategoryClick('specialty-tea')} className="nav-link">Specialty Tea</button>
            <button onClick={() => handleCategoryClick('artisan-pastries')} className="nav-link">Artisan Pastries</button>
            <button onClick={() => handleCategoryClick('cafe-breakfast')} className="nav-link">Cafe Breakfast</button>
            <button onClick={() => handleCategoryClick('sweet-desserts')} className="nav-link">Sweet Desserts</button>
            <span className="nav-tag-zone">Offer Zone</span>
          </div>
        </div>
      </nav>
    </header>
  );
}
