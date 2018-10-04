import { FETCH_MOVIE_DETAILS } from '../constants';

const initialState = {
  details: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_MOVIE_DETAILS:
      return {
        ...state,
        details: action.payload,
      };
    default:
      return state;
  }
}
