import axios from 'axios';

// Single localStorage key for the auth token, shared by the axios instance
// and the auth slice.
export const TOKEN_KEY = 'nuauto_token';

// Central axios instance for all backend calls. The base URL comes from a Vite
// env var so it isn't hardcoded across every slice; it falls back to the local
// Flask dev server.
const http = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000',
  headers: { Accept: 'application/json' },
});

// Attach the Bearer token (if present) to every outgoing request.
http.interceptors.request.use((config) => {
  const token = localStorage.getItem(TOKEN_KEY);
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// On 401 the token is missing/expired/invalid: clear it and notify the app so
// it can drop back to a logged-out state. (Uses a window event to avoid a
// circular import between this module and the Redux store.)
http.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem(TOKEN_KEY);
      window.dispatchEvent(new Event('auth:unauthorized'));
    }
    return Promise.reject(error);
  }
);

export default http;
