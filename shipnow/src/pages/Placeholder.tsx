import { useSearchParams, Link } from 'react-router-dom';

export default function Placeholder() {
  const [params] = useSearchParams();
  const screen = params.get('screen') || 'Placeholder';

  return (
    <main className="placeholder" style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', padding: 24, background: '#F0F0F0' }}>
      <section className="card placeholder-card" style={{ width: 'min(100%, 560px)', padding: 28, textAlign: 'center' }}>
        <div className="brand-mark" aria-hidden="true" style={{ margin: '0 auto' }} />
        <h1 style={{ margin: '14px 0 8px', fontSize: 30, fontWeight: 700 }}>{screen}</h1>
        <p style={{ color: '#757575', lineHeight: 1.5 }}>
          {screen} is intentionally provided as a placeholder page for this assignment.
        </p>
        <div style={{ marginTop: 18 }}>
          <Link className="btn btn-dark" to="/dashboard">Back to Dashboard</Link>
        </div>
      </section>
    </main>
  );
}
