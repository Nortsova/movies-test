import { LOAD_MOVIES, INIT_FIREBASE, MOVIES_LOADED, ADD_COMMENT, COMMENT_ADDED, LOAD_COMMENTS, COMMENTS_LOADED } from '../constants';

export const loadMovies = () => ({
    type: LOAD_MOVIES,
  });
export const initFirebase = () => ({
    type: INIT_FIREBASE,
  });
export const moviesLoaded = data => ({
    type: MOVIES_LOADED,
    payload: {
      data,
    },
});
export const addComment = data => ({
    type: ADD_COMMENT,
    payload: {
      data,
    },
});
export const commentAdded = data => ({
    type: COMMENT_ADDED,
    payload: {
      data,
    },
});
export const loadComments = () => ({
    type: LOAD_COMMENTS,
});
export const comentsLoaded = data => ({
    type: COMMENTS_LOADED,
    payload: {
      data,
    },
});