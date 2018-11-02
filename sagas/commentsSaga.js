


import { takeEvery, put, all, call } from 'redux-saga/effects';
import { loadComments, commentAdded, comentsLoaded } from '../actions';
import { ADD_COMMENT, LOAD_COMMENTS } from '../constants';
import { addCommentByMovieIdToFirebase, addCommentByIdsToFirebase,  addCommentIdToFirebase, downloadCommentsFromFirebase, initFirebase } from '../api/firebase';

function* addCommentSaga({payload: {data: {item, comment}}}) {
  yield all([
    call(addCommentByMovieIdToFirebase, item.id, comment),
    call(addCommentByIdsToFirebase, comment),
    call(addCommentIdToFirebase, comment.id),
  ]);
  yield put(commentAdded({item, comment}));
}

function* loadCommentsSaga() {
    const data = yield downloadCommentsFromFirebase();
    yield put(comentsLoaded(data));
}

export default function* commentsSaga() {
  yield all([
    takeEvery(ADD_COMMENT, addCommentSaga),
    takeEvery(LOAD_COMMENTS, loadCommentsSaga),
  ]);
  yield call(initFirebase);
  yield put(loadComments());
}
