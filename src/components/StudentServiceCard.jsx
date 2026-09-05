import React from 'react';
import {
  FaBook,
  FaBookOpen,
  FaBriefcase,
  FaLaptopCode,
  FaUsers,
  FaCirclePlay,
} from 'react-icons/fa6';

const iconMap = {
  FaBook,
  FaBookOpen,
  FaBriefcase,
  FaLaptopCode,
  FaUsers,
  FaCirclePlay,
};

export default function StudentServiceCard({ title, description, icon }) {
  // The service card is turning each support area into a compact visual block.
  const Icon = iconMap[icon];

  return (
    <article className="service-card">
      <div className="service-card__icon" aria-hidden="true">
        {Icon ? <Icon /> : null}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}
