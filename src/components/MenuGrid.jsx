import React, { useState } from 'react';
import { menuItems, categories } from '../data/menuData';
import { Star, ShoppingCart } from 'lucide-react';

export default function MenuGrid({ 
  selectedCategory, 
  setSelectedCategory, 
  searchQuery, 
  setSearchQuery, 
  onAddToCart 
}) {
  const [addedItems, setAddedItems] = useState({});

  const handleAddToCart = (item) => {
    onAddToCart(item);
    
    // Animate add to cart button feedback
    setAddedItems(prev => ({ ...prev, [item.id]: true }));
    setTimeout(() => {
      setAddedItems(prev => ({ ...prev, [item.id]: false }));
    }, 1000);
  };

  // Filter items
  const filteredItems = menuItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="menu-section fade-in">
      <div className="container">
        <div className="menu-header">
          <span className="section-subtitle">Our Prepared Delights</span>
          <h2 className="section-title">The Espresso Lounge Menu</h2>
          <p className="menu-header-desc">
            Discover our curated blends and gourmet recipes. All drinks can be customized with your choice of milk (oat, almond, soy, whole milk) and sweetness level.
          </p>
        </div>

        {/* Category Pills Switcher */}
        <div className="category-pills">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`pill-btn ${selectedCategory === cat.id ? 'active' : ''}`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Active Filters Summary */}
        {(searchQuery || selectedCategory !== 'all') && (
          <div className="filter-summary">
            <span>
              Showing {filteredItems.length} item{filteredItems.length !== 1 ? 's' : ''} 
              {selectedCategory !== 'all' && ` in "${categories.find(c => c.id === selectedCategory)?.name}"`}
              {searchQuery && ` matching "${searchQuery}"`}
            </span>
            <button 
              className="clear-filters-btn"
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
            >
              Clear filters
            </button>
          </div>
        )}

        {/* Menu Items Grid */}
        {filteredItems.length > 0 ? (
          <div className="menu-grid">
            {filteredItems.map(item => (
              <div key={item.id} className="menu-item-card">
                <div className="menu-item-img-wrapper">
                  <img src={item.image} alt={item.name} className="menu-item-img" />
                  {item.badge && (
                    <span className="menu-item-badge">{item.badge}</span>
                  )}
                </div>
                <div className="menu-item-content">
                  <div className="menu-item-meta">
                    <span className="menu-item-category-lbl">
                      {categories.find(c => c.id === item.category)?.name}
                    </span>
                    <div className="menu-item-rating">
                      <Star size={14} fill="currentColor" />
                      <span>{item.rating}</span>
                    </div>
                  </div>
                  <h3 className="menu-item-title">{item.name}</h3>
                  <p className="menu-item-desc">{item.description}</p>
                  <div className="menu-item-footer">
                    <span className="menu-item-price">₹{item.price.toFixed(0)}</span>
                    <button
                      onClick={() => handleAddToCart(item)}
                      className={`btn btn-add-cart ${addedItems[item.id] ? 'btn-added' : ''}`}
                      disabled={addedItems[item.id]}
                    >
                      {addedItems[item.id] ? (
                        <>Added ☕</>
                      ) : (
                        <>
                          <ShoppingCart size={16} />
                          <span>Add to Cart</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-items-found">
            <h3>No delicious items found</h3>
            <p>Try searching for something else or switching categories.</p>
            <button 
              className="btn btn-primary"
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
            >
              View All Items
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
