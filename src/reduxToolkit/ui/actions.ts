import { createAction } from '@reduxjs/toolkit';

export const startLoading = createAction('START_LOADING');
export const stopLoading = createAction('STOP_LOADING');
export const setLoading = createAction<boolean>('SET_LOADING');

// eslint-disable-next-line arrow-body-style
export const startLoadingFunc = () => (dispatch: any) => {
  console.log(1);
  dispatch(startLoading());
};
