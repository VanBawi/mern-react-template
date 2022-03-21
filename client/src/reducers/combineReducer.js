import { combineReducers } from 'redux';

import authReducer from './authReducer';
import userReducer from './userReducer';
import swReducer from './swReducer';

const combineReducer = combineReducers({
  authR: authReducer,
  userR: userReducer,
  serviceWorker: swReducer,
});

export default combineReducer;
