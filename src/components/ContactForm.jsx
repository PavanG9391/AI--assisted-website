import React, { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa6';

const initialState = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

export default function ContactForm() {
  // The form state is tracking user input before the confirmation message appears.
  const [formData, setFormData] = useState(initialState);
  const [status, setStatus] = useState('idle');

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setStatus('sent');
    setFormData(initialState);
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      {/* The contact form is collecting enquiry details with clearly labelled fields. */}
      <div className="contact-form__grid">
        <label>
          <span>Name</span>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <label>
          <span>Email</span>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <label>
          <span>Subject</span>
          <input type="text" name="subject" value={formData.subject} onChange={handleChange} required />
        </label>
        <label className="contact-form__message">
          <span>Message</span>
          <textarea name="message" rows="6" value={formData.message} onChange={handleChange} required />
        </label>
      </div>
      <button type="submit" className="button button--primary contact-form__submit">
        <FaPaperPlane aria-hidden="true" />
        Send Message
      </button>
      <p className={`contact-form__status ${status === 'sent' ? 'is-visible' : ''}`} aria-live="polite">
        {status === 'sent' ? 'Thank you. Your message has been sent successfully.' : ''}
      </p>
    </form>
  );
}
