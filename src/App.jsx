import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Categories from './components/Categories';
import MenuGrid from './components/MenuGrid';
import Cart from './components/Cart';
import Auth from './components/Auth';
import { Star, ShoppingCart, CheckCircle, ArrowRight, Heart, Coffee, Phone, Mail } from 'lucide-react';
import { menuItems } from './data/menuData';

function App() {
  // Navigation & Page State (Custom Hash Routing)
  const [activePage, setActivePage] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // App Global State
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);
  const [showOrderModal, setShowOrderModal] = useState(false);

  // Sync hash routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '') || 'home';
      // Basic route safety
      if (['home', 'menu', 'cart', 'login', 'register'].includes(hash)) {
        setActivePage(hash);
      } else {
        setActivePage('home');
      }
      window.scrollTo(0, 0); // Reset scroll on navigation
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Run initially

    // Load initial user state
    const savedUser = localStorage.getItem('cafe_delight_logged_in_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }

    // Load initial cart state
    const savedCart = localStorage.getItem('cafe_delight_cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Save cart to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('cafe_delight_cart', JSON.stringify(cart));
  }, [cart]);

  // Programmatic navigation helper
  const navigate = (page) => {
    window.location.hash = `#/${page}`;
  };

  // Auth actions
  const loginUser = (userData) => {
    setUser(userData);
    localStorage.setItem('cafe_delight_logged_in_user', JSON.stringify(userData));
  };

  const logoutUser = () => {
    setUser(null);
    localStorage.removeItem('cafe_delight_logged_in_user');
  };

  // Cart actions
  const handleAddToCart = (product) => {
    setCart(prevCart => {
      const existingItemIndex = prevCart.findIndex(item => item.product.id === product.id);
      if (existingItemIndex > -1) {
        const newCart = [...prevCart];
        newCart[existingItemIndex].quantity += 1;
        return newCart;
      } else {
        return [...prevCart, { product, quantity: 1 }];
      }
    });
  };

  const handleUpdateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCart(prevCart => 
      prevCart.map(item => 
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.product.id !== productId));
  };

  const handlePlaceOrder = () => {
    setShowOrderModal(true);
    setCart([]); // Clear cart
    localStorage.removeItem('cafe_delight_cart');
  };

  // Get top rating items for "Most Selling Products" section (Home page)
  const topSellingItems = menuItems.filter(item => item.rating >= 4.9).slice(0, 4);

  return (
    <div className="app-container">
      {/* Header component */}
      <Header 
        user={user} 
        cart={cart} 
        onLogout={logoutUser} 
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        navigate={navigate}
      />

      {/* Main Content Layout */}
      <main className="main-content">
        {activePage === 'home' && (
          <div className="home-page fade-in">
            {/* Hero slider banner */}
            <Hero navigate={navigate} />

            {/* Quality Badges Features section */}
            <Features />

            {/* Browse Categories section */}
            <Categories 
              setSelectedCategory={setSelectedCategory} 
              navigate={navigate} 
            />

            {/* Top Selling Products section (Florist matching layout) */}
            <section className="top-selling-section">
              <div className="container">
                <div className="section-header">
                  <div className="section-header-text">
                    <span className="section-subtitle">Most Selling Products</span>
                    <h2 className="section-title">Today's Highlights</h2>
                  </div>
                  <button className="btn btn-outline" onClick={() => {
                    setSelectedCategory('all');
                    navigate('menu');
                  }}>
                    View Entire Menu <ArrowRight size={16} />
                  </button>
                </div>

                <div className="grid-4">
                  {topSellingItems.map(item => (
                    <div key={item.id} className="menu-item-card">
                      <div className="menu-item-img-wrapper">
                        <img src={item.image} alt={item.name} className="menu-item-img" />
                        <span className="menu-item-badge text-glow">{item.badge}</span>
                      </div>
                      <div className="menu-item-content">
                        <div className="menu-item-meta">
                          <span className="menu-item-category-lbl">Favourite</span>
                          <div className="menu-item-rating">
                            <Star size={14} fill="currentColor" />
                            <span>{item.rating}</span>
                          </div>
                        </div>
                        <h3 className="menu-item-title">{item.name}</h3>
                        <p className="menu-item-desc truncate">{item.description}</p>
                        <div className="menu-item-footer">
                          <span className="menu-item-price">₹{item.price.toFixed(0)}</span>
                          <button 
                            className="btn btn-add-cart"
                            onClick={() => handleAddToCart(item)}
                          >
                            <ShoppingCart size={16} />
                            <span>Add</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        )}

        {activePage === 'menu' && (
          <MenuGrid 
            selectedCategory={selectedCategory} 
            setSelectedCategory={setSelectedCategory}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            onAddToCart={handleAddToCart}
          />
        )}

        {activePage === 'cart' && (
          <Cart 
            cart={cart}
            onUpdateQuantity={handleUpdateQuantity}
            onRemoveItem={handleRemoveItem}
            onPlaceOrder={handlePlaceOrder}
            navigate={navigate}
          />
        )}

        {(activePage === 'login' || activePage === 'register') && (
          <Auth 
            isRegisterMode={activePage === 'register'} 
            navigate={navigate}
            onLoginSuccess={loginUser}
          />
        )}
      </main>

      {/* Footer component */}
      <footer className="footer">
        <div className="container footer-grid">
          <div className="footer-col brand-col">
            <a href="#/" className="logo" onClick={() => navigate('home')}>
              <Coffee className="logo-icon" />
              <span className="logo-title text-light">DELIGHTY</span>
            </a>
            <p className="footer-brand-desc">
              Pouring craft, care, and artisan flavor in every single cup. Visit us for freshly ground single-origin coffees, organic teas, and pastries baked daily in-house.
            </p>
          </div>
          <div className="footer-col links-col">
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-links-list">
              <li><a href="#/" onClick={() => navigate('home')}>Home</a></li>
              <li><a href="#/menu" onClick={() => { setSelectedCategory('all'); navigate('menu'); }}>Menu</a></li>
              <li><a href="#/cart" onClick={() => navigate('cart')}>My Cart</a></li>
              <li><a href="#/login" onClick={() => navigate('login')}>Login / Register</a></li>
            </ul>
          </div>
          <div className="footer-col hours-col">
            <h4 className="footer-col-title">Store Hours</h4>
            <p className="hours-text">Monday - Friday: 6:00 AM - 8:00 PM</p>
            <p className="hours-text">Saturday - Sunday: 7:00 AM - 9:00 PM</p>
            <p className="address-text">� Dharmapuri Gh opposite</p>
          </div>
          <div className="footer-col contact-col">
            <h4 className="footer-col-title">Contact Us</h4>
            <a href="tel:+918883083366" className="contact-call-btn">
              <Phone size={18} />
              <span>Call Now: +91 888-308-3366</span>
            </a>
            <a href="mailto:muthukrishnan666999@gmail.com" className="contact-email-btn">
              <Mail size={18} />
              <span>Email Us</span>
            </a>
            <p className="contact-text">muthukrishnan666999@gmail.com</p>
            <p className="contact-text">Available 24/7 for Orders & Inquiries</p>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container footer-bottom-flex">
            <p>&copy; {new Date().getFullYear()} Delighty. All rights reserved. Created for demonstration purposes.</p>
            <div className="footer-legal-links">
              <a href="#/">Terms of Service</a>
              <a href="#/">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Place Order Simulated Success Modal */}
      {showOrderModal && (
        <div className="modal-backdrop">
          <div className="modal-card fade-in">
            <div className="modal-icon-wrapper">
              <CheckCircle size={48} className="modal-icon-success" />
            </div>
            <h2 className="modal-title">Order Placed Successfully!</h2>
            <p className="modal-msg">
              Your order has been queued for preparation. Our baristas are grinding your beans and heating the ovens now!
            </p>
            <div className="modal-details-card">
              <div className="modal-detail-row">
                <span>Estimated pickup time:</span>
                <strong>In 10 Minutes</strong>
              </div>
              <div className="modal-detail-row">
                <span>Pickup location:</span>
                <strong>Delighty - Dharmapuri Gh opposite</strong>
              </div>
            </div>
            <button className="btn btn-primary btn-modal-close" onClick={() => setShowOrderModal(false)}>
              Got it, thanks!
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
