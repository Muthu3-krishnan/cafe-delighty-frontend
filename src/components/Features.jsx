import React from 'react';
import { Coffee, ShieldCheck, Clock, Award } from 'lucide-react';

export default function Features() {
  const badges = [
    {
      icon: <Award className="feature-icon" size={32} />,
      title: 'Premium Organic Beans',
      desc: '100% arabica single-origin beans roasted locally every 48 hours.'
    },
    {
      icon: <ShieldCheck className="feature-icon" size={32} />,
      title: 'Secure Transactions',
      desc: 'Safe browser transactions and local cache management.'
    },
    {
      icon: <Clock className="feature-icon" size={32} />,
      title: 'Quick Store Pickup',
      desc: 'Pre-order in seconds, pick up in 10 mins without standing in lines.'
    },
    {
      icon: <Coffee className="feature-icon" size={32} />,
      title: 'Baked Fresh at 4 AM',
      desc: 'Laminated croissants and sweet buns crafted from scratch daily.'
    }
  ];

  return (
    <section className="features-section">
      <div className="container">
        <div className="features-grid">
          {badges.map((b, idx) => (
            <div key={idx} className="feature-card">
              <div className="feature-icon-wrapper">{b.icon}</div>
              <div className="feature-text">
                <h4 className="feature-title">{b.title}</h4>
                <p className="feature-desc">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
