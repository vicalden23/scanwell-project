import axios from 'axios';
import {
  ADD_TO_WATCHLIST,
  FETCH_WATCHLIST_MOVIES,
} from '../constants';


export const getWatchlistMovies = () => (dispatch) => {
  axios.get('http://localhost:2023/api/movies/watchlist')
    .then(response => dispatch({
      type: FETCH_WATCHLIST_MOVIES,
      payload: response.data,
    }))
    .catch((err) => {
      throw new Error(`Could not fetch watchlist movies: ${err}`);
    });
};

export const addToWatchlist = data => (dispatch) => {
  axios.post('http://localhost:2023/api/movies/watchlist', data)
    .then(response => dispatch({
      type: ADD_TO_WATCHLIST,
      payload: response.data,
    }))
    .catch(() => {
      throw new Error('Could not fetch movies');
    });
};
