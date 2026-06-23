import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <div className="footer-brand">
              <span className="nav-logo-mark"><i data-lucide="paintbrush"></i></span>
              <strong>Bill&apos;s Painting</strong>
            </div>
            <p>Friendly local painting and decorating across East London. Honest prices, tidy work, every time.</p>
            <div className="footer-social">
              <a href="https://www.instagram.com/bills.decor?igsh=MTcwNno4a2RreXduOQ==" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i data-lucide="instagram"></i></a>
              {/* FACEBOOK: replace # with your Facebook page URL */}
              <a href="#" target="_blank" rel="noopener" aria-label="Facebook"><i data-lucide="facebook"></i></a>
            </div>
          </div>
          <div className="footer-col">
            <h4>Pages</h4>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/about">About Bill</Link></li>
              <li><Link href="/gallery">Gallery</Link></li>
              <li><Link href="/reviews">Reviews</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Working Hours</h4>
            {/* OPENING HOURS: update to your real hours */}
            <ul>
              <li>Mon – Fri: 7:30am – 5:30pm</li>
              <li>Saturday: 8am – 1pm</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Get in Touch</h4>
            <ul className="footer-contact">
              <li><i data-lucide="phone"></i> <a href="tel:07460413349">07460 413349</a></li>
              {/* EMAIL: replace with your real email address */}
              <li><i data-lucide="mail"></i> <a href="mailto:hello@billspainting.co.uk">hello@billspainting.co.uk</a></li>
              {/* ADDRESS: add your postcode when ready */}
              <li><i data-lucide="map-pin"></i> East London</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          {/* ADDRESS: update with your full address/postcode */}
          <p>&copy; 2026 Bill&apos;s Painting &amp; Decorating · East London</p>
        </div>
      </div>
    </footer>
  );
}
