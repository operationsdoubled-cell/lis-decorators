import Link from 'next/link';

export const metadata = {
  title: 'About | Splash of Colour',
  description: 'About Splash of Colour — professional painting and decorating in Plymouth and Devon for over 10 years. Fully qualified, fully insured.',
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1800&q=80')" }}></div>
        <div className="container">
          <span className="eyebrow center" data-animate>About Us</span>
          <h1 data-animate data-delay="1">A little about who we are</h1>
          <p data-animate data-delay="2">The story and values behind every job we take on.</p>
        </div>
      </section>

      {/* ═══════ STORY ═══════ */}
      <section className="section">
        <div className="container">
          <div className="split">
            <div className="split-media placeholder" data-animate="left">
              {/* PHOTO: replace with a real photo of you or your work —
                  save your image to /public/images/ and use:
                  <div className="split-media" data-animate="left"><img src="/images/about.jpg" alt="Splash of Colour decorator" /></div> */}
              <i data-lucide="paint-roller"></i>
              <div className="badge"><strong>10+ yrs</strong><span>decorating Plymouth &amp; Devon</span></div>
            </div>
            <div data-animate="right">
              <span className="eyebrow">Our Story</span>
              <h2 style={{ marginBottom: '24px' }}>Plymouth-based, proud of every finish</h2>
              <div className="tiles">
                <div className="text-tile" data-animate data-delay="1">
                  <span className="tile-tag"><i data-lucide="paint-roller"></i> Who we are</span>
                  <p>Splash of Colour is a professional painting and decorating business based in Plymouth, Devon. With over 10 years of experience, we work on homes, schools, offices, hospitals and commercial properties across Plymouth and the surrounding area.</p>
                </div>
                <div className="text-tile" data-animate data-delay="2">
                  <span className="tile-tag"><i data-lucide="sparkles"></i> How we work</span>
                  <p>We take preparation seriously — it&apos;s what separates a finish that lasts from one that doesn&apos;t. Every job gets properly cleaned, filled, sanded and primed before we pick up a brush. We work tidily, clean up daily and leave your property the way we found it.</p>
                </div>
                <div className="text-tile feature-tile" data-animate data-delay="3">
                  <span className="tile-tag"><i data-lucide="heart-handshake"></i> Our promise</span>
                  <p>We do what we say we&apos;ll do — show up when agreed, price honestly and finish to a standard we&apos;re proud of. Every single job, no matter the size.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ VALUES ═══════ */}
      <section className="section bg-cream-deep">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow center" data-animate>What We Stand For</span>
            <h2 data-animate data-delay="1">Values that guide every job</h2>
          </div>
          <div className="grid grid-4">
            <div className="value-card" data-animate data-delay="1">
              <div className="card-icon"><i data-lucide="shield-check"></i></div>
              <h3>Fully Insured</h3>
              <p>All work is fully insured for your peace of mind — residential and commercial.</p>
            </div>
            <div className="value-card" data-animate data-delay="2">
              <div className="card-icon"><i data-lucide="handshake"></i></div>
              <h3>Honest Pricing</h3>
              <p>Clear quotes with no hidden costs. We tell you exactly what the job involves and what it will cost before we start.</p>
            </div>
            <div className="value-card" data-animate data-delay="3">
              <div className="card-icon"><i data-lucide="clock"></i></div>
              <h3>Punctual &amp; Tidy</h3>
              <p>We arrive when we say we will, protect your home while we work and clean up properly every day.</p>
            </div>
            <div className="value-card" data-animate data-delay="4">
              <div className="card-icon"><i data-lucide="award"></i></div>
              <h3>Quality Materials</h3>
              <p>We use good quality paints and materials on every job — because the right products make the finish last.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ COVERAGE ═══════ */}
      <section className="section">
        <div className="container text-center" style={{ maxWidth: '680px' }}>
          <span className="eyebrow center" data-animate>Where We Work</span>
          <h2 data-animate data-delay="1">Plymouth &amp; across Devon</h2>
          <p className="lead" data-animate data-delay="2">We&apos;re based in <strong>Plymouth, Devon PL3</strong> and cover Plymouth and the surrounding areas throughout Devon. Residential and commercial work welcome. Not sure if we cover your area? Just give us a call and we&apos;ll let you know.</p>
          <div data-animate data-delay="3" style={{ marginTop: '24px' }}>
            <a href="tel:07950582891" className="btn btn-dark"><i data-lucide="phone"></i> 07950 582891</a>
          </div>
        </div>
      </section>

      <section className="cta section">
        <div className="container">
          <h2 data-animate>Ready to get started?</h2>
          <p data-animate data-delay="1">Free, no-obligation quotes — give us a call today.</p>
          <div className="cta-actions" data-animate data-delay="2">
            <a href="tel:07950582891" className="btn btn-brass"><i data-lucide="phone"></i> 07950 582891</a>
            <Link href="/contact" className="btn btn-ghost">Contact Us <i data-lucide="arrow-right"></i></Link>
          </div>
        </div>
      </section>
    </>
  );
}
