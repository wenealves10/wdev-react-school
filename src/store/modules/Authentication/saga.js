import { takeLatest, all } from 'redux-saga/effects';
// call, put,
// import { toast } from 'react-toastify';
// import * as actionsButton from './actions';
import * as types from '../types';

function* Authentication({ payload }) {
  // eslint-disable-next-line no-console
  yield console.log('SAGA', payload);
}

export default all([takeLatest(types.LOGIN_REQUEST, Authentication)]);
