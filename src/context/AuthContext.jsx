import { useState } from 'react';
import { createContext, useContext,  useCallback } from 'react';

const AuthContext = createContext(null);

const USERS_KEY = 'nestify_users';
const CURRENT_USER_KEY = 'nestify_current_user';

function getUsers() {
  const stored = localStorage.getItem(USERS_KEY);
  return stored ? JSON.parse(stored) : [];
}

function saveUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem(CURRENT_USER_KEY);
    return stored ? JSON.parse(stored) : null;
  });

  const register = useCallback(({ name, email, password }) => {
    if (!name || !email || !password) {
      throw new Error('Name, email, and password are all required.');
    }
    if (password.length < 6) {
      throw new Error('Password must be at least 6 characters.');
    }

    const users = getUsers();
    const alreadyExists = users.some(
      (u) => u.email.toLowerCase() === email.toLowerCase()
    );
    if (alreadyExists) {
      throw new Error('An account with this email already exists.');
    }

    const newUser = { id: Date.now(), name, email, password };
    users.push(newUser);
    saveUsers(users);

    const { password: _pw, ...safeUser } = newUser;
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(safeUser));
    setUser(safeUser);
  }, []);

  const login = useCallback(({ email, password }) => {
    const users = getUsers();
    const found = users.find(
      (u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password
    );
    if (!found) {
      throw new Error('Invalid email or password.');
    }

    const { password: _pw, ...safeUser } = found;
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(safeUser));
    setUser(safeUser);
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem(CURRENT_USER_KEY);
    setUser(null);
  }, []);

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within an AuthProvider');
  return ctx;
}