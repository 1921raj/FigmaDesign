import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ScrollingBanner from './ScrollingBanner';
import './Testimonials.css';

const PortfolioPage = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [expandedFaq, setExpandedFaq] = useState(0);
  
  const testimonials = [
    {
      name: "Floyd Miles",
      role: "elev",
      text: "Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers. Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face"
    }
  ];

  const faqs = [
    {
      question: "What is your design process?",
      answer: "My design process typically involves four key phases: research, design, prototype, and test. In the research phase, I gather insights about the user and their needs. In the design phase, I create wireframes and visual designs that meet those needs. In the prototype phase, I create interactive mockups of the design for testing. In the test phase, I collect feedback from users to refine the design."
    },
    {
      question: "What tools and software do you use for UX design?",
      answer: "I use a variety of tools including Figma for design and prototyping, Adobe Creative Suite for visual design, Sketch for wireframing, and various user testing platforms for gathering feedback and insights."
    },
    {
      question: "How do you measure the success of your UX designs?",
      answer: "I measure success through various metrics including user engagement rates, task completion rates, user satisfaction scores, conversion rates, and qualitative feedback from user interviews and usability testing sessions."
    }
  ];

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? -1 : index);
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="portfolio-container">
      {/* Testimonials Section */}
      <div className="section testimonials-section">
        <div className="section-header">
          <div className="accent-dot"></div>
          <h2 className="section-title">What they say</h2>
        </div>

        <div className="testimonial-wrapper">
          <div className="testimonial-card">
            <div className="testimonial-content">
              <img 
                src={testimonials[currentTestimonial].avatar}
                alt={testimonials[currentTestimonial].name}
                className="avatar"
              />
              <div className="testimonial-text-wrapper">
                <div className="testimonial-header">
                  <h3 className="testimonial-name">{testimonials[currentTestimonial].name}</h3>
                  <span className="testimonial-role">{testimonials[currentTestimonial].role}</span>
                </div>
                <div className="testimonial-text-container">
                  <p className="testimonial-text highlighted">
                    {testimonials[currentTestimonial].text}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="testimonial-navigation">
            <button className="nav-button" onClick={prevTestimonial}>
              <ChevronLeft size={16} />
            </button>
            <button className="nav-button" onClick={nextTestimonial}>
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="section faq-section">
        <div className="section-header">
          <div className="accent-dot"></div>
          <h2 className="section-title">Frequently asked questions</h2>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <button
                onClick={() => toggleFaq(index)}
                className="faq-question"
              >
                {faq.question}
              </button>
              {expandedFaq === index && faq.answer && (
                <div className="faq-answer">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Scrolling Banner Section */}
      <ScrollingBanner />

      {/* Contact Section */}
      <div className="section contact-section">
        <div className="contact-container">
          <h2 className="contact-title">LET'S TALK!</h2>
          <a href="mailto:rehanurrahman@gmail.com" className="contact-email">
            rehanurrahman@gmail.com →
          </a>
          
          <div className="footer">
            <div className="footer-left">
              <p>© Rehan Farhan - 2023</p>
            </div>
            <div className="footer-right">
              <a href="#" className="footer-link">Dribbble</a>
              <a href="#" className="footer-link">Behance</a>
              <a href="#" className="footer-link">Twitter</a>
              <a href="#" className="footer-link">Instagram</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;