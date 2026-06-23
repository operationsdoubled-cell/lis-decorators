import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      {/* ═══════ HERO ═══════ */}
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="container">
          <div className="hero-inner">
            <span className="eyebrow" data-animate>East London Decorating Specialists</span>
            <h1 data-animate data-delay="1">Rooms you&apos;ll<br /><em>love waking up to</em></h1>
            <p className="hero-sub" data-animate data-delay="2">We&apos;re a small friendly team covering East London. From a single room refresh to a full-house transformation. Painting, papering, plastering, woodwork. Whatever needs doing, we&apos;ll sort it properly.</p>
            <div className="hero-actions" data-animate data-delay="3">
              <Link href="/contact" className="btn btn-brass">Get a Free Quote <i data-lucide="arrow-right"></i></Link>
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
            <h2 data-animate data-delay="1">We treat your home like our own</h2>
            <p data-animate data-delay="2">Hi, I&apos;m Bill. I&apos;ve been decorating homes across East London for over 15 years. We turn up on time, do the job properly, and leave the place spotless. That&apos;s the whole idea.</p>
          </div>
          <div className="tiles tiles-2" style={{ marginTop: '8px' }}>
            <div className="text-tile feature-tile" data-animate data-delay="1">
              <span className="tile-tag"><i data-lucide="user-round"></i> Local &amp; familiar</span>
              <h3>A friendly face you&apos;ll get to know</h3>
              <p>You&apos;ll deal with the same people every time. No strangers turning up, no call centres. Just me and a small team who take real pride in the work.</p>
            </div>
            <div className="text-tile feature-tile" data-animate data-delay="2">
              <span className="tile-tag"><i data-lucide="check-check"></i> No fuss</span>
              <h3>Easy to book, easy to trust</h3>
              <p>Give us a ring and we&apos;ll pop round, take a look, and give you a straight price. No pressure, no surprises on the invoice.</p>
            </div>
          </div>
        </div>
        <div className="stats section-tight">
          <div className="container">
            <div className="stats-grid">
              <div data-animate data-delay="1">
                <div className="stat-num"><span data-count="500">0</span><span className="suffix">+</span></div>
                <div className="stat-label">Rooms Decorated</div>
              </div>
              <div data-animate data-delay="2">
                <div className="stat-num"><span data-count="15">0</span><span className="suffix">+</span></div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div data-animate data-delay="3">
                <div className="stat-num"><span data-count="98">0</span><span className="suffix">%</span></div>
                <div className="stat-label">Happy Customers</div>
              </div>
              <div data-animate data-delay="4">
                <div className="stat-num"><span data-count="6">0</span></div>
                <div className="stat-label">Core Services</div>
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
            <p data-animate data-delay="2">From a quick freshen-up to a full-house transformation, every job gets the same care and attention to detail.</p>
          </div>
          <div className="grid grid-3">
            <div className="card" data-animate data-delay="1">
              <div className="card-icon"><i data-lucide="paintbrush"></i></div>
              <h3>Interior Painting</h3>
              <p>Walls, ceilings, hallways, bedrooms. Clean prep, good coverage and a finish that actually lasts.</p>
            </div>
            <div className="card" data-animate data-delay="2">
              <div className="card-icon"><i data-lucide="home"></i></div>
              <h3>Exterior Painting</h3>
              <p>Weatherproof protection for render, brickwork, soffits, fascias and timber. Done properly so it holds.</p>
            </div>
            <div className="card" data-animate data-delay="3">
              <div className="card-icon"><i data-lucide="layers"></i></div>
              <h3>Wallpapering</h3>
              <p>Hung straight and matched perfectly. Lining paper, feature walls, full-room papering, we do it all.</p>
            </div>
            <div className="card" data-animate data-delay="1">
              <div className="card-icon"><i data-lucide="hammer"></i></div>
              <h3>Plastering &amp; Prep</h3>
              <p>Skim, fill, sand. We sort the surface before anything goes on it. A good finish starts with good prep.</p>
            </div>
            <div className="card" data-animate data-delay="2">
              <div className="card-icon"><i data-lucide="ruler"></i></div>
              <h3>Woodwork &amp; Trim</h3>
              <p>Skirting boards, doors, window frames and banisters painted to a clean, durable finish.</p>
            </div>
            <div className="card" data-animate data-delay="3">
              <div className="card-icon"><i data-lucide="palette"></i></div>
              <h3>Feature Walls</h3>
              <p>Bold colours, specialist finishes, murals. If you can picture it, we can help you make it happen.</p>
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
            <span className="eyebrow center" data-animate>Why Choose Bill&apos;s</span>
            <h2 data-animate data-delay="1">The difference is in the details</h2>
          </div>
          <div className="grid grid-4">
            <div className="feature" data-animate data-delay="1">
              <div className="feature-icon"><i data-lucide="award"></i></div>
              <h3>Quality Finish</h3>
              <p>Every job, big or small, gets the same careful prep and clean result.</p>
            </div>
            <div className="feature" data-animate data-delay="2">
              <div className="feature-icon"><i data-lucide="handshake"></i></div>
              <h3>Friendly &amp; Reliable</h3>
              <p>We turn up when we say we will and keep you in the loop throughout.</p>
            </div>
            <div className="feature" data-animate data-delay="3">
              <div className="feature-icon"><i data-lucide="map-pin"></i></div>
              <h3>Local to You</h3>
              <p>Based in East London. We know the area and we&apos;re not far away.</p>
            </div>
            <div className="feature" data-animate data-delay="4">
              <div className="feature-icon"><i data-lucide="shield-check"></i></div>
              <h3>Honest Pricing</h3>
              <p>Clear quotes with no hidden extras. What we say is what you pay.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ CTA ═══════ */}
      <section className="cta section">
        <div className="container">
          <h2 data-animate>Ready to freshen things up?</h2>
          <p data-animate data-delay="1">Get in touch today for a free, no-obligation quote.</p>
          <div className="cta-actions" data-animate data-delay="2">
            <a href="tel:07460413349" className="btn btn-ghost"><i data-lucide="phone"></i> 07460 413349</a>
            <Link href="/contact" className="btn btn-brass">Request a Quote <i data-lucide="arrow-right"></i></Link>
          </div>
        </div>
      </section>
    </>
  );
}
