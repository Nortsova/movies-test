import { fork } from 'redux-saga/effects';
import moviesSaga from './moviesSaga';

export default function* rootSaga() {
  yield [
    fork(moviesSaga),
  ];
}