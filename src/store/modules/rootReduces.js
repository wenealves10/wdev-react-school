import { combineReducers } from 'redux';

import Authentication from './Authentication/reducer';

export default combineReducers({
  auth: Authentication,
});
