import React, { useState } from "react";
import "./FAQ.css";

const faqs = [
  {
    question: "How does Osumare measure campaign success?",
    answer:
      "We believe in measurable results. Our data-driven approach means that every campaign's performance is tracked, analyzed, and refined for optimal outcomes. We provide regular reports that detail key metrics, giving you clear insights into how our strategies are driving growth for your brand.",
  },
  {
    question: "How does Osumare measure campaign success?",
    answer:
      "We believe in measurable results. Our data-driven approach means that every campaign's performance is tracked, analyzed, and refined for optimal outcomes. We provide regular reports that detail key metrics, giving you clear insights into how our strategies are driving growth for your brand.",
  },
  {
    question: "How does Osumare measure campaign success?",
    answer:
      "We believe in measurable results. Our data-driven approach means that every campaign's performance is tracked, analyzed, and refined for optimal outcomes. We provide regular reports that detail key metrics, giving you clear insights into how our strategies are driving growth for your brand.",
  },
];

function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h1>Frequently Asked Questions</h1>
      <p>
        Pinpoint your audience with precision, ensuring your marketing efforts
        reach those most likely to engage with your brand.
      </p>
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <div
            className={`faq-question ${openIndex === index ? "active" : ""}`}
            onClick={() => handleToggle(index)}
          >
            {`${index + 1}. ${faq.question}`}
          </div>
          {openIndex === index && (
            <div className="faq-answer">{faq.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Faq;
