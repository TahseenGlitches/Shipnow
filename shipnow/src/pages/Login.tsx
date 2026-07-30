import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const setFieldState = (field: 'email' | 'password', message: string) => {
    setErrors((prev) => ({ ...prev, [field]: message || undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let valid = true;

    if (!email.trim()) {
      setFieldState('email', 'Email address is required.');
      valid = false;
    } else if (!emailPattern.test(email.trim())) {
      setFieldState('email', 'Enter a valid email address.');
      valid = false;
    } else {
      setFieldState('email', '');
    }

    if (!password) {
      setFieldState('password', 'Password is required.');
      valid = false;
    } else if (password.length < 8) {
      setFieldState('password', 'Password must be at least 8 characters.');
      valid = false;
    } else {
      setFieldState('password', '');
    }

    if (!valid) return;
    sessionStorage.setItem('shipnow-authenticated', 'true');
    navigate('/dashboard');
  };

  return (
    <main className="login" style={{ minHeight: '100vh', display: 'grid', gridTemplateColumns: '720px minmax(360px, 720px)', background: '#FEFEFE' }}>
      <section className="login-hero" style={{ background: '#856DF3', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 106, gap: 42, textAlign: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, fontWeight: 900, fontStyle: 'italic', fontSize: 26, letterSpacing: 0.5 }}>
          <img src="/images/img1.jpg" alt="ShipNow" style={{ width: 28, height: 28, borderRadius: 6, objectFit: 'contain' }} />
          <span>SHIPNOW</span>
        </div>
        <div className="login-art" style={{ width: 'min(100%, 470px)', aspectRatio: '1/1', position: 'relative', borderRadius: 22, boxShadow: '0px 8px 24px rgba(0,0,0,0.16)', overflow: 'hidden', background: '#856DF3' }}>
          <img src="/images/img2.jpg" alt="Dashboard Preview" style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }} />
        </div>
        <div>
          <h1 style={{ fontSize: 30, lineHeight: 1.1, margin: 0, fontWeight: 700 }}>Welcome to ShipNow</h1>
          <p style={{ maxWidth: 460, fontSize: 14, lineHeight: 1.45, color: 'rgba(255,255,255,.88)' }}>Manage your shipments, fleet, and warehouse in one smart dashboard.</p>
        </div>
      </section>

      <section style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '28px 20px', background: '#FEFEFE' }}>
        <div style={{ width: 'min(100%, 400px)', padding: 32, textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', marginBottom: 20 }}>
            <img src="/images/img1.jpg" alt="ShipNow" style={{ width: 32, height: 32, borderRadius: 8, objectFit: 'contain' }} />
          </div>
          <h1 style={{ margin: 0, fontSize: 26, fontWeight: 900, letterSpacing: -0.5 }}>Welcome Back</h1>
          <p style={{ margin: '6px auto 22px', maxWidth: 330, color: '#757575', fontSize: 14 }}>Log in to continue managing your logistics with ShipNow</p>

          <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 16, textAlign: 'left' }}>
            <div className={`field ${errors.email ? 'invalid' : ''}`}>
              <label htmlFor="loginEmail">Email Address</label>
              <div style={{ position: 'relative' }}>
                <input
                  id="loginEmail"
                  className="text-input"
                  type="email"
                  placeholder="Enter a valid email address"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); if (errors.email) setErrors((p) => ({ ...p, email: undefined })); }}
                  style={{ width: '100%', paddingRight: 48 }}
                />
              </div>
              <div className="error" style={{ fontSize: 11, color: '#F04A4A', display: errors.email ? 'block' : 'none' }}>{errors.email}</div>
            </div>

            <div className={`field ${errors.password ? 'invalid' : ''}`}>
              <label htmlFor="loginPassword">Password</label>
              <div style={{ position: 'relative' }}>
                <input
                  id="loginPassword"
                  className="text-input"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Create a strong password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => { setPassword(e.target.value); if (errors.password) setErrors((p) => ({ ...p, password: undefined })); }}
                  style={{ width: '100%', paddingRight: 48 }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{ position: 'absolute', right: 6, top: '50%', transform: 'translateY(-50%)', border: 0, background: 'transparent', width: 36, height: 36, borderRadius: 999, color: '#757575' }}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? '🙈' : '👁'}
                </button>
              </div>
              <div className="error" style={{ fontSize: 11, color: '#F04A4A', display: errors.password ? 'block' : 'none' }}>{errors.password}</div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, fontSize: 12, color: '#757575' }}>
              <label style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                <input type="checkbox" defaultChecked style={{ width: 14, height: 14, accentColor: '#856DF3' }} /> Remember Me
              </label>
              <a href="#" style={{ color: '#856DF3', fontWeight: 700 }}>Forgot Password?</a>
            </div>

            <button className="btn btn-dark" type="submit" style={{ width: '100%', height: 42, marginTop: 4 }}>Login</button>
          </form>

          <div style={{ marginTop: 16, fontSize: 13, color: '#757575', textAlign: 'center' }}>
            Don't have an account? <a href="#" style={{ color: '#856DF3', fontWeight: 700 }}>Register</a>
          </div>
        </div>
      </section>
    </main>
  );
}
