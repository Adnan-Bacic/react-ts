import { createAction } from '@reduxjs/toolkit';

import * as types from './types';

export const setName = (name: string) => {
  return (dispatch: Function) => {
    dispatch({
      type: types.SET_NAME,
      payload: name,
    });
  };
};

export const setAge = createAction<number>(types.SET_AGE);
