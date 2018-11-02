



import { takeEvery, put } from 'redux-saga/effects';
import * as firebase from 'firebase';
import { loadComments, initFirebase, commentAdded, comentsLoaded } from '../actions';

var config = {
  apiKey: "AIzaSyCHPM0xfGbvPz0sEAlvhav6APKZ2rh_bjg",
  authDomain: "com.testtask.movies",
  databaseURL: "https://movie-1590b.firebaseio.com/",
  storageBucket: "gs://movie-1590b.appspot.com"
};


function* addCommentSaga({payload: {data: {item, comment}}}) {
  yield firebase.database().ref('comments/byMovieIds/' + item.id + '/' + comment.id).set(comment, (err) => err ? console.log(err) : console.log('success'));
  yield firebase.database().ref('comments/byIds/' + comment.id).set(comment, (err) => err ? console.log(err) : console.log('success'));
  yield firebase.database().ref('comments/allIds/' + comment.id).set(comment.id, (err) => err ? console.log(err) : console.log('success'));
  yield put(commentAdded({item, comment}));
}

function* initFirebaseSaga() {
    yield firebase.initializeApp(config);
}
function* loadCommentsSaga() {
    const snapshot = yield firebase.database().ref('comments/').once('value');
    const data = snapshot.val();
    // const data  = yield request('https://tender-mclean-00a2bd.netlify.com/mobile/movies.json');
    // const normalizedData = normalize(data);
    yield put(comentsLoaded(data));
}

export default function* commentsSaga() {
  yield [
    takeEvery('ADD_COMMENT', addCommentSaga),
    takeEvery('LOAD_COMMENTS', loadCommentsSaga),
    takeEvery('INIT_FIREBASE', initFirebaseSaga),
  ];
  yield put(initFirebase());
  yield put(loadComments());
}



