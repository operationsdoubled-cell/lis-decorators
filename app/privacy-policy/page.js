import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy | L.I.S. Decorators Devon & Cornwall',
  description: 'Privacy policy for L.I.S. Decorators — how we handle your personal data when you contact us.',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1800&q=80')" }}></div>
        <div className="container">
          <span className="eyebrow center" data-animate>Legal</span>
          <h1 data-animate data-delay="1" id="privacy-policy">Privacy Policy</h1>
          <p data-animate data-delay="2">Last updated: 21 July 2026</p>
        </div>
      </section>

      <section className="section">
        <div className="container policy-container">

          <div className="policy-section">
            <h3>1. Who we are</h3>
            <p>
              We are L.I.S. Decorators Devon &amp; Cornwall, a professional painting and decorating
              business based in Dobwalls, Liskeard, Cornwall. If you have any questions about this
              policy or how we handle your data, you can reach us at{' '}
              <a href="mailto:LISdecorators@outlook.com">LISdecorators@outlook.com</a> or on{' '}
              <a href="tel:07548625358">07548 625358</a>.
            </p>
          </div>

          <div className="policy-section">
            <h3>2. What data we collect</h3>
            <p>
              We only collect data that you voluntarily submit to us via the contact form on this
              website. This may include your name, phone number, email address, and the details of
              your enquiry. We do not collect any data passively — there is no tracking, profiling,
              or automatic data collection on this site.
            </p>
          </div>

          <div className="policy-section">
            <h3>3. Who processes your data</h3>
            <p>
              When you submit the contact form, your details are sent to and stored by{' '}
              <a href="https://formspree.io" target="_blank" rel="noopener noreferrer">Formspree</a>{' '}
              (formspree.io), a third-party form handling service. Formspree acts as a data processor
              on our behalf and handles your submission securely. You can read Formspree&apos;s own
              privacy policy at{' '}
              <a href="https://formspree.io/legal/privacy-policy" target="_blank" rel="noopener noreferrer">
                formspree.io/legal/privacy-policy
              </a>.
            </p>
          </div>

          <div className="policy-section">
            <h3>4. Why we collect it</h3>
            <p>
              We collect your contact details solely to respond to your enquiry. We will not use
              your details for marketing, share them with any other third parties, or contact you
              for any reason unrelated to your original message.
            </p>
          </div>

          <div className="policy-section">
            <h3>5. How long your data is kept</h3>
            <p>
              We do not store form submissions ourselves. Data is held by Formspree in line with
              their own retention policy. If you&apos;d like your submission deleted, contact us
              directly and we will request removal on your behalf.
            </p>
          </div>

          <div className="policy-section">
            <h3>6. Cookies</h3>
            <p>
              This site uses only essential functional cookies required for it to operate correctly.
              We do not use tracking cookies, analytics cookies, advertising cookies, or any
              third-party cookies for profiling purposes. A cookie is stored in your browser to
              remember that you have acknowledged this privacy notice, so the banner does not
              reappear on future visits.
            </p>
          </div>

          <div className="policy-section">
            <h3>7. Your rights</h3>
            <p>
              Under UK GDPR you have the right to access, correct, or request deletion of any
              personal data we hold about you. Since your data is processed via Formspree, please
              contact us directly at{' '}
              <a href="mailto:LISdecorators@outlook.com">LISdecorators@outlook.com</a> and we will
              arrange for it to be deleted. You also have the right to lodge a complaint with the
              Information Commissioner&apos;s Office (ICO) at{' '}
              <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer">ico.org.uk</a>{' '}
              if you feel your data has been handled incorrectly.
            </p>
          </div>

          <div className="policy-section" style={{ marginBottom: 0 }}>
            <h3>8. Changes to this policy</h3>
            <p>
              If we ever add new services that affect how data is processed, we will update this
              page and revise the &ldquo;Last updated&rdquo; date above. For now, this policy is
              complete and accurate as of 21 July 2026.
            </p>
          </div>

          <div style={{ marginTop: '48px' }}>
            <Link href="/contact" className="btn btn-dark">
              <i data-lucide="arrow-left"></i> Back to Contact
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}
