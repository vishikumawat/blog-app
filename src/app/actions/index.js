import { DISPLAY_ALL_BLOGS,
  DISPLAY_ALL_COMMENTS
} from './types.js';
import axios from 'axios';

export const fetchBlogs = () => {
  return (dispatch) => {
    return axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        return response.data
      })
      .then(data => {
        dispatch({
          type: DISPLAY_ALL_BLOGS,
          payload: data
        })
      })
      .catch(error => {
        throw (error);
      });
  };
};

export const fetchComments = (id) => {
  return (dispatch) => {
    return axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
      .then(response => {
        return response.data && response.data
      })
      .then(data => {
        dispatch({
          type: DISPLAY_ALL_COMMENTS,
          payload: data
        })
      })
      .catch(error => {
        throw (error);
      });
  };
};