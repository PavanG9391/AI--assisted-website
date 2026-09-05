import React from 'react';
import SectionHeading from '../components/SectionHeading';
import FAQAccordion from '../components/FAQAccordion';
import { faqs } from '../data/courses';

export default function FAQPage() {
  return (
    <section className="section section--page">
      <div className="container">
        {/* The FAQ page is keeping common questions collapsed until they are needed. */}
        <SectionHeading
          eyebrow="Frequently Asked Questions"
          title="Helpful answers for admissions, courses, certificates, and support"
          description="An accessible accordion layout gives a clean way to present ten or more common student questions."
        />
        <FAQAccordion faqs={faqs} />
      </div>
    </section>
  );
}
