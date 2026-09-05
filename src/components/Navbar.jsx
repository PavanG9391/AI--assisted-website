import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FaBars, FaXmark, FaGraduationCap } from 'react-icons/fa6';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/courses', label: 'Courses' },
  { to: '/student-services', label: 'Student Services' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  // The mobile menu is toggling open and closed for smaller screens.
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar__inner">
        {/* The brand block is anchoring the platform identity at the top of the page. */}
        <Link to="/" className="navbar__brand" aria-label="ScholarSphere home">
          <span className="navbar__brand-icon" aria-hidden="true">
            <FaGraduationCap />
          </span>
          <span>
            Scholar<span>Sphere</span>
          </span>
        </Link>

        <button
          type="button"
          className="navbar__toggle"
          onClick={() => setIsOpen((open) => !open)}
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
        >
          {isOpen ? <FaXmark /> : <FaBars />}
        </button>

        {/* The primary navigation is keeping the main routes visible across devices. */}
        <nav id="primary-navigation" className={`navbar__menu ${isOpen ? 'is-open' : ''}`} aria-label="Primary">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => `navbar__link ${isActive ? 'is-active' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
          <Link to="/courses" className="button button--primary navbar__cta" onClick={() => setIsOpen(false)}>
            Explore Courses
          </Link>
        </nav>
      </div>
    </header>
  );
}
