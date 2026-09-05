import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter, FaGraduationCap } from 'react-icons/fa6';

const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/courses', label: 'Courses' },
  { to: '/student-services', label: 'Student Services' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' },
];

const socials = [
  { icon: FaFacebookF, label: 'Facebook', href: '#' },
  { icon: FaXTwitter, label: 'X', href: '#' },
  { icon: FaLinkedinIn, label: 'LinkedIn', href: '#' },
  { icon: FaInstagram, label: 'Instagram', href: '#' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        {/* The footer is grouping brand context, quick links, contact details, and social links. */}
        <section className="footer__about" aria-labelledby="footer-about-heading">
          <h2 id="footer-about-heading" className="footer__title">
            <span className="footer__logo" aria-hidden="true">
              <FaGraduationCap />
            </span>
            ScholarSphere
          </h2>
          <p>
            A modern, responsive educational platform built for academic research into AI-assisted interface design.
          </p>
        </section>

        <nav aria-labelledby="footer-links-heading">
          <h2 id="footer-links-heading" className="footer__title">
            Quick Links
          </h2>
          <ul className="footer__list">
            {quickLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <section aria-labelledby="footer-contact-heading">
          <h2 id="footer-contact-heading" className="footer__title">
            Contact Information
          </h2>
          <address className="footer__address">
            123 Knowledge Avenue
            <br />
            Academic District
            <br />
            support@scholarsphere.edu
            <br />
            +1234567890
          </address>
        </section>

        <section aria-labelledby="footer-social-heading">
          <h2 id="footer-social-heading" className="footer__title">
            Social Media
          </h2>
          <div className="social-links">
            {socials.map(({ icon: Icon, label, href }) => (
              <a key={label} href={href} className="social-links__item" aria-label={label}>
                <Icon aria-hidden="true" />
              </a>
            ))}
          </div>
        </section>
      </div>

      <div className="footer__bottom">
        <p>© 2026 ScholarSphere. All rights reserved.</p>
      </div>
    </footer>
  );
}
