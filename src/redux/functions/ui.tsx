import store from '../configureStore';
import * as actions from '../actions';

export const setIsLoading = (isLoading: boolean) => {
  store.dispatch(actions.ui.setIsLoading(isLoading));
};

export const test = (test1: string) => {
  store.dispatch(actions.ui.test(test1));
};
