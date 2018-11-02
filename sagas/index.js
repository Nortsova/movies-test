import { fork, all } from 'redux-saga/effects';
import moviesSaga from './moviesSaga';
import commentsSaga from './commentsSaga';

export default function* rootSaga() {
  yield all([
    fork(moviesSaga),
    fork(commentsSaga),
  ]);
}