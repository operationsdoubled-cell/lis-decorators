import Link from 'next/link';

export const metadata = {
  title: "Services | Bill's Painting & Decorating",
  description: "Decorating services in East London — interior painting, exterior painting, wallpapering, plastering, woodwork and feature walls.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?auto=format&fit=crop&w=1800&q=80')" }}></div>
        <div className="container">
          <span className="eyebrow center" data-animate>Our Services</span>
          <h1 data-animate data-delay="1">Everything your home needs</h1>
          <p data-animate data-delay="2">From a quick freshen-up to a full-house transformation, here&apos;s how we can help.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">

          <div className="service-row" data-animate>
            <div className="num">01</div>
            <div>
              <h3>Interior Painting</h3>
              <p>A fresh coat changes the whole feel of a room. We prep the surface properly first: filling, sanding, priming. Then we apply the paint carefully so the finish is clean and even. Walls, ceilings, hallways, bedrooms, living rooms, we cover the lot. Want eggshell on the woodwork and flat on the walls? No problem. We&apos;ll help you choose finishes if you&apos;re not sure.</p>
            </div>
            <div className="chev"><i data-lucide="paintbrush"></i></div>
          </div>

          <div className="service-row" data-animate>
            <div className="num">02</div>
            <div>
              <h3>Exterior Painting</h3>
              <p>The outside of your home takes a battering from damp, frost and UV. We use the right exterior paints and primers for each surface, whether that&apos;s render, pebbledash, timber cladding, soffits or fascias. Prep is everything here. We&apos;ll clean down, fill cracks and spot-treat any flaky areas before a drop of top-coat goes on. Done properly, it should hold for years.</p>
            </div>
            <div className="chev"><i data-lucide="home"></i></div>
          </div>

          <div className="service-row" data-animate>
            <div className="num">03</div>
            <div>
              <h3>Wallpapering</h3>
              <p>Good papering takes patience. Getting the drops lined up, the pattern matched, the edges neat. We&apos;ve done it hundreds of times, from full-room lining paper to intricate feature walls. We&apos;ll hang it straight, trim it cleanly and make sure there are no bubbles or lifted seams. If you&apos;ve already chosen your paper we&apos;ll hang it; if you&apos;re still deciding, we&apos;re happy to advise.</p>
            </div>
            <div className="chev"><i data-lucide="layers"></i></div>
          </div>

          <div className="service-row" data-animate>
            <div className="num">04</div>
            <div>
              <h3>Plastering &amp; Surface Prep</h3>
              <p>A good finish starts with a good surface. We skim over rough or damaged plaster, fill cracks and holes, sand back and seal before any paint or paper goes on. We work closely with a trusted plasterer for bigger jobs. If your walls have been knocked about by building work, or just need some love before redecorating, we&apos;ll get them ready.</p>
            </div>
            <div className="chev"><i data-lucide="hammer"></i></div>
          </div>

          <div className="service-row" data-animate>
            <div className="num">05</div>
            <div>
              <h3>Woodwork &amp; Trim</h3>
              <p>Skirting boards, architraves, window frames, doors and banisters. Painted woodwork really lifts a room. We strip back where needed, prime properly and apply a hard-wearing finish that won&apos;t chip or yellow. Whether you want a classic white gloss or a contemporary eggshell in a bold colour, we&apos;ll make the edges crisp and the finish smooth.</p>
            </div>
            <div className="chev"><i data-lucide="ruler"></i></div>
          </div>

          <div className="service-row" data-animate>
            <div className="num">06</div>
            <div>
              <h3>Feature Walls &amp; Specialist Finishes</h3>
              <p>Want something a bit different? A deep colour on one wall, a textured finish, colour blocking or a carefully painted pattern? We&apos;re up for it. Feature walls are one of the quickest ways to transform a room, and we&apos;ll help you work out what&apos;ll look great with your existing furniture and lighting before we pick up a brush.</p>
            </div>
            <div className="chev"><i data-lucide="palette"></i></div>
          </div>

        </div>
      </section>

      <section className="cta section">
        <div className="container">
          <h2 data-animate>Not sure what you need?</h2>
          <p data-animate data-delay="1">Give us a call or drop us a message and we&apos;ll pop round, have a look and recommend the best approach.</p>
          <div className="cta-actions" data-animate data-delay="2">
            <a href="tel:07460413349" className="btn btn-ghost"><i data-lucide="phone"></i> 07460 413349</a>
            <Link href="/contact" className="btn btn-brass">Get a Free Quote <i data-lucide="arrow-right"></i></Link>
          </div>
        </div>
      </section>
    </>
  );
}
