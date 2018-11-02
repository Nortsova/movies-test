import { takeEvery, put } from 'redux-saga/effects';
import request from '../api/request';
import { loadMovies, moviesLoaded } from '../actions';
import { normalize } from '../utils';


function* loadMoviesSaga() {
  const data  = yield request('https://tender-mclean-00a2bd.netlify.com/mobile/movies.json');
  const normalizedData = normalize(data);
  yield put(moviesLoaded(normalizedData));
}

export default function* moviesSaga() {
  yield [
    takeEvery('LOAD_MOVIES', loadMoviesSaga),
  ];
  yield put(loadMovies());
}