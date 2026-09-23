const BASE_URL = 'http://localhost:8080/nestify-backend/api';

function getToken() {
  return localStorage.getItem('nestify_token');
}

async function request(path, options = {}) {
  const token = getToken();
  const headers = {
    'Content-Type': 'application/json',
    ...(options.headers || {})
  };
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const response = await fetch(`${BASE_URL}${path}`, {
    ...options,
    headers
  });

  const text = await response.text();
  let data = null;
  if (text) {
    try {
      data = JSON.parse(text);
    } catch {
      data = null;
    }
  }

  if (!response.ok) {
    const message = (data && data.error) || `Request failed (${response.status})`;
    throw new Error(message);
  }

  return data;
}

export const authAPI = {
  signup: (payload) => request('/auth/signup', { method: 'POST', body: JSON.stringify(payload) }),
  login: (payload) => request('/auth/login', { method: 'POST', body: JSON.stringify(payload) })
};

export const propertyAPI = {
  search: (params = {}) => {
    const query = new URLSearchParams(
      Object.entries(params).filter(([, v]) => v !== '' && v !== null && v !== undefined)
    ).toString();
    return request(`/properties${query ? `?${query}` : ''}`);
  },
  getOne: (id) => request(`/properties/${id}`)
};

export const favoriteAPI = {
  list: () => request('/favorites'),
  add: (propertyId) => request('/favorites', { method: 'POST', body: JSON.stringify({ propertyId }) }),
  remove: (propertyId) => request(`/favorites/${propertyId}`, { method: 'DELETE' })
};