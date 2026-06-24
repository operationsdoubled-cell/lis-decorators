import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <div className="footer-brand">
              <span className="nav-logo-mark"><i data-lucide="paint-roller"></i></span>
              <strong>Splash of Colour</strong>
            </div>
            <p>Professional painting and decorating in Plymouth and across Devon. Fully qualified, fully insured.</p>
            <div className="footer-social">
              {/* FACEBOOK: replace # with your Facebook page URL */}
              <a href="#" target="_blank" rel="noopener" aria-label="Facebook"><i data-lucide="facebook"></i></a>
              {/* INSTAGRAM: replace # with your Instagram profile URL */}
              <a href="#" target="_blank" rel="noopener" aria-label="Instagram"><i data-lucide="instagram"></i></a>
            </div>
          </div>
          <div className="footer-col">
            <h4>Pages</h4>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/gallery">Gallery</Link></li>
              <li><Link href="/reviews">Reviews</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Opening Hours</h4>
            <ul>
              <li>Mon – Sat: 8am – 8pm</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Get in Touch</h4>
            <ul className="footer-contact">
              <li><i data-lucide="phone"></i> <a href="tel:07950582891">07950 582891</a></li>
              {/* EMAIL: add your email address here */}
              <li><i data-lucide="mail"></i> <a href="mailto:info@splashofcolour.co.uk">info@splashofcolour.co.uk</a></li>
              <li><i data-lucide="map-pin"></i> Plymouth, Devon, PL3 6RZ</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Splash of Colour &middot; Plymouth, Devon PL3 6RZ</p>
        </div>
      </div>
    </footer>
  );
}
