import React from 'react';
import { categories } from '../data/menuData';

export default function Categories({ setSelectedCategory, navigate }) {
  // Exclude 'All Categories' from home category grid for cleaner aesthetics
  const gridCategories = categories.filter(c => c.id !== 'all');

  const handleCategorySelect = (catId) => {
    setSelectedCategory(catId);
    navigate('menu');
  };

  return (
    <section className="categories-section">
      <div className="container">
        <div className="section-header">
          <div className="section-header-text">
            <span className="section-subtitle">Explore our Menu</span>
            <h2 className="section-title">Browse by Categories</h2>
          </div>
          <button className="btn btn-primary" onClick={() => handleCategorySelect('all')}>
            View All Menu Items
          </button>
        </div>

        <div className="categories-grid-container">
          {gridCategories.map((cat) => (
            <div 
              key={cat.id} 
              className="category-card"
              onClick={() => handleCategorySelect(cat.id)}
            >
              <div className="category-img-wrapper">
                <img src={cat.image} alt={cat.name} className="category-img" />
              </div>
              <h3 className="category-name">{cat.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
