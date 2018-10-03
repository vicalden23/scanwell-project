import axios from 'axios';
import { FETCH_MOVIE_DETAILS } from '../constants';

export const fetchMovieDetails = (id) => (dispatch) => {
	axios.get(`http://localhost:2023/api/movies/${id}`)
		.then(response => dispatch({
			type: FETCH_MOVIE_DETAILS,
			payload: response.data,
		}))
		.catch((err) => {
			throw new Error(`Could not fetch movies: ${err}`)
		})
}
