import { fork } from 'redux-saga/effects';
import moviesSaga from './moviesSaga';
import commentsSaga from './commentsSaga';

export default function* rootSaga() {
  yield [
    fork(moviesSaga),
    fork(commentsSaga),
  ];
}