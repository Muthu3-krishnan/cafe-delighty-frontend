import React, { useState } from 'react';
import { Mail, Lock, User, ArrowLeft } from 'lucide-react';

export default function Auth({ isRegisterMode, navigate, onLoginSuccess }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrorMsg(''); // Clear error when typing
  };

  const getAccounts = () => {
    const accounts = localStorage.getItem('cafe_delight_accounts');
    return accounts ? JSON.parse(accounts) : [];
  };

  const saveAccount = (newAccount) => {
    const accounts = getAccounts();
    accounts.push(newAccount);
    localStorage.setItem('cafe_delight_accounts', JSON.stringify(accounts));
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.password) {
      setErrorMsg('All fields are required.');
      return;
    }

    const accounts = getAccounts();
    const emailExists = accounts.some(acc => acc.email.toLowerCase() === formData.email.toLowerCase());

    if (emailExists) {
      setErrorMsg('This email is already registered. Please log in.');
      return;
    }

    const newAccount = {
      name: formData.name,
      email: formData.email,
      password: formData.password
    };

    saveAccount(newAccount);
    setSuccessMsg('Registration successful! Welcome to the lounge.');
    
    // Log user in after a brief delay
    setTimeout(() => {
      onLoginSuccess(newAccount);
      navigate('home');
    }, 1200);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setErrorMsg('Email and password are required.');
      return;
    }

    const accounts = getAccounts();
    const matchedAccount = accounts.find(
      acc => acc.email.toLowerCase() === formData.email.toLowerCase() && acc.password === formData.password
    );

    if (!matchedAccount) {
      setErrorMsg('Invalid email or password. Please try again.');
      return;
    }

    setSuccessMsg('Successfully logged in! Brewing your session...');
    
    setTimeout(() => {
      onLoginSuccess(matchedAccount);
      navigate('home');
    }, 1200);
  };

  return (
    <div className="auth-page fade-in">
      <div className="container auth-container">
        {/* Back navigation */}
        <button className="back-link-btn" onClick={() => navigate('home')}>
          <ArrowLeft size={16} />
          <span>Back to Home</span>
        </button>

        <div className="auth-card">
          <div className="auth-header">
            <span className="auth-subtitle">{isRegisterMode ? 'JOIN US' : 'WELCOME BACK'}</span>
            <h2 className="auth-title">
              {isRegisterMode ? 'Create your account' : 'Log in to your account'}
            </h2>
          </div>

          <form className="auth-form" onSubmit={isRegisterMode ? handleRegister : handleLogin}>
            {isRegisterMode && (
              <div className="form-group">
                <label className="form-label" htmlFor="name">Full name</label>
                <div className="input-with-icon">
                  <User className="input-icon" size={16} />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="form-control text-input"
                  />
                </div>
              </div>
            )}

            <div className="form-group">
              <label className="form-label" htmlFor="email">Email</label>
              <div className="input-with-icon">
                <Mail className="input-icon" size={16} />
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter email address"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-control text-input"
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="password">Password</label>
              <div className="input-with-icon">
                <Lock className="input-icon" size={16} />
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="form-control text-input"
                />
              </div>
            </div>

            {/* Error Message styled matching screenshot orange-red fail color */}
            {errorMsg && (
              <div className="auth-feedback auth-error">
                {errorMsg}
              </div>
            )}

            {/* Success Message */}
            {successMsg && (
              <div className="auth-feedback auth-success">
                {successMsg}
              </div>
            )}

            <button type="submit" className="btn btn-auth-submit">
              {isRegisterMode ? 'Sign up' : 'Log in'}
            </button>
          </form>

          <div className="auth-toggle">
            {isRegisterMode ? (
              <span>
                Already have an account?{' '}
                <button className="toggle-link" onClick={() => navigate('login')}>
                  Log in
                </button>
              </span>
            ) : (
              <span>
                Don't have an account?{' '}
                <button className="toggle-link" onClick={() => navigate('register')}>
                  Sign up
                </button>
              </span>
            )}
          </div>

          <div className="auth-admin-info">
            <p className="admin-label">👨‍💼 Admin Contact</p>
            <p className="admin-name">Muthukrishnan</p>
            <p className="admin-contact">For any assistance or inquiries</p>
          </div>
        </div>
      </div>
    </div>
  );
}
