import Link from 'next/link';

export const metadata = {
  title: 'Services | Splash of Colour',
  description: 'Interior and exterior painting, wallpapering, commercial decorating and more in Plymouth and Devon. Call 07950 582891 for a free quote.',
};

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?auto=format&fit=crop&w=1800&q=80')" }}></div>
        <div className="container">
          <span className="eyebrow center" data-animate>Our Services</span>
          <h1 data-animate data-delay="1">Everything your property needs</h1>
          <p data-animate data-delay="2">Interior, exterior, residential, commercial — all done properly from start to finish.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">

          <div className="service-row" data-animate>
            <div className="num">01</div>
            <div>
              <h3>Interior Painting &amp; Decorating</h3>
              <p>From a single room to a whole house, we handle all interior decorating work to a high standard. That means ceilings, walls, woodwork, skirting boards and doors — all properly prepared and painted with quality materials for a finish that looks great and lasts. We work tidily, protect furniture and flooring, and clean up thoroughly at the end of every day.</p>
            </div>
            <div className="chev"><i data-lucide="paint-roller"></i></div>
          </div>

          <div className="service-row" data-animate>
            <div className="num">02</div>
            <div>
              <h3>Exterior Painting &amp; Decorating</h3>
              <p>The outside of your property takes the hardest punishment from the weather. We paint and treat fascias, soffits, render, masonry, timber windows and doors — using exterior-grade materials that protect as well as look good. All surfaces are properly cleaned, sanded and primed before any paint goes on, so the finish lasts far longer than a quick coat over the top.</p>
            </div>
            <div className="chev"><i data-lucide="home"></i></div>
          </div>

          <div className="service-row" data-animate>
            <div className="num">03</div>
            <div>
              <h3>Wallpapering</h3>
              <p>Wallpapering done well is a skill — getting patterns to match, dealing with awkward corners, hanging on less-than-perfect surfaces. We&apos;ve done it all, from simple lining paper to bold patterned wallpaper and feature walls. We measure carefully, hang precisely and trim neatly. If you&apos;re not sure whether a surface is suitable, we&apos;ll advise you honestly before we start.</p>
            </div>
            <div className="chev"><i data-lucide="layers"></i></div>
          </div>

          <div className="service-row" data-animate>
            <div className="num">04</div>
            <div>
              <h3>Repairs &amp; Surface Preparation</h3>
              <p>Good preparation is the difference between a paint job that lasts and one that doesn&apos;t. We fill cracks and holes, sand back flaking paint, seal stains, apply primer and make surfaces ready before any top coat goes on. We can also patch and repair plaster, sort minor damp issues and address any other surface problems that need sorting before decorating begins.</p>
            </div>
            <div className="chev"><i data-lucide="wrench"></i></div>
          </div>

          <div className="service-row" data-animate>
            <div className="num">05</div>
            <div>
              <h3>Commercial Decorating</h3>
              <p>We&apos;ve worked in schools, hospitals, GP surgeries and offices — environments where the work has to be done to a high standard and with minimal disruption. We plan around your schedule, work out of hours where needed, and leave the space ready for normal use as quickly as possible. All commercial work is fully insured and completed to professional standards.</p>
            </div>
            <div className="chev"><i data-lucide="building-2"></i></div>
          </div>

          <div className="service-row" data-animate>
            <div className="num">06</div>
            <div>
              <h3>Colour Consultation &amp; Advice</h3>
              <p>Choosing colours and finishes can be overwhelming. We&apos;re happy to offer honest, practical advice on what will work in your space — whether you want something bold, something neutral, or just want the woodwork to match the walls. We can help you think through different options before committing to anything, and we&apos;ll always tell you what a colour or finish will actually look like in your specific room and light.</p>
            </div>
            <div className="chev"><i data-lucide="palette"></i></div>
          </div>

        </div>
      </section>

      <section className="cta section">
        <div className="container">
          <h2 data-animate>Not sure what you need?</h2>
          <p data-animate data-delay="1">Give us a call and we&apos;ll talk it through — free, no-obligation advice and quotes.</p>
          <div className="cta-actions" data-animate data-delay="2">
            <a href="tel:07950582891" className="btn btn-brass"><i data-lucide="phone"></i> 07950 582891</a>
            <Link href="/contact" className="btn btn-ghost">Send a Message <i data-lucide="arrow-right"></i></Link>
          </div>
        </div>
      </section>
    </>
  );
}
