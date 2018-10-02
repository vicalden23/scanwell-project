import React, { Component } from 'react';
import { Provider } from 'react-redux';

import SearchMovies from '../components/SearchMovies';
import Watchlist from '../components/Watchlist';
import SeenList from '../components/SeenList'

import store from '../redux/store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Watchlist />
          <SeenList />
          <SearchMovies />
        </div>
      </Provider>
    )
  }
}

export default App;
