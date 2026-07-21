'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const btnRef = useRef(null);

  useEffect(() => {
    if (!localStorage.getItem('lis_cookie_consent')) {
      setVisible(true);
    }
  }, []);

  useEffect(() => {
    if (!visible) return;
    btnRef.current?.focus();
    const onKey = (e) => { if (e.key === 'Escape') dismiss(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [visible]);

  function dismiss() {
    localStorage.setItem('lis_cookie_consent', 'true');
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="cookie-banner" role="dialog" aria-label="Cookie notice" aria-modal="false">
      <p className="cookie-text">
        We use only essential cookies to keep this site running. If you contact us via our form,
        your details are processed securely by Formspree. We don&apos;t use tracking, analytics,
        or advertising cookies.{' '}
        <Link href="/privacy-policy">Privacy Policy</Link>
      </p>
      <button ref={btnRef} className="btn btn-brass cookie-dismiss" onClick={dismiss}>
        Got it
      </button>
    </div>
  );
}
