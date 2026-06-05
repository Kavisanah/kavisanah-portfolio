import React, { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', address: '', phone: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email address is invalid";
    }
    if (!formData.address.trim()) tempErrors.address = "Address is required";
    if (!formData.phone.trim()) {
      tempErrors.phone = "Phone number is required";
    }
    if (!formData.message.trim()) tempErrors.message = "Message is required";
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear validation error when typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      try {
        const payload = {
          access_key: "1153d564-0587-4271-984a-eb28731f957e",
          ...formData
        };

        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: JSON.stringify(payload)
        });

        const result = await response.json();
        if (result.success) {
          setIsSubmitted(true);
          setFormData({ name: '', email: '', address: '', phone: '', message: '' });
          // Auto-hide success message after 5 seconds
          setTimeout(() => {
            setIsSubmitted(false);
          }, 5000);
        } else {
          alert(result.message || "Something went wrong. Please try again.");
        }
      } catch (error) {
        alert("Failed to send message. Please check your internet connection and try again.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const contactDetails = [
    {
      label: "Email",
      value: "kanakeshwarankavisanah@gmail.com",
      link: "mailto:kanakeshwarankavisanah@gmail.com",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="contact-icon-svg"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
      )
    },
    {
      label: "Phone",
      value: "+94 763 278 153",
      link: "tel:+94763278153",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="contact-icon-svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
      )
    },
    {
      label: "Location",
      value: "Colombo, Sri Lanka",
      link: "#",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="contact-icon-svg"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
      )
    }
  ];



  return (
    <section id="contact" className="contact-section section">
      {/* Background Ambient Glow */}
      <div className="ambient-glow glow-contact"></div>

      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">Connections</span>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-desc">
            Have an internship opening, a project idea, or just want to connect? Drop a line or reach out directly!
          </p>
        </div>

        <div className="contact-grid grid-2 scroll-scale">
          
          {/* Left Column: Direct Info & References */}
          <div className="contact-info-column">
            
            {/* Info Cards */}
            <div className="info-list">
              {contactDetails.map((detail, idx) => (
                <a key={idx} href={detail.link} className="info-item glass-panel">
                  <div className="info-icon">{detail.icon}</div>
                  <div className="info-details">
                    <span className="info-label">{detail.label}</span>
                    <span className="info-value">{detail.value}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="contact-form-column">
            <form onSubmit={handleSubmit} className="contact-form glass-panel">
              <h3 className="form-title">Send a Message</h3>
              
              {isSubmitted ? (
                <div className="form-success-message">
                  <div className="success-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="success-svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <h4 className="success-heading">Message Sent Successfully!</h4>
                  <p className="success-body">Thank you for reaching out, Kavisanah will get back to you shortly.</p>
                </div>
              ) : (
                <div className="form-fields">
                  
                  {/* Name field */}
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Full Name</label>
                    <input 
                      type="text" 
                      id="name"
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className={`form-input ${errors.name ? 'invalid' : ''}`}
                    />
                    {errors.name && <span className="field-error">{errors.name}</span>}
                  </div>

                  {/* Email field */}
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <input 
                      type="email" 
                      id="email"
                      name="email" 
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className={`form-input ${errors.email ? 'invalid' : ''}`}
                    />
                    {errors.email && <span className="field-error">{errors.email}</span>}
                  </div>

                  {/* Address field */}
                  <div className="form-group">
                    <label htmlFor="address" className="form-label">Address</label>
                    <input 
                      type="text" 
                      id="address"
                      name="address" 
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="Your address"
                      className={`form-input ${errors.address ? 'invalid' : ''}`}
                    />
                    {errors.address && <span className="field-error">{errors.address}</span>}
                  </div>

                  {/* Phone field */}
                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">Phone Number</label>
                    <input 
                      type="text" 
                      id="phone"
                      name="phone" 
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your phone number"
                      className={`form-input ${errors.phone ? 'invalid' : ''}`}
                    />
                    {errors.phone && <span className="field-error">{errors.phone}</span>}
                  </div>

                  {/* Message field */}
                  <div className="form-group">
                    <label htmlFor="message" className="form-label">Your Message</label>
                    <textarea 
                      id="message"
                      name="message" 
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your internship opening or project details..."
                      rows="5"
                      className={`form-input form-textarea ${errors.message ? 'invalid' : ''}`}
                    ></textarea>
                    {errors.message && <span className="field-error">{errors.message}</span>}
                  </div>

                  {/* Submit Button */}
                  <button type="submit" className="btn btn-primary btn-submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    {!isSubmitting && (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="btn-icon"><line x1="22" x2="11" y1="2" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                    )}
                  </button>

                </div>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
