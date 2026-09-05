import React from 'react';
import SectionHeading from '../components/SectionHeading';
import StudentServiceCard from '../components/StudentServiceCard';
import { services } from '../data/courses';

export default function StudentServicesPage() {
  return (
    <section className="section section--page">
      <div className="container">
        {/* The service page is presenting support offerings as simple cards. */}
        <SectionHeading
          eyebrow="Student Services"
          title="Support services designed around student success"
          description="These cards communicate academic support, wellbeing, and platform assistance in a polished layout."
        />
        <div className="service-grid">
          {services.map((service) => (
            <StudentServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
