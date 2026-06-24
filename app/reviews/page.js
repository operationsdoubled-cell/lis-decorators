import Link from 'next/link';

export const metadata = {
  title: 'Reviews | Splash of Colour',
  description: 'See what customers say about Splash of Colour — 5-star painting and decorating in Plymouth and Devon.',
};

const reviews = [
  {
    initial: 'J',
    name: 'John C',
    meta: 'FreeIndex Review',
    text: 'Brilliant job done on the interior of our house. Really tidy, professional and the finish is spot on. Would highly recommend to anyone looking for a good decorator in Plymouth.',
  },
  {
    initial: 'W',
    name: '38 Waycott Walk',
    meta: 'FreeIndex Review',
    text: 'Very pleased with the work done at our property. The preparation was thorough and the finish is excellent. Turned up when he said he would and cleaned up every day. Great service.',
  },
  {
    initial: 'S',
    name: 'Stephen Tomlinson',
    meta: 'FreeIndex Review',
    text: 'Used Splash of Colour for exterior painting — fascias, soffits and windows. Really good work, took his time to do it properly and the result looks great. Fair price too.',
  },
  {
    initial: 'N',
    name: 'Nicola Sawbridge',
    meta: 'FreeIndex Review',
    text: 'Hired for wallpapering in the lounge and bedroom. Really careful work — pattern perfectly matched throughout, no bubbles, clean edges. Very happy with how it turned out.',
  },
  {
    initial: 'P',
    name: 'Pete M',
    meta: 'FreeIndex Review',
    text: "Good communication, arrived on time every day and did a thorough job. The rooms look fantastic — much better than previous decorators we've used. Will be using again for the rest of the house.",
  },
];

export default function ReviewsPage() {
  return (
    <>
      {/* 1. PAGE HERO */}
      <section className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?auto=format&fit=crop&w=1800&q=80')" }}></div>
        <div className="container">
          <span className="eyebrow center" data-animate>Testimonials</span>
          <h1 data-animate data-delay="1">What our customers say</h1>
          <p data-animate data-delay="2">100% 5-star reviews from customers across Plymouth and Devon.</p>
        </div>
      </section>

      {/* 2. REVIEWS GRID */}
      <section className="section bg-cream-deep">
        <div className="container">
          <div className="grid grid-3">
            {reviews.map((r, i) => (
              <div className="review-card" key={i} data-animate data-delay={String((i % 3) + 1)}>
                <div className="quote-mark">&ldquo;</div>
                <div className="review-stars">★★★★★</div>
                <p className="review-text">{r.text}</p>
                <div className="review-author">
                  <span className="review-avatar">{r.initial}</span>
                  <span className="meta"><strong>{r.name}</strong><span>{r.meta}</span></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CTA */}
      <section className="cta section">
        <div className="container">
          <h2 data-animate>Join our happy customers</h2>
          <p data-animate data-delay="1">Free, no-obligation quotes — get in touch today.</p>
          <div className="cta-actions" data-animate data-delay="2">
            <a href="tel:07950582891" className="btn btn-brass"><i data-lucide="phone"></i> 07950 582891</a>
            <Link href="/contact" className="btn btn-ghost">Get in Touch <i data-lucide="arrow-right"></i></Link>
          </div>
        </div>
      </section>
    </>
  );
}
