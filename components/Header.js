'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/reviews', label: 'Reviews' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="container">
        <nav className="nav-inner">
          <Link href="/" className="nav-logo">
            <span className="nav-logo-mark"><i data-lucide="paintbrush"></i></span>
            <span className="nav-logo-text">
              <strong>Bill&apos;s Painting</strong>
              <span>Decorating · East London</span>
            </span>
          </Link>

          <button className="nav-toggle" id="navToggle" aria-label="Toggle menu" aria-expanded="false">
            <span></span><span></span><span></span>
          </button>

          <ul className="nav-links" id="navLinks">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className={pathname === l.href ? 'active' : undefined}>
                  {l.label}
                </Link>
              </li>
            ))}
            <li><Link href="/contact#quote" className="btn-book">Get a Quote</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
