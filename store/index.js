import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducer from '../reducers';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();
/* eslint-disable no-underscore-dangle */
const storeData = createStore(
  reducer,
  compose(applyMiddleware(sagaMiddleware))
);
/* eslint-enable */
sagaMiddleware.run(rootSaga);

export default storeData;