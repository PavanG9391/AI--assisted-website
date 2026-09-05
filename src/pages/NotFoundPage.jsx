import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <section className="section section--page">
      <div className="container not-found">
        {/* The 404 state is guiding users back to the main landing page. */}
        <h1>Page not found</h1>
        <p>The page you requested does not exist.</p>
        <Link to="/" className="button button--primary">
          Return Home
        </Link>
      </div>
    </section>
  );
}
