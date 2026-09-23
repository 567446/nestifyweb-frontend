
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useState } from 'react';

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      login(form);
      navigate('/');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <form className="auth-form-card" onSubmit={handleSubmit}>
        <div className="brand-mark">🏠 Nest<span>ify</span></div>
        <h1>Welcome back</h1>
        <p className="auth-sub">Log in to save favorites and manage your account.</p>

        {error && <div className="auth-error">{error}</div>}

        <label>Email</label>
        <input type="email" name="email" value={form.email} onChange={handleChange} required />

        <label>Password</label>
        <input type="password" name="password" value={form.password} onChange={handleChange} required />

        <button type="submit" disabled={loading}>
          {loading ? 'Logging in…' : 'Log in'}
        </button>

        <p className="auth-switch">
          New to Nestify? <Link to="/register">Create an account</Link>
        </p>
      </form>
    </div>
  );
}