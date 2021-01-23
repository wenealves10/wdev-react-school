import { all } from 'redux-saga/effects';

import Authentication from './Authentication/saga';

export default function* rootSaga() {
  return yield all([Authentication]);
}
