"use client";

import React from "react";
import ContactForm from "../ContactForm";

export default function ContactPage() {
  return (
    <section className="contact-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Contact Us</h2>
          <p className="section-subtitle">
            Have questions about our platform or want to see how mobiCampus can
            transform your school community? Fill out the form below and a member
            of our team will get back to you shortly.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-card">
            <h3>We'd love to hear from you</h3>
            <p className="lead">Reach out for product demos, pricing, partnerships, or general questions.</p>

            <div className="contact-items">
              <div className="contact-item">
                <div className="icon">📧</div>
                <div className="content">
                  <span className="label">Email</span>
                  <span className="value"><a href="mailto:hello@mobatia.com">hello@mobatia.com</a></span>
                </div>
              </div>

              <div className="contact-item">
                <div className="icon">📞</div>
                <div className="content">
                  <span className="label">Phone</span>
                  <span className="value"><a href="tel:+11234567890">+1 (123) 456-7890</a></span>
                </div>
              </div>

              <div className="contact-item">
                <div className="icon">📍</div>
                <div className="content">
                  <span className="label">Location</span>
                  <span className="value">Dubai, UAE</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}


