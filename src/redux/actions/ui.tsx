import * as types from '../types';

export const setIsLoading = (isLoading: boolean) => {
  return {
    type: types.IS_LOADING,
    payload: isLoading,
  };
};

export const test = (test1: string) => {
  return {
    type: 'test',
    payload: test1,
  };
};
