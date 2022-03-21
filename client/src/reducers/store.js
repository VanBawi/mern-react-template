import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import combineReducer from './combineReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const middleware = [thunk];

const store = createStore(
  combineReducer,
  compose(applyMiddleware(...middleware))
  // composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
