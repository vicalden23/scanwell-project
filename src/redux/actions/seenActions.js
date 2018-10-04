import axios from 'axios';
import {
  ADD_TO_SEEN,
  FETCH_SEEN_MOVIES,
} from '../constants';


export const getSeenMovies = () => (dispatch) => {
  axios.get('http://localhost:2023/api/movies/seen')
    .then(response => dispatch({
      type: FETCH_SEEN_MOVIES,
      payload: response.data,
    }))
    .catch((err) => {
      throw new Error(`Could not fetch watchlist movies: ${err}`);
    });
};

export const addToSeen = data => (dispatch) => {
  axios.post('http://localhost:2023/api/movies/seen', data)
    .then(response => dispatch({
      type: ADD_TO_SEEN,
      payload: response.data,
    }))
    .catch(() => {
      throw new Error('Could not fetch movies');
    });
};
