import React from 'react';
import CourseCard from './CourseCard';

export default function CourseGrid({ courses }) {
  return (
    <div className="course-grid" role="list" aria-label="Course listings">
      {/* The grid is arranging course cards into an even responsive layout. */}
      {courses.map((course) => (
        <div key={course.id} role="listitem">
          <CourseCard course={course} />
        </div>
      ))}
    </div>
  );
}
