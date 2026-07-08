import ContactForm from '@/components/ContactForm';

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
            </div>

            <div data-animate="right">
              <ContactForm />
            </div>

          </div>
        </div>
      </section>

      <section className="section-tight" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="map-frame" data-animate>
            <iframe
              src="https://maps.google.com/maps?q=50.458395,-4.520584&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, display: 'block' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="L.I.S. Decorators — 61 Twelvewoods Pl, Dobwalls, Liskeard PL14 6JP"
            />
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
