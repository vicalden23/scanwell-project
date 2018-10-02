import { ADD_TO_WATCHLIST, FETCH_WATCHLIST_MOVIES } from '../constants';

const initialState = {
	watchlist: []
}

export default function (state = initialState, action) {
	switch (action.type) {
		case ADD_TO_WATCHLIST:
			return {
				...state,
				watchlist: action.payload,
			};
		case FETCH_WATCHLIST_MOVIES:
			return{
				...state,
				watchlist: action.payload
			}
		default:
			return state;
	}
}
