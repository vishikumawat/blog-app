import { combineReducers } from 'redux';
import blogsReducer from './blogsReducer';
import commentsReducer from './commentsReducer';

export default combineReducers({
    blogs: blogsReducer,
    comments: commentsReducer
});