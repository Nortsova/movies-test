import { combineReducers } from 'redux';
import movies from './movies';
import comments from './comments';

const reducer = combineReducers({
    movies,
    comments,
});

export default reducer;