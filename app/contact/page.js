export const metadata = {
  title: "Contact | Bill's Painting & Decorating",
  description: "Contact Bill's Painting & Decorating in East London — call, email or fill in our enquiry form for a free quote.",
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1800&q=80')" }}></div>
        <div className="container">
          <span className="eyebrow center" data-animate>Get in Touch</span>
          <h1 data-animate data-delay="1">Let&apos;s talk about your decorating</h1>
          <p data-animate data-delay="2">Call us, send a message, or use the form below. We&apos;d love to hear from you.</p>
        </div>
      </section>

      <section className="section" id="quote">
        <div className="container">
          <div className="contact-grid">

            {/* Left: details */}
            <div data-animate="left">
              <span className="eyebrow">Contact Details</span>
              <h2 style={{ marginBottom: '24px' }}>Reach us directly</h2>

              <div className="contact-detail">
                <div className="ci"><i data-lucide="phone"></i></div>
                <div><strong>Phone</strong><p><a href="tel:07460413349">07460 413349</a></p></div>
              </div>
              <div className="contact-detail">
                <div className="ci"><i data-lucide="mail"></i></div>
                {/* EMAIL: replace with your real email address */}
                <div><strong>Email</strong><p><a href="mailto:hello@billspainting.co.uk">hello@billspainting.co.uk</a></p></div>
              </div>
              <div className="contact-detail">
                <div className="ci"><i data-lucide="map-pin"></i></div>
                {/* ADDRESS: add your postcode when ready */}
                <div><strong>Based In</strong><p>East London<br />Covering surrounding areas</p></div>
              </div>
              <div className="contact-detail">
                <div className="ci"><i data-lucide="clock"></i></div>
                {/* OPENING HOURS: update to your real hours */}
                <div><strong>Working Hours</strong><p>Mon – Fri: 7:30am – 5:30pm<br />Saturday: 8am – 1pm<br />Sunday: Closed</p></div>
              </div>
              <div className="contact-detail">
                <div className="ci"><i data-lucide="instagram"></i></div>
                {/* INSTAGRAM: replace # with your Instagram profile URL */}
                <div><strong>Instagram</strong><p><a href="#" target="_blank" rel="noopener">Follow us for before &amp; afters</a></p></div>
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
                      <option>Interior Painting</option>
                      <option>Exterior Painting</option>
                      <option>Wallpapering</option>
                      <option>Plastering &amp; Surface Prep</option>
                      <option>Woodwork &amp; Trim</option>
                      <option>Feature Walls</option>
                      <option>Full House Redecoration</option>
                      <option>General Enquiry</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea id="message" name="message" required placeholder="Tell us a bit about the job — rooms involved, any prep needed, rough timescale…"></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>Send Message <i data-lucide="send"></i></button>
                  <p className="form-note">Note: the form needs a service like Formspree to send emails — see the comment in the code. It will work once your site is live online.</p>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════ MAP ═══════ */}
      <section className="section-tight" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="map-frame" data-animate>
            <iframe
              src="https://maps.google.com/maps?q=51.4700,-0.0500&t=&z=12&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, display: 'block' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="East London map"
            />
          </div>
        </div>
      </section>
    </>
  );
}
