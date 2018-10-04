import axios from 'axios';
import { SEARCH_MOVIES } from '../constants';

export const searchMovies = title => (dispatch) => {
  axios.get(`http://localhost:2023/api/movies/search/${title}`)
    .then(response => dispatch({
      type: SEARCH_MOVIES,
      payload: response.data,
    }))
    .catch((err) => {
      throw new Error(`Could not fetch movies: ${err}`);
    });
};
