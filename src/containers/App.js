import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Movies from './Movies';
import MovieDetails from './MovieDetails';

import store from '../redux/store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Movies} />
            <Route exact path='/movies/:id' component={MovieDetails} />
          </Switch>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App;
