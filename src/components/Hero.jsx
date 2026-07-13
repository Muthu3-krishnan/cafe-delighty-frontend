import React from 'react';

export default function Hero({ navigate }) {
  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>
      <div className="container hero-container-flex">
        <div className="hero-content">
          <span className="hero-tagline">✨ Craft Barista Experience</span>
          <h1 className="hero-title">Where Every Cup Tells a Story</h1>
          <p className="hero-description">
            Indulge in our freshly brewed specialty coffees, artisanal hand-laminated pastries, and wholesome breakfast dishes crafted daily by master baristas.
          </p>
          <div className="hero-actions">
            <button className="btn btn-accent" onClick={() => navigate('menu')}>
              Order Pickup Now
            </button>
            <a href="#/menu" className="btn btn-outline-white" onClick={() => navigate('menu')}>
              Browse Full Menu
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
