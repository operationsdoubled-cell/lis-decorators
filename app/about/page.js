import Link from 'next/link';

export const metadata = {
  title: "About | Bill's Painting & Decorating",
  description: "Meet Bill — East London painter and decorator with 15+ years of experience. Honest, reliable, and proud of every job.",
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1800&q=80')" }}></div>
        <div className="container">
          <span className="eyebrow center" data-animate>About Bill</span>
          <h1 data-animate data-delay="1">A little about who we are</h1>
          <p data-animate data-delay="2">The story, the values and the person behind every room we decorate.</p>
        </div>
      </section>

      {/* ═══════ MEET BILL ═══════ */}
      <section className="section">
        <div className="container">
          <div className="split">
            <div className="split-media placeholder" data-animate="left">
              {/* PHOTO: replace this block with a real photo of Bill —
                  put your image in /public/images and use:
                  <div className="split-media" data-animate="left"><img src="/images/bill.jpg" alt="Bill, painter and decorator" /></div> */}
              <i data-lucide="paintbrush"></i>
              <div className="badge"><strong>15+ yrs</strong><span>decorating East London homes</span></div>
            </div>
            <div data-animate="right">
              <span className="eyebrow">Meet Bill</span>
              <h2 style={{ marginBottom: '24px' }}>Hi, I&apos;m Bill</h2>
              <div className="tiles">
                <div className="text-tile" data-animate data-delay="1">
                  <span className="tile-tag"><i data-lucide="paintbrush"></i> How it started</span>
                  <p>I&apos;ve been picking up a paintbrush since I was about sixteen, starting out helping my uncle on jobs around East London. Back then I just liked the satisfaction of seeing a room come together. Still do. About fifteen years ago I went out on my own, and I haven&apos;t looked back.</p>
                </div>
                <div className="text-tile" data-animate data-delay="2">
                  <span className="tile-tag"><i data-lucide="users"></i> How we work</span>
                  <p>These days it&apos;s me and a small team I trust completely. We do interior and exterior painting, wallpapering, plastering, woodwork and feature walls. The full job. No outsourcing, no strangers turning up on your doorstep. You&apos;ll know who&apos;s coming, and they&apos;ll know what they&apos;re doing.</p>
                </div>
                <div className="text-tile feature-tile" data-animate data-delay="3">
                  <span className="tile-tag"><i data-lucide="heart-handshake"></i> Our promise</span>
                  <p>What we&apos;ll never do is rush the prep, paint over problems, or leave a site anything less than tidy. A good finish starts with good preparation, and we take that seriously. The job isn&apos;t done until you&apos;re happy.</p>
                  <p style={{ marginTop: '12px' }}><strong>— Bill</strong></p>
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
              <div className="card-icon"><i data-lucide="award"></i></div>
              <h3>Pride in Our Work</h3>
              <p>Every room gets our full attention, whether it&apos;s a quick hallway refresh or a full-house repaint.</p>
            </div>
            <div className="value-card" data-animate data-delay="2">
              <div className="card-icon"><i data-lucide="handshake"></i></div>
              <h3>Honest &amp; Straightforward</h3>
              <p>Clear quotes, no surprise charges, and honest advice about what your walls actually need.</p>
            </div>
            <div className="value-card" data-animate data-delay="3">
              <div className="card-icon"><i data-lucide="clock"></i></div>
              <h3>Reliable &amp; Punctual</h3>
              <p>We respect your time. If anything changes we&apos;ll always let you know well in advance.</p>
            </div>
            <div className="value-card" data-animate data-delay="4">
              <div className="card-icon"><i data-lucide="shield-check"></i></div>
              <h3>Clean &amp; Tidy</h3>
              <p>Dust sheets down, furniture protected, mess cleared. We leave the place as we found it. Just with better walls.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ COVERAGE ═══════ */}
      <section className="section">
        <div className="container text-center" style={{ maxWidth: '680px' }}>
          <span className="eyebrow center" data-animate>Where We Work</span>
          <h2 data-animate data-delay="1">East London &amp; surrounding areas</h2>
          <p className="lead" data-animate data-delay="2">We&apos;re based in <strong>East London</strong> and cover the surrounding boroughs. Not sure if we reach you? Give us a quick call and we&apos;ll let you know straight away.</p>
          <div data-animate data-delay="3" style={{ marginTop: '24px' }}>
            <Link href="/contact" className="btn btn-dark">Get in Touch <i data-lucide="arrow-right"></i></Link>
          </div>
        </div>
      </section>

      <section className="cta section">
        <div className="container">
          <h2 data-animate>Let&apos;s talk about your decorating</h2>
          <p data-animate data-delay="1">Get in touch for a free, no-obligation quote.</p>
          <div className="cta-actions" data-animate data-delay="2">
            <a href="tel:07460413349" className="btn btn-ghost"><i data-lucide="phone"></i> 07460 413349</a>
            <Link href="/contact" className="btn btn-brass">Contact Us <i data-lucide="arrow-right"></i></Link>
          </div>
        </div>
      </section>
    </>
  );
}
