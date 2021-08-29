import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { fetchBlogs } from './actions'

const store = createStore(rootReducer, applyMiddleware(thunk));
store.dispatch(fetchBlogs());

export default store;
