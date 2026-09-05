import React, { useMemo, useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import CourseGrid from '../components/CourseGrid';
import { categories, courses } from '../data/courses';

export default function CoursesPage() {
  // The course page is filtering the local catalogue without any backend calls.
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesCategory = activeCategory === 'All' || course.category === activeCategory;
      const matchesSearch =
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.instructor.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.description.toLowerCase().includes(searchTerm.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, activeCategory]);

  return (
    <section className="section section--page">
      <div className="container">
        {/* The search controls are helping users narrow the catalogue quickly. */}
        <SectionHeading
          eyebrow="Course Catalog"
          title="Discover flexible courses for every academic goal"
          description="Search, filter, and explore course cards designed with strong visual hierarchy and usability."
        />

        <div className="filters" aria-label="Course search and filters">
          <label className="filters__search">
            <span className="sr-only">Search courses</span>
            <input
              type="search"
              placeholder="Search courses, instructors, or descriptions"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
            />
          </label>

          <div className="filters__chips" role="tablist" aria-label="Course categories">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                role="tab"
                className={`chip ${activeCategory === category ? 'is-active' : ''}`}
                aria-selected={activeCategory === category}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <CourseGrid courses={filteredCourses} />
      </div>
    </section>
  );
}
