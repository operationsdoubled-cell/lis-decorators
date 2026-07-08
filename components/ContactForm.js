'use client';

import { useForm, ValidationError } from '@formspree/react';

export default function ContactForm() {
  const [state, handleSubmit] = useForm('mjgqqgly');

  if (state.succeeded) {
    return (
      <div className="contact-form" style={{ display: 'grid', placeItems: 'center', minHeight: '420px', textAlign: 'center' }}>
        <div>
          <div style={{ fontSize: '3rem', marginBottom: '16px' }}>✓</div>
          <h3 style={{ marginBottom: '12px' }}>Message sent!</h3>
          <p>Thanks for getting in touch. We&apos;ll get back to you as soon as possible.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="contact-form">
      <h3 style={{ marginBottom: '24px' }}>Send us a message</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">Your Name *</label>
            <input type="text" id="name" name="name" required placeholder="Jane Smith" />
            <ValidationError field="name" errors={state.errors} />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input type="tel" id="phone" name="phone" placeholder="07700 900000" />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address *</label>
          <input type="email" id="email" name="email" required placeholder="jane@example.com" />
          <ValidationError field="email" errors={state.errors} />
        </div>
        <div className="form-group">
          <label htmlFor="service">Service Interested In</label>
          <select id="service" name="service" defaultValue="">
            <option value="">— Please select —</option>
            <option>Internal Painting &amp; Decorating</option>
            <option>External Painting &amp; Decorating</option>
            <option>Wallpaper Hanging</option>
            <option>Pressure Washing</option>
            <option>Roof &amp; Gutter Cleaning</option>
            <option>General Enquiry</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="message">Message *</label>
          <textarea id="message" name="message" required placeholder="Tell us a bit about your project and what you&apos;re looking for…"></textarea>
          <ValidationError field="message" errors={state.errors} />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          style={{ width: '100%', justifyContent: 'center' }}
          disabled={state.submitting}
        >
          {state.submitting ? 'Sending…' : 'Send Message'}
        </button>
        <p className="form-note">Or call us directly on <a href="tel:07548625358">07548 625358</a> — we&apos;re happy to chat through what you need.</p>
      </form>
    </div>
  );
}
