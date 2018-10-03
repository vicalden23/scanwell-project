import { combineReducers } from 'redux';
import searchReducer from './searchReducer';
import watchlistReducer from './watchlistReducer';
import seenReducer from './seenReducer';
import movieDetailsReducer from './movieDetailsReducer';

export default combineReducers({
  search: searchReducer,
  watchlist: watchlistReducer,
  seen: seenReducer,
  details: movieDetailsReducer,
});
