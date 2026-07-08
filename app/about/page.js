import Link from 'next/link';

export const metadata = {
  title: 'About | L.I.S. Decorators Devon & Cornwall',
  description: 'About L.I.S. Decorators — professional painting and decorating across Devon and Cornwall for over 16 years. Reliable, high quality, great value.',
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1800&q=80')" }}></div>
        <div className="container">
          <span className="eyebrow center" data-animate>About Us</span>
          <h1 data-animate data-delay="1">A little about who we are</h1>
          <p data-animate data-delay="2">The people and values behind every job we take on.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="split">
            <div className="split-media" data-animate="left">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/LIS_about.jpg" alt="White-rendered Cornish cottage on the coast — the kind of property L.I.S. Decorators works on across Devon and Cornwall" />
              <div className="badge"><strong>16+ yrs</strong><span>decorating Devon &amp; Cornwall</span></div>
            </div>
            <div data-animate="right">
              <span className="eyebrow">Our Story</span>
              <h2 style={{ marginBottom: '24px' }}>Cornwall-based, proud of every finish</h2>
              <div className="tiles">
                <div className="text-tile" data-animate data-delay="1">
                  <span className="tile-tag"><i data-lucide="paint-roller"></i> Who we are</span>
                  <p>L.I.S. Decorators Devon &amp; Cornwall is run by Ben, a professional painter and decorator based in Dobwalls, Liskeard. With over 16 years of hands-on experience, we work on residential and commercial properties throughout Devon and Cornwall — from luxury new builds to period homes.</p>
                </div>
                <div className="text-tile" data-animate data-delay="2">
                  <span className="tile-tag"><i data-lucide="sparkles"></i> How we work</span>
                  <p>We believe preparation is everything. Before any paint or paper goes on, we make sure every surface is properly cleaned, filled, sanded and primed. We work tidily, protect your home throughout and clean up every day. The result is a finish that looks great and lasts.</p>
                </div>
                <div className="text-tile feature-tile" data-animate data-delay="3">
                  <span className="tile-tag"><i data-lucide="heart-handshake"></i> Our promise</span>
                  <p>Reliable, high quality and great value — that&apos;s what we stand for. We show up on time, price honestly and deliver a standard of work we&apos;re genuinely proud of on every single job.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-cream-deep">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow center" data-animate>What We Stand For</span>
            <h2 data-animate data-delay="1">Three things we never compromise on</h2>
          </div>
          <div className="grid grid-3">
            <div className="value-card" data-animate data-delay="1">
              <div className="card-icon"><i data-lucide="shield-check"></i></div>
              <h3>Reliable &amp; Trusted</h3>
              <p>Verified with Cornish Traders. We arrive when agreed, keep you updated and do exactly what we said we would.</p>
            </div>
            <div className="value-card" data-animate data-delay="2">
              <div className="card-icon"><i data-lucide="award"></i></div>
              <h3>High Quality Finishes</h3>
              <p>We use quality materials and take our time to get the preparation and application right — so the finish looks as good in five years as it does on day one.</p>
            </div>
            <div className="value-card" data-animate data-delay="3">
              <div className="card-icon"><i data-lucide="handshake"></i></div>
              <h3>Friendly Local Service</h3>
              <p>Based in Liskeard, we treat every home with care and respect. No mess left behind — just a friendly, professional job done well.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container text-center" style={{ maxWidth: '680px' }}>
          <span className="eyebrow center" data-animate>Where We Work</span>
          <h2 data-animate data-delay="1">Devon &amp; Cornwall</h2>
          <p className="lead" data-animate data-delay="2">We&apos;re based in <strong>Dobwalls, Liskeard (PL14)</strong> and cover the wider Devon and Cornwall area. Not sure if we cover your location? Just give us a call and we&apos;ll let you know.</p>
          <div data-animate data-delay="3" style={{ marginTop: '24px' }}>
            <a href="tel:07548625358" className="btn btn-dark"><i data-lucide="phone"></i> 07548 625358</a>
          </div>
        </div>
      </section>

      <section className="cta section">
        <div className="container">
          <h2 data-animate>Ready to get started?</h2>
          <p data-animate data-delay="1">Free, no-obligation quotes — give us a call today.</p>
          <div className="cta-actions" data-animate data-delay="2">
            <a href="tel:07548625358" className="btn btn-brass"><i data-lucide="phone"></i> 07548 625358</a>
            <Link href="/contact" className="btn btn-ghost">Contact Us <i data-lucide="arrow-right"></i></Link>
          </div>
        </div>
      </section>
    </>
  );
}
