import Link from 'next/link';

export const metadata = {
  title: 'Services | L.I.S. Decorators Devon & Cornwall',
  description: 'Interior and exterior painting, wallpaper hanging, pressure washing and roof & gutter cleaning across Devon and Cornwall. Call 07548 625358 for a free quote.',
};

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?auto=format&fit=crop&w=1800&q=80')" }}></div>
        <div className="container">
          <span className="eyebrow center" data-animate>Our Services</span>
          <h1 data-animate data-delay="1">Everything your property needs</h1>
          <p data-animate data-delay="2">Interior, exterior, maintenance — all done properly from start to finish across Devon and Cornwall.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">

          <div className="service-row" data-animate>
            <div className="num">01</div>
            <div>
              <h3>Internal &amp; External Painting &amp; Decorating</h3>
              <p>Whether it&apos;s a single room or a full new build, we cover all interior and exterior decorating work to a high standard. Inside, that means ceilings, walls, woodwork, skirting boards and doors — all properly prepared and painted with quality materials. Outside, we paint fascias, soffits, render, masonry, windows and doors using exterior-grade products that protect and look great. Every surface is cleaned, sanded and primed before we start, so the finish lasts and looks exactly as it should.</p>
            </div>
            <div className="chev"><i data-lucide="paint-roller"></i></div>
          </div>

          <div className="service-row" data-animate>
            <div className="num">02</div>
            <div>
              <h3>Wallpaper Hanging — Flawless Finishes</h3>
              <p>Wallpapering done well is a real skill — getting patterns to align perfectly, managing awkward corners, hanging on fresh plaster or imperfect surfaces. We&apos;ve done it all, from simple lining paper to bold statement wallpapers and full-room feature walls. We measure carefully, hang precisely and trim cleanly every time. If you&apos;re not sure whether a surface is ready for paper, we&apos;ll tell you honestly before we start and sort any preparation needed.</p>
            </div>
            <div className="chev"><i data-lucide="layers"></i></div>
          </div>

          <div className="service-row" data-animate>
            <div className="num">03</div>
            <div>
              <h3>Pressure Washing — Clean &amp; Revitalise</h3>
              <p>Over time, driveways, patios, paths, decking and rendered walls build up algae, moss, dirt and staining that makes a property look tired. Our pressure washing service cleans and revitalises these surfaces quickly and effectively, restoring them to how they should look. We can treat driveways, block paving, concrete, natural stone, timber and render — leaving your property looking fresh and well maintained without the need for expensive resurfacing.</p>
            </div>
            <div className="chev"><i data-lucide="droplets"></i></div>
          </div>

          <div className="service-row" data-animate>
            <div className="num">04</div>
            <div>
              <h3>Roof &amp; Gutter Cleaning — Protect &amp; Maintain</h3>
              <p>Blocked gutters and moss-covered roofs are one of the most common causes of damp, leaks and long-term structural damage. We clear gutters of leaves and debris, remove moss and lichen from roof tiles, and clean out downpipes to make sure rainwater flows away properly. Regular maintenance like this protects the structure of your property and prevents expensive repairs down the line. We work safely at height and leave your property tidy afterwards.</p>
            </div>
            <div className="chev"><i data-lucide="home"></i></div>
          </div>

        </div>
      </section>

      <section className="cta section">
        <div className="container">
          <h2 data-animate>Not sure what you need?</h2>
          <p data-animate data-delay="1">Give us a call and we&apos;ll talk it through — free, no-obligation advice and quotes.</p>
          <div className="cta-actions" data-animate data-delay="2">
            <a href="tel:07548625358" className="btn btn-brass"><i data-lucide="phone"></i> 07548 625358</a>
            <Link href="/contact" className="btn btn-ghost">Send a Message <i data-lucide="arrow-right"></i></Link>
          </div>
        </div>
      </section>
    </>
  );
}
