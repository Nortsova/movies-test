import { createReducer } from 'redux-create-reducer';
import { MOVIES_LOADED } from '../constants';

const initialState = {
    allIds: [],
    byIds: {},
};

const reducer = createReducer(initialState, {
  [MOVIES_LOADED]: (state, { payload: { data } }) => (data),
});

export default reducer;