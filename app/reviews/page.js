import Link from 'next/link';

export const metadata = {
  title: 'Reviews | L.I.S. Decorators Devon & Cornwall',
  description: 'See what customers say about L.I.S. Decorators — 5-star painting and decorating across Devon and Cornwall.',
};

const reviews = [
  {
    initial: 'J',
    name: 'John Blundell',
    meta: 'Cornish Traders Review',
    text: 'Great service, sensible pricing, quality work — highly recommended. Ben was professional throughout and the finished result was exactly what we wanted.',
  },
  {
    initial: 'R',
    name: 'Richard Grant',
    meta: 'Cornish Traders Review',
    text: 'Incredibly high quality professional finish. The work was done quickly and with no fuss, for a very reasonable cost. Ben is a great guy — I would definitely use him again and recommend him to anyone.',
  },
];

export default function ReviewsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?auto=format&fit=crop&w=1800&q=80')" }}></div>
        <div className="container">
          <span className="eyebrow center" data-animate>Testimonials</span>
          <h1 data-animate data-delay="1">What our customers say</h1>
          <p data-animate data-delay="2">100% 5-star reviews from customers across Devon and Cornwall.</p>
        </div>
      </section>

      <section className="section bg-cream-deep">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow center" data-animate>Customer Reviews</span>
            <h2 data-animate data-delay="1">Trusted across Devon &amp; Cornwall</h2>
          </div>
          <div className="grid grid-3">
            {reviews.map((r, i) => (
              <div className="review-card" key={i} data-animate data-delay={String(i + 1)}>
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

      <section className="cta section">
        <div className="container">
          <h2 data-animate>Join our happy customers</h2>
          <p data-animate data-delay="1">Free, no-obligation quotes — get in touch today.</p>
          <div className="cta-actions" data-animate data-delay="2">
            <a href="tel:07548625358" className="btn btn-brass"><i data-lucide="phone"></i> 07548 625358</a>
            <Link href="/contact" className="btn btn-ghost">Get in Touch <i data-lucide="arrow-right"></i></Link>
          </div>
        </div>
      </section>
    </>
  );
}
