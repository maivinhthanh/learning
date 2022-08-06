import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { RootState } from 'store';
import { AuthState } from 'types';

const initialState: AuthState = {
  token: null,
  isAuthenticated: false,
};

export const AUTH_SLICE_NAME = 'auth';

export const authSlice = createSlice({
  name: AUTH_SLICE_NAME,
  initialState,
  reducers: {
    setAccessToken(state: AuthState, action: PayloadAction<string | null>) {
      state.token = action.payload;
      state.isAuthenticated = true;
    },
    
    resetAuth(state: AuthState) {
      state.token = null;
      state.isAuthenticated = false;
    },
  },
});

const authReducer = persistReducer(
  {
    key: AUTH_SLICE_NAME,
    keyPrefix: '',
    storage,
    whitelist: [],
    serialize: true,
  },
  authSlice.reducer
);

export default authReducer;

export const { resetAuth, setAccessToken } = authSlice.actions;

// SELECTOR
export const selectToken = (state: RootState) => state.auth.token;