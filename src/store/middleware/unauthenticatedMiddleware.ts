import { isRejectedWithValue } from '@reduxjs/toolkit';
import { resetAuth } from 'modules/auth/slice';
import { Middleware } from 'redux';

export const unauthenticatedMiddleware: Middleware =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    if (isRejectedWithValue(action) && action.payload) {
      if (action.payload.status === 401) {
        // dispatch(resetStateAction());
        console.log('unauthenticatedMiddleware resetAuth');
        dispatch(resetAuth());
      } else {
        console.log('ERROR:', action.payload);
      }
    }

    return next(action);
  };
