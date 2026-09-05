import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa6';

export default function FAQAccordion({ faqs }) {
  // The accordion is keeping one answer open at a time for fast scanning.
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="faq-accordion">
      {faqs.map((faq, index) => {
        const isOpen = index === openIndex;
        const buttonId = `faq-button-${index}`;
        const panelId = `faq-panel-${index}`;

        return (
          <div className={`faq-accordion__item ${isOpen ? 'is-open' : ''}`} key={faq.question}>
            <h3 className="faq-accordion__heading">
              <button
                id={buttonId}
                className="faq-accordion__button"
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
              >
                <span>{faq.question}</span>
                <FaChevronDown aria-hidden="true" />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="faq-accordion__panel"
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
