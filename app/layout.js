import './globals.css';
import Script from 'next/script';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Effects from '@/components/Effects';

export const metadata = {
  title: 'Splash of Colour | Painter & Decorator in Plymouth, Devon',
  description:
    'Professional painting and decorating in Plymouth and across Devon. Interior, exterior, wallpapering and commercial work. Fully qualified and insured. Call 07950 582891 for a free quote.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;1,9..144,400;1,9..144,600&family=Inter:wght@400;500;600;700&display=swap"
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
