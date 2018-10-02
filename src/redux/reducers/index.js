import { combineReducers } from 'redux';
import searchReducer from './searchReducer';
import watchlistReducer from './watchlistReducer';
import seenReducer from './seenReducer'

export default combineReducers({
  search: searchReducer,
  watchlist: watchlistReducer,
  seen: seenReducer
});
