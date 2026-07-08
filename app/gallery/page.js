import Link from 'next/link';

export const metadata = {
  title: 'Gallery | L.I.S. Decorators Devon & Cornwall',
  description: 'Gallery of recent painting and decorating work by L.I.S. Decorators across Devon and Cornwall.',
};

const photos = [
  {
    full: '/images/gallery-1.jpg',
    src: '/images/gallery-1.jpg',
    alt: 'Interior painting — open plan living space with skylights',
    label: 'Interior Painting — Open Plan Living Space',
    tall: true,
  },
  {
    full: '/images/gallery-2.jpg',
    src: '/images/gallery-2.jpg',
    alt: 'Interior decorating — luxury new build with glass balustrades',
    label: 'Luxury New Build — Interior Decorating',
    tall: true,
  },
  {
    full: '/images/gallery-3.jpg',
    src: '/images/gallery-3.jpg',
    alt: 'Wallpaper hanging — bold feature walls throughout',
    label: 'Wallpaper Hanging — Feature Walls',
    tall: false,
  },
  {
    full: '/images/gallery-4.jpg',
    src: '/images/gallery-4.jpg',
    alt: 'Interior decorating — open plan kitchen and living area',
    label: 'Kitchen & Open Plan Living — Interior Decorating',
    tall: true,
  },
  {
    full: '/images/gallery-5.jpg',
    src: '/images/gallery-5.jpg',
    alt: 'Painted kitchen cabinetry — dark navy with brass fittings',
    label: 'Painted Kitchen Cabinetry',
    tall: false,
  },
  {
    full: '/images/gallery-6.jpg',
    src: '/images/gallery-6.jpg',
    alt: 'Interior painting — open plan living space with countryside views',
    label: 'Interior Painting — Living Space, Cornwall',
    tall: false,
  },
];

export default function GalleryPage() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: "url('/images/gallery-2.jpg')" }}></div>
        <div className="container">
          <span className="eyebrow center" data-animate>Our Recent Work</span>
          <h1 data-animate data-delay="1">Work we&apos;re proud of</h1>
          <p data-animate data-delay="2">A selection of recent projects across Devon and Cornwall. Click any photo to take a closer look.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="gallery-grid">
            {photos.map((p, i) => (
              <div
                key={i}
                className={p.tall ? 'gallery-item tall' : 'gallery-item'}
                data-full={p.full}
                data-animate="scale"
                data-delay={String((i % 3) + 1)}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.src} alt={p.alt} loading="lazy" />
                <div className="overlay"><span><i data-lucide="maximize-2"></i> {p.label}</span></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta section">
        <div className="container">
          <h2 data-animate>Like what you see?</h2>
          <p data-animate data-delay="1">Get in touch to discuss what we can do for your property.</p>
          <div className="cta-actions" data-animate data-delay="2">
            <a href="tel:07548625358" className="btn btn-brass"><i data-lucide="phone"></i> 07548 625358</a>
            <Link href="/contact" className="btn btn-ghost">Send a Message <i data-lucide="arrow-right"></i></Link>
          </div>
        </div>
      </section>
    </>
  );
}
