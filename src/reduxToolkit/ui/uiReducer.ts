/* eslint-disable no-param-reassign */
import { createReducer } from '@reduxjs/toolkit';
import * as actions from './actions';

interface State {
  isLoading: boolean | null
}

const initialState: State = {
  isLoading: null,
};

export const uiReducer = createReducer(initialState, (builder) => {
  builder.addCase(actions.startLoading, (state) => {
    state.isLoading = true;
  });
  builder.addCase(actions.stopLoading, (state) => {
    state.isLoading = false;
  });
  builder.addCase(actions.setLoading, (state, action) => {
    state.isLoading = action.payload;
  });
});
