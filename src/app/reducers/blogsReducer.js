import { DISPLAY_ALL_BLOGS } from '../actions/types';

export default function blogsReducer(state = [], action) {
  switch (action.type) {
    case DISPLAY_ALL_BLOGS:
      return [...action.payload];
    default:
      return state;
  }
}