import * as types from '../types';
import * as interfaces from '../../ts/interfaces';

const defaultState = {
  isLoading: null,
  test: null,
};

// handle when a payload has different types
// with the help of a generic for the interface
type TypesInThisReducer = boolean | string;

export const uiReducer = (state = defaultState, action: interfaces.Reducer<TypesInThisReducer>) => {
  switch (action.type) {
    case types.IS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    case 'test':
      return {
        ...state,
        test: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};
