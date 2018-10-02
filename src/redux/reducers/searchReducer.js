import { SEARCH_MOVIES } from '../constants';

const initialState = {
	search: [],
}

export default function (state = initialState, action) {
	switch (action.type) {
		case SEARCH_MOVIES:
			return {
				...state,
				search: action.payload,
			};
		default:
			return state;
	}
}
