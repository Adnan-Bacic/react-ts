import * as types from '../types';
import * as interfaces from '../../ts/interfaces';

const defaultState = {
  isLoading: null,
};

export const uiReducer = (state = defaultState, action: interfaces.Reducer) => {
  switch (action.type) {
    case types.IS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};
