import React from 'react';

export default function TestimonialCard({ testimonial }) {
  return (
    <article className="testimonial-card">
      {/* The testimonial card is presenting student feedback in a consistent format. */}
      <img
        src={testimonial.image}
        alt={`${testimonial.name} portrait`}
        className="testimonial-card__avatar"
        loading="lazy"
      />
      <p className="testimonial-card__text">"{testimonial.text}"</p>
      <div className="testimonial-card__author">
        <strong>{testimonial.name}</strong>
        <span>{testimonial.role}</span>
      </div>
    </article>
  );
}
