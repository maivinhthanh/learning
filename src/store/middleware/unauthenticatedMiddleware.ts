import { isRejectedWithValue } from '@reduxjs/toolkit';
import { Middleware } from 'redux';

export const unauthenticatedMiddleware: Middleware =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    if (isRejectedWithValue(action) && action.payload) {
      
    }

    return next(action);
  };
