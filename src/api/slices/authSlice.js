import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import http, { TOKEN_KEY } from '../http';

// The username the user logged in with (login succeeds with it). Persisted so
// the nav can show it after a refresh; the backend token doesn't carry it.
const USERNAME_KEY = 'nuauto_username';

// Decode a JWT payload (no verification — the backend verifies). Used to read
// the role claim so it survives a page refresh from the stored token alone.
const parseJwt = (token) => {
  try {
    const payload = token.split('.')[1];
    const json = atob(payload.replace(/-/g, '+').replace(/_/g, '/'));
    return JSON.parse(json);
  } catch {
    return null;
  }
};

export const login = createAsyncThunk(
  'auth/login',
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const response = await http.post('/auth/login', { username, password });
      return response.data; // { token, tokenType }
    } catch (err) {
      // Surface the backend's error message ("Invalid credentials", etc.).
      const message = err.response?.data?.error || 'Login failed. Please try again.';
      return rejectWithValue(message);
    }
  }
);

const initialToken = localStorage.getItem(TOKEN_KEY);
const initialRole = initialToken ? parseJwt(initialToken)?.role ?? null : null;
const initialUsername = initialToken ? localStorage.getItem(USERNAME_KEY) : null;

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: initialToken || null,
    username: initialUsername,
    role: initialRole,
    isAuthenticated: !!initialToken,
    status: 'idle',
    error: null,
  },
  reducers: {
    logout(state) {
      state.token = null;
      state.username = null;
      state.role = null;
      state.isAuthenticated = false;
      state.status = 'idle';
      state.error = null;
      localStorage.removeItem(TOKEN_KEY);
      localStorage.removeItem(USERNAME_KEY);
    },
    clearAuthError(state) {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.token = action.payload.token;
        // Prefer the role from the response; fall back to the token claim.
        state.role = action.payload.role ?? parseJwt(action.payload.token)?.role ?? null;
        // Username comes from the credentials the user logged in with.
        state.username = action.meta.arg?.username ?? null;
        state.isAuthenticated = true;
        localStorage.setItem(TOKEN_KEY, action.payload.token);
        if (state.username) {
          localStorage.setItem(USERNAME_KEY, state.username);
        }
      })
      .addCase(login.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || 'Login failed. Please try again.';
        state.isAuthenticated = false;
        state.username = null;
        state.role = null;
      });
  },
});

export const { logout, clearAuthError } = authSlice.actions;
export default authSlice.reducer;
