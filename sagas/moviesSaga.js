import { takeEvery, put } from 'redux-saga/effects';
import request from '../api/request';

import { loadMovies, moviesLoaded }  from '../actions';


function* loadMoviesSaga() {
  const data  = yield request('https://tender-mclean-00a2bd.netlify.com/mobile/movies.json');
  yield put(moviesLoaded(data));
}

export default function* moviesSaga() {
  yield [
    takeEvery('LOAD_MOVIES', loadMoviesSaga),
  ];
  yield put(loadMovies());
}