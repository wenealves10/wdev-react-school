import { persistStore } from 'redux-persist';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './modules/rootReduces';
import rootSaga from './modules/rootSaga';
import persistRedux from './modules/reduxPersist';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  persistRedux(rootReducer),
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);
export const persistor = persistStore(store);
export default store;
