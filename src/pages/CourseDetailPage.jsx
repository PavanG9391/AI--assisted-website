import React, { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FaClock, FaLayerGroup, FaUsers, FaArrowLeft, FaCircleCheck } from 'react-icons/fa6';
import CourseGrid from '../components/CourseGrid';
import SectionHeading from '../components/SectionHeading';
import { courses } from '../data/courses';

export default function CourseDetailPage() {
  // The detail page is mapping the selected course and showing related options nearby.
  const { courseId } = useParams();
  const [enrolled, setEnrolled] = useState(false);

  const course = courses.find((item) => item.id === courseId) || courses[0];

  const relatedCourses = useMemo(
    () => courses.filter((item) => item.category === course.category && item.id !== course.id).slice(0, 3),
    [course]
  );

  return (
    <section className="section section--page">
      <div className="container course-detail">
        {/* The back link is keeping navigation simple when users return to browsing. */}
        <Link to="/courses" className="back-link">
          <FaArrowLeft aria-hidden="true" />
          Back to Courses
        </Link>

        {/* The banner is introducing the selected course before the detail panels begin. */}
        <article className="course-banner">
          <img
            src={course.banner}
            alt={`${course.title} banner illustration`}
            className="course-banner__image"
          />
          <div className="course-banner__content">
            <span className="course-banner__badge">{course.category}</span>
            <h1>{course.title}</h1>
            <p>{course.description}</p>
            <div className="course-banner__meta">
              <span>
                <FaClock aria-hidden="true" /> {course.duration}
              </span>
              <span>
                <FaLayerGroup aria-hidden="true" /> {course.level}
              </span>
              <span>
                <FaUsers aria-hidden="true" /> {course.students} learners
              </span>
            </div>
            <button type="button" className="button button--primary" onClick={() => setEnrolled(true)}>
              Enrol Now
            </button>
            {enrolled ? (
              <p className="course-banner__status" aria-live="polite">
                Your enrolment request has been submitted successfully.
              </p>
            ) : null}
          </div>
        </article>

        {/* The lower grid is balancing the course narrative with instructor information. */}
        <div className="course-detail__grid">
          <section className="panel">
            <SectionHeading
              eyebrow="Course Description"
              title="A structured, academic learning experience"
              description="The content below showcases a layout suitable for course detail comparisons in UX research."
            />
            <p>{course.description}</p>
            <h2>Learning Outcomes</h2>
            <ul className="check-list">
              {course.learningOutcomes.map((outcome) => (
                <li key={outcome}>
                  <FaCircleCheck aria-hidden="true" />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </section>

          <aside className="panel">
            <h2>Instructor Information</h2>
            <div className="instructor-card">
              <div className="instructor-card__avatar" aria-hidden="true">
                {course.instructorInfo.name
                  .split(' ')
                  .map((part) => part[0])
                  .join('')}
              </div>
              <div>
                <h3>{course.instructorInfo.name}</h3>
                <p>{course.instructorInfo.role}</p>
                <p>{course.instructorInfo.bio}</p>
                <p>{course.instructorInfo.experience}</p>
              </div>
            </div>

            <h2>Course Curriculum</h2>
            <div className="curriculum">
              {course.curriculum.map((module, index) => (
                <div className="curriculum__item" key={module.title}>
                  <span className="curriculum__index">{index + 1}</span>
                  <div>
                    <h3>{module.title}</h3>
                    <p>{module.lessons} lessons</p>
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </div>

        {/* The related section is extending discovery into similar learning paths. */}
        <section className="section__inner">
          <SectionHeading
            eyebrow="Related Courses"
            title="More options in the same learning category"
            description="Related cards help improve content discovery and strengthen the course browsing experience."
          />
          <CourseGrid courses={relatedCourses} />
        </section>
      </div>
    </section>
  );
}
