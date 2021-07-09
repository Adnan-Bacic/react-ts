import { createAction } from '@reduxjs/toolkit';
import * as types from './types';

export const startLoading = createAction(types.START_LOADING);
export const stopLoading = createAction(types.STOP_LOADING);
export const setLoading = createAction<boolean>(types.SET_LOADING);

// eslint-disable-next-line arrow-body-style
export const startLoadingFunc = () => (dispatch: Function, getState: Function) => {
  console.log(getState());
  dispatch(startLoading());
};
