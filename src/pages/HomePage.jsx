import React from 'react';
import Hero from '../components/Hero';
import SectionHeading from '../components/SectionHeading';
import CourseGrid from '../components/CourseGrid';
import TestimonialCard from '../components/TestimonialCard';
import { courses, stats, testimonials } from '../data/courses';
import { FaChalkboardUser, FaGlobe, FaShieldHeart, FaArrowRight } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const featuredCourses = courses.filter((course) => course.featured);

const reasons = [
  {
    icon: FaChalkboardUser,
    title: 'Expert-led learning',
    text: 'Courses are presented with strong academic framing and instructor profiles that fit a university setting.',
  },
  {
    icon: FaGlobe,
    title: 'Responsive by default',
    text: 'Layouts adapt elegantly from large screens to compact mobile views with clear hierarchy and spacing.',
  },
  {
    icon: FaShieldHeart,
    title: 'Accessible interface',
    text: 'Semantic HTML, visible focus states, labels, and strong contrast support inclusive navigation.',
  },
];

export default function HomePage() {
  return (
    <>
      {/* The home page is assembling the platform story through featured content and trust signals. */}
      <Hero />

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Featured Courses"
            title="Popular learning paths for research and career growth"
            description="A balanced set of courses that looks and feels like a polished online university platform."
          />
          <CourseGrid courses={featuredCourses} />
          <div className="section__cta-row">
            <Link to="/courses" className="button button--secondary">
              View All Courses
              <FaArrowRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Designed to communicate trust, clarity, and academic quality"
            description="The visual language is premium and restrained, with strong structure that supports research comparison."
          />
          <div className="reason-grid">
            {reasons.map((reason) => {
              const Icon = reason.icon;
              return (
                <article key={reason.title} className="reason-card">
                  <div className="reason-card__icon" aria-hidden="true">
                    <Icon />
                  </div>
                  <h3>{reason.title}</h3>
                  <p>{reason.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Statistics"
            title="Strong platform metrics that support the learning story"
            description="The numbers are ideal for showing a credible educational brand presence in a prototype setting."
          />
          <div className="stats-grid">
            {stats.map((stat) => (
              <article key={stat.label} className="stat-card">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <SectionHeading
            eyebrow="Student Testimonials"
            title="A modern interface that students can trust"
            description="These testimonials help create a realistic learning platform feel for the research study."
          />
          <div className="testimonial-grid">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
