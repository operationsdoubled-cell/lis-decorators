import Link from 'next/link';

export const metadata = {
  title: 'Gallery | L.I.S. Decorators Devon & Cornwall',
  description: 'Gallery of recent painting and decorating work by L.I.S. Decorators across Devon and Cornwall.',
};

const photos = [
  {
    full: '/images/LIS_01.jpg',
    src: '/images/LIS_01.jpg',
    alt: 'Staircase and landing — natural wood bannisters and panelling',
    label: 'Staircase & Landing Woodwork',
    tall: true,
  },
  {
    full: '/images/LIS_02.jpg',
    src: '/images/LIS_02.jpg',
    alt: 'Kitchen with cream shaker cabinets and wood flooring',
    label: 'Kitchen Cabinetry & Walls',
    tall: false,
  },
  {
    full: '/images/LIS_03.jpg',
    src: '/images/LIS_03.jpg',
    alt: 'Hallway with staircase and wood flooring throughout',
    label: 'Hallway & Staircase',
    tall: false,
  },
  {
    full: '/images/LIS_04.jpg',
    src: '/images/LIS_04.jpg',
    alt: 'Staircase with freshly painted white bannisters and newel posts',
    label: 'Painted Staircase & Bannisters',
    tall: true,
  },
  {
    full: '/images/LIS_05.jpg',
    src: '/images/LIS_05.jpg',
    alt: 'Full kitchen with cream shaker units, hob and window',
    label: 'Full Kitchen Repaint',
    tall: false,
  },
  {
    full: '/images/LIS_06.jpg',
    src: '/images/LIS_06.jpg',
    alt: 'Hallway after decorating — white painted staircase and woodwork',
    label: 'Hallway After — White Woodwork',
    tall: false,
  },
  {
    full: '/images/LIS_07.jpg',
    src: '/images/LIS_07.jpg',
    alt: 'Bedroom with pine door and frame, carpeted floor',
    label: 'Bedroom & Door Woodwork',
    tall: false,
  },
  {
    full: '/images/LIS_08.jpg',
    src: '/images/LIS_08.jpg',
    alt: 'Bathroom with wooden doors and tiled floor',
    label: 'Bathroom & Woodwork',
    tall: false,
  },
];

export default function GalleryPage() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: "url('/images/LIS_06.jpg')" }}></div>
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
                <img src={p.src} alt={p.alt} loading={i < 4 ? 'eager' : 'lazy'} />
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
