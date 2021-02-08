import { LOADING } from '@action-types';

export const startLoading = () => (dispatch) =>
  dispatch({
    type: LOADING,
    payload: { isLoading: true }
  });

export const stopLoading = () => (dispatch) =>
  dispatch({
    type: LOADING,
    payload: { isLoading: false }
  });
