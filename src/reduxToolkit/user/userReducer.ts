import { createReducer } from '@reduxjs/toolkit';
import * as types from './types';
import * as actions from './actions';

const initialState = {
  name: null,
  age: null,
};

const userReducer = createReducer(initialState, {
  [types.SET_NAME]: (state, action) => {
    return {
      ...state,
      name: action.payload,
    };
  },
  [actions.setAge.type]: (state, action) => {
    return {
      ...state,
      age: action.payload,
    };
  },
});

export default userReducer;
