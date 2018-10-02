import { ADD_TO_SEEN, FETCH_SEEN_MOVIES } from '../constants';

const initialState = {
	seen: []
}

export default function (state = initialState, action) {
	switch (action.type) {
		case ADD_TO_SEEN:
			return {
				...state,
				seen: action.payload,
			};
		case FETCH_SEEN_MOVIES:
			return{
				...state,
				seen: action.payload,
			}
		default:
			return state;
	}
}
