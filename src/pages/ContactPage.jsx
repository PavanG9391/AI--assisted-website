import React from 'react';
import SectionHeading from '../components/SectionHeading';
import ContactForm from '../components/ContactForm';
import { socialLinks } from '../data/courses';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';

const socialIconMap = {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
};

export default function ContactPage() {
  return (
    <section className="section section--page">
      <div className="container">
        {/* The contact page is arranging support details, message form, and map area together. */}
        <SectionHeading
          eyebrow="Contact"
          title="Get in touch with the academic support team"
          description="A clear contact layout with support details, a form, map placeholder, and social links."
        />

        <div className="contact-layout">
          {/* The contact info panel is keeping direct communication details visible. */}
          <section className="panel contact-info" aria-labelledby="contact-info-title">
            <h2 id="contact-info-title">Contact Information</h2>
            <address className="contact-info__address">
              <strong>ScholarSphere Learning Hub</strong>
              <span>123 Knowledge Avenue, Academic District</span>
              <span>Email: support@scholarsphere.edu</span>
              <span>Phone: 1234567890</span>
            </address>

          <div className="social-links social-links--contact" aria-label="Social media links">
            {socialLinks.map(({ icon, label, href, ariaLabel }) => {
                const Icon = socialIconMap[icon];
                return (
                  <a key={label} href={href} className="social-links__item" aria-label={ariaLabel}>
                    <Icon aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </section>

          {/* The form panel is collecting visitor enquiries with minimal friction. */}
          <section className="panel">
            <h2>Send a Message</h2>
            <ContactForm />
          </section>

          {/* The map placeholder is reserving space for a future location embed. */}
          <section className="panel">
            <h2>Google Maps Placeholder</h2>
            <div className="map-placeholder">
              <img src="/images/map-placeholder.png" alt="Illustrated map placeholder for the campus location" />
              <p>Map embed placeholder for campus or support office location.</p>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
