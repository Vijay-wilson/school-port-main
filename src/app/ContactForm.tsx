// ContactForm.jsx
import { getSupabaseClient } from "@/supabase/supabaseClient";
import React, { useState, useEffect } from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaBuilding,
  FaRegCommentDots,
} from "react-icons/fa";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null
  const [isClient, setIsClient] = useState(false);
  const [client, setClient] = useState<any>(null);

  useEffect(() => {
    setIsClient(true);
    const c = getSupabaseClient();
    setClient(c);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!client) {
      setSubmitStatus("error");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Insert data into Supabase
      const { data, error } = await client
        .from("contact_messages") // Replace with your table name
        .insert([
          {
            full_name: formData.fullName,
            email: formData.email,
            phone: formData.phone,
            company: formData.company,
            message: formData.message,
            created_at: new Date().toISOString(),
          },
        ]);

      if (error) {
        throw error;
      }

      // Reset form after successful submission
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });

      setSubmitStatus("success");
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isClient) {
    return (
      <div className="contact-form">
        <h3>Send us a message</h3>
        <p className="lead">Loading form...</p>
      </div>
    );
  }

  return (
    <div className="contact-form">
      <h3>Send us a message</h3>
      <p className="lead">
        Fill out the form below and we'll get back to you as soon as possible.
      </p>

      {!client && (
        <div
          className="alert alert-error"
          style={{
            padding: "12px",
            marginBottom: "20px",
            backgroundColor: "#f8d7da",
            border: "1px solid #f5c6cb",
            borderRadius: "4px",
            color: "#721c24",
          }}
        >
          Supabase is not configured. Please set NEXT_PUBLIC_SUPABASE_URL and
          NEXT_PUBLIC_SUPABASE_ANON_KEY in .env.local and restart the server.
        </div>
      )}

      {submitStatus === "success" && (
        <div
          className="alert alert-success"
          style={{
            padding: "12px",
            marginBottom: "20px",
            backgroundColor: "#d4edda",
            border: "1px solid #c3e6cb",
            borderRadius: "4px",
            color: "#155724",
          }}
        >
          Thank you for your message! We will get back to you soon.
        </div>
      )}

      {submitStatus === "error" && (
        <div
          className="alert alert-error"
          style={{
            padding: "12px",
            marginBottom: "20px",
            backgroundColor: "#f8d7da",
            border: "1px solid #f5c6cb",
            borderRadius: "4px",
            color: "#721c24",
          }}
        >
          There was an error sending your message. Please try again.
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <span className="input-icon">
            <FaUser />
          </span>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>

        <div className="input-group">
          <span className="input-icon">
            <FaEnvelope />
          </span>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>

        <div className="input-group">
          <span className="input-icon">
            <FaPhone />
          </span>
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="form-input"
          />
        </div>

        <div className="input-group">
          <span className="input-icon">
            <FaBuilding />
          </span>
          <input
            type="text"
            name="company"
            placeholder="Company Name"
            value={formData.company}
            onChange={handleChange}
            className="form-input"
          />
        </div>

        <div className="input-group">
          <span className="input-icon">
            <FaRegCommentDots />
          </span>
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            className="form-input"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting || !client}
          className="btn btn-primary"
          style={{ width: "100%" }}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
