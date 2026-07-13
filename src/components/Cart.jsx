import React from 'react';
import { Trash2, ShoppingBag, ArrowLeft, Coffee } from 'lucide-react';

export default function Cart({ 
  cart, 
  onUpdateQuantity, 
  onRemoveItem, 
  onPlaceOrder, 
  navigate 
}) {
  const subtotal = cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  const tax = subtotal * 0.05; // 5% tax
  const total = subtotal + tax;

  const handleCheckout = () => {
    onPlaceOrder();
  };

  return (
    <div className="cart-page fade-in">
      <div className="container">
        {/* Back navigation */}
        <button className="back-link-btn" onClick={() => navigate('menu')}>
          <ArrowLeft size={16} />
          <span>Back to Menu</span>
        </button>

        <h1 className="cart-title">Your Order Cart</h1>

        {cart.length > 0 ? (
          <div className="cart-layout">
            {/* Cart Items List */}
            <div className="cart-items-section">
              <div className="cart-items-header hide-mobile">
                <span className="col-product">Product</span>
                <span className="col-price">Price</span>
                <span className="col-qty">Quantity</span>
                <span className="col-total">Total</span>
                <span className="col-action"></span>
              </div>

              <div className="cart-items-list">
                {cart.map(item => (
                  <div key={item.product.id} className="cart-item-row">
                    <div className="cart-item-product col-product">
                      <img 
                        src={item.product.image} 
                        alt={item.product.name} 
                        className="cart-item-thumbnail" 
                      />
                      <div className="cart-item-details">
                        <h4 className="cart-item-name">{item.product.name}</h4>
                        <span className="cart-item-cat">
                          ₹{item.product.price.toFixed(0)} each
                        </span>
                      </div>
                    </div>

                    <div className="cart-item-price col-price">
                      ₹{item.product.price.toFixed(0)}
                    </div>

                    <div className="cart-item-qty col-qty">
                      <div className="qty-picker">
                        <button 
                          className="qty-btn"
                          onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                        >
                          -
                        </button>
                        <span className="qty-value">{item.quantity}</span>
                        <button 
                          className="qty-btn"
                          onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="cart-item-total col-total">
                      ₹{(item.product.price * item.quantity).toFixed(0)}
                    </div>

                    <div className="cart-item-action col-action">
                      <button 
                        className="btn-remove-item"
                        onClick={() => onRemoveItem(item.product.id)}
                        title="Remove item"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Summary Card */}
            <div className="cart-summary-section">
              <div className="summary-card">
                <h3 className="summary-title">Order Summary</h3>
                <hr className="summary-divider" />
                
                <div className="summary-row">
                  <span>Subtotal</span>
                  <span>₹{subtotal.toFixed(0)}</span>
                </div>
                <div className="summary-row">
                  <span>Estimated Tax (5%)</span>
                  <span>₹{tax.toFixed(0)}</span>
                </div>
                <div className="summary-row">
                  <span>Pickup Fee</span>
                  <span className="text-success">FREE</span>
                </div>
                
                <hr className="summary-divider" />
                
                <div className="summary-row total-row">
                  <span>Estimated Total</span>
                  <span>₹{total.toFixed(0)}</span>
                </div>

                <div className="pickup-alert">
                  <Coffee size={18} />
                  <span>Pickup location: <b>Delighty - Dharmapuri Gh opposite</b></span>
                </div>

                <button 
                  className="btn btn-accent btn-checkout-block"
                  onClick={handleCheckout}
                >
                  Place Order
                </button>

                <p className="summary-footer-note">
                  No payment needed today. Pay at counter when you pick up!
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="empty-cart-container">
            <div className="empty-cart-icon-wrapper">
              <ShoppingBag size={48} />
            </div>
            <h2>Your Cart is Empty</h2>
            <p>Looks like you haven't added any coffee or delicious treats yet.</p>
            <button className="btn btn-primary" onClick={() => navigate('menu')}>
              Browse Our Menu
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
