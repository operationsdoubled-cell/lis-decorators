export const metadata = {
  title: 'Contact | L.I.S. Decorators Devon & Cornwall',
  description: 'Contact L.I.S. Decorators in Liskeard, Cornwall — call 07548 625358 for a free quote on painting and decorating across Devon and Cornwall.',
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

            <div data-animate="left">
              <span className="eyebrow">Contact Details</span>
              <h2 style={{ marginBottom: '24px' }}>Reach us directly</h2>

              <div className="contact-detail">
                <div className="ci"><i data-lucide="phone"></i></div>
                <div>
                  <strong>Phone</strong>
                  <p><a href="tel:07548625358">07548 625358</a></p>
                </div>
              </div>
              <div className="contact-detail">
                <div className="ci"><i data-lucide="mail"></i></div>
                <div><strong>Email</strong><p><a href="mailto:LISdecorators@outlook.com">LISdecorators@outlook.com</a></p></div>
              </div>
              <div className="contact-detail">
                <div className="ci"><i data-lucide="map-pin"></i></div>
                <div><strong>Based In</strong><p>61 Twelvewoods Pl, Dobwalls<br />Liskeard, Cornwall PL14 6JP<br />Covering Devon &amp; Cornwall</p></div>
              </div>
              <div className="contact-detail">
                <div className="ci"><i data-lucide="clock"></i></div>
                <div><strong>Opening Hours</strong><p>Mon – Fri: 8am – 7pm<br />Saturday: 8am – 5pm<br />Sunday: 9am – 5pm</p></div>
              </div>
              <div className="contact-detail">
                <div className="ci"><i data-lucide="instagram"></i></div>
                <div><strong>Instagram</strong><p><a href="#" target="_blank" rel="noopener">Follow us for inspiration</a></p></div>
              </div>
            </div>

            <div data-animate="right">
              <div className="contact-form">
                <h3 style={{ marginBottom: '24px' }}>Send us a message</h3>

                {/* CONTACT FORM — sign up free at https://formspree.io,
                    then change action="#" to action="https://formspree.io/f/YOUR_ID"
                    and set method="POST" to receive emails from this form. */}
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
                  </div>
                  <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>Send Message <i data-lucide="send"></i></button>
                  <p className="form-note">Or call us directly on <a href="tel:07548625358">07548 625358</a> — we&apos;re happy to chat through what you need.</p>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="section-tight" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="map-frame" data-animate>
            <div className="map-placeholder">
              <div className="big-icon"><i data-lucide="map"></i></div>
              <h3 style={{ margin: 0 }}>61 Twelvewoods Pl, Dobwalls, Liskeard PL14 6JP</h3>
              <p>Replace this box with a Google Maps embed — go to maps.google.com, search your address, Share → Embed a map, copy the iframe and paste it here.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-tight" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="booking-section" id="booking" data-animate>
            <div className="big-icon"><i data-lucide="calendar-check"></i></div>
            <h3>Free, No-Obligation Quotes</h3>
            <p>Call us today and we&apos;ll arrange a convenient time to come and look at your project — no pressure, no jargon, just honest advice and a clear price.</p>
            <a href="tel:07548625358" className="btn btn-brass"><i data-lucide="phone"></i> Call Now — 07548 625358</a>
          </div>
        </div>
      </section>
    </>
  );
}
