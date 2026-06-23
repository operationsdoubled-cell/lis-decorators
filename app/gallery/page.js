import Link from 'next/link';

export const metadata = {
  title: "Gallery | Bill's Painting & Decorating",
  description: "Gallery of decorating work by Bill's Painting & Decorating — interior painting, feature walls, wallpapering, woodwork and exterior painting across East London.",
};

/* Portrait shots marked tall: true — they span 2 rows in the 4-column grid.
   Order is tuned so the two tall items fill cols 1 & 2 on row 1-2,
   with the landscape shots filling cols 3 & 4. */
const photos = [
  {
    src: '/images/IMG_1761.jpg',
    alt: 'Warm terracotta hallway and staircase with white painted bannisters',
    label: 'Hallway & Staircase',
    detail: 'Terracotta feature walls, white woodwork & trim',
    tall: true,
  },
  {
    src: '/images/IMG_1759.jpg',
    alt: 'Blush pink bedroom with bay window panelling and barn door',
    label: 'Bedroom Repaint',
    detail: 'Blush pink walls, bay window panelling & barn door',
    tall: true,
  },
  {
    src: '/images/IMG_1771.jpg',
    alt: 'Long cream hallway with white panelled doors and pendant lights',
    label: 'Hallway Refresh',
    detail: 'Cream walls, white doors & skirting throughout',
    tall: false,
  },
  {
    src: '/images/IMG_1774.jpg',
    alt: 'Large open-plan living room freshly painted with paint pots to one side',
    label: 'Open-Plan Living Room',
    detail: 'Full interior repaint, walls, ceiling and skirting',
    tall: false,
  },
  {
    src: '/images/IMG_1772.jpg',
    alt: 'Room with arched crittall window, blush walls and built-in shelving mid-work',
    label: 'Arched Window Studio',
    detail: 'Skim plaster, repaint & woodwork',
    tall: false,
  },
  {
    src: '/images/IMG_1773.jpg',
    alt: 'Studio with mezzanine level, arched window and painted white built-in storage',
    label: 'Studio Conversion',
    detail: 'Walls, ceiling, woodwork & fitted units',
    tall: false,
  },
  {
    src: '/images/IMG_1760.jpg',
    alt: 'Bedroom showing white painted fitted wardrobes and open door to hallway',
    label: 'Bedroom & Wardrobes',
    detail: 'Painted fitted wardrobes, walls & trim',
    tall: false,
  },
  {
    src: '/images/IMG_1775.jpg',
    alt: 'Large open-plan kitchen and living space with exposed brick feature wall',
    label: 'Open-Plan Kitchen & Living',
    detail: 'Walls, ceilings, columns & skirting boards',
    tall: false,
  },
];

export default function GalleryPage() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: "url('/images/IMG_1761.jpg')", backgroundPosition: 'center 30%' }}></div>
        <div className="container">
          <span className="eyebrow center" data-animate>Our Work</span>
          <h1 data-animate data-delay="1">Rooms we&apos;re proud of</h1>
          <p data-animate data-delay="2">Real jobs, real homes. Every photo is work we&apos;ve done across East London. Click any photo to take a closer look.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="gallery-grid">
            {photos.map((p, i) => (
              <div
                key={i}
                className={p.tall ? 'gallery-item tall' : 'gallery-item'}
                data-full={p.src}
                data-animate="scale"
                data-delay={String((i % 4) + 1)}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.src} alt={p.alt} loading={i < 4 ? 'eager' : 'lazy'} />
                <div className="overlay">
                  <span>
                    <i data-lucide="maximize-2"></i>
                    <span>
                      <strong style={{ display: 'block', fontSize: '0.9rem' }}>{p.label}</strong>
                      <span style={{ fontWeight: 400, opacity: 0.85, fontSize: '0.78rem' }}>{p.detail}</span>
                    </span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram follow strip */}
      <section className="section bg-cream-deep" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="eyebrow center" data-animate>Follow Along</span>
          <h2 data-animate data-delay="1">See more on Instagram</h2>
          <p data-animate data-delay="2" style={{ maxWidth: '520px', margin: '0 auto 28px' }}>
            We post regular updates of jobs in progress and finished rooms over on Instagram. Give us a follow to see the latest.
          </p>
          <a
            href="https://www.instagram.com/bills.decor?igsh=MTcwNno4a2RreXduOQ=="
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-dark"
            data-animate
            data-delay="3"
          >
            <i data-lucide="instagram"></i> @bills.decor
          </a>
        </div>
      </section>

      <section className="cta section">
        <div className="container">
          <h2 data-animate>Like what you see?</h2>
          <p data-animate data-delay="1">Get in touch to talk about what we can do for your home.</p>
          <div className="cta-actions" data-animate data-delay="2">
            <a href="tel:07460413349" className="btn btn-ghost"><i data-lucide="phone"></i> 07460 413349</a>
            <Link href="/contact" className="btn btn-brass">Request a Quote <i data-lucide="arrow-right"></i></Link>
          </div>
        </div>
      </section>
    </>
  );
}
