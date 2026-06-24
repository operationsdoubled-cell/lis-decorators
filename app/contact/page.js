export const metadata = {
  title: 'Contact | Splash of Colour',
  description: 'Contact Splash of Colour in Plymouth, Devon — call 07950 582891 for a free quote on painting and decorating across Plymouth and Devon.',
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1800&q=80')" }}></div>
        <div className="container">
          <span className="eyebrow center" data-animate>Get in Touch</span>
          <h1 data-animate data-delay="1">Let&apos;s talk about your project</h1>
          <p data-animate data-delay="2">Free, no-obligation quotes — give us a call and we&apos;ll arrange a convenient time to come and have a look.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid">

            {/* Left: details */}
            <div data-animate="left">
              <span className="eyebrow">Contact Details</span>
              <h2 style={{ marginBottom: '24px' }}>Reach us directly</h2>

              <div className="contact-detail">
                <div className="ci"><i data-lucide="phone"></i></div>
                <div>
                  <strong>Phone</strong>
                  <p><a href="tel:07950582891">07950 582891</a></p>
                </div>
              </div>
              <div className="contact-detail">
                <div className="ci"><i data-lucide="mail"></i></div>
                {/* EMAIL: replace with your real email address */}
                <div><strong>Email</strong><p><a href="mailto:info@splashofcolour.co.uk">info@splashofcolour.co.uk</a></p></div>
              </div>
              <div className="contact-detail">
                <div className="ci"><i data-lucide="map-pin"></i></div>
                <div><strong>Based In</strong><p>Plymouth, Devon, PL3 6RZ<br />Covering Plymouth and across Devon</p></div>
              </div>
              <div className="contact-detail">
                <div className="ci"><i data-lucide="clock"></i></div>
                <div><strong>Opening Hours</strong><p>Mon – Sat: 8am – 8pm<br />Sunday: Closed</p></div>
              </div>
              <div className="contact-detail">
                <div className="ci"><i data-lucide="instagram"></i></div>
                {/* INSTAGRAM: replace # with your Instagram profile URL */}
                <div><strong>Instagram</strong><p><a href="#" target="_blank" rel="noopener">Follow us for inspiration</a></p></div>
              </div>
            </div>

            {/* Right: form */}
            <div data-animate="right">
              <div className="contact-form">
                <h3 style={{ marginBottom: '24px' }}>Send us a message</h3>

                {/* CONTACT FORM — NEEDS A FORM SERVICE TO SEND EMAILS
                    On Vercel there is no built-in form handler, so the easiest
                    route is Formspree (free): sign up at https://formspree.io,
                    then change action="#" below to action="https://formspree.io/f/YOUR_ID"
                    and set method="POST". It will then email you each submission. */}
                <form action="#" method="POST" id="contactForm">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Your Name *</label>
                      <input type="text" id="name" name="name" required placeholder="Jane Smith" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Phone</label>
                      <input type="tel" id="phone" name="phone" placeholder="07700 900000" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input type="email" id="email" name="email" required placeholder="jane@example.com" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="service">Service Interested In</label>
                    <select id="service" name="service" defaultValue="">
                      <option value="">— Please select —</option>
                      <option>Interior Painting &amp; Decorating</option>
                      <option>Exterior Painting &amp; Decorating</option>
                      <option>Wallpapering</option>
                      <option>Repairs &amp; Surface Preparation</option>
                      <option>Commercial Decorating</option>
                      <option>Colour Advice</option>
                      <option>General Enquiry</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea id="message" name="message" required placeholder="Tell us a bit about your project and what you&apos;re looking for…"></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>Send Message <i data-lucide="send"></i></button>
                  <p className="form-note">Note: the form needs a form service (like Formspree) to send emails — see the comment in the code. In the meantime, call us on <a href="tel:07950582891">07950 582891</a>.</p>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════ MAP ═══════ */}
      <section className="section-tight" style={{ paddingTop: 0 }}>
        <div className="container">
          {/* MAP EMBED — to add a real Google Map:
              1. Go to maps.google.com, search "Plymouth Devon PL3 6RZ".
              2. Share → Embed a map → Copy HTML.
              3. Replace the .map-placeholder div below with the <iframe>
                 (keep it inside .map-frame). */}
          <div className="map-frame" data-animate>
            <div className="map-placeholder">
              <div className="big-icon"><i data-lucide="map"></i></div>
              <h3 style={{ margin: 0 }}>Plymouth, Devon, PL3 6RZ</h3>
              <p>Replace this box with a Google Maps embed — see the comment in the code above.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ BOOKING CTA ═══════ */}
      <section className="section-tight" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="booking-section" id="booking" data-animate>
            <div className="big-icon"><i data-lucide="calendar-check"></i></div>
            <h3>Free, No-Obligation Quotes</h3>
            <p>Call us today and we&apos;ll arrange a convenient time to come and look at your project — no pressure, no jargon, just honest advice and a clear price.</p>
            <a href="tel:07950582891" className="btn btn-brass"><i data-lucide="phone"></i> Call Now — 07950 582891</a>
          </div>
        </div>
      </section>
    </>
  );
}
