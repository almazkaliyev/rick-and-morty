import { applyMiddleware, compose, createStore } from 'redux';

import rootReducer from './rootReducer';

const composeEnchancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const store = createStore(rootReducer, composeEnchancers(applyMiddleware()));

export default store;
