import { combineReducers, Reducer } from 'redux';
import { createNavigationReducer } from 'react-navigation-redux-helpers';

import { RootNavigator } from '../../navigators/RootNavigator';
import { appSlice } from './app';

const LOG_OUT = 'LOG_OUT';

const navReducer = createNavigationReducer(RootNavigator);

const combinedReducers = combineReducers({
  app: appSlice.reducer,
  nav: navReducer,
});

const rootReducer = (state, action) => {
  if (action.type === LOG_OUT) {
    state = undefined;
  }

  return combinedReducers(state, action);
};

export default rootReducer;
