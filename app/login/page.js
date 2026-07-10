export const metadata = {
  title: 'Preview Access | L.I.S. Decorators',
};

export default function LoginPage({ searchParams }) {
  const from  = searchParams?.from  || '/';
  const error = searchParams?.error === '1';

  return (
    <div style={{
      minHeight: '100vh',
      display: 'grid',
      placeItems: 'center',
      background: 'var(--cream)',
      padding: '24px',
    }}>
      <div style={{
        background: '#fff',
        borderRadius: 'var(--radius)',
        boxShadow: '0 8px 40px rgba(0,0,0,0.10)',
        padding: '48px 40px',
        width: '100%',
        maxWidth: '400px',
        textAlign: 'center',
      }}>
        <div style={{ fontSize: '2.5rem', marginBottom: '8px' }}>
          <span role="img" aria-label="paint roller">🖌️</span>
        </div>
        <h1 style={{ fontSize: '1.4rem', marginBottom: '6px' }}>L.I.S. Decorators</h1>
        <p style={{ color: 'var(--charcoal)', opacity: 0.6, marginBottom: '32px', fontSize: '0.9rem' }}>
          Site preview — enter the password to continue
        </p>

        {error && (
          <p style={{
            background: '#fef2f2',
            color: '#b91c1c',
            border: '1px solid #fecaca',
            borderRadius: 'var(--radius-sm)',
            padding: '10px 14px',
            marginBottom: '20px',
            fontSize: '0.875rem',
          }}>
            Incorrect password — please try again.
          </p>
        )}

        <form action="/api/login" method="POST">
          <input type="hidden" name="from" value={from} />
          <div style={{ marginBottom: '16px', textAlign: 'left' }}>
            <label htmlFor="password" style={{ display: 'block', marginBottom: '6px', fontSize: '0.875rem', fontWeight: 600 }}>
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              autoFocus
              style={{
                width: '100%',
                padding: '12px 14px',
                fontSize: '16px',
                border: '1.5px solid #d1cfc8',
                borderRadius: 'var(--radius-sm)',
                outline: 'none',
                background: 'var(--cream)',
                boxSizing: 'border-box',
              }}
              placeholder="Enter password"
            />
          </div>
          <button
            type="submit"
            className="btn btn-brass"
            style={{ width: '100%', justifyContent: 'center' }}
          >
            Enter Site
          </button>
        </form>
      </div>
    </div>
  );
}
