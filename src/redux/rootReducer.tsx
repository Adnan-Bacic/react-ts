import { combineReducers } from 'redux';
import * as reducers from './reducers';

const rootReducer = combineReducers({
  ui: reducers.uiReducer,
});

export default rootReducer;
