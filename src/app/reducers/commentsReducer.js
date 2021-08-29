import { DISPLAY_ALL_COMMENTS } from '../actions/types';

export default function commentsReducer(state = [], action) {
  switch (action.type) {
    case DISPLAY_ALL_COMMENTS:
      return [...action.payload];
    default:
      return state;
  }
}