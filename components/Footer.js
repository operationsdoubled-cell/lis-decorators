import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <div className="footer-brand">
              <span className="nav-logo-mark"><i data-lucide="paint-roller"></i></span>
              <strong>L.I.S. Decorators</strong>
            </div>
            <p>Professional painting and decorating across Devon and Cornwall. Reliable, high quality, great value. Transforming spaces. Enhancing homes.</p>
            <div className="footer-social">
              <a href="#" target="_blank" rel="noopener" aria-label="Facebook"><i data-lucide="facebook"></i></a>
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
              <li>Mon – Fri: 8am – 7pm</li>
              <li>Saturday: 8am – 5pm</li>
              <li>Sunday: 9am – 5pm</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Get in Touch</h4>
            <ul className="footer-contact">
              <li><i data-lucide="phone"></i> <a href="tel:07548625358">07548 625358</a></li>
              <li><i data-lucide="mail"></i> <a href="mailto:LISdecorators@outlook.com">LISdecorators@outlook.com</a></li>
              <li><i data-lucide="map-pin"></i> Dobwalls, Liskeard, Cornwall PL14 6JP</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 L.I.S. Decorators Devon &amp; Cornwall &middot; Dobwalls, Liskeard PL14 6JP</p>
        </div>
      </div>
    </footer>
  );
}
