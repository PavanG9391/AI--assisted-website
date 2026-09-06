import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaCircleCheck } from 'react-icons/fa6';

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero__grid">
        {/* The hero is presenting the first message and call to action for the platform. */}
        <div className="hero__content">
          <p className="hero__eyebrow">Premium digital learning for modern campuses</p>
          <h1>Learn with a polished university-style platform built for research comparison.</h1>
          <p className="hero__description">
            ScholarSphere delivers a clean, accessible, and responsive experience inspired by leading online learning
            platforms, making it ideal for comparing AI-assisted and manually developed frontends.
          </p>

          <div className="hero__actions">
            <Link to="/courses" className="button button--primary">
              Browse Courses
              <FaArrowRight aria-hidden="true" />
            </Link>
            <Link to="/contact" className="button button--secondary">
              Talk to Support
            </Link>
          </div>

          <ul className="hero__highlights" aria-label="Platform highlights">
            <li>
              <FaCircleCheck aria-hidden="true" /> Flexible learning paths
            </li>
            <li>
              <FaCircleCheck aria-hidden="true" /> Accessible and mobile ready
            </li>
            <li>
              <FaCircleCheck aria-hidden="true" /> Local data only, no backend
            </li>
          </ul>
        </div>

        {/* The visual panel is reinforcing the education theme with a large illustrative image. */}
        <div className="hero__visual" aria-hidden="true">
          <img src={`${import.meta.env.BASE_URL}images/hero-education.png`} alt="Stylized education dashboard illustration" />
        </div>
      </div>
    </section>
  );
}
