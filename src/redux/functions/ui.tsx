import store from '../configureStore';
import * as actions from '../actions';

export const setIsLoading = (isLoading: boolean) => {
  store.dispatch(actions.ui.setIsLoading(isLoading));
};
