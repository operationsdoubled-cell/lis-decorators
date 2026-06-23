import './globals.css';
import Script from 'next/script';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Effects from '@/components/Effects';

export const metadata = {
  title: "Bill's Painting & Decorating | East London",
  description:
    "Bill's Painting & Decorating. Friendly, reliable interior and exterior decorating across East London. Free no-obligation quotes. Call 07460 413349.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow:wght@500;600;700;800&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        <div className="nav-backdrop"></div>
        <main>{children}</main>
        <Footer />

        {/* Line icons (loaded from CDN, rendered by Effects) */}
        <Script src="https://unpkg.com/lucide@latest" strategy="afterInteractive" />
        <Effects />
      </body>
    </html>
  );
}
