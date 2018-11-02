import { createReducer } from "redux-create-reducer";
import { COMMENT_ADDED, COMMENTS_LOADED } from "../constants";

const initialState = {
  allIds: [],
  byIds: {},
  byMovieIds: {}
};

const reducer = createReducer(initialState, {
  [COMMENT_ADDED]: (state, { payload: { data } }) => ({
    ...state,
    allIds: [...state.allIds, data.comment.id],
    byIds: {
      ...state.byIds,
      [data.comment.id]: data.comment
    },
    byMovieIds: {
      ...state.byMovieIds,
      [data.item.id]: {
        ...(state.byMovieIds[data.item.id] || {}),
        [data.comment.id]: data.comment
      }
    }
  }),
  [COMMENTS_LOADED]: (state, { payload: { data } }) => data || state
});
export default reducer;
