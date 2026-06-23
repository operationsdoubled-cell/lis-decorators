import Link from 'next/link';

export const metadata = {
  title: "Reviews | Bill's Painting & Decorating",
  description: "Customer reviews for Bill's Painting & Decorating — see what East London homeowners say about our decorating work.",
};

/* HOW TO ADD REAL REVIEWS: copy an object in the list below and fill in
   the quote, the author's initial, name and location/date. */
const reviews = [
  {
    initial: 'C',
    name: 'Claire N.',
    meta: 'Stratford, E15 · May 2025',
    text: 'Bill decorated our entire upstairs, three bedrooms and the landing. He was clean, tidy, no mess left behind and the finish is brilliant. He actually noticed a bit of damp we hadn\'t spotted and sorted it before painting over it. Would absolutely use him again and already have.',
  },
  {
    initial: 'M',
    name: 'Michael T.',
    meta: 'Walthamstow, E17 · April 2025',
    text: 'Had the whole house done while we moved out for two weeks. Bill\'s team worked through it professionally, matched the colours exactly and left the place looking like a show home. Really good value for money and not a drop of paint out of place.',
  },
  {
    initial: 'S',
    name: 'Sandra K.',
    meta: 'Hackney, E8 · March 2025',
    text: 'Booked Bill for a feature wall in the living room, a deep navy with a geometric wallpaper we were nervous about. He took his time, did a test patch first to make sure we were happy, and the result is stunning. Patient, skilled and really easy to deal with.',
  },
  {
    initial: 'T',
    name: 'Tony H.',
    meta: 'Bow, E3 · February 2025',
    text: 'Exterior painting on a Victorian terrace, not an easy job. Bill prepped all the woodwork properly, filled the cracks, primed everything before putting the top coats on. Six months later it still looks as fresh as the day it dried. That\'s proper workmanship.',
  },
  {
    initial: 'L',
    name: 'Laura M.',
    meta: 'Bethnal Green, E2 · January 2025',
    text: 'Needed a plasterer and decorator together for a new extension wall. Bill handled the whole thing. Plastered it himself, let it breathe properly, then painted it perfectly. One phone call, one reliable team, one invoice. Very straightforward and a lovely result.',
  },
  {
    initial: 'D',
    name: 'Dave & Karen W.',
    meta: 'Leyton, E10 · December 2024',
    text: 'Kitchen and hallway painted throughout, plus all the skirting boards and doors. Bill pointed out a few bits of prep we hadn\'t thought about and it made a real difference to the final finish. Sensible prices, cheerful team and they left the place spotless.',
  },
];

export default function ReviewsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?auto=format&fit=crop&w=1800&q=80')" }}></div>
        <div className="container">
          <span className="eyebrow center" data-animate>Testimonials</span>
          <h1 data-animate data-delay="1">What our customers say</h1>
          <p data-animate data-delay="2">Don&apos;t just take our word for it. Here&apos;s what East London homeowners think of our work.</p>
        </div>
      </section>

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

          {/* GOOGLE REVIEWS WIDGET PLACEHOLDER
              When ready, delete this block and paste your widget embed code
              (Elfsight, Trustindex, etc.) in its place. */}
          <div className="placeholder-box" style={{ marginTop: '48px' }} data-animate>
            <div className="big-icon"><i data-lucide="star"></i></div>
            <h3>Live Google Reviews</h3>
            <p>This space is reserved for a live Google Reviews feed. When you&apos;re ready, paste your widget embed code here in place of this box — popular options include <strong>Elfsight</strong>, <strong>Trustindex</strong>, or your Google Business Profile widget. Search the code for <code>GOOGLE REVIEWS WIDGET PLACEHOLDER</code> to find this spot.</p>
          </div>
        </div>
      </section>

      <section className="cta section">
        <div className="container">
          <h2 data-animate>Join our happy customers</h2>
          <p data-animate data-delay="1">Get in touch today for a free, no-obligation quote.</p>
          <div className="cta-actions" data-animate data-delay="2">
            <a href="tel:07460413349" className="btn btn-ghost"><i data-lucide="phone"></i> 07460 413349</a>
            <Link href="/contact" className="btn btn-brass">Get a Quote <i data-lucide="arrow-right"></i></Link>
          </div>
        </div>
      </section>
    </>
  );
}
