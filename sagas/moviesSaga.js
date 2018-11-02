import { takeEvery, put, all, call } from "redux-saga/effects";
import request from "../api/request";
import { loadMovies, moviesLoaded } from "../actions";
import { normalize } from "../utils";
import { LOAD_MOVIES, MOVIES_URL } from "../constants";

function* loadMoviesSaga() {
  const data = yield call(request, MOVIES_URL);
  const normalizedData = normalize(data);
  yield put(moviesLoaded(normalizedData));
}

export default function* moviesSaga() {
  yield all([takeEvery(LOAD_MOVIES, loadMoviesSaga)]);
  yield put(loadMovies());
}
