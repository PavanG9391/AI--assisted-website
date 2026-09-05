import React from 'react';
import { Link } from 'react-router-dom';
import { FaClock, FaLayerGroup, FaStar } from 'react-icons/fa6';

export default function CourseCard({ course }) {
  return (
    <article className="course-card">
      {/* The course card is presenting each class option inside a consistent visual frame. */}
      <img
        src={course.image}
        alt={`${course.title} course illustration`}
        className="course-card__image"
        loading="lazy"
      />
      <div className="course-card__body">
        {/* The metadata row is summarising category and rating at a glance. */}
        <div className="course-card__meta">
          <span>{course.category}</span>
          <span>
            <FaStar aria-hidden="true" /> {course.rating}
          </span>
        </div>
        <h3 className="course-card__title">{course.title}</h3>
        <p className="course-card__instructor">Instructor: {course.instructor}</p>
        <p className="course-card__description">{course.description}</p>
        {/* The detail row is keeping duration and level easy to scan. */}
        <div className="course-card__details">
          <span>
            <FaClock aria-hidden="true" /> {course.duration}
          </span>
          <span>
            <FaLayerGroup aria-hidden="true" /> {course.level}
          </span>
        </div>
        <Link to={`/courses/${course.id}`} className="button button--small button--primary">
          View Details
        </Link>
      </div>
    </article>
  );
}
