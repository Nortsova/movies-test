import { createReducer } from 'redux-create-reducer';

const initialState = [];

const reducer = createReducer(initialState, {
  ['MOVIES_LOADED']: (state, { payload: { data } }) => (data),
});

export default reducer;