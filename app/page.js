import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      {/* ═══════ HERO ═══════ */}
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="container">
          <div className="hero-inner">
            <span className="eyebrow" data-animate>Plymouth &amp; Devon</span>
            <h1 data-animate data-delay="1">A finish you&apos;ll<br /><em>be proud of</em></h1>
            <p className="hero-sub" data-animate data-delay="2">Professional painting and decorating in Plymouth and across Devon. Interior, exterior, wallpapering and commercial work — all done properly, with materials that last.</p>
            <div className="hero-actions" data-animate data-delay="3">
              <a href="tel:07950582891" className="btn btn-brass"><i data-lucide="phone"></i> Call for a Free Quote</a>
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
            <p data-animate data-delay="2">Splash of Colour is a Plymouth-based painting and decorating business with over 10 years of experience. We work on homes, offices, schools and commercial buildings across Devon. Good preparation, quality materials and a clean, tidy finish every time.</p>
          </div>
          <div className="tiles tiles-2" style={{ marginTop: '8px', marginBottom: '60px' }}>
            <div className="text-tile feature-tile" data-animate data-delay="1" style={{ textAlign: 'center' }}>
              <span className="tile-tag" style={{ justifyContent: 'center' }}><i data-lucide="sparkles"></i> The finish matters</span>
              <h3>Preparation is everything</h3>
              <p>A good paint job starts long before the brush goes on. We take the time to prep surfaces properly so the finish looks sharp and lasts for years.</p>
            </div>
            <div className="text-tile feature-tile" data-animate data-delay="2" style={{ textAlign: 'center' }}>
              <span className="tile-tag" style={{ justifyContent: 'center' }}><i data-lucide="check-check"></i> Free, no-obligation quotes</span>
              <h3>Straight prices, no surprises</h3>
              <p>We come out, have a look and give you a clear price. No hidden extras, no hard sell. Just give us a call and we&apos;ll take it from there.</p>
            </div>
          </div>
        </div>
        <div className="stats section-tight">
          <div className="container">
            <div className="stats-grid">
              <div data-animate data-delay="1">
                <div className="stat-num"><span data-count="10">0</span><span className="suffix">+</span></div>
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
                <div className="stat-num"><span data-count="6">0</span><span className="suffix">+</span></div>
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
            <h2 data-animate data-delay="1">A full decorating service</h2>
            <p data-animate data-delay="2">From a single room refresh to a full exterior repaint — every job gets the same attention to detail.</p>
          </div>
          <div className="grid grid-3">
            <div className="card" data-animate data-delay="1">
              <div className="card-icon"><i data-lucide="paint-roller"></i></div>
              <h3>Interior Painting &amp; Decorating</h3>
              <p>Walls, ceilings, woodwork and feature walls — finished cleanly and neatly with minimal disruption to your home.</p>
            </div>
            <div className="card" data-animate data-delay="2">
              <div className="card-icon"><i data-lucide="home"></i></div>
              <h3>Exterior Painting</h3>
              <p>Fascias, soffits, render, masonry and timber — properly prepared and painted to protect your property from the elements.</p>
            </div>
            <div className="card" data-animate data-delay="3">
              <div className="card-icon"><i data-lucide="layers"></i></div>
              <h3>Wallpapering</h3>
              <p>All types of wallpaper including feature walls, tricky surfaces and full-room papering. Measured, hung and trimmed to a precise finish.</p>
            </div>
            <div className="card" data-animate data-delay="1">
              <div className="card-icon"><i data-lucide="wrench"></i></div>
              <h3>Repairs &amp; Preparation</h3>
              <p>Filling cracks, sanding, priming and making good — all the prep work done right before a single drop of paint goes on.</p>
            </div>
            <div className="card" data-animate data-delay="2">
              <div className="card-icon"><i data-lucide="building-2"></i></div>
              <h3>Commercial Decorating</h3>
              <p>Offices, schools, hospitals and surgeries decorated to a professional standard — on time and with minimal disruption.</p>
            </div>
            <div className="card" data-animate data-delay="3">
              <div className="card-icon"><i data-lucide="palette"></i></div>
              <h3>Colour Advice</h3>
              <p>Not sure on colours or finishes? We&apos;re happy to advise — whether it&apos;s a bold feature wall or a neutral refresh throughout.</p>
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
            <span className="eyebrow center" data-animate>Why Splash of Colour</span>
            <h2 data-animate data-delay="1">The difference is in the details</h2>
          </div>
          <div className="grid grid-4">
            <div className="feature" data-animate data-delay="1">
              <div className="feature-icon"><i data-lucide="award"></i></div>
              <h3>Fully Qualified</h3>
              <p>Professionally trained and fully insured for all interior and exterior decorating work.</p>
            </div>
            <div className="feature" data-animate data-delay="2">
              <div className="feature-icon"><i data-lucide="handshake"></i></div>
              <h3>Reliable &amp; Tidy</h3>
              <p>Always on time, always tidy. We clean up daily and leave your home the way we found it.</p>
            </div>
            <div className="feature" data-animate data-delay="3">
              <div className="feature-icon"><i data-lucide="map-pin"></i></div>
              <h3>Based in Plymouth</h3>
              <p>Covering Plymouth and across Devon — residential and commercial work welcome.</p>
            </div>
            <div className="feature" data-animate data-delay="4">
              <div className="feature-icon"><i data-lucide="badge-pound-sterling"></i></div>
              <h3>Free Quotes</h3>
              <p>No-obligation quotes with clear, honest pricing and no hidden extras.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ CTA ═══════ */}
      <section className="cta section">
        <div className="container">
          <h2 data-animate>Ready to brighten up your home?</h2>
          <p data-animate data-delay="1">Free, no-obligation quotes — get in touch today.</p>
          <div className="cta-actions" data-animate data-delay="2">
            <a href="tel:07950582891" className="btn btn-brass"><i data-lucide="phone"></i> 07950 582891</a>
            <Link href="/contact" className="btn btn-ghost">Send a Message <i data-lucide="arrow-right"></i></Link>
          </div>
        </div>
      </section>
    </>
  );
}
