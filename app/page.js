import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      {/* ═══════ HERO ═══════ */}
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="container">
          <div className="hero-inner">
            <span className="eyebrow" data-animate>Devon &amp; Cornwall</span>
            <h1 data-animate data-delay="1">Transforming spaces.<br /><em>Enhancing homes.</em></h1>
            <p className="hero-sub" data-animate data-delay="2">Professional painting and decorating across Devon and Cornwall. Interior, exterior, wallpaper hanging, pressure washing and more — all done to a high standard with quality materials that last.</p>
            <div className="hero-actions" data-animate data-delay="3">
              <a href="tel:07548625358" className="btn btn-brass"><i data-lucide="phone"></i> Call for a Free Quote</a>
              <Link href="/services" className="btn btn-ghost">Our Services</Link>
            </div>
          </div>
        </div>
        <div className="hero-scroll">
          <span className="mouse"></span>
          Scroll
        </div>
      </section>

      {/* ═══════ INTRO + STATS ═══════ */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow center" data-animate>Welcome</span>
            <h2 data-animate data-delay="1">Quality decorating, done right</h2>
            <p data-animate data-delay="2">L.I.S. Decorators is a professional painting and decorating business based in Dobwalls, Liskeard, with over 8 years of experience working across Devon and Cornwall. From new builds to renovations — high-quality, reliable and great value service every time.</p>
          </div>
          <div className="tiles tiles-2" style={{ marginTop: '8px', marginBottom: '60px' }}>
            <div className="text-tile feature-tile" data-animate data-delay="1" style={{ textAlign: 'center' }}>
              <span className="tile-tag" style={{ justifyContent: 'center' }}><i data-lucide="sparkles"></i> The finish matters</span>
              <h3>Preparation is everything</h3>
              <p>A great result starts well before a brush touches the wall. We take time to prepare every surface properly so the finish looks sharp and lasts for years.</p>
            </div>
            <div className="text-tile feature-tile" data-animate data-delay="2" style={{ textAlign: 'center' }}>
              <span className="tile-tag" style={{ justifyContent: 'center' }}><i data-lucide="check-check"></i> Free, no-obligation quotes</span>
              <h3>Straight prices, no surprises</h3>
              <p>We come out, have a look at the job, and give you a clear and honest price — no hidden extras, no hard sell. Just give us a call.</p>
            </div>
          </div>
        </div>
        <div className="stats section-tight">
          <div className="container">
            <div className="stats-grid">
              <div data-animate data-delay="1">
                <div className="stat-num"><span data-count="8">0</span><span className="suffix">+</span></div>
                <div className="stat-label">Years&apos; Experience</div>
              </div>
              <div data-animate data-delay="2">
                <div className="stat-num"><span data-count="5">0</span><span className="suffix">★</span></div>
                <div className="stat-label">Average Rating</div>
              </div>
              <div data-animate data-delay="3">
                <div className="stat-num"><span data-count="100">0</span><span className="suffix">%</span></div>
                <div className="stat-label">5-Star Reviews</div>
              </div>
              <div data-animate data-delay="4">
                <div className="stat-num"><span data-count="4">0</span><span className="suffix">+</span></div>
                <div className="stat-label">Services Offered</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ SERVICES OVERVIEW ═══════ */}
      <section className="section bg-cream-deep">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow center" data-animate>What We Do</span>
            <h2 data-animate data-delay="1">A complete decorating service</h2>
            <p data-animate data-delay="2">From interior painting to exterior maintenance — every job done properly, start to finish.</p>
          </div>
          <div className="grid grid-3">
            <div className="card" data-animate data-delay="1">
              <div className="card-icon"><i data-lucide="paint-roller"></i></div>
              <h3>Internal &amp; External Painting</h3>
              <p>Walls, ceilings, woodwork, fascias and masonry — all properly prepared and finished to a high standard inside and out.</p>
            </div>
            <div className="card" data-animate data-delay="2">
              <div className="card-icon"><i data-lucide="layers"></i></div>
              <h3>Wallpaper Hanging</h3>
              <p>Flawless finishes on all types of wallpaper — feature walls, full rooms, new builds and renovations.</p>
            </div>
            <div className="card" data-animate data-delay="3">
              <div className="card-icon"><i data-lucide="droplets"></i></div>
              <h3>Pressure Washing</h3>
              <p>Driveways, patios, paths, render and decking cleaned and revitalised. Fast, effective results.</p>
            </div>
            <div className="card" data-animate data-delay="1">
              <div className="card-icon"><i data-lucide="home"></i></div>
              <h3>Roof &amp; Gutter Cleaning</h3>
              <p>Moss removal, gutter clearing and roof cleaning to protect and maintain your property through every season.</p>
            </div>
          </div>
          <div className="text-center" style={{ marginTop: '46px' }} data-animate>
            <Link href="/services" className="btn btn-dark">View All Services <i data-lucide="arrow-right"></i></Link>
          </div>
        </div>
      </section>

      {/* ═══════ WHY US ═══════ */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow center" data-animate>Why L.I.S. Decorators</span>
            <h2 data-animate data-delay="1">Reliable, trusted, local</h2>
          </div>
          <div className="grid grid-4">
            <div className="feature" data-animate data-delay="1">
              <div className="feature-icon"><i data-lucide="shield-check"></i></div>
              <h3>Reliable &amp; Trusted</h3>
              <p>Verified with Cornish Traders. We show up when we say we will and do what we agreed.</p>
            </div>
            <div className="feature" data-animate data-delay="2">
              <div className="feature-icon"><i data-lucide="award"></i></div>
              <h3>High Quality Finishes</h3>
              <p>8+ years of experience delivering a finish that stands out — from new builds to period properties.</p>
            </div>
            <div className="feature" data-animate data-delay="3">
              <div className="feature-icon"><i data-lucide="map-pin"></i></div>
              <h3>Friendly Local Service</h3>
              <p>Based in Dobwalls, Liskeard — covering Devon and Cornwall with a personal, local approach.</p>
            </div>
            <div className="feature" data-animate data-delay="4">
              <div className="feature-icon"><i data-lucide="badge-pound-sterling"></i></div>
              <h3>Sensible Pricing</h3>
              <p>Clear, honest quotes with no hidden extras. Great value without cutting corners on quality.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ CTA ═══════ */}
      <section className="cta section">
        <div className="container">
          <h2 data-animate>Ready to transform your space?</h2>
          <p data-animate data-delay="1">Free, no-obligation quotes across Devon and Cornwall.</p>
          <div className="cta-actions" data-animate data-delay="2">
            <a href="tel:07548625358" className="btn btn-brass"><i data-lucide="phone"></i> 07548 625358</a>
            <Link href="/contact" className="btn btn-ghost">Send a Message <i data-lucide="arrow-right"></i></Link>
          </div>
        </div>
      </section>
    </>
  );
}
