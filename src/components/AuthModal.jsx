
import { motion } from 'framer-motion';
import { authAPI } from '../services/api';
import { useAuth } from '../context/AuthContext';
import { useState } from 'react';

export default function AuthModal({ mode, onClose }) {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login, openAuthModal } = useAuth();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const data = mode === 'signup'
        ? await authAPI.signup(form)
        : await authAPI.login({ email: form.email, password: form.password });
      login(data);
      onClose();
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      className="modal-overlay"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="modal-card auth-modal-card"
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.92, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 16 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
      >
        <button className="modal-close" onClick={onClose} aria-label="Close">✕</button>

        <div className="brand-mark">🏠 Nest<span>ify</span></div>
        <h2>{mode === 'signup' ? 'Create your account' : 'Welcome back'}</h2>

        {error && <div className="auth-error">{error}</div>}

        <form onSubmit={handleSubmit}>
          {mode === 'signup' && (
            <>
              <label>Full name</label>
              <input name="name" value={form.name} onChange={handleChange} required />
            </>
          )}

          <label>Email</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} required />

          <label>Password</label>
          <input type="password" name="password" value={form.password} onChange={handleChange} required minLength={6} />

          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: loading ? 1 : 1.02 }}
            whileTap={{ scale: loading ? 1 : 0.97 }}
          >
            {loading ? 'Please wait…' : mode === 'signup' ? 'Sign up' : 'Log in'}
          </motion.button>
        </form>

        <p className="auth-switch">
          {mode === 'signup' ? (
            <>Already have an account? <a onClick={() => openAuthModal('login')}>Log in</a></>
          ) : (
            <>New to Nestify? <a onClick={() => openAuthModal('signup')}>Sign up</a></>
          )}
        </p>
      </motion.div>
    </motion.div>
  );
}